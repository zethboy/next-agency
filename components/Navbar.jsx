'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Kami', href: '#tentang-kami' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' },
  ]

  return (
    <nav className="navbar py-4 bg-transparent text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 relative">
          {/* Kiri: Logo */}
          <div className="logo flex-1 min-w-fit">
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Giogi</h1>
          </div>
          {/* Tengah: Navigasi dalam satu kotak, benar-benar di tengah absolute */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <div className="rounded-xl bg-transparent px-2 py-1 flex gap-2 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1 rounded-lg text-white font-semibold hover:bg-white/10 transition text-base"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile nav */}
          <div className={`md:hidden flex-1 flex justify-center ${active ? '' : ''}`}>
            <div
              className={`rounded-xl bg-black/60 px-4 py-2 flex gap-2 items-center absolute left-1/2 -translate-x-1/2 ${
                active ? 'top-20 opacity-100' : 'top-16 opacity-0 pointer-events-none'
              } flex-col w-full py-8 transition-all duration-300`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActive(false)}
                  className="px-3 py-1 rounded-lg text-white font-semibold hover:bg-white/10 transition text-base"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Kanan: Contact */}
          <div className="flex-1 flex justify-end min-w-fit">
            <a
              href="#kontak"
              className="hidden md:inline-block bg-[#8B0000] text-white font-bold px-6 py-2 rounded-lg hover:bg-[#a83232] transition"
            >
              Contact
            </a>
            <button
              className="md:hidden block text-white ml-4 focus:outline-none"
              onClick={handleClick}
              aria-label="Toggle menu"
              aria-expanded={active}
            >
              <i className="ri-menu-3-line ri-2x font-bold"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar