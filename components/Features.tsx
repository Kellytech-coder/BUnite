'use client';
import Image from 'next/image';

export default function PremiumFeatures() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-snug">
        <span className="text-blue-600">Unlock</span>{' '}
        <span className="text-black block sm:inline">
          Your Business Potential with
          <br className="hidden md:block" />
          Premium Features Tailored for Growth
        </span>
      </h2>

      {/* Features Grid */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full h-48 sm:h-56 relative">
            <Image
              src="/images/placeholderImage.png"
              alt="Highlighted Placement"
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>
          <p className="mt-3 text-black font-medium text-sm sm:text-base max-w-xs">
            Stand Out with Highlighted Placement and Boost Your Visibility
          </p>
          <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xs">
            Our highlighted placement feature ensures your business gets noticed by potential customers.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full h-48 sm:h-56 relative">
            <Image
              src="/images/placeholderimage2.png"
              alt="Analytics"
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>
          <p className="mt-3 text-black font-medium text-sm sm:text-base max-w-xs">
            Leverage Analytics to Track Your Performance and Optimize Strategies
          </p>
          <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xs">
            Access detailed analytics to understand your audience and enhance your marketing efforts.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full h-48 sm:h-56 relative">
            <Image
              src="/images/placeholderimage3.png"
              alt="Credibility Badges"
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>
          <p className="mt-3 text-black font-medium text-sm sm:text-base max-w-xs">
            Gain Credibility with Badges That Showcase Your Business Excellence
          </p>
          <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xs">
            Display badges on your profile to build trust and attract more clients.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 sm:mt-10">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-6 sm:px-8 py-3 rounded-full hover:opacity-90 transition w-full sm:w-auto">
          Learn More
        </button>
      </div>
    </section>
  );
}
