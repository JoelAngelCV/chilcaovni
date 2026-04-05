'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/festival-config'
import Image from 'next/image'
import logoMini from '../public/chilcaovnimini.png'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Cerrar menú cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed top-0 w-full z-50 bg-linear-to-b from-background via-background/80 to-transparent backdrop-blur-sm border-b border-primary/20" ref={menuRef}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="#" className="text-2xl font-bold glow-text">
          <Image src={logoMini} alt="Chilca OVNI Festival" width={64} height={64} className="inline-block mr-2" style={{ width: "auto", height: "auto" }}/>
       </Link>
        
        <button
          className="lg:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden lg:flex gap-1">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#tickets"
          className="hidden sm:block neon-button text-sm"
        >
          Comprar Entradas
        </Link>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-primary/20 lg:hidden">
            <div className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#tickets"
                className="block px-4 py-2 text-center neon-button text-sm mt-4"
              >
                Comprar Entradas
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
