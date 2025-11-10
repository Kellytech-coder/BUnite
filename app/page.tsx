"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, CheckIcon } from 'lucide-react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'; // Used in TestimonialSection

// =====================================================================
// 1. INTERFACE DEFINITIONS
// =====================================================================

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

// =====================================================================
// 2. SHARED BUTTON COMPONENTS
// (Consolidated all button definitions into clear, single components)
// =====================================================================

// Primary Button (Gradient background with white icon circle)
const PrimaryButton: React.FC<ButtonProps> = ({ children, href = "#" }) => (
    <a href={href} className="group flex items-center h-14 pr-2 pl-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl transition duration-300 transform hover:scale-[1.03]">
        <span className="text-white text-lg font-semibold tracking-wide mr-4">
            {children}
        </span>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-purple-600 transition-colors duration-300 group-hover:bg-gray-100">
            <ArrowUpRight className="w-5 h-5" />
        </div>
    </a>
);

// Secondary Button (Black with White Outline/Soft Background)
const SecondaryButton: React.FC<ButtonProps> = ({ children, href = "#" }) => (
    <a href={href} className="h-14 px-8 py-3 flex items-center justify-center rounded-full bg-black/40 border border-white text-white text-lg font-semibold transition-colors duration-300 hover:bg-black/60 backdrop-blur-sm">
        {children}
    </a>
);


// =====================================================================
// 3. HERO CAROUSEL COMPONENTS
// =====================================================================

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
      title: "Connect with Businesses, Grow Your Network",
      subtitle: "Discover a world of opportunities with our corporate business directory. Easily search, browse, and connect with businesses that meet your needs.",
    },
    {
      id: 2,
      image: "/images/Header3.png",
      title: "Empower Your Business with Our Platform",
      subtitle: "Our platform simplifies business registration and profile creation, allowing you to showcase your offerings effectively. With advanced search functionality, potential customers can easily find and connect with your business.",
    },
];

// ✅ Move interface OUTSIDE the slides array
interface SlideContentProps {
    slide: SlideData;
    isActive: boolean;
}

const SlideContent: React.FC<SlideContentProps> = ({ slide, isActive }) => {
    const subtitleMargin = slide.id === 1 ? "mb-10" : "mb-4";

    return (
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white p-8 md:p-16 z-10">
            <div className="max-w-3xl">
                <h1
                    className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-1000 ease-out ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
                    }`}
                >
                    {slide.title}
                </h1>

                <p
                    className={`text-lg md:text-2xl transition-all duration-1000 ease-out ${
                        isActive
                            ? "opacity-100 translate-y-0 delay-300"
                            : "opacity-0 translate-y-16"
                    } ${subtitleMargin}`}
                >
                    {slide.subtitle}
                </p>

                {slide.id === 1 && (
                    <div
                        className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-4 transition-opacity duration-1000 ease-out ${
                            isActive ? "opacity-100 delay-500" : "opacity-0"
                        }`}
                    >
                        <PrimaryButton>List Your Business</PrimaryButton>
                        <SecondaryButton>Learn More</SecondaryButton>
                    </div>
                )}
            </div>
        </div>
    );
};

const HeroCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-advance logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3400); 

        return () => clearInterval(interval);
    }, []);

    const goToPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <section className="relative w-full h-[80vh] overflow-hidden">
            
            {/* Carousel Slides Container */}
            <div 
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={slide.id} className="min-w-full h-full relative">
                        
                        {/* Background Image */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="object-cover w-full h-full brightness-75 absolute inset-0"
                            loading="eager" 
                        />

                        {/* Animated Content */}
                        <SlideContent 
                            slide={slide} 
                            isActive={activeIndex === index} 
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between z-30 pointer-events-none p-4">
                <button 
                    onClick={goToPrev} 
                    className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors pointer-events-auto"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button 
                    onClick={goToNext} 
                    className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors pointer-events-auto"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {slides.map((_, index) => (
                    <button 
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`
                            h-3 w-3 rounded-full transition-all duration-300 
                            ${activeIndex === index ? 'bg-white w-8' : 'bg-gray-400/80'}
                        `}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Meet point curve */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-40">
                <svg
                    className="relative block w-full h-[100px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44C173.81,92.41,0,120,0,120H1200V0S928.94,89.29,645.5,72.5C487.17,63.4,375.27,44.55,321.39,56.44Z"
                        fill="#fff"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

// =====================================================================
// 4. BUSINESS SEARCH SECTION
// =====================================================================

// CSS Keyframe Definition for the Pulsating Background
const PulsingAnimation = () => (
    <style>{`
        @keyframes subtle-pulse {
            0%, 100% {
                transform: scale(1);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
            50% {
                transform: scale(1.005); 
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
            }
        }
        .animate-subtle-pulse {
            animation: subtle-pulse 8s infinite ease-in-out;
        }
    `}</style>
);


