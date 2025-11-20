'use client';
import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Tech Solutions',
    quote:
      "This platform has transformed the way we connect with our customers. Our visibility has skyrocketed, and we're seeing real growth in our business!",
    image: '/images/PlaceholderImage6.png',
    logo: '/images/PlaceholderLogo.png',
  },
  {
    name: 'Jane Smith',
    title: 'Founder, MarketMinds',
    quote:
      "An intuitive platform that helped us streamline our outreach and build stronger relationships with our clients.",
    image: '/images/PlaceholderImage6.png',
    logo: '/images/PlaceholderLogo.png',
  },
  {
    name: 'Carlos Reyes',
    title: 'CMO, BrightPath',
    quote:
      "We saw a 40% increase in engagement within the first month. The tools are powerful and easy to use.",
    image: '/images/PlaceholderImage6.png',
    logo: '/images/PlaceholderLogo.png',
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
        <span className="text-purple-400">What our Users Say</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left: Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-[400px] md:w-1/2">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Right: Testimonial Content */}
        <div className="md:w-1/2">
          <div className="flex mb-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg sm:text-xl mr-1">
                  ★
                </span>
              ))}
          </div>

          <p className="text-base sm:text-lg mb-4 sm:mb-6 italic">
            "{testimonial.quote}"
          </p>

          <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
          <p className="text-gray-400 text-xs sm:text-sm mb-4">{testimonial.title}</p>

          <Image
            src={testimonial.logo}
            alt={`${testimonial.name} Logo`}
            width={100}
            height={30}
          />

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0">
            <button
              onClick={prev}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === currentIndex ? 'bg-blue-500' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
