"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { allServices, countSubServices } from "@/lib/services";
import type { SubService } from "@/lib/services";
import { BookingForm } from "@/components/BookingForm";
import { BrandCarousel } from "@/components/BrandCarousel";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { ResultsCarousel } from "@/components/ResultsCarousel";

const testimonials = [
  {
    name: "Samina Peerzada",
    title: "TV & Film Artist",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/samina_pervaiz.jpg",
    quote:
      "I don't believe in anything artificial like Botox or face lift. I am so happy that Thermage was performed on me. Thermage prevents aging and has enabled me to look years younger.",
  },
  {
    name: "Uzma Gillani",
    title: "Renowned Actress",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/uzma-gilani.jpg",
    quote:
      "I was amazed at the difference Dr. Tasneem's treatment made in my skin. It's taken years off my face.",
  },
  {
    name: "Aisha Khan",
    title: "Actress",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/aisha_khan.jpg",
    quote:
      "Dr. Nakhoda's SKIN INSTITUTE offers the most state of the art rejuvenating treatments and Scarlet is my favourite.",
  },
  {
    name: "Saba Pervaiz",
    title: "Actress",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/saba-pervaiz.jpg",
    quote:
      "Dr. Tasneem Nakhoda is one of the best dermatologists in the city and has completely changed my skin texture.",
  },
  {
    name: "Sharmeen Ali",
    title: "Actress",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/sharmeen_ali.jpg",
    quote:
      "Dr. Tasneem Nakhoda is one of the best dermatologists in the city and has completely changed my skin texture.",
  },
];

const newsArticles = [
  {
    title: "Pakistan's Top Ten Female Miracle Mentors Unveiled",
    description:
      "Pakistan's top 10 miracle mentors were unveiled at an event on Wednesday evening. The initiative was termed as a campaign which will allow women to mentor other women and empower them.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/02/blog-image3.jpg",
  },
  {
    title: "Coolsculpting Launched in Pakistan",
    description:
      "Dr. Nakhoda's Skin Institute became one of the first clinics in Pakistan to introduce Coolsculpting — the FDA-cleared, non-surgical fat reduction treatment by Zeltiq.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/02/blog-image1.jpg",
  },
  {
    title: "Cool Sculpting — Cutting Edge in Laser",
    description:
      "Featuring Dr. Tasneem Nakhoda's expertise in bringing the latest laser and body contouring technology to Pakistan's aesthetic industry.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/02/blog-image2.jpg",
  },
];

