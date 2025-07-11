'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (!form.username || !form.email || !form.password) {
        setError('Semua field wajib diisi!');
      } else if (!form.email.includes('@')) {
        setError('Email tidak valid!');
      } else {
        setSuccess('Registrasi berhasil! Silakan login.');
        setTimeout(() => router.push('/login'), 1200);
      }
      setLoading(false);
    }, 900);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#18181b] text-white px-2">
      <form onSubmit={handleSubmit} className="bg-white/10 border border-white/10 rounded-2xl shadow-lg p-8 w-full max-w-sm space-y-6 backdrop-blur-md animate-fadein-section">
        <h2 className="text-2xl font-bold text-center mb-4">Daftar Akun</h2>
        <div>
          <label htmlFor="username" className="block mb-2 font-semibold">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/30 text-white placeholder-white/60 focus:border-yellow-400 outline-none text-base"
            placeholder="Buat username"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/30 text-white placeholder-white/60 focus:border-yellow-400 outline-none text-base"
            placeholder="Masukkan email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/30 text-white placeholder-white/60 focus:border-yellow-400 outline-none text-base"
            placeholder="Buat password"
          />
        </div>
        {error && <div className="text-red-400 text-sm text-center font-semibold">{error}</div>}
        {success && <div className="text-green-400 text-sm text-center font-semibold">{success}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#18181b] font-bold py-3 rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Loading...' : 'Daftar'}
        </button>
        <div className="text-center mt-2">
          <span className="text-white/70 text-sm">Sudah punya akun? </span>
          <a href="/login" className="text-yellow-400 hover:underline text-sm">Masuk</a>
        </div>
      </form>
    </div>
  );
}
