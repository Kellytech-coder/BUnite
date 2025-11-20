"use client";
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function BizUniteLanding() {
  const [email, setEmail] = useState('');

  const features = [
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      title: 'Stand Out with Highlighted Placement and Boost Your Visibility',
      description: 'Our highlighted placement feature ensures your business gets noticed by potential customers with featured listings that drive more eyes to your profile.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      title: 'Leverage Analytics to Track Your Performance and Optimize Strategies',
      description: 'Access detailed analytics to understand your audience, track engagement and enhance your marketing efforts by making smarter decisions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      title: 'Gain Credibility with Badges That Showcase Your Business Excellence',
      description: 'Display verification and quality badges on your profile to build trust and attract more clients.'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      title: 'Smart Business Discovery',
      description: 'Our platform makes business discovery fast and easy to navigate. Find verified businesses across industries with powerful filters by location, category, and more.'
    },
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      title: 'Seamless Customer Connection',
      description: 'These features enable direct inquiries and communication so businesses can engage customers effectively.'
    },
    {
      image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&h=300&fit=crop',
      title: 'Promotions & Deals',
      description: 'Showcase discounts, events, or special offers to reduce customer attention and drive sales.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop)'}}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl font-bold mb-4">Why Choose BizUnite?</h1>
            <p className="text-lg leading-relaxed">
              At BizUnite, we do not just list businesses; we create meaningful connections. Whether you are a small business owner, a customer looking for trusted services, or a brand building community presence, BizUnite is built to serve you.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Core Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-3 px-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm px-4">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-12 py-3 rounded-full font-semibold hover:shadow-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to receive the latest news and updates about our platform directly to your inbox
          </p>
          
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-l-full text-gray-900 bg-white placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <button className="bg-white text-gray-900 px-8 py-3 rounded-r-full font-semibold hover:bg-gray-100 transition">
              sign up
            </button>
          </div>
          
          <p className="text-xs text-gray-400 mt-4">
            By clicking the button, you are agreeing with our Term & Conditions
          </p>
        </div>
      </section>

      {/* Footer Newsletter */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h3 className="font-bold mb-2">Subscribe to updates</h3>
              <p className="text-gray-400 text-sm">
                Stay informed about our latest offerings and updates.
              </p>
            </div>
            
            <div className="flex mt-4 md:mt-0">
              <input
                type="email"
                placeholder="Your email here"
                aria-label="Email address"
                className="px-6 py-2 rounded-l-lg text-gray-900 bg-white placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              <button className="bg-gray-700 px-6 py-2 rounded-r-lg hover:bg-gray-600 transition">
                Subscribe
              </button>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 text-center md:text-right mb-8">
            By subscribing you accept our Privacy Policy & subscribing policy email list Privacy Policy
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold italic mb-6">Logo</div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Browse Businesses</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Support Center</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Testimonials</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Our Mission</a></li>
                <li><a href="#" className="hover:text-white">Our Team</a></li>
                <li><a href="#" className="hover:text-white">Our Vision</a></li>
                <li><a href="#" className="hover:text-white">Join Our Team</a></li>
                <li><a href="#" className="hover:text-white">Get In Touch</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Your Company. All rights reserved. Privacy Policy Terms of Service Cookie Settings
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}