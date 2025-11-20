"use client";

import Image from "next/image";

export default function NewsletterSection() {
  return (
    <section className="relative w-full flex items-center justify-center py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/placeholderImage5.png" // ✅ Replace with your image path
          alt="Newsletter Background"
          fill
          className="object-cover"
          priority
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
          Stay Updated with Our Newsletter
        </h2>

        <p className="text-gray-200 mb-8 text-sm sm:text-base md:text-lg">
          Subscribe to receive the latest news and updates about our platform
          directly to your inbox.
        </p>

        {/* INPUT + BUTTON */}
        <form className="flex flex-col sm:flex-col md:flex-row items-center gap-4 w-full justify-center">
          <input
            type="email"
            placeholder="Enter your email."
            className="w-full sm:w-full md:w-80 px-4 py-3 rounded-full border border-white/50 bg-white/20 text-white placeholder-gray-200 focus:outline-none backdrop-blur-sm transition"
          />

          <button
            type="submit"
            className="w-full sm:w-full md:w-auto bg-white text-gray-900 font-medium py-3 px-8 rounded-full transition duration-300 hover:bg-gray-100"
          >
            Sign Up
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-gray-300 mt-4 px-2 sm:px-4">
          By clicking Sign Up, you’re confirming that you agree with our{" "}
          <a href="#" className="underline">
            Terms and Conditions
          </a>
          .
        </p>
      </div>
    </section>
  );
}
