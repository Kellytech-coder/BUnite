import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const pricingPlans = [
  {
    name: "Basic Plan",
    monthlyPrice: 19,
    yearlyPrice: 199,
    isHighlighted: false,
    features: [
      "Profile creation assistance",
      "Media upload options",
      "Basic analytics included",
    ],
    buttonGradient: "linear-gradient(90deg, #4b6edb 0%, #a855f7 100%)",
  },
  {
    name: "Business Plan",
    monthlyPrice: 29,
    yearlyPrice: 299,
    isHighlighted: true,
    features: [
      "Enhanced profile visibility",
      "Advanced analytics tools",
      "Priority customer support",
      "Social media integration",
    ],
    cardGradient: "linear-gradient(135deg, #4b6edb 0%, #a855f7 100%)",
    buttonBackground: "white",
    buttonTextColor: "text-indigo-600",
  },
  {
    name: "Enterprise Plan",
    monthlyPrice: 49,
    yearlyPrice: 499,
    isHighlighted: false,
    features: [
      "Custom branding options",
      "Comprehensive analytics dashboard",
      "Dedicated account manager",
      "In-depth reporting features",
      "Unlimited media uploads",
    ],
    buttonGradient: "linear-gradient(90deg, #4b6edb 0%, #a855f7 100%)",
  },
];

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            Affordable
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Pricing<span className="text-purple-600"> Plans</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Choose the plan that fits your business needs.
          </p>
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className="inline-flex items-center p-1 bg-gray-100 rounded-full mb-12 mx-auto">
          <button
            onClick={() => setIsMonthly(true)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              isMonthly
                ? 'text-white shadow-md'
                : 'text-gray-700 hover:text-indigo-600'
            }`}
            style={isMonthly ? { background: 'linear-gradient(90deg, #4b6edb 0%, #a855f7 100%)' } : {}}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              !isMonthly
                ? 'text-white shadow-md'
                : 'text-gray-700 hover:text-indigo-600'
            }`}
            style={!isMonthly ? { background: 'linear-gradient(90deg, #4b6edb 0%, #a855f7 100%)' } : {}}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between ${
                plan.isHighlighted
                  ? 'text-white'
                  : 'bg-white text-gray-900 border border-gray-100'
              }`}
              style={plan.isHighlighted ? { background: plan.cardGradient } : {}}
            >
              {/* Plan Name */}
              <h2 className={`text-xl font-semibold mb-6 ${plan.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h2>

              {/* Price */}
              <p className={`text-4xl sm:text-5xl font-extrabold mb-6 ${plan.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                ${isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                <span className="text-lg sm:text-2xl font-normal opacity-70">
                  /{isMonthly ? 'mo' : 'yr'}
                </span>
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckIcon
                      className={`flex-shrink-0 h-5 w-5 mr-3 mt-1 ${plan.isHighlighted ? 'text-white' : 'text-indigo-600'}`}
                    />
                    <span className={`${plan.isHighlighted ? 'text-white' : 'text-gray-700'} text-sm sm:text-base`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Get Started Button */}
              <button
                className={`w-full py-3 rounded-full font-bold shadow-lg transition duration-300 hover:opacity-90 ${
                  plan.buttonTextColor || 'text-white'
                }`}
                style={{ background: plan.buttonBackground || plan.buttonGradient }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
