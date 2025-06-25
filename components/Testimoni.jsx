import React from 'react';

const testimonials = [
  {
    name: 'Budi Santoso',
    company: 'PT Maju Jaya',
    message: 'Lieur Agency sangat profesional dan responsif. Website kami jadi lebih modern dan mudah diakses pelanggan.'
  },
  {
    name: 'Siti Rahma',
    company: 'Rahma Fashion',
    message: 'Branding dan website yang dibuat Lieur Agency sangat membantu bisnis saya berkembang.'
  },
  {
    name: 'Andi Wijaya',
    company: 'Andi Digital',
    message: 'Tim kreatif, hasil memuaskan, dan supportnya luar biasa!'
  }
];

const Testimoni = () => {
  return (
    <section id="testimoni" className="py-20 bg-[#FAF6F0] w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-10 text-center tracking-tight">Testimoni Klien</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-full bg-[#8B0000] flex items-center justify-center text-xl font-bold text-white mb-3">
                {item.name.charAt(0)}
              </div>
              <p className="text-base text-[#5a5a5a] mb-3 italic min-h-[72px]">"{item.message}"</p>
              <span className="font-semibold text-[#8B0000] text-base">{item.name}</span>
              <span className="text-slate-500 text-xs">{item.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
