import React from 'react';

const AboutUs = () => {
  return (
    <section id="tentang-kami" className="about-us py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Tentang Kami</h3>
          <p className="text-lg text-slate-600 mb-6 max-w-xl">
            Lieur Agency adalah tim profesional yang berfokus pada solusi digital kreatif untuk bisnis modern. Kami berpengalaman dalam pengembangan website, branding, dan strategi pemasaran digital. Dengan pendekatan kolaboratif, kami membantu klien mencapai tujuan bisnis melalui inovasi dan teknologi.
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            <li>Tim berpengalaman & kreatif</li>
            <li>Fokus pada hasil & kepuasan klien</li>
            <li>Solusi digital terintegrasi</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img src="/assets/proyek1.webp" alt="Tim Lieur Agency" className="w-72 md:w-96 rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
