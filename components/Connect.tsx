"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function BusinessReachSection() {
  return (
    <section className="w-full bg-[#F3F4F6] py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* IMAGE */}
        <div className="w-full order-1 md:order-none">
          <div className="relative w-full h-[280px] sm:h-[340px] md:h-[460px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/PlaceholderImage4.png" // <-- replace with your image path
              alt="Business presentation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="text-center md:text-left">
          {/* Connect */}
          <p className="text-sm font-medium text-blue-600 mb-2">Connect</p>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug sm:leading-tight mb-4 sm:mb-6">
            <span className="text-purple-700">Reach </span>
            Your Business’s Full Potential Today
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 mb-8 text-sm sm:text-base max-w-lg mx-auto md:mx-0">
            Our platform empowers business owners to showcase their offerings and
            connect with potential customers. Visitors can easily discover and
            engage with businesses that meet their needs.
          </p>

          {/* COLUMNS */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8 text-left">
            <div>
              <p className="font-semibold text-gray-900 mb-1 sm:mb-2">
                For Business Owners
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Create a standout profile and attract more customers effortlessly.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1 sm:mb-2">
                For Visitors
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Easily find and connect with businesses that suit your needs.
              </p>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300 hover:opacity-90">
              Get Started Free
              <ArrowUpRight size={18} />
            </button>

            <button className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
