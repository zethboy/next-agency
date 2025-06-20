import React from 'react';

const Hero = () => {
  return (
    <section className="hero bg-gradient-to-b from-slate-100 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Solusi Digital Kreatif untuk Bisnis Anda
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
            Kami adalah agensi digital yang siap membantu Anda membangun brand, website, dan strategi pemasaran digital yang efektif dan inovatif.
          </p>
          <a href="#kontak" className="inline-block bg-slate-800 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-slate-700 transition">
            Konsultasi Gratis
          </a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img src="/assets/company.webp" alt="Agensi Digital" className="w-80 md:w-[28rem] rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
