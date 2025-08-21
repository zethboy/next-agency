'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }
  }, []);

  return (
    <nav className={`navbar py-4 fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${scrolled ? 'bg-[#18181b]/95 backdrop-blur-sm shadow-md' : 'bg-transparent backdrop-blur-0 shadow-none'}`}> 
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 relative">
          {/* Kiri: Logo */}
          <div className="logo flex-1 min-w-fit">
            <h1 className={`text-2xl md:text-3xl font-bold tracking-wide transition-colors duration-500 ${scrolled ? 'text-yellow-400' : 'text-white'}`}>Malas Cuy Ngoding</h1>
          </div>
          {/* Tengah: Navigasi dalam satu kotak, benar-benar di tengah absolute */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <div className={`rounded-xl px-2 py-1 flex gap-2 items-center border border-white/10 shadow-md transition-all duration-500 ${scrolled ? 'bg-[#18181b]/95 backdrop-blur-sm' : 'bg-white/20 backdrop-blur-sm'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1 rounded-lg font-semibold hover:bg-white/10 transition text-base ${scrolled ? 'text-yellow-400' : 'text-white'}`}
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
          {/* Kanan: Login/Logout */}
          <div className="flex-1 flex justify-end min-w-fit">
            {!isLoggedIn ? (
              <Link
                href="/login"
                className={`hidden md:inline-block font-bold px-6 py-2 rounded-lg transition-all duration-500 ${scrolled ? 'bg-yellow-400 text-[#18181b] hover:bg-yellow-500' : 'bg-white/20 backdrop-blur-5xl text-white hover:bg-white/40'}`}
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => { localStorage.removeItem('isLoggedIn'); window.location.reload(); }}
                className={`hidden md:inline-block font-bold px-6 py-2 rounded-lg transition-all duration-500 ${scrolled ? 'bg-yellow-400 text-[#18181b] hover:bg-yellow-500' : 'bg-white/20 backdrop-blur-5xl text-white hover:bg-white/40'}`}
              >
                Logout
              </button>
            )}
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