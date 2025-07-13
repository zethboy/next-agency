import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-gradient-to-r from-[#18181b] via-[#8B0000]/60 to-[#18181b] w-full text-white animate-fadein-section">
      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noise)' opacity='0.12'/></svg>')`,
          opacity: 0.7,
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8">
        {/* Brand & Social */}
        <div className="text-center md:text-left flex flex-col gap-3">
          <span className="font-bold text-2xl tracking-wide">Lieur Agency</span>
          <span className="block text-white/70 text-base">Solusi Digital Kreatif</span>
          <div className="flex gap-4 justify-center md:justify-start mt-2">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" aria-label="WhatsApp" className="hover:text-[#FBBF24] transition">
              <i className="ri-whatsapp-line text-2xl"></i>
            </a>
            <a href="https://instagram.com/lieur.agency" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-[#FBBF24] transition">
              <i className="ri-instagram-line text-2xl"></i>
            </a>
            <a href="mailto:info@lieur.agency" aria-label="Email" className="hover:text-[#FBBF24] transition">
              <i className="ri-mail-line text-2xl"></i>
            </a>
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col gap-2 items-center md:items-start text-lg">
          <span className="font-semibold mb-2 text-white/70">Navigasi</span>
          <a href="#beranda" className="hover:text-[#FBBF24] transition">Beranda</a>
          <a href="#tentang-kami" className="hover:text-[#FBBF24] transition">Tentang Kami</a>
          <a href="#layanan" className="hover:text-[#FBBF24] transition">Layanan</a>
          <a href="#proyek" className="hover:text-[#FBBF24] transition">Proyek</a>
          <a href="#faq" className="hover:text-[#FBBF24] transition">FAQ</a>
          <a href="#kontak" className="hover:text-[#FBBF24] transition">Kontak</a>
        </nav>
        {/* Address & Info */}
        <div className="flex flex-col gap-2 items-center md:items-end text-base">
          <span className="font-semibold mb-2 text-white/70">Kontak & Alamat</span>
          <span className="flex items-center gap-2">
            <i className="ri-map-pin-line text-[#FBBF24]"></i> Jl. Contoh No. 123, Bandung, Indonesia
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-phone-line text-[#FBBF24]"></i> +62 812-3456-7890
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-mail-line text-[#FBBF24]"></i> info@lieur.agency
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-time-line text-[#FBBF24]"></i> Senin - Jumat, 09.00 - 17.00
          </span>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-6 text-center text-white/60 text-sm opacity-80">
        &copy; {new Date().getFullYear()} Lieur Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