const DropdownArrow = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);


const BusinessSearch = () => {
    return (
        <>
            <PulsingAnimation />
            <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center animate-subtle-pulse transition duration-300 flex items-center py-20">
                <div className="w-full max-w-4xl mx-auto px-4 z-20 relative"> 
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Search for a business
                    </h1>
                    <p className="mb-8 text-lg">
                        Search for businesses by category, location, or keywords to discover what you need today.
                    </p>

                    <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center bg-white text-black rounded-full px-4 py-3 w-full md:w-72 shadow-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Enter business name"
                                className="outline-none w-full bg-transparent"
                            />
                        </div>

                        {/* Category Dropdown with Custom Icon */}
                        <div className="relative w-full md:w-48 shadow-xl">
                            <select className="px-4 py-3 pr-10 rounded-full bg-white text-black w-full appearance-none cursor-pointer outline-none">
                                <option>Category</option>
                                <option>Restaurants</option>
                                <option>Shops</option>
                                <option>Services</option>
                            </select>
                            <DropdownArrow />
                        </div>
                        
                        {/* Location Dropdown with Custom Icon */}
                        <div className="relative w-full md:w-48 shadow-xl">
                            <select className="px-4 py-3 pr-10 rounded-full bg-white text-black w-full appearance-none cursor-pointer outline-none">
                                <option>Location</option>
                                <option>New York</option>
                                <option>Los Angeles</option>
                                <option>Chicago</option>
                            </select>
                            <DropdownArrow />
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-700 transition duration-200 w-full md:w-auto shadow-xl"
                        >
                            Search
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-white/90">
                        Find businesses near you using our smart search feature
                    </p>
                </div>
            </section>
        </>
    );
}

// =====================================================================
// 5. PREMIUM FEATURES SECTION
// =====================================================================

const PremiumFeatures = () => {
    return (
      <section className="py-20 px-6 md:px-10 lg:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-blue-600">Unlock</span>{' '}
          <span className="text-black">
            Your Business Potential with
            <br className="hidden md:block" />
            Premium Features Tailored for Growth
          </span>
        </h2>
  
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
                <img
                    src="/images/placeholderimage1.png"
                    alt="Highlighted Placement"
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                />
                <p className="mt-2 text-black block font-medium">Stand Out with **Highlighted Placement** and Boost Your Visibility</p>
                <p className="mt-2 text-gray-600 max-w-xs text-center">
                    Our highlighted placement feature ensures your business gets noticed by potential customers.
                </p>
            </div>
        
            {/* Feature 2 */}
            <div className="flex flex-col items-center">
                <img
                    src="/images/placeholderimage2.png"
                    alt="Analytics"
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                />
                <p className="mt-2 text-black block font-medium">Leverage **Analytics** to Track Your Performance and Optimize Strategies</p>
                <p className="mt-2 text-gray-600 max-w-xs text-center">
                    Access detailed analytics to understand your audience and enhance your marketing efforts.
                </p>
            </div>
        
            {/* Feature 3 */}
            <div className="flex flex-col items-center">
                <img
                    src="/images/placeholderimage3.png"
                    alt="Credibility Badges"
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                />
                <p className="mt-2 text-black bold block font-medium">Gain **Credibility** with Badges That Showcase Your Business Excellence</p>
                <p className="mt-2 text-gray-600 max-w-xs text-center">
                    Display badges on your profile to build trust and attract more clients.
                </p>
            </div>
        </div>
  
  
        <div className="mt-10">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition">
            Learn More
          </button>
        </div>
      </section>
    );
}

// =====================================================================
// 6. PRICING SECTION
// =====================================================================

