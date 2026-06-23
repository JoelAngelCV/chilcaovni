'use client'

import { FormEvent, useState } from 'react'

interface NewsletterFormProps {
  source: string
  title?: string
  description?: string
  buttonLabel?: string
  className?: string
}

export function NewsletterForm({
  source,
  title = 'Newsletter',
  description,
  buttonLabel = 'Suscribirse',
  className = '',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedEmail = email.trim().toLowerCase()
    if (!normalizedEmail || !normalizedEmail.includes('@')) {
      setStatus('error')
      setMessage('Por favor ingresa un correo válido.')
      return
    }

    setStatus('pending')
    setMessage('Enviando suscripción...')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: normalizedEmail, source }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data?.error || 'No se pudo suscribir al newsletter.')
      }

      setStatus('success')
      setMessage('¡Gracias! Tu correo ha sido registrado.')
      setEmail('')
    } catch (error) {
      console.error('Newsletter subscription error', error)
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Error al suscribir.')
    }
  }

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      {description ? <p className="text-foreground/70 mb-4">{description}</p> : null}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Tu email"
          className="w-full px-4 py-2 bg-card border border-primary/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary"
          aria-label="Correo electrónico"
        />
        <button
          type="submit"
          disabled={status === 'pending'}
          className="w-full neon-button text-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'pending' ? 'Enviando...' : buttonLabel}
        </button>
      </form>
      {message ? (
        <p className={`mt-3 text-sm ${status === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
          {message}
        </p>
      ) : null}
    </div>
  )
}
