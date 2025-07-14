'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (form.username === 'admin' && form.password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        router.push('/');
      } else {
        setErrorMsg('Username atau password salah!');
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#18181b] text-white px-2">
      <form onSubmit={handleSubmit} className="bg-white/10 border border-white/10 rounded-2xl shadow-lg p-8 w-full max-w-sm space-y-6 backdrop-blur-md animate-fadein-section" aria-label="Form Login Admin">
        <h2 className="text-2xl font-bold text-center mb-4">Login Admin</h2>
        <div>
          <label htmlFor="username" className="block mb-2 font-semibold">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            autoComplete="username"
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/30 text-white placeholder-white/60 focus:border-yellow-400 outline-none text-base"
            placeholder="Masukkan username"
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
            autoComplete="current-password"
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/30 text-white placeholder-white/60 focus:border-yellow-400 outline-none text-base"
            placeholder="Masukkan password"
          />
        </div>
        {errorMsg && <div className="text-red-400 text-sm text-center font-semibold">{errorMsg}</div>}
        {successMsg && <div className="text-green-400 text-sm text-center font-semibold">{successMsg}</div>}
        <button
          type="submit"
          disabled={loading}
          aria-label="Tombol Masuk Admin"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#18181b] font-bold py-3 rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Loading...' : 'Masuk'}
        </button>
        <div className="text-center mt-2">
          <Link href="/forgot" className="text-yellow-400 hover:underline text-sm">Lupa kata sandi?</Link>
        </div>
        <div className="text-center mt-2">
          <span className="text-white/70 text-sm">Belum punya akun? </span>
          <Link href="/register" className="text-yellow-400 hover:underline text-sm">Daftar</Link>
        </div>
      </form>
    </div>
  );
}
