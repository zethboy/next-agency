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
    <section id="testimoni" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Testimoni Klien</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-2xl font-bold text-slate-700 mb-4">
                {item.name.charAt(0)}
              </div>
              <p className="text-lg text-slate-700 mb-4 italic">"{item.message}"</p>
              <span className="font-semibold text-slate-800">{item.name}</span>
              <span className="text-slate-500 text-sm">{item.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