// Define the plan data
const pricingPlans = [
    {
      name: "Basic Plan",
      monthlyPrice: 19,
      yearlyPrice: 199, // Hypothetical yearly price
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
      yearlyPrice: 299, // Hypothetical yearly price
      isHighlighted: true,
      features: [
        "Enhanced profile visibility",
        "Advanced analytics tools",
        "Priority customer support",
        "Social media integration",
      ],
      // The main background gradient is applied to the card itself
      cardGradient: "linear-gradient(135deg, #4b6edb 0%, #a855f7 100%)",
      buttonBackground: "white",
      buttonTextColor: "text-indigo-600",
    },
    {
      name: "Enterprise Plan",
      monthlyPrice: 49,
      yearlyPrice: 499, // Hypothetical yearly price
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
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-bold">
                
                {/* Header Content */}
                <div className="mb-12">
                    <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                        Affordable
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Pricing<span className="text-purple-600"> Plans</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Choose the plan that fits your business needs.
                    </p>
                </div>

                {/* Monthly/Yearly Toggle */}
                <div className="inline-flex items-center p-1 bg-gray-100 rounded-full mb-16">
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

                {/* Pricing Cards Wrapper */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`p-10 rounded-3xl shadow-2xl ${
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
                            <p className={`text-6xl font-extrabold mb-8 ${plan.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                                $
                                {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                                <span className="text-3xl font-normal opacity-70">
                                    /{isMonthly ? 'mo' : 'yr'}
                                </span>
                            </p>

                            {/* Features List */}
                            <ul className="space-y-4 text-left mb-10">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckIcon
                                            className={`flex-shrink-0 h-6 w-6 mr-3 ${
                                                plan.isHighlighted ? 'text-white' : 'text-indigo-600'
                                            }`}
                                        />
                                        <span className={`text-base ${plan.isHighlighted ? 'text-white' : 'text-gray-700'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Get Started Button */}
                            <button
                                className={`w-full py-3 rounded-full font-bold shadow-lg transition duration-300 hover:opacity-90 ${plan.buttonTextColor || 'text-white'}`}
                                style={{ 
                                    background: plan.buttonBackground || plan.buttonGradient, 
                                }}
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

// =====================================================================
// 7. TESTIMONIAL SECTION
// =====================================================================

// Define testimonial data
const testimonial = {
    id: 1,
    quote: "This platform has transformed the way we connect with our customers. Our visibility has skyrocketed, and we're seeing real growth in our business!",
    reviewerName: "John Doe",
    reviewerTitle: "CEO, Tech Solutions",
    companyLogo: "/images/PlaceholderLogo1.png", 
    reviewerImage: "/images/PlaceholderImage6.png", 
    stars: 5, 
};

const TestimonialSection = () => {
    // Function to render star icons
    const renderStars = (count: number) => {
        return (
            <div className="flex gap-1 mb-4">
                {[...Array(count)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"> 
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section className="bg-gray-900 py-12 sm:py-16 text-white"> 
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4"> 
                
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white"> 
                        What our <span className="text-indigo-400">Users</span> Say 
                    </h1>
                </div>

                {/* Testimonial Card */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl">
                    
                    {/* Reviewer Image */}
                    <div className="flex-shrink-0 w-full lg:w-5/12 overflow-hidden rounded-lg shadow-lg"> 
                        <Image
                            src={testimonial.reviewerImage}
                            alt={testimonial.reviewerName}
                            width={600}
                            height={450}
                            layout="responsive"
                            objectFit="cover"
                            className="rounded-lg" 
                        />
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-grow lg:w-7/12 flex flex-col justify-center text-center lg:text-left"> 
                        
                        {renderStars(testimonial.stars)}

                        <p className="text-xl sm:text-2xl font-normal mb-6 leading-normal text-gray-200">
                            &quot;{testimonial.quote}&quot;
                        </p>

                        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4"> 
                            <div className="flex-shrink-0 text-white">
                                <p className="font-semibold text-base">{testimonial.reviewerName}</p> 
                                <p className="text-xs text-gray-400">{testimonial.reviewerTitle}</p>
                            </div>
                            {testimonial.companyLogo && (
                                <div className="flex-shrink-0 w-20 h-5 relative">
                                    <Image
                                        src={testimonial.companyLogo}
                                        alt="Company Logo"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                {/* Navigation Controls */}
                <div className="mt-20 flex justify-between items-center px-4">
                    
                    {/* Dots Indicator (Left side) */}
                    <div className="flex gap-2">
                        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span> 
                        <span className="w-2.5 h-2.5 bg-gray-700 rounded-full"></span> 
                        <span className="w-2.5 h-2.5 bg-gray-700 rounded-full"></span>
                    </div>

                    {/* Arrows (Right side) - Circular, Small-to-Medium Size */}
                    <div className="flex gap-4"> 
                        <button className="p-2.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
                            <ArrowLeftIcon className="h-5 w-5 text-white" />
                        </button>
                        
                        <button className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200"> 
                            <ArrowRightIcon className="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};


// =====================================================================
// 8. MAIN EXPORT COMPONENT (App or Home)
// =====================================================================

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* 1. Dynamic Hero Carousel */}
            <HeroCarousel />
            
            {/* 2. Primary Search Bar (Placed directly after the hero) */}
            <BusinessSearch />
            
            {/* 3. Premium Features/CTA Section */}
            <PremiumFeatures />

            {/* 4. Pricing Plans */}
            <PricingSection />

            {/* 5. User Testimonials */}
            <TestimonialSection />
        </main>
    );
}

// NOTE: The previous default export App component that only returned BusinessSearch 
// is replaced by the Home component above, which returns the full page structure.
// The simple HeroSection was omitted as the HeroCarousel is superior.