import { NextResponse } from 'next/server'
import { sendPurchaseReceiptEmail } from '@/lib/brevo'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received /api/brevo/email POST:', JSON.stringify(body))
    const {
      name,
      email,
      ticketName,
      quantity,
      totalAmount,
      orderId,
      transactionId,
      purchaseDate,
    } = body

    if (
      !name ||
      !email ||
      !ticketName ||
      !quantity ||
      !totalAmount ||
      !orderId ||
      !transactionId
    ) {
      return NextResponse.json(
        { error: 'Faltan datos obligatorios para enviar el comprobante.' },
        { status: 400 },
      )
    }

    await sendPurchaseReceiptEmail({
      name,
      email,
      ticketName,
      quantity: Number(quantity),
      totalAmount,
      orderId,
      transactionId,
      purchaseDate: purchaseDate || new Date().toISOString(),
    })

    console.log('sendPurchaseReceiptEmail completed for:', email)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error enviando email con Brevo:', error)
    return NextResponse.json(
      { error: 'No se pudo enviar el comprobante por correo.' },
      { status: 500 },
    )
  }
}
