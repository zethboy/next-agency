import React from 'react';

const AboutUs = () => {
  return (
    <section id="tentang-kami" className="about-us py-20 bg-[#FAF6F0] w-full relative overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="inline-block bg-[#8B0000] text-[#FAF6F0] px-3 py-1 rounded-full text-xs font-bold mb-3 tracking-widest uppercase shadow">Tentang Kami</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-2 tracking-tight">Tentang Kami</h3>
          <div className="h-1 w-16 bg-[#8B0000]/30 rounded mb-5"></div>
          <p className="text-base text-[#5a5a5a] mb-5 max-w-xl">
            Lieur Agency adalah tim profesional yang berfokus pada solusi digital kreatif untuk bisnis modern. Kami
            berpengalaman dalam pengembangan website, branding, dan strategi pemasaran digital. Dengan pendekatan
            kolaboratif, kami membantu klien mencapai tujuan bisnis melalui inovasi dan teknologi.
          </p>
          <ul className="list-none pl-0 text-[#8B0000] space-y-2 text-base">
            <li className="flex items-center gap-2"><i className="ri-star-smile-line text-lg"></i> Tim berpengalaman & kreatif</li>
            <li className="flex items-center gap-2"><i className="ri-flag-2-line text-lg"></i> Fokus pada hasil & kepuasan klien</li>
            <li className="flex items-center gap-2"><i className="ri-global-line text-lg"></i> Solusi digital terintegrasi</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center md:justify-end animate-fade-in delay-100">
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
