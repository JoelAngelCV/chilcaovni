'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/festival-config'
import { NavSubmenu } from './nav-submenu'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import logoMini from '../public/logoaliennave.png'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null)
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
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold glow-text">
          <Image src={logoMini} alt="Chilca OVNI Festival" width={32} height={32} className="inline-block mr-2" style={{ width: "35%", height: "35%" }} loading="eager"/>
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
            'submenu' in item ? (
              <NavSubmenu key={item.label} label={item.label} items={item.submenu || []} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        <Link
          href="#tickets"
          className="hidden sm:block neon-button text-sm"
        >
          Comprar Entradas
        </Link>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-primary/20 lg:hidden z-40">
            <div className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((item) => (
                'submenu' in item ? (
                  <div key={item.label} className="space-y-0">
                    <button
                      onClick={() => setExpandedSubmenu(expandedSubmenu === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedSubmenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedSubmenu === item.label && item.submenu && (
                      <div className="bg-primary/5 rounded">
                        {item.submenu.map((subitem, idx) => (
                          <Link
                            key={idx}
                            href={subitem.href}
                            className="block px-8 py-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setExpandedSubmenu(null)
                            }}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors rounded hover:bg-primary/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
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
