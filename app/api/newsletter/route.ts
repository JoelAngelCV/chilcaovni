import { NextResponse } from 'next/server'
import { subscribeToNewsletter } from '@/lib/brevo'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const source = typeof body.source === 'string' ? body.source : 'newsletter'

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Debes enviar un correo válido para suscribirte.' },
        { status: 400 },
      )
    }

    await subscribeToNewsletter(email, source)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error en /api/newsletter:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error interno al procesar la suscripción.' },
      { status: 500 },
    )
  }
}
