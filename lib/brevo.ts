import fs from 'fs/promises'
import path from 'path'

export interface PurchaseReceiptPayload {
  name: string
  email: string
  ticketName: string
  quantity: number
  totalAmount: string
  orderId: string
  transactionId: string
  purchaseDate: string
}

interface NewsletterContact {
  email: string
  source: string
  createdAt: string
  updatedAt: string
}

export async function sendPurchaseReceiptEmail(payload: PurchaseReceiptPayload) {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    throw new Error('BREVO_API_KEY no está configurado en el servidor.')
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'contacto@joelangeldev.site'
  const senderName = process.env.BREVO_SENDER_NAME || 'Chilca Ovni Festival'

  const subject = `Comprobante de compra - ${payload.ticketName}`
  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; color: #1f2937;">
        <div style="max-width: 600px; margin: 0 auto; padding: 24px; background: #ffffff; border-radius: 16px;">
          <h1 style="color: #0f172a;">Compra confirmada ✅</h1>
          <p>Hola ${payload.name},</p>
          <p>Gracias por tu compra. A continuación tienes los detalles de tu pedido:</p>
          <ul>
            <li><strong>Producto:</strong> ${payload.ticketName}</li>
            <li><strong>Cantidad:</strong> ${payload.quantity}</li>
            <li><strong>Total:</strong> $${payload.totalAmount} USD</li>
            <li><strong>ID de pedido PayPal:</strong> ${payload.orderId}</li>
            <li><strong>ID de transacción:</strong> ${payload.transactionId}</li>
            <li><strong>Fecha:</strong> ${payload.purchaseDate}</li>
          </ul>
          <p>
            Guarda este mensaje o toma screenshot, es tu comprobante al momento de ingresar al festival.
            Si tienes alguna duda, responde este email o contáctanos directamente.
          </p>
          <p style="margin-top: 24px;">Saludos,<br/>Equipo Chilca Ovni Festival</p>
        </div>
      </body>
    </html>
  `

  const textContent = `Compra confirmada\n\nHola ${payload.name},\n\nGracias por tu compra. A continuación tienes los detalles de tu pedido:\n\n- Producto: ${payload.ticketName}\n- Cantidad: ${payload.quantity}\n- Total: $${payload.totalAmount} USD\n- ID de pedido PayPal: ${payload.orderId}\n- ID de transacción: ${payload.transactionId}\n- Fecha: ${payload.purchaseDate}\n\nEn breve recibirás toda la información necesaria al correo registrado.\n\nSaludos,\nEquipo OVNI Fest`

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: payload.email,
          name: payload.name,
        },
      ],
      subject,
      htmlContent,
      textContent,
    }),
  })

  const resText = await response.text()
  console.log('Brevo API response status:', response.status)
  console.log('Brevo API response body:', resText)

  if (!response.ok) {
    throw new Error(`Brevo returned ${response.status}: ${resText}`)
  }

  try {
    return JSON.parse(resText)
  } catch (e) {
    return resText
  }
}

const newsletterContactsPath = path.join(process.cwd(), 'newsletter-contacts.json')

async function readNewsletterContacts(): Promise<NewsletterContact[]> {
  try {
    const file = await fs.readFile(newsletterContactsPath, 'utf-8')
    const parsed = JSON.parse(file)
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    return []
  }
}

async function writeNewsletterContacts(contacts: NewsletterContact[]) {
  try {
    await fs.writeFile(newsletterContactsPath, JSON.stringify(contacts, null, 2), 'utf-8')
  } catch (error) {
    console.log('Nota: no se pudo guardar contactos locales (expected en producción):', error instanceof Error ? error.message : String(error))
  }
}

export async function saveNewsletterContact(email: string, source = 'newsletter') {
  const normalizedEmail = email.trim().toLowerCase()
  if (!normalizedEmail) {
    throw new Error('Email inválido para guardar el contacto.')
  }

  try {
    const existingContacts = await readNewsletterContacts()
    const timestamp = new Date().toISOString()
    const existingContact = existingContacts.find((contact) => contact.email === normalizedEmail)

    if (existingContact) {
      existingContact.source = source
      existingContact.updatedAt = timestamp
    } else {
      existingContacts.push({
        email: normalizedEmail,
        source,
        createdAt: timestamp,
        updatedAt: timestamp,
      })
    }

    await writeNewsletterContacts(existingContacts)
    return existingContacts
  } catch (error) {
    console.log('No se pudo guardar el contacto localmente, pero se procesó en Brevo:', error instanceof Error ? error.message : String(error))
    return []
  }
}

export async function subscribeToNewsletter(email: string, source = 'newsletter') {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    throw new Error('BREVO_API_KEY no está configurado en el servidor.')
  }

  const listIdEnv = process.env.BREVO_NEWSLETTER_LIST_ID
  const listId = listIdEnv ? Number(listIdEnv) : undefined

  const body: Record<string, unknown> = {
    email,
    attributes: {},
    updateEnabled: true,
  }

  if (listId && !Number.isNaN(listId)) {
    body.listIds = [listId]
  }

  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify(body),
  })

  const resText = await response.text()
  console.log('Brevo newsletter response status:', response.status)
  console.log('Brevo newsletter response body:', resText)

  if (!response.ok) {
    throw new Error(`Brevo newsletter returned ${response.status}: ${resText}`)
  }

  const result = (() => {
    try {
      return JSON.parse(resText)
    } catch {
      return resText
    }
  })()

  await saveNewsletterContact(email, source)

  return result
}
