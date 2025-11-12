"use client";

import React, { FormEvent } from "react";
import Image from "next/image";
import { useState } from "react";

export default function AboutUs() {
  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      <CorePurpose />
      <MissionVision />
      <ValuesSection />
      <JourneySection />
      <TeamSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}

/* -------------------- SECTIONS -------------------- */

function HeroSection() {
  return (
    <section className="relative h-[650px] md:h-[700px] lg:h-[750px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/placeholderImage7.png"
          alt="Business team meeting"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Connecting Businesses,<br />Fostering Growth
            </h1>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              At Biz Unite Corporate-branded Business Directory, we believe in the power of connection.
              Our platform is designed to be the definitive resource for businesses looking to expand
              their reach and clients seeking reliable corporate services. We empower growth through
              visibility and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CorePurpose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2563eb]">
          Our Core Purpose
        </h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Simplifying business discovery, driving innovation and fostering connection for a more integrated
          business ecosystem.
        </p>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-center">
        <div>
          <div className="flex justify-center mb-4">
            <Image src="/images/noto.png" alt="Mission icon" width={40} height={40} />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Our Mission</h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base max-w-md mx-auto">
            Our mission is to empower businesses of all sizes by providing a comprehensive, user-friendly
            directory that enhances visibility, facilitates seamless connections, and drives sustained
            growth. We are dedicated to creating a vibrant digital marketplace where businesses can thrive
            and clients can easily find trusted and reliable services anytime, anywhere.
          </p>
        </div>

        <div>
          <div className="flex justify-center mb-4">
            <Image src="/images/flat.png" alt="Vision icon" width={40} height={40} />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Our Vision</h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base max-w-md mx-auto">
            To become the go-to corporate directory, recognized for innovation, reliability, and its pivotal
            role in shaping the future of B2B networking. We envision a world where every business has the
            opportunity to connect, collaborate, and achieve its full potential through our platform.
          </p>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    { title: "Integrity", desc: "Transparency and honesty are at the core of every interaction." },
    { title: "Innovation", desc: "We are committed to continuous innovation, developing cutting-edge solutions." },
    { title: "Community", desc: "Fostering a strong, supportive business community is our goal." },
    { title: "Customer-Centric", desc: "We design with our users and businesses in mind." },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-sky-600">Values That Guide Us</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Our foundational principles shape every decision and interaction.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-md bg-sky-50 flex items-center justify-center">
                <span className="text-sky-600 font-bold">{v.title.charAt(0)}</span>
              </div>
              <h4 className="mt-4 font-semibold">{v.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold">Our Journey</h3>
        <p className="mt-3 text-gray-600">
          From a bold idea to a thriving platform — discover the milestones that define Biz Unite.
        </p>
        <div className="mt-8 space-y-6 text-left">
          <TimelineItem year="2020" text="Founded with a vision to connect businesses." />
          <TimelineItem year="2021" text="Launched MVP and onboarded early adopters." />
          <TimelineItem year="2023" text="Expanded to enterprise features and partnerships." />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ year, text }: { year: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-16 text-sky-600 font-semibold">{year}</div>
      <div className="flex-1 text-gray-700">{text}</div>
    </div>
  );
}

function TeamSection() {
  const team = [
    { name: "Kelechi Awa", title: "Lead Developer, Founder & CEO" },
    { name: "Nku Victor", title: "Lead Designer (UI/UX) & Co-Founder" },
    { name: "Shulammite Mercy", title: "Designer (UI/UX)" },
    { name: "Emmanuel Ezekwu", title: "Developer" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold">Meet the Team / Leadership</h3>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          A dedicated team of innovators and problem-solvers.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <div className="mx-auto w-44 h-44 rounded-md bg-gray-200 flex items-center justify-center overflow-hidden">
                <span className="text-gray-400">Photo</span>
              </div>
              <h4 className="mt-4 text-sky-600 font-semibold">{m.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{m.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-xl font-semibold text-center">Get In Touch</h3>
        <p className="text-center text-gray-600 mt-2">
          We'd love to hear from you. Stay connected and be part of our growing community.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div>
            <h5 className="font-semibold">Email Us</h5>
            <p className="mt-2 text-sky-600">support@yourdomain.com</p>
          </div>
          <div>
            <h5 className="font-semibold">Call Us</h5>
            <p className="mt-2 text-sky-600">+(234) 012 345 6789</p>
          </div>
          <div>
            <h5 className="font-semibold">Follow Us</h5>
            <p className="mt-2">Facebook • Twitter • LinkedIn • Instagram</p>
          </div>
        </div>
      </div>
    </section>
  );
}



function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      // Simulate API call (replace with real API endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-16">
      <div className="absolute inset-0">
        <Image src="/newsletter-bg.jpg" alt="newsletter" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h3 className="text-3xl font-semibold">Stay Updated with Our Newsletter</h3>
        <p className="mt-3">
          Subscribe to receive the latest news and updates about our platform directly to your inbox.
        </p>

        <form className="mt-6 flex flex-col sm:flex-row justify-center gap-3" onSubmit={handleSubmit}>
          <input
            type="email"
            className="px-4 py-3 rounded-full min-w-[300px] text-black"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`px-6 py-3 rounded-full bg-white text-black ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-400">Thank you for subscribing!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400">Please enter a valid email address.</p>
        )}
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 text-sm">
        <div className="flex justify-between items-center">
          <div>© {new Date().getFullYear()} Your Company. All rights reserved.</div>
          <div className="space-x-4">Privacy Policy • Terms of Service</div>
        </div>
      </div>
    </footer>
  );
}
