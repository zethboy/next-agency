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
    <section id="kontak" className="py-20 bg-[#FAF6F0] w-full">
      <div className="max-w-2xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-8 text-center tracking-tight">Kontak Kami</h3>
        <p className="text-[#5a5a5a] mb-8 text-center text-base">Silakan hubungi kami untuk konsultasi atau pertanyaan seputar layanan Lieur Agency.</p>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-7 space-y-5">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-[#8B0000] text-base">Nama</label>
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
            <label htmlFor="email" className="block mb-2 font-semibold text-[#8B0000] text-base">Email</label>
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
            <label htmlFor="message" className="block mb-2 font-semibold text-[#8B0000] text-base">Pesan</label>
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
      </div>
    </section>
  );
};

export default Contact;
