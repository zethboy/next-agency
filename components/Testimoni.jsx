import React from 'react';

const testimonials = [
  {
    name: 'Budi Santoso',
    company: 'PT Maju Jaya',
    message: 'Lieur Agency sangat profesional dan responsif. Website kami jadi lebih modern dan mudah diakses pelanggan.',
    rating: 5
  },
  {
    name: 'Siti Rahma',
    company: 'Rahma Fashion',
    message: 'Branding dan website yang dibuat Lieur Agency sangat membantu bisnis saya berkembang.',
    rating: 5
  },
  {
    name: 'Andi Wijaya',
    company: 'Andi Digital',
    message: 'Tim kreatif, hasil memuaskan, dan supportnya luar biasa!',
    rating: 5
  }
];

const Testimoni = () => {
  return (
    <section id="testimoni" className="py-20 bg-[#FAF6F0] w-full relative overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <span className="inline-block bg-[#8B0000] text-[#FAF6F0] px-3 py-1 rounded-full text-xs font-bold mb-3 tracking-widest uppercase shadow">Testimoni</span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-2 text-center tracking-tight">Testimoni Klien</h3>
        <div className="h-1 w-16 bg-[#8B0000]/30 rounded mb-10 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-[#8B0000]/10 shadow p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-full bg-[#8B0000] flex items-center justify-center text-xl font-bold text-white mb-3">
                {item.name.charAt(0)}
              </div>
              <p className="text-base text-[#5a5a5a] mb-3 italic min-h-[72px]">"{item.message}"</p>
              <span className="font-semibold text-[#8B0000] text-base">{item.name}</span>
              <span className="text-slate-500 text-xs mb-2">{item.company}</span>
              <div className="flex gap-1 justify-center">
                {[...Array(item.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-[#FBBF24] text-lg"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
