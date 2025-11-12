"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function SearchSection() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedLocation, setSelectedLocation] = useState("Location");

  const categories = ["Restaurant", "Salon", "Tech Store", "Gym", "Cafe"];
  const locations = ["New York", "Los Angeles", "Chicago", "Miami", "Seattle"];

  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 sm:px-6 md:px-8 rounded-t-[2rem] relative overflow-visible">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4">
          Search for a business
        </h1>
        <p className="text-gray-200 mb-8 sm:mb-10 text-sm sm:text-base">
          Search for businesses by category, location, or keywords to discover what you need today.
        </p>

        {/* Search Form */}
        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
          {/* Business Name Input */}
          <div className="flex items-center bg-white rounded-full px-4 py-3 w-full md:w-auto min-w-[200px] text-gray-700">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter business name"
              className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative w-full md:w-auto min-w-[160px]">
            <button
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsLocationOpen(false);
              }}
              className="flex items-center bg-white rounded-full px-4 py-3 w-full text-gray-700 justify-between cursor-pointer text-sm sm:text-base"
            >
              <span>{selectedCategory}</span>
              <ChevronDownIcon
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  isCategoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isCategoryOpen && (
              <ul className="absolute left-0 right-0 mt-2 bg-white text-gray-700 text-sm rounded-xl shadow-lg z-10">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsCategoryOpen(false);
                    }}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="relative w-full md:w-auto min-w-[160px]">
            <button
              onClick={() => {
                setIsLocationOpen(!isLocationOpen);
                setIsCategoryOpen(false);
              }}
              className="flex items-center bg-white rounded-full px-4 py-3 w-full text-gray-700 justify-between cursor-pointer text-sm sm:text-base"
            >
              <span>{selectedLocation}</span>
              <ChevronDownIcon
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  isLocationOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isLocationOpen && (
              <ul className="absolute left-0 right-0 mt-2 bg-white text-gray-700 text-sm rounded-xl shadow-lg z-10">
                {locations.map((loc) => (
                  <li
                    key={loc}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left"
                    onClick={() => {
                      setSelectedLocation(loc);
                      setIsLocationOpen(false);
                    }}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Button */}
          <button className="bg-white text-gray-900 font-medium rounded-full px-6 py-3 text-sm sm:text-base hover:bg-gray-100 transition w-full md:w-auto">
            Search
          </button>
        </div>

        {/* Subtext */}
        <p className="mt-6 sm:mt-8 text-gray-200 text-xs sm:text-sm">
          Find businesses near you using our smart search feature
        </p>
      </div>
    </section>
  );
}
