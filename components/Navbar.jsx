'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <nav className="navbar py-6 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="logo">
            <h1 className="text-3xl font-bold text-slate-800">Lieur</h1>
          </div>
          <ul
            className={`menu flex items-center gap-12 md:static absolute left-1/2 -translate-x-1/2 ${active ? 'top-24 opacity-100' : 'top-20 opacity-0 pointer-events-none'} md:translate-x-0 md:flex-row flex-col md:bg-transparent bg-slate-700 w-full md:w-auto md:py-0 py-10 text-white md:text-slate-800 transition-all duration-300 md:opacity-100 md:pointer-events-auto`}
          >
            <li>
              <Link href="#beranda" onClick={() => setActive(false)}>Beranda</Link>
            </li>
            <li>
              <Link href="#layanan" onClick={() => setActive(false)}>Layanan</Link>
            </li>
            <li>
              <Link href="#proyek" onClick={() => setActive(false)}>Proyek</Link>
            </li>
            <li>
              <Link href="#kontak" onClick={() => setActive(false)}>Kontak</Link>
            </li>
          </ul>
          <button
            className="md:hidden block text-slate-800 focus:outline-none"
            onClick={handleClick}
            aria-label="Toggle menu"
            aria-expanded={active}
          >
            <i className="ri-menu-3-line ri-2x font-bold"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar