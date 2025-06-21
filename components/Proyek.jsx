import React from 'react';

const projects = [
  {
    title: 'Website Company Profile',
    image: '/assets/proyek1.webp',
    desc: 'Website profesional untuk memperkuat branding dan kepercayaan bisnis.'
  },
  {
    title: 'Landing Page Produk',
    image: '/assets/proyek2.webp',
    desc: 'Landing page interaktif untuk meningkatkan konversi penjualan.'
  },
  {
    title: 'Portal Berita',
    image: '/assets/proyek3.webp',
    desc: 'Portal berita modern dengan fitur manajemen konten yang mudah.'
  },
  {
    title: 'Website Portfolio',
    image: '/assets/proyek4.webp',
    desc: 'Website portfolio kreatif untuk menampilkan karya dan layanan.'
  },
  {
    title: 'Toko Online',
    image: '/assets/proyek5.webp',
    desc: 'E-commerce dengan fitur lengkap dan tampilan menarik.'
  }
];

const Proyek = () => {
  return (
    <section id="proyek" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Proyek Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h4>
                <p className="text-slate-600 flex-1">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyek;
