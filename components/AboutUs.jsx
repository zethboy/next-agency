import React from 'react';

const AboutUs = () => {
  return (
    <section id="tentang-kami" className="py-24 bg-[#18181b] w-full relative overflow-hidden text-white animate-fadein-section">
      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noise)' opacity='0.12'/></svg>')`,
          opacity: 0.7,
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <span className="inline-block bg-[#8B0000] text-white px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase shadow">Tentang Kami</span>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">Tentang Kami</h3>
          <div className="h-1 w-16 bg-[#8B0000]/60 rounded mb-7"></div>
          <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6 mb-6 shadow-lg">
            <p className="text-lg text-white/90 mb-4 max-w-xl">
              Lieur Agency adalah tim profesional yang berfokus pada solusi digital kreatif untuk bisnis modern. Kami berpengalaman dalam pengembangan website, branding, dan strategi pemasaran digital. Dengan pendekatan kolaboratif, kami membantu klien mencapai tujuan bisnis melalui inovasi dan teknologi.
            </p>
            <ul className="list-none pl-0 text-white/90 space-y-3 text-base">
              <li className="flex items-center gap-3"><i className="ri-star-smile-line text-[#FBBF24] text-xl"></i> Tim berpengalaman & kreatif</li>
              <li className="flex items-center gap-3"><i className="ri-flag-2-line text-[#FBBF24] text-xl"></i> Fokus pada hasil & kepuasan klien</li>
              <li className="flex items-center gap-3"><i className="ri-global-line text-[#FBBF24] text-xl"></i> Solusi digital terintegrasi</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end animate-fade-in delay-100">
          <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-2 shadow-lg">
            <img
              src="/assets/proyek1.webp"
              alt="Tim Lieur Agency"
              className="w-64 md:w-80 rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
