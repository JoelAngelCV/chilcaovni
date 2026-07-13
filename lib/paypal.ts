import { getPayPalEnvironment } from '@/lib/payment-config'

export type PayPalCreateOrderRequest = {
  ticketName: string
  quantity: number
  unitPrice: number
  currency: string
  name: string
  email: string
}

const getPayPalClientId = () => {
  return process.env.PAYPAL_CLIENT_ID || process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ''
}

const getPayPalClientSecret = () => {
  return process.env.PAYPAL_CLIENT_SECRET || ''
}

const useSandbox = () => {
  return getPayPalEnvironment() === 'sandbox'
}

const getPayPalApiUrl = () => {
  return useSandbox()
    ? 'https://api-m.sandbox.paypal.com'
    : 'https://api-m.paypal.com'
}

const getAuthHeader = () => {
  const clientId = getPayPalClientId()
  const clientSecret = getPayPalClientSecret()

  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials are missing. Set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET.')
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
  return `Basic ${basic}`
}

export async function getPayPalAccessToken() {
  const url = `${getPayPalApiUrl()}/v1/oauth2/token`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: getAuthHeader(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '')
    throw new Error(`PayPal token request failed: ${response.status} ${response.statusText} ${errorBody}`)
  }

  const json = await response.json()
  if (!json.access_token) {
    throw new Error('PayPal token response did not contain an access_token.')
  }

  return json.access_token as string
}

class PayPalError extends Error {
  status: number
  body: any

  constructor(status: number, message: string, body: any) {
    super(message)
    this.name = 'PayPalError'
    this.status = status
    this.body = body
  }
}

export async function createPayPalOrder(data: PayPalCreateOrderRequest) {
  const accessToken = await getPayPalAccessToken()
  const url = `${getPayPalApiUrl()}/v2/checkout/orders`
  const totalAmount = (data.unitPrice * data.quantity).toFixed(2)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: data.currency,
            value: totalAmount,
          },
          description: `${data.quantity}x ${data.ticketName} - OVNI Festival`,
          custom_id: `${data.ticketName}|qty:${data.quantity}`,
          invoice_id: `OVNI-${Date.now()}`,
        },
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING',
        user_action: 'PAY_NOW',
      },
    }),
  })

  if (!response.ok) {
    const body = await response.json().catch(() => null)
    throw new PayPalError(
      response.status,
      `PayPal create order failed: ${response.status} ${response.statusText}`,
      body,
    )
  }

  return response.json()
}

export async function capturePayPalOrder(orderId: string) {
  const accessToken = await getPayPalAccessToken()
  const url = `${getPayPalApiUrl()}/v2/checkout/orders/${orderId}/capture`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const body = await response.json().catch(() => null)
    throw new PayPalError(
      response.status,
      `PayPal capture order failed: ${response.status} ${response.statusText}`,
      body,
    )
  }

  return response.json()
}
