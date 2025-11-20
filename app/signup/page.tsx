'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthForm from '@/components/AuthForm';
import InputField from '@/components/InputField';
import SocialLogin from '@/components/SocialLogin';

export default function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup form submitted:', form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6 text-center">
          <h2 className="text-sm text-gray-500">Step 1/3</h2>
          <h1 className="text-2xl font-bold text-gray-800">Create an account</h1>
          <p className="text-sm text-gray-600 mt-2">
            Sign up with BizUnite and unlock opportunities to grow your business.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Full Name"
            name="name"
            placeholder="Enter Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <InputField
            label="Business Email Address"
            name="email"
            type="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Password (min.8 characters)"
            value={form.password}
            onChange={handleChange}
            required
            minLength={8}
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md hover:opacity-90 transition"
          >
            Continue
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Or sign in with</p>
          <SocialLogin />
        </div>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-indigo-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
