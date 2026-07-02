import { NextResponse } from 'next/server'
import { createPayPalOrder } from '@/lib/paypal'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { ticketName, quantity, unitPrice, currency, name, email } = body

    if (!ticketName || !quantity || !unitPrice || !currency || !name || !email) {
      return NextResponse.json(
        { error: 'Faltan datos para crear la orden de PayPal.' },
        { status: 400 },
      )
    }

    const order = await createPayPalOrder({
      ticketName,
      quantity: Number(quantity),
      unitPrice: Number(unitPrice),
      currency,
      name,
      email,
    })

    return NextResponse.json({ orderId: order.id })
  } catch (error) {
    console.error('Error creando orden PayPal:', error)
    return NextResponse.json(
      { error: 'No se pudo crear la orden de PayPal. Revisa la configuración.' },
      { status: 500 },
    )
  }
}
