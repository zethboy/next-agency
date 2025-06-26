import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#8B0000] text-white pt-12 pb-6 w-full mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-[#FAF6F0]/20 pb-8">
        <div className="text-center md:text-left">
          <span className="font-bold text-2xl tracking-wide block mb-2">Lieur Agency</span>
          <span className="block text-[#FAF6F0] text-base mb-2">Solusi Digital Kreatif</span>
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
        <nav className="flex flex-wrap gap-8 justify-center md:justify-end text-lg">
          <a href="#beranda" className="hover:underline transition">Beranda</a>
          <a href="#tentang-kami" className="hover:underline transition">Tentang Kami</a>
          <a href="#layanan" className="hover:underline transition">Layanan</a>
          <a href="#proyek" className="hover:underline transition">Proyek</a>
          <a href="#faq" className="hover:underline transition">FAQ</a>
          <a href="#kontak" className="hover:underline transition">Kontak</a>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-6 text-center text-[#FAF6F0] text-sm opacity-80">
        &copy; {new Date().getFullYear()} Lieur Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
