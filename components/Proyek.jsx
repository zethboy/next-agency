import React from 'react';

const projects = [
  {
    title: 'Website Company Profile',
    image: '/assets/proyek1.webp',
    desc: 'Website profesional untuk memperkuat branding dan kepercayaan bisnis.',
  },
  {
    title: 'Landing Page Produk',
    image: '/assets/proyek2.webp',
    desc: 'Landing page interaktif untuk meningkatkan konversi penjualan.',
  },
  {
    title: 'Portal Berita',
    image: '/assets/proyek3.webp',
    desc: 'Portal berita modern dengan fitur manajemen konten yang mudah.',
  },
  {
    title: 'Website Portfolio',
    image: '/assets/proyek4.webp',
    desc: 'Website portfolio kreatif untuk menampilkan karya dan layanan.',
  },
  {
    title: 'Toko Online',
    image: '/assets/proyek5.webp',
    desc: 'E-commerce dengan fitur lengkap dan tampilan menarik.',
  },
  {
    title: 'Aplikasi Booking Online',
    image: '/assets/proyek1.webp', // diganti agar pasti muncul
    desc: 'Sistem booking online modern untuk layanan bisnis dan reservasi.',
  }
];

const Proyek = () => {
  return (
    <section id="proyek" className="py-24 bg-[#18181b] w-full relative overflow-hidden text-white">
      {/* Grain overlay (opacity lebih kecil) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noise)' opacity='0.12'/></svg>')`,
          opacity: 0.25,
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 animate-fadein-section">
        <span className="inline-block bg-[#8B0000] text-white px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase shadow">Proyek</span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 text-center tracking-tight">Proyek Kami</h3>
        <div className="h-1 w-16 bg-[#8B0000]/60 rounded mb-10 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white/10 border border-white/10 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col text-base">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-t-2xl" loading="lazy" />
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-white/80 flex-1">{project.desc}</p>
                <button className="mt-4 px-5 py-2 rounded-lg bg-[#8B0000] text-white font-semibold hover:bg-[#a83232] transition text-sm w-fit self-start">Lihat Detail</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyek;
