"use client";

import { useState } from "react";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="w-full bg-black text-white py-4 px-6 fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* --- Logo --- */}
        <Link href="/" className="text-2xl font-bold font-serif italic">
          Logo
        </Link>

        {/* --- Desktop Nav Links --- */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            About Us
          </Link>
          <Link href="/features" className="hover:text-gray-300 transition">
            Features
          </Link>
          <Link href="#" className="hover:text-gray-300 transition">
            Browse Businesses
          </Link>

          {/* Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center space-x-1 hover:text-gray-300 transition">
              <span>More Info</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg py-2 w-44">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 transition">
                  How It Works
                </Link>
                <Link href="Pricing" className="block px-4 py-2 hover:bg-gray-100 transition">
                  Pricing
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 transition">
                  FAQs
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 transition">
                  Help & Support
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 transition">
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* --- Right Side Buttons --- */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Login */}
          <Link
            href="login-flow"
            className="flex items-center space-x-1 text-sm font-medium hover:text-gray-300 transition"
          >
            <span>Login</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Sign Up */}
          <Link
            href="signup"
            className="group flex items-center h-10 pr-2 pl-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-md transition duration-300 transform hover:scale-[1.03]"
          >
            <span className="text-white text-sm font-semibold mr-3">Sign Up</span>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-purple-600 transition-colors duration-300 group-hover:bg-gray-100">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white mt-4 space-y-4 pb-4 border-t border-gray-700">
          <Link href="#" className="block px-4 py-2 hover:bg-gray-900 transition">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-900 transition">
             About Us
          </Link>

          <Link href="#" className="block px-4 py-2 hover:bg-gray-900 transition">
            Features
          </Link>
          <Link href="#" className="block px-4 py-2 hover:bg-gray-900 transition">
            Browse Businesses
          </Link>

          {/* Mobile Dropdown */}
          <div className="px-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between py-2 hover:bg-gray-900 transition"
            >
              <span>More Info</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="mt-1 pl-4 space-y-1">
                <Link href="#" className="block py-1 hover:bg-gray-900 transition">
                  How It Works
                </Link>
                <Link href="#" className="block py-1 hover:bg-gray-900 transition">
                  Pricing
                </Link>
                <Link href="#" className="block py-1 hover:bg-gray-900 transition">
                  FAQs
                </Link>
                <Link href="#" className="block py-1 hover:bg-gray-900 transition">
                  Help & Support
                </Link>
                <Link href="#" className="block py-1 hover:bg-gray-900 transition">
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="px-4 pt-2 flex flex-col space-y-2">
            <Link
              href="#"
              className="flex items-center justify-center h-10 rounded-full border border-white text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              Login
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-center h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-md transition duration-300 transform hover:scale-[1.03]"
            >
              <span className="text-white text-sm font-semibold mr-2">Sign Up</span>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-purple-600 transition-colors duration-300 group-hover:bg-gray-100">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
