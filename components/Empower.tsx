"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12">
        {/* Left Text Section */}
        <div className="text-center md:text-left">
          {/* Icon */}
          <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-[#7B3CFF] to-[#2DB2FF] rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">⨀</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
            <span className="text-[#7B3CFF]">Empowering Businesses</span>
            <br />
            <span className="text-black">Through a Dynamic Platform</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-4 sm:mt-5 text-gray-600 text-sm sm:text-base max-w-md sm:max-w-lg mx-auto md:mx-0">
            Our platform connects business owners with potential customers,
            offering tools for profile creation and promotion. Discover how we
            streamline the process of business visibility and engagement.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#7B3CFF] to-[#2DB2FF] text-white px-6 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition w-full sm:w-auto">
              Learn More <ArrowUpRight size={18} />
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition w-full sm:w-auto">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
            <Image
              src="/images/placeholderImage5.png"
              alt="business handshake"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