const homeServices = allServices.slice(0, 8);

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedSubService, setExpandedSubService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const subServicesRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      setTimeout(() => {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);
  const bookingRef = useRef<HTMLDivElement>(null);

  const selectedCategoryData = allServices.find((s) => s.name === selectedCategory);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to booking form when it becomes visible
  useEffect(() => {
    if (showBooking && bookingRef.current) {
      setTimeout(() => {
        bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [showBooking]);

  const handleCategorySelect = useCallback(
    (categoryName: string) => {
      const category = allServices.find((s) => s.name === categoryName);
      if (!category) return;

      if (category.subServices.length === 0) {
        if (selectedCategory === categoryName && showBooking) {
          setSelectedCategory(null);
          setExpandedSubService(null);
          setSelectedService(null);
          setShowBooking(false);
        } else {
          setSelectedCategory(categoryName);
          setExpandedSubService(null);
          setSelectedService(categoryName);
          setShowBooking(true);
        }
        return;
      }

      if (selectedCategory === categoryName) {
        setSelectedCategory(null);
        setExpandedSubService(null);
        setSelectedService(null);
        setShowBooking(false);
      } else {
        setSelectedCategory(categoryName);
        setExpandedSubService(null);
        setSelectedService(null);
        setShowBooking(false);
      }
    },
    [selectedCategory, showBooking]
  );

  const handleSubServiceClick = useCallback(
    (sub: SubService) => {
      if (sub.children && sub.children.length > 0) {
        if (expandedSubService === sub.name) {
          setExpandedSubService(null);
        } else {
          setExpandedSubService(sub.name);
        }
        setSelectedService(null);
        setShowBooking(false);
      } else {
        if (selectedService === sub.name) {
          setSelectedService(null);
          setShowBooking(false);
        } else {
          setSelectedService(sub.name);
          setShowBooking(true);
        }
      }
    },
    [expandedSubService, selectedService]
  );

  const handleChildClick = useCallback(
    (child: string) => {
      if (selectedService === child) {
        setSelectedService(null);
        setShowBooking(false);
      } else {
        setSelectedService(child);
        setShowBooking(true);
      }
    },
    [selectedService]
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream via-white to-accent">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative section-padding w-full pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium mb-4 tracking-wide uppercase text-sm">
                Board Certified Dermatologist &bull; 20+ Years Experience
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text leading-tight mb-6">
                Your Formula For{" "}
                <span className="text-gold">Skin Confidence</span>
              </h1>
              <p className="text-text-light text-lg leading-relaxed mb-8 max-w-lg">
                Experience world-class dermatology and aesthetic treatments at Karachi&apos;s
                most trusted skin clinic. FDA-approved lasers, personalized care, and
                results you can see.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="btn-primary">
                  Book Appointment
                </a>
                <Link href="/gallery" className="btn-secondary">
                  See Our Work
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-gray-200">
                <div>
                  <p className="font-heading text-2xl text-gold">20+</p>
                  <p className="text-xs text-text-light">Years Experience</p>
                </div>
                <div>
                  <p className="font-heading text-2xl text-gold">50+</p>
                  <p className="text-xs text-text-light">Treatments</p>
                </div>
                <div>
                  <p className="font-heading text-2xl text-gold">FDA</p>
                  <p className="text-xs text-text-light">Approved Lasers</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video
                  src="/videos/hero.mp4"
                  autoPlay={true}
                  loop
                  muted
                  // controls
                  // width={600}
                  // height={700}
                  className="object-cover w-full h-[500px] lg:h-[600px]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-5">
                <p className="text-sm text-text-light">Trusted by thousands</p>
                <p className="font-heading text-lg text-gold">
                  One of Pakistan&apos;s First Laser Clinics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <ResultsCarousel />

      {/* Brand Carousel */}
      {/* <BrandCarousel /> */}

      {/* Dr. Tasneem Nakhoda — Biography */}

      {/* Service Categories Section */}
      <section id="services" className="bg-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
              Our Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
              What Are You Looking For?
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Select a service category to explore our treatments and book your appointment.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {homeServices.map((service) => (
              <button
                key={service.name}
                onClick={() => handleCategorySelect(service.name)}
                className={`rounded-2xl p-5 text-left transition-all duration-300 cursor-pointer border ${
                  selectedCategory === service.name
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                    : "bg-white text-text border-gray-100 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <h3
                  className={`font-medium text-sm leading-snug ${
                    selectedCategory === service.name ? "text-white" : "text-text"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`text-xs mt-1 ${
                    selectedCategory === service.name ? "text-white/70" : "text-text-light"
                  }`}
                >
                  {countSubServices(service)} treatment{countSubServices(service) !== 1 ? "s" : ""}
                </p>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/treatments" className="btn-secondary">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-Services for Selected Category */}
      {selectedCategory && selectedCategoryData && selectedCategoryData.subServices.length > 0 && (
        <section ref={subServicesRef} className="bg-white border-t border-gray-100">
          <div className="section-padding">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl text-text mb-2">
                {selectedCategory}
              </h2>
              <p className="text-text-light text-sm">
                Choose a treatment to book your appointment
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
              {selectedCategoryData.subServices.map((sub) => {
                const hasChildren = sub.children && sub.children.length > 0;
                const isExpanded = expandedSubService === sub.name;

                return (
                  <div key={sub.name} className="flex flex-col">
                    <button
                      onClick={() => handleSubServiceClick(sub)}
                      className={`rounded-xl px-5 py-4 text-left transition-all duration-300 cursor-pointer border ${
                        hasChildren && isExpanded
                          ? "bg-primary/10 border-primary/30 ring-1 ring-primary/20"
                          : selectedService === sub.name
                            ? "bg-gold/10 border-gold ring-2 ring-gold/30 shadow-sm"
                            : "bg-cream/50 border-gray-100 hover:border-gold/30 hover:bg-cream hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {hasChildren ? (
                          <svg
                            className={`w-4 h-4 shrink-0 text-primary transition-transform duration-200 ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        ) : (
                          <span
                            className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                              selectedService === sub.name ? "bg-gold" : "bg-gold/30"
                            }`}
                          />
                        )}
                        <span
                          className={`text-sm leading-snug ${
                            hasChildren
                              ? "font-medium text-primary"
                              : selectedService === sub.name
                                ? "text-text font-medium"
                                : "text-text-light"
                          }`}
                        >
                          {sub.name}
                        </span>
                      </div>
                    </button>

                    {hasChildren && isExpanded && (
                      <div className="mt-1 ml-4 space-y-1">
                        {sub.children!.map((child) => (
                          <button
                            key={child}
                            onClick={() => handleChildClick(child)}
                            className={`w-full rounded-lg px-4 py-3 text-left transition-all duration-200 cursor-pointer border ${
                              selectedService === child
                                ? "bg-gold/10 border-gold ring-2 ring-gold/30 shadow-sm"
                                : "bg-white border-gray-100 hover:border-gold/30 hover:bg-cream/50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                                  selectedService === child ? "bg-gold" : "bg-gold/20"
                                }`}
                              />
                              <span
                                className={`text-sm leading-snug ${
                                  selectedService === child
                                    ? "text-text font-medium"
                                    : "text-text-light"
                                }`}
                              >
                                {child}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Booking Form Section */}
      {showBooking && selectedService && (
        <section
          ref={bookingRef}
          className="bg-gradient-to-b from-white to-cream border-t border-gray-100"
        >
          <div className="section-padding">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
                  Almost There!
                </p>
                <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
                  Book Your Appointment
                </h2>
                <p className="text-text-light">
                  Fill in your details below for{" "}
                  <span className="text-gold font-medium">{selectedService}</span> and our
                  team will get back to you shortly.
                </p>
              </div>
              <BookingForm selectedService={selectedService} />
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="bg-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
              Testimonials
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
              Trusted by Leading Names
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Hear from some of Pakistan&apos;s most well-known personalities who trust
              Dr. Nakhoda for their skincare.
            </p>
          </div>

          {/* Active Testimonial */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/10">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>
              <blockquote className="text-text-light text-lg leading-relaxed mb-6 font-heading italic">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </blockquote>
              <p className="font-medium text-text">
                {testimonials[activeTestimonial].name}
              </p>
              <p className="text-sm text-text-light">
                {testimonials[activeTestimonial].title}
              </p>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === activeTestimonial
                      ? "bg-primary w-8"
                      : "bg-gold/20 hover:bg-gold/40"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Small avatar row */}
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${
                  i === activeTestimonial
                    ? "ring-2 ring-primary scale-110"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* In the News */}
      <section className="bg-white">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
              In The News
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
              Media & Press Coverage
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Dr. Nakhoda&apos;s Skin Institute has been featured in leading publications and
              media outlets for pioneering aesthetic treatments in Pakistan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {newsArticles.map((article, i) => (
              <div key={i} className="card">
                <div className="relative h-52">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg text-text mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Gallery Preview */}
      <section className="bg-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
              Our Clinic
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
              See Our Work
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Take a look inside our state-of-the-art facility and see the results our
              patients love.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "clinic322",
              "clinic8",
              "clinic272",
              "clinic323",
              "clinic31",
              "clinic1",
              "clinic13",
              "clinic9",
            ].map((img) => (
              <div
                key={img}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Image
                  src={`https://drnakhodas.com/wp-content/uploads/2024/01/${img}.jpg`}
                  alt="Dr. Nakhoda's Clinic"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-secondary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

            <section className="bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[450px] lg:h-[620px]">
              <Image
                src="https://drnakhodas.com/wp-content/uploads/2024/01/drnakhoda-image.jpg"
                alt="Dr. Tasneem Nakhoda"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
                Meet Your Doctor
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-text mb-2">
                Dr. Tasneem Nakhoda
              </h2>
              <p className="text-gold font-medium mb-5">Board Certified Dermatologist</p>
              <p className="text-text-light leading-relaxed mb-4">
                Dr. Tasneem Nakhoda is a board certified dermatologist with over 20 years of
                experience, trained in both Pakistan and the USA. She graduated from Dow
                University in 1987 and pursued advanced training under Dr. Amy Paller, a
                leading authority in pediatric dermatology at Northwestern University,
                Chicago, and cosmetic training with Dr. Montalvo.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                She is renowned for her expertise in lasers, making her a leader in the field
                of aesthetic dermatology. She has served as a consultant and speaker for many
                laser and cosmeceutical companies and has published papers in various medical
                journals. She pioneered several treatments in Pakistan, including the first
                Botox lecture at the PAD forum in 2004.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-cream rounded-xl p-4 text-center">
                  <p className="font-heading text-xl text-gold">20+</p>
                  <p className="text-[11px] text-text-light">Years Experience</p>
                </div>
                <div className="bg-cream rounded-xl p-4 text-center">
                  <p className="font-heading text-xl text-gold">USA</p>
                  <p className="text-[11px] text-text-light">Trained</p>
                </div>
                <div className="bg-cream rounded-xl p-4 text-center">
                  <p className="font-heading text-xl text-gold">Pioneer</p>
                  <p className="text-[11px] text-text-light">In Pakistan</p>
                </div>
              </div>
              <Link href="/about" className="btn-secondary text-sm">
                Read Full Bio
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="bg-primary">
        <div className="section-padding text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of happy patients who trust Dr. Nakhoda&apos;s Skin Institute for
            their skincare journey. Book your consultation today.
          </p>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-full font-medium transition-all duration-300 hover:bg-cream hover:shadow-lg"
          >
            Book My Appointment
          </a>
        </div>
      </section>
    </>
  );
}
