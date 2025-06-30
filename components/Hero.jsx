import React from 'react';

const Hero = () => {
  return (
    <section id="beranda" className="hero w-full min-h-screen flex items-center relative overflow-hidden bg-[#18181b] text-white pt-0 mt-0">
      {/* Video background dengan blur */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 filter blur-sm"
        src="/assets/ofice-busy.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noise)' opacity='0.12'/></svg>')`,
          opacity: 0.7,
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      ></div>
      {/* Dekorasi blur merah */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="w-72 h-72 bg-[#8B0000]/30 rounded-full absolute -top-24 -left-24 blur-2xl"></div>
        <div className="w-96 h-96 bg-[#8B0000]/30 rounded-full absolute -bottom-32 -right-32 blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 w-full z-20">
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <span className="inline-block bg-[#8B0000] text-white px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase shadow">
            Agensi Digital Bandung
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight tracking-tight">
            Solusi Digital Kreatif untuk Bisnis Anda
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-7 max-w-xl mx-auto md:mx-0">
            Kami adalah agensi digital yang siap membantu Anda membangun brand, website, dan strategi pemasaran digital yang efektif dan inovatif.
          </p>
          <a
            href="#kontak"
            className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#a83232] transition text-base mt-2"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
