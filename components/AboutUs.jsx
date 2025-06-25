import React from 'react';

const AboutUs = () => {
  return (
    <section id="tentang-kami" className="about-us py-20 bg-[#FAF6F0] w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-4 tracking-tight">Tentang Kami</h3>
          <p className="text-base text-[#5a5a5a] mb-5 max-w-xl">
            Lieur Agency adalah tim profesional yang berfokus pada solusi digital kreatif untuk bisnis modern. Kami
            berpengalaman dalam pengembangan website, branding, dan strategi pemasaran digital. Dengan pendekatan
            kolaboratif, kami membantu klien mencapai tujuan bisnis melalui inovasi dan teknologi.
          </p>
          <ul className="list-disc pl-5 text-[#8B0000] space-y-2 text-base">
            <li>Tim berpengalaman & kreatif</li>
            <li>Fokus pada hasil & kepuasan klien</li>
            <li>Solusi digital terintegrasi</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/assets/proyek1.webp"
            alt="Tim Lieur Agency"
            className="w-64 md:w-80 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
