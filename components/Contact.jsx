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
    <section id="kontak" className="py-20 bg-[#FAF6F0] w-full relative overflow-hidden">
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
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <span className="inline-block bg-[#8B0000] text-[#FAF6F0] px-3 py-1 rounded-full text-xs font-bold mb-3 tracking-widest uppercase shadow">Kontak</span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-2 text-center tracking-tight">Kontak Kami</h3>
        <div className="h-1 w-16 bg-[#8B0000]/30 rounded mb-8 mx-auto"></div>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-7 space-y-5 border border-[#8B0000]/20">
          <div>
            <label htmlFor="name" className="mb-2 font-semibold text-[#8B0000] text-base flex items-center gap-2"><i className="ri-user-line"></i> Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#8B0000] outline-none text-base"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 font-semibold text-[#8B0000] text-base flex items-center gap-2"><i className="ri-mail-line"></i> Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#8B0000] outline-none text-base"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 font-semibold text-[#8B0000] text-base flex items-center gap-2"><i className="ri-message-2-line"></i> Pesan</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#8B0000] outline-none text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#8B0000] text-white py-3 rounded-lg font-semibold hover:bg-[#a83232] transition text-base"
          >
            Kirim Pesan
          </button>
          {submitted && (
            <div className="text-green-600 text-center font-semibold mt-4 text-base">Pesan Anda telah terkirim!</div>
          )}
        </form>
        <div className="mt-8 text-center text-[#8B0000] text-base flex flex-col gap-2">
          <div><i className="ri-map-pin-line mr-2"></i>Jl. Contoh No. 123, Bandung</div>
          <div><i className="ri-phone-line mr-2"></i>+62 812-3456-7890</div>
          <div><i className="ri-mail-line mr-2"></i>info@lieur.agency</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
