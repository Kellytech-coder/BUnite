'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Connect from '../components/Connect';
import SearchSection from '../components/SearchSection';
import Empower from '../components/Empower';
import Steps from '../components/Steps';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQs from '../components/FAQs';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Search } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-900">
        <Hero />
         <SearchSection />
         <Features />
        <Connect />
        <Empower />
        <Steps />
        <Pricing />
        <Testimonials />
        <FAQs />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
