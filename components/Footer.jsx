import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-[#18181b] w-full text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
        {/* Brand & Social */}
        <div className="text-center md:text-left flex flex-col gap-3">
          <span className="font-bold text-2xl tracking-wide text-yellow-400">Lieur Agency</span>
          <span className="block text-white/70 text-base">Solusi Digital Kreatif</span>
          <div className="flex gap-4 justify-center md:justify-start mt-2">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Lieur Agency" className="hover:text-yellow-400 transition">
              <i className="ri-whatsapp-line text-2xl" aria-hidden="true"></i>
            </a>
            <a href="https://instagram.com/lieur.agency" target="_blank" rel="noopener noreferrer" aria-label="Instagram Lieur Agency" className="hover:text-yellow-400 transition">
              <i className="ri-instagram-line text-2xl" aria-hidden="true"></i>
            </a>
            <a href="mailto:info@lieur.agency" aria-label="Email Lieur Agency" className="hover:text-yellow-400 transition">
              <i className="ri-mail-line text-2xl" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col gap-2 items-center md:items-start text-lg" aria-label="Navigasi utama">
          <span className="font-semibold mb-2 text-white/70">Navigasi</span>
          <a href="#beranda" className="hover:text-yellow-400 transition" aria-label="Ke Beranda">Beranda</a>
          <a href="#tentang-kami" className="hover:text-yellow-400 transition" aria-label="Tentang Kami">Tentang Kami</a>
          <a href="#layanan" className="hover:text-yellow-400 transition" aria-label="Layanan">Layanan</a>
          <a href="#proyek" className="hover:text-yellow-400 transition" aria-label="Proyek">Proyek</a>
          <a href="#faq" className="hover:text-yellow-400 transition" aria-label="FAQ">FAQ</a>
          <a href="#kontak" className="hover:text-yellow-400 transition" aria-label="Kontak">Kontak</a>
        </nav>
        {/* Address & Info */}
        <div className="flex flex-col gap-2 items-center md:items-end text-base" aria-label="Kontak dan alamat">
          <span className="font-semibold mb-2 text-white/70">Kontak & Alamat</span>
          <span className="flex items-center gap-2">
            <i className="ri-map-pin-line text-yellow-400" aria-hidden="true"></i> Jl. Contoh No. 123, Bandung, Indonesia
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-phone-line text-yellow-400" aria-hidden="true"></i> <a href="tel:+6281234567890" className="hover:text-yellow-400 transition" aria-label="Telepon Lieur Agency">+62 812-3456-7890</a>
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-mail-line text-yellow-400" aria-hidden="true"></i> <a href="mailto:info@lieur.agency" className="hover:text-yellow-400 transition" aria-label="Email Lieur Agency">info@lieur.agency</a>
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-time-line text-yellow-400" aria-hidden="true"></i> Senin - Jumat, 09.00 - 17.00
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-6 text-center text-white/60 text-sm opacity-80" aria-label="Copyright">
        &copy; {new Date().getFullYear()} Giogi Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
