'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'


const Navbar = () => {

const [active, setActive] = useState(false);

const handleClick = () => {
  setActive(!active)
}

  return (
    <div className='navbar py-6 '>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className='text-3xl font-bold'>Lieur</h1>
          </div>
          <ul className={`menu flex items-center gap-12 md:static absolute left-1/2 -translate-x-1/2 ${active ? "top-24 opacity-100" : "top-20 opacity-0"} md:-translate-x-0 md:flex-row flex-col md:bg-transparent bg-slate-700 w-full md:w-auto md:py-0 py-10 text-white md:text-black transition-all md:opacity-100 md:transition-none`}>
            <li>
              <Link href={"#beranda"}>Beranda</Link>
            </li>
            <li>
              <Link href={"#layanan"}>Service</Link>
            </li>
            <li>
              <Link href={"#proyek"}>Tentang </Link>
            </li>
            <li>
              <Link href={"#kontak"}>Kontak</Link>
            </li>
          </ul>
          <div className='md:hidden block' onClick={() => handleClick()}>
          <i className="ri-menu-3-line ri-2x font-bold"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar