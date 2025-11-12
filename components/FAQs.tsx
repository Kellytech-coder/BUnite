import React from 'react';
import Link from 'next/link';

// Define the structure for a single FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// FAQ Data to display in the right column
const faqData: FAQItem[] = [
  {
    question: "How to register?",
    answer: "To register, simply click on the 'Sign Up' button. Fill in your business details and create your profile. Once submitted, you'll receive a confirmation email.",
  },
  {
    question: "What is a Premium Listing?",
    answer: "A Premium Listing offers enhanced visibility for your business. It includes highlighted placement, badges, and access to analytics. This helps you attract more customers.",
  },
  {
    question: "Can I edit my profile?",
    answer: "Yes, you can edit your profile at any time. Simply log in to your account and navigate to the profile section. Make your changes and save them.",
  },
  {
    question: "How to upgrade plans?",
    answer: "To upgrade your plan, log in to your account and go to the subscription settings. Choose your desired plan and follow the prompts to complete the upgrade.",
  },
  {
    question: "Is there customer support?",
    answer: "Absolutely! Our customer support team is here to help you. You can reach out via the 'Contact' button for assistance with any issues.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          
          {/* Left Column: Heading and Contact Button */}
          <div className="lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4 sm:mb-6">
              FAQs
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-10 max-w-md">
              Find answers to common questions about our business directory and how it works.
            </p>
            
            {/* Contact Button */}
            <Link href="/contact" passHref>
              <button className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-blue-700 hover:bg-blue-50 transition-colors duration-200 shadow-sm">
                Contact
              </button>
            </Link>
          </div>

          {/* Right Column: FAQ List Container */}
          <div className="lg:w-7/12 w-full p-6 sm:p-8 rounded-xl bg-blue-50/50 border border-blue-100">
            {faqData.map((item, index) => (
              <div key={index} className={`py-4 sm:py-6 ${index > 0 ? 'border-t border-gray-200' : ''}`}>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  {item.question}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
