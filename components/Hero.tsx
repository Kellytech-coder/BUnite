'use client';

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

// --- Interface Definitions ---
interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
}

// --- Buttons ---
const PrimaryButton: React.FC<ButtonProps> = ({ children, href = "#" }) => (
  <a
    href={href}
    className="group flex items-center h-12 sm:h-14 pr-2 pl-6 sm:pl-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl transition duration-300 transform hover:scale-[1.03]"
  >
    <span className="text-white text-base sm:text-lg font-semibold tracking-wide mr-3 sm:mr-4">
      {children}
    </span>
    <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-purple-600 transition-colors duration-300 group-hover:bg-gray-100">
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </div>
  </a>
);

const SecondaryButton: React.FC<ButtonProps> = ({ children, href = "#" }) => (
  <a
    href={href}
    className="h-12 sm:h-14 px-6 sm:px-8 flex items-center justify-center rounded-full bg-black/40 border border-white text-white text-base sm:text-lg font-semibold transition-colors duration-300 hover:bg-black/60 backdrop-blur-sm"
  >
    {children}
  </a>
);

// --- Slide Content Component ---
interface SlideContentProps {
  slide: SlideData;
  isActive: boolean;
}

const SlideContent: React.FC<SlideContentProps> = ({ slide, isActive }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white p-4 sm:p-8 md:p-16 z-10">
      <div className="max-w-full sm:max-w-2xl md:max-w-3xl">
        <h1
          className={`text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 transition-all duration-1000 ease-out ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
          }`}
        >
          {slide.title}
        </h1>
        <p
          className={`text-sm sm:text-lg md:text-2xl mb-6 sm:mb-10 transition-all duration-1000 ease-out ${
            isActive ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-16"
          }`}
        >
          {slide.subtitle}
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 mt-2 sm:mt-4 transition-opacity duration-1000 ease-out ${
            isActive ? "opacity-100 delay-500" : "opacity-0"
          }`}
        >
          <PrimaryButton>List Your Business</PrimaryButton>
          <SecondaryButton>Learn More</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

// --- Main Carousel Component ---
const slides: SlideData[] = [
  {
    id: 1,
    image: "/images/Header1.png",
    title: "Connect, Promote, and Grow Your Business Today",
    subtitle:
      "Join our corporate business directory to showcase your brand and reach new customers. Sign up now and elevate your business presence online!",
  },
  {
    id: 2,
    image: "/images/Header2.png",
    title: "Empower Your Business with Our Platform",
    subtitle:
      "Our platform simplifies business registration and profile creation, allowing you to showcase your offerings effectively. With advanced search functionality, potential customers can easily find and connect with your business.",
  },
  {
    id: 3,
    image: "/images/Header3.png",
    title: "Connect with Businesses, Grow Your Network",
    subtitle:
      "Discover a world of opportunities with our corporate business directory. Easily search, browse, and connect with businesses that meet your needs.",
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full brightness-75 absolute inset-0"
              loading="eager"
            />
            <SlideContent slide={slide} isActive={activeIndex === index} />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-white w-6 sm:w-8" : "bg-gray-400/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Curve Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-40">
        <svg
          className="relative block w-full h-[80px] sm:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        />
      </div>
    </section>
  );
};

export default HeroCarousel;
