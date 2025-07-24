'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Di sini Anda bisa menambahkan logic pengiriman form (API, Email, dsb)
  };

  return (
    <section id="kontak" className="py-24 bg-[#18181b] w-full relative overflow-hidden text-white animate-fadein-section">
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
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <span className="inline-block bg-[#8B0000] text-white px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase shadow">Kontak</span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 text-center tracking-tight">Kontak Kami</h3>
        <div className="h-1 w-16 bg-[#8B0000]/60 rounded mb-8 mx-auto"></div>
        <form onSubmit={handleSubmit} className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 font-semibold text-white text-base flex items-center gap-2"><i className="ri-user-line text-[#FBBF24]"></i> Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/30 text-white placeholder-white/60 focus:border-[#FBBF24] outline-none text-base"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 font-semibold text-white text-base flex items-center gap-2"><i className="ri-mail-line text-[#FBBF24]"></i> Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/30 text-white placeholder-white/60 focus:border-[#FBBF24] outline-none text-base"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 font-semibold text-white text-base flex items-center gap-2"><i className="ri-message-2-line text-[#FBBF24]"></i> Pesan</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-white/10 bg-black/30 text-white placeholder-white/60 focus:border-[#FBBF24] outline-none text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#8B0000] text-white py-3 rounded-lg font-semibold hover:bg-[#a83232] transition text-base shadow"
          >
            Kirim Pesan
          </button>
          {submitted && (
            <div className="text-green-400 text-center font-semibold mt-4 text-base">Pesan Anda telah terkirim!</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
