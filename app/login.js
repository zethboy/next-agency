'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {

  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (form.username === 'admin' && form.password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        router.push('/');
      } else {
        setError('Username atau password salah!');
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#18181b] text-white">
      <form onSubmit={handleSubmit} className="bg-white/10 border border-white/10 rounded-2xl shadow-lg p-8 w-full max-w-sm space-y-6 backdrop-blur-md animate-fadein-section">
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
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/30 text-white placeholder-white/60 focus:border-[#FBBF24] outline-none text-base"
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
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/30 text-white placeholder-white/60 focus:border-[#FBBF24] outline-none text-base"
          />
        </div>
        {error && <div className="text-red-400 text-center font-semibold">{error}</div>}
        <button type="submit" className="w-full bg-[#8B0000] text-white py-3 rounded-lg font-semibold hover:bg-[#a83232] transition text-base shadow flex items-center justify-center" disabled={loading}>
          {loading ? (
            <span className="flex items-center gap-2"><span className="loader border-2 border-t-2 border-t-yellow-400 border-white rounded-full w-5 h-5 animate-spin"></span> Loading...</span>
          ) : (
            'Login'
          )}
        </button>
      </form>
      <style jsx>{`
        .loader {
          border-top-color: #FBBF24;
          border-right-color: #fff;
          border-bottom-color: #fff;
          border-left-color: #fff;
        }
      `}</style>
    </div>
  );
}
