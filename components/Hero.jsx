import React from 'react';

const Hero = () => {
  return (
    <section id="beranda" className="hero bg-[#FAF6F0] py-20 md:py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#8B0000] mb-5 leading-tight tracking-tight">
            Solusi Digital Kreatif untuk Bisnis Anda
          </h2>
          <p className="text-base md:text-lg text-[#5a5a5a] mb-7 max-w-xl mx-auto md:mx-0">
            Kami adalah agensi digital yang siap membantu Anda membangun brand, website, dan strategi pemasaran digital yang efektif dan inovatif.
          </p>
          <a
            href="#kontak"
            className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#a83232] transition text-base"
          >
            Konsultasi Gratis
          </a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
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
