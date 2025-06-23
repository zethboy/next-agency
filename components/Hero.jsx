import React from 'react';

const Hero = () => {
  return (
    <section id="beranda" className="hero bg-gradient-to-b from-slate-100 to-white py-20 md:py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Solusi Digital Kreatif untuk Bisnis Anda
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-xl mx-auto md:mx-0">
            Kami adalah agensi digital yang siap membantu Anda membangun brand, website, dan strategi pemasaran digital yang efektif dan inovatif.
          </p>
          <a
            href="#kontak"
            className="inline-block bg-slate-800 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-slate-700 transition text-lg"
          >
            Konsultasi Gratis
          </a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/assets/company.webp"
            alt="Agensi Digital"
            className="w-80 md:w-[28rem] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
