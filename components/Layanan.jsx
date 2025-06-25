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
    <section id="layanan" className="py-20 bg-[#FAF6F0] w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-10 text-center tracking-tight">Layanan Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition text-base">
              <h4 className="text-lg font-semibold text-[#8B0000] mb-2">{service.title}</h4>
              <p className="text-[#5a5a5a]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
