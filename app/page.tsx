"use client";

import { useState } from 'react';
import { Search, Users, TrendingUp, Award, Star, ChevronRight, Menu, X } from 'lucide-react';

export default function BusinessPlatformLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Sage
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">WHY SAGE?</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">PLANS</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">RESOURCES</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">NEWS</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-purple-600 transition">LOG IN</button>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                SIGN UP
              </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-blue-600 opacity-95"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="rgba(255,255,255,0.05)" fill-rule="nonzero"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Connect, Promote and<br />Grow Your<br />Business Today
          </h1>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses leveraging our platform to unlock new opportunities and accelerate growth
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-3">
            <div className="text-sm text-purple-600 font-semibold mb-3 text-left px-3">
              Search for a business
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input 
                type="text" 
                placeholder="Business name" 
                className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input 
                type="text" 
                placeholder="Location" 
                className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input 
                type="text" 
                placeholder="Industry" 
                className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unlock Your Business' Potential with<br />Premium Features Built for Growth
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop" alt="Business" className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Brand and Amplify Your Presence with Our Easy-to-Use Tools
              </h3>
              <p className="text-gray-600 mb-4">
                Create a powerful brand presence with professional tools designed for modern businesses
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
            <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=500&fit=crop" alt="Networking" className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Locate and network in Your Niche With Ease
              </h3>
              <p className="text-gray-600 mb-4">
                Find and connect with businesses in your industry through our advanced networking platform
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                Get Started
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop" alt="Growth" className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Get Discovered by Business Seeking Your Services
              </h3>
              <p className="text-gray-600 mb-4">
                Increase visibility and attract ideal clients actively searching for your expertise
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop" alt="Business Meeting" className="rounded-2xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Reach Your Business's Full Potential Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our thriving community of forward-thinking businesses and unlock opportunities that drive real growth and success
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
                <div className="text-sm text-gray-600">Active Businesses</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600">Connections Made</div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition text-lg font-semibold flex items-center gap-2">
              Get Started Now
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Empowering Businesses<br />Through a Dynamic<br />Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how our platform transforms the way businesses connect, collaborate, and grow in today's digital landscape
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover New Paths to Promote Your<br />Business with Our Platform
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
            <Search className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Get Discovered
            </h3>
            <p className="text-gray-600">
              Enhance your visibility and attract businesses actively searching for your services
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Expand Your Network
            </h3>
            <p className="text-gray-600">
              Connect with industry leaders and build valuable partnerships for growth
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
            <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Track Growth
            </h3>
            <p className="text-gray-600">
              Monitor your business metrics and optimize your strategy for success
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Build Credibility
            </h3>
            <p className="text-gray-600">
              Showcase your expertise and earn trust through verified reviews and ratings
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition text-lg font-semibold">
            Join Now
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition border-2 border-gray-100">
            <div className="text-sm font-semibold text-purple-600 mb-2">BASIC PLAN</div>
            <div className="text-5xl font-bold text-gray-900 mb-6">
              $19<span className="text-2xl text-gray-600">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Basic profile listing</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Search functionality</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Up to 5 connections</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Monthly analytics</span>
              </li>
            </ul>
            <button className="w-full bg-purple-100 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-200 transition font-semibold">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-8 transform md:scale-105 relative">
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
            <div className="text-sm font-semibold text-purple-200 mb-2">PREMIUM PLAN</div>
            <div className="text-5xl font-bold text-white mb-6">
              $29<span className="text-2xl text-purple-200">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2 text-white">
                <span className="font-bold">✓</span>
                <span>Everything in Basic</span>
              </li>
              <li className="flex items-start gap-2 text-white">
                <span className="font-bold">✓</span>
                <span>Premium profile badge</span>
              </li>
              <li className="flex items-start gap-2 text-white">
                <span className="font-bold">✓</span>
                <span>Unlimited connections</span>
              </li>
              <li className="flex items-start gap-2 text-white">
                <span className="font-bold">✓</span>
                <span>Priority support</span>
              </li>
              <li className="flex items-start gap-2 text-white">
                <span className="font-bold">✓</span>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <button className="w-full bg-white text-purple-600 px-6 py-3 rounded-full hover:shadow-lg transition font-semibold">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition border-2 border-gray-100">
            <div className="text-sm font-semibold text-purple-600 mb-2">ENTERPRISE PLAN</div>
            <div className="text-5xl font-bold text-gray-900 mb-6">
              $49<span className="text-2xl text-gray-600">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Everything in Premium</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Custom integrations</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-purple-600 font-bold">✓</span>
                <span>API access</span>
              </li>
            </ul>
            <button className="w-full bg-purple-100 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-200 transition font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What our Users Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="flex gap-1 mb-6 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-xl text-gray-200 mb-8 text-center leading-relaxed">
            "This platform has revolutionized the way we connect with other businesses. The networking opportunities are incredible, and we've seen measurable growth in just a few months. Highly recommend to any business looking to expand!"
          </p>
          <div className="flex items-center justify-center gap-4">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces" alt="User" className="w-12 h-12 rounded-full" />
            <div className="text-left">
              <div className="text-white font-semibold">Sarah Johnson</div>
              <div className="text-gray-400 text-sm">CEO, TechStart Inc.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            FAQs
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How do I get started?</h3>
              <p className="text-gray-600">Simply sign up for an account, choose your plan, and complete your business profile. You'll be able to start connecting with other businesses immediately.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can I change my plan later?</h3>
              <p className="text-gray-600">Yes! You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">We offer a 14-day free trial on all premium plans so you can experience the full platform before committing.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-700 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-rule="nonzero"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get the latest insights, tips, and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full hover:shadow-lg transition font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Sage
            </div>
            <p className="text-sm text-gray-400">
              Empowering businesses to connect, grow, and succeed together.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Terms</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2025 Sage. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition">Twitter</a>
            <a href="#" className="hover:text-purple-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-purple-400 transition">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}