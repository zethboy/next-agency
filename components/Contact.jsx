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
    <section id="kontak" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">Kontak Kami</h3>
        <p className="text-slate-600 mb-8 text-center">Silakan hubungi kami untuk konsultasi atau pertanyaan seputar layanan Lieur Agency.</p>
        <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl shadow-md p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-slate-700">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-slate-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-slate-700">Pesan</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition"
          >
            Kirim Pesan
          </button>
          {submitted && (
            <div className="text-green-600 text-center font-semibold mt-4">Pesan Anda telah terkirim!</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
