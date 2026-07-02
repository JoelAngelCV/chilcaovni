import { NextResponse } from 'next/server'
import { capturePayPalOrder } from '@/lib/paypal'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { orderId } = body

    if (!orderId) {
      return NextResponse.json(
        { error: 'El orderId es obligatorio para capturar la orden.' },
        { status: 400 },
      )
    }

    const captureResult = await capturePayPalOrder(orderId)
    return NextResponse.json(captureResult)
  } catch (error: any) {
    console.error('Error capturando orden PayPal:', error)

    if (error?.name === 'PayPalError' && error?.status === 422) {
      return NextResponse.json(
        {
          error: error.body?.message || 'Instrumento rechazado por PayPal.',
          details: error.body?.details || null,
        },
        { status: 422 },
      )
    }

    return NextResponse.json(
      { error: 'No se pudo capturar la orden de PayPal.' },
      { status: 500 },
    )
  }
}
