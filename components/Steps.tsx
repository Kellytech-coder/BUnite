"use client";

import { ArrowRight, UserCheck, Megaphone, Link2 } from "lucide-react";

export default function DiscoverSection() {
  return (
    <section className="w-full bg-[#eaf2ff] py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug sm:leading-tight mb-10 sm:mb-12">
          <span className="text-blue-600 font-semibold">Discover </span>
          How Easy It Is to Promote Your
          <br />
          Business with Our Platform
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 sm:mb-12">
          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
            <ArrowRight size={30} className="text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
              Getting Started Is Simple
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Follow these steps to create your business profile
              and start connecting with customers.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
            <UserCheck size={30} className="text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
              Create Your Business Profile
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Register your business and fill out your profile
              with essential information and media.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
            <Megaphone size={30} className="text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
              Promote Your Business
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Choose a plan that fits your needs and get your business noticed.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
            <Link2 size={30} className="text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
              Connect with Customers
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Engage with potential clients and grow your network through our platform.
            </p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-8 sm:px-10 rounded-full transition duration-300 hover:opacity-90">
          Learn More
        </button>
      </div>
    </section>
  );
}
