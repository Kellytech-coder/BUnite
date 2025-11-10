"use client"

import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold italic">Logo</div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300 transition-colors">
            About Us
          </a>
          <a href="#features" className="hover:text-gray-300 transition-colors">
            Features
          </a>
          <a href="#browse" className="hover:text-gray-300 transition-colors">
            Browse Businesses
          </a>
          
          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <span>More Info</span>
              <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 bg-gray-900 rounded-lg shadow-lg py-2 w-48 z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 transition-colors">
                  How It Works
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 transition-colors">
                  Pricing
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 transition-colors">
                  FAQs
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 transition-colors">
                  Help & Support
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 transition-colors">
                  Contact Us
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
            <span>Login</span>
            <ArrowRight size={18} />
          </button>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-full flex items-center space-x-2 transition-all">
            <span>Sign Up</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}