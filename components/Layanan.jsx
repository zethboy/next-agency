import React from 'react';

const services = [
  {
    title: 'Pembuatan Website',
    desc: 'Website profesional, responsif, dan mudah dikelola sesuai kebutuhan bisnis Anda.'
  },
  {
    title: 'Branding & Desain',
    desc: 'Membangun identitas visual yang kuat dan menarik untuk brand Anda.'
  },
  {
    title: 'Digital Marketing',
    desc: 'Strategi pemasaran digital untuk meningkatkan visibilitas dan penjualan.'
  },
  {
    title: 'UI/UX Design',
    desc: 'Desain antarmuka dan pengalaman pengguna yang modern dan intuitif.'
  }
];

const Layanan = () => {
  return (
    <section id="layanan" className="py-20 bg-slate-50 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Layanan Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition text-lg">
              <h4 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h4>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
