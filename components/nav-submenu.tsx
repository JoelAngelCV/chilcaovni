'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface SubmenuItem {
  label: string
  href: string
}

interface NavSubmenuProps {
  label: string
  items: SubmenuItem[]
}

export function NavSubmenu({ label, items }: NavSubmenuProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors duration-200">
        {label}
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* Submenu - Visible on hover */}
      <div className="absolute top-full left-0 mt-0 w-56 bg-background border border-primary/30 rounded-lg shadow-lg overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="py-2">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="block px-4 py-3 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
