'use client';
import { useState } from 'react';

export default function FooterSection() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
  };

  const columns = {
    'Quick Links': ['About Us', 'Our Services', 'Browse Businesses', 'Contact Us', 'FAQs'],
    Resources: ['Support Center', 'Community', 'Events', 'Testimonials', 'Careers'],
    'Follow Us': ['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'YouTube'],
    Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Contact Info', 'Help Center'],
    'Company Info': ['Our Mission', 'Our Vision', 'Our Values', 'Join Our Team', 'Get In Touch'],
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Newsletter Subscription */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Subscribe to updates</h2>
        <p className="mb-4 text-gray-300">Stay informed about our latest offerings and updates.</p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="email"
            placeholder="Your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-md text-black w-full sm:w-2/3"
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-2">
          By subscribing, you accept our{' '}
          <a href="/privacy" className="underline hover:text-white transition">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 text-center sm:text-left">
        {/* Logo */}
        <div className="flex justify-center sm:justify-start mb-4 sm:mb-0">
          <h3 className="font-bold text-lg">Logo</h3>
        </div>

        {Object.entries(columns).map(([title, links], index) => (
          <div key={index}>
            <h4 className="font-bold text-lg mb-4">{title}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-6 pb-12 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-sm text-gray-400 gap-4 sm:gap-0">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
