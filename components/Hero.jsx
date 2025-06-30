import React from 'react';

const Hero = () => {
  return (
    <section id="beranda" className="hero bg-[#FAF6F0] w-full min-h-screen flex items-center relative overflow-hidden">
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
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="w-72 h-72 bg-[#8B0000]/10 rounded-full absolute -top-24 -left-24 blur-2xl"></div>
        <div className="w-96 h-96 bg-[#8B0000]/10 rounded-full absolute -bottom-32 -right-32 blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 w-full z-10">
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <span className="inline-block bg-[#8B0000] text-[#FAF6F0] px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase shadow">
            Agensi Digital Bandung
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#8B0000] mb-5 leading-tight tracking-tight">
            Solusi Digital Kreatif untuk Bisnis Anda
          </h2>
          <p className="text-base md:text-lg text-[#5a5a5a] mb-7 max-w-xl mx-auto md:mx-0">
            Kami adalah agensi digital yang siap membantu Anda membangun brand, website, dan strategi pemasaran digital yang efektif dan inovatif.
          </p>
          <a
            href="#kontak"
            className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#a83232] transition text-base mt-2"
          >
            Konsultasi Gratis
          </a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end animate-fade-in delay-100">
          <img
            src="/assets/company.webp"
            alt="Agensi Digital"
            className="w-64 md:w-[22rem] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
