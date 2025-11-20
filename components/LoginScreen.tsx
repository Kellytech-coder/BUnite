'use client';

import { useState } from 'react';

interface Props {
  onPrev: () => void;
}

export default function LoginScreen({ onPrev }: Props) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', form);
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-white px-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Login to BizUnite</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-semibold hover:opacity-90 transition"
        >
          Continue
        </button>
      </form>
      <button
        onClick={onPrev}
        className="mt-6 text-sm text-purple-600 hover:underline"
      >
        ← Back to Welcome
      </button>
    </section>
  );
}
