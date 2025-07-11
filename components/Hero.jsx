import React from 'react';

const Hero = () => {
  return (
    <section id="beranda" className="hero w-full min-h-screen flex items-center relative overflow-hidden bg-[#18181b] text-white pt-0 mt-0 scroll-smooth">
      {/* Video background dengan overlay gelap */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/oficebusy.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        preload="none"
        poster="/assets/hero-poster.jpg"
      />
      {/* Overlay gelap di atas video */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" aria-hidden="true"></div>
      {/* Grain overlay (opacity lebih kecil) */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noise)' opacity='0.12'/></svg>')`,
          opacity: 0.25,
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      ></div>
      {/* Dekorasi blur merah (opacity lebih kecil) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="w-72 h-72 bg-[#8B0000]/15 rounded-full absolute -top-24 -left-24 blur-2xl"></div>
        <div className="w-96 h-96 bg-[#8B0000]/15 rounded-full absolute -bottom-32 -right-32 blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 w-full z-20">
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <span className="inline-block bg-[#8B0000] bg-opacity-80 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase shadow-lg border border-white/10">
            <svg className="inline-block w-4 h-4 mr-2 text-yellow-400 align-text-bottom" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 01.894.553l2.382 4.825 5.327.774a1 1 0 01.554 1.707l-3.853 3.755.91 5.308a1 1 0 01-1.451 1.054L10 16.347l-4.773 2.503a1 1 0 01-1.451-1.054l.91-5.308-3.853-3.755a1 1 0 01.554-1.707l5.327-.774L9.106 2.553A1 1 0 0110 2z" /></svg>
            Agensi Digital Bandung
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Solusi Digital <span className="text-yellow-400">Kreatif</span> untuk <span className="text-[#8B0000]">Bisnis Anda</span>
          </h2>
          <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto md:mx-0 font-medium">
            Kami adalah agensi digital <span className="text-yellow-400 font-semibold">Bandung</span> yang siap membantu Anda membangun brand, website, dan strategi pemasaran digital yang <span className="text-yellow-400 font-semibold">efektif</span> & <span className="text-[#8B0000] font-semibold">inovatif</span>.
          </p>
          <a
            href="#kontak"
            className="inline-block bg-gradient-to-r from-[#8B0000] via-[#a83232] to-yellow-400 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 hover:from-yellow-400 hover:to-[#8B0000] hover:text-[#18181b] transition-all duration-300 text-lg mt-2 border border-white/10 backdrop-blur-md"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
