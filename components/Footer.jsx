import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#8B0000] text-white py-10 mt-16 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-bold text-2xl tracking-wide">Lieur Agency</span>
          <span className="block text-[#FAF6F0] text-base mt-2">Solusi Digital Kreatif &copy; {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap gap-8 mt-4 md:mt-0 text-lg">
          <a href="#beranda" className="hover:underline transition">Beranda</a>
          <a href="#tentang-kami" className="hover:underline transition">Tentang Kami</a>
          <a href="#layanan" className="hover:underline transition">Layanan</a>
          <a href="#proyek" className="hover:underline transition">Proyek</a>
          <a href="#faq" className="hover:underline transition">FAQ</a>
          <a href="#kontak" className="hover:underline transition">Kontak</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
