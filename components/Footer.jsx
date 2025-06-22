import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="font-bold text-lg">Lieur Agency</span>
          <span className="block text-slate-300 text-sm mt-1">Solusi Digital Kreatif &copy; {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#beranda" className="hover:underline">Beranda</a>
          <a href="#layanan" className="hover:underline">Layanan</a>
          <a href="#proyek" className="hover:underline">Proyek</a>
          <a href="#kontak" className="hover:underline">Kontak</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
