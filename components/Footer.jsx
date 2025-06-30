import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#FFF9E5] via-[#FAF6F0] to-[#FFF9E5] text-[#8B0000] pt-12 pb-6 w-full mt-16 relative overflow-hidden">
      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noise)' opacity='0.08'/></svg>')`,
          opacity: 0.5,
          mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#8B0000]/10 pb-8">
        {/* Brand & Social */}
        <div className="text-center md:text-left flex flex-col gap-3">
          <span className="font-bold text-2xl tracking-wide">Lieur Agency</span>
          <span className="block text-[#FAF6F0] text-base">Solusi Digital Kreatif</span>
          <div className="flex gap-4 justify-center md:justify-start mt-2">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" aria-label="WhatsApp" className="hover:text-[#FAF6F0] transition">
              <i className="ri-whatsapp-line text-2xl"></i>
            </a>
            <a href="https://instagram.com/lieur.agency" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-[#FAF6F0] transition">
              <i className="ri-instagram-line text-2xl"></i>
            </a>
            <a href="mailto:info@lieur.agency" aria-label="Email" className="hover:text-[#FAF6F0] transition">
              <i className="ri-mail-line text-2xl"></i>
            </a>
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col gap-2 items-center md:items-start text-lg">
          <span className="font-semibold mb-2 text-[#FAF6F0]">Navigasi</span>
          <a href="#beranda" className="hover:underline transition">Beranda</a>
          <a href="#tentang-kami" className="hover:underline transition">Tentang Kami</a>
          <a href="#layanan" className="hover:underline transition">Layanan</a>
          <a href="#proyek" className="hover:underline transition">Proyek</a>
          <a href="#faq" className="hover:underline transition">FAQ</a>
          <a href="#kontak" className="hover:underline transition">Kontak</a>
        </nav>
        {/* Address & Info */}
        <div className="flex flex-col gap-2 items-center md:items-end text-base">
          <span className="font-semibold mb-2 text-[#FAF6F0]">Kontak & Alamat</span>
          <span className="flex items-center gap-2">
            <i className="ri-map-pin-line"></i> Jl. Contoh No. 123, Bandung, Indonesia
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-phone-line"></i> +62 812-3456-7890
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-mail-line"></i> info@lieur.agency
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-time-line"></i> Senin - Jumat, 09.00 - 17.00
          </span>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-6 text-center text-[#8B0000] text-sm opacity-80">
        &copy; {new Date().getFullYear()} Lieur Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
