"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { treatments, serviceCategories } from "@/lib/treatments";
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

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const treatmentsRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      setTimeout(() => {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);
  const detailsRef = useRef<HTMLDivElement>(null);
  const bookButtonRef = useCallback((node: HTMLButtonElement | null) => {
    if (node) {
      setTimeout(() => {
        node.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, []);
  const bookingRef = useRef<HTMLDivElement>(null);

  const categoryTreatments = selectedCategory
    ? treatments.filter((t) => t.category === selectedCategory)
    : [];
  const selected = treatments.find((t) => t.id === selectedTreatment);

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
    (category: string) => {
      if (selectedCategory === category) {
        setSelectedCategory(null);
        setSelectedTreatment(null);
        setShowBooking(false);
      } else {
        setSelectedCategory(category);
        setSelectedTreatment(null);
        setShowBooking(false);
      }
    },
    [selectedCategory]
  );

  const handleTreatmentSelect = useCallback(
    (id: string) => {
      if (selectedTreatment === id) {
        setSelectedTreatment(null);
        setShowBooking(false);
      } else {
        setSelectedTreatment(id);
        setShowBooking(false);
      }
    },
    [selectedTreatment]
  );

  const handleBookClick = useCallback(() => {
    setShowBooking(true);
  }, []);

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
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`rounded-2xl p-5 text-left transition-all duration-300 cursor-pointer border ${
                  selectedCategory === category
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                    : "bg-white text-text border-gray-100 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <h3
                  className={`font-medium text-sm leading-snug ${
                    selectedCategory === category ? "text-white" : "text-text"
                  }`}
                >
                  {category}
                </h3>
                <p
                  className={`text-xs mt-1 ${
                    selectedCategory === category ? "text-white/70" : "text-text-light"
                  }`}
                >
                  {treatments.filter((t) => t.category === category).length} treatments
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments for Selected Category */}
      {selectedCategory && categoryTreatments.length > 0 && (
        <section ref={treatmentsRef} className="bg-white border-t border-gray-100">
          <div className="section-padding">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl text-text mb-2">
                {selectedCategory}
              </h2>
              <p className="text-text-light text-sm">Choose a treatment to learn more</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {categoryTreatments.map((treatment) => (
                <button
                  key={treatment.id}
                  onClick={() => handleTreatmentSelect(treatment.id)}
                  className={`card p-4 text-left cursor-pointer group ${
                    selectedTreatment === treatment.id
                      ? "ring-2 ring-primary bg-gold/5"
                      : ""
                  }`}
                >
                  <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-medium text-sm text-text leading-snug">
                    {treatment.name}
                  </h3>
                  <p className="text-xs text-text-light mt-1 line-clamp-2">
                    {treatment.shortDescription}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Treatment Details (Expanded) */}
      {selected && (
        <section className="bg-cream border-t border-gray-100" ref={detailsRef}>
          <div className="section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
                  {selected.category}
                </p>
                <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
                  {selected.name}
                </h2>
                <p className="text-text-light leading-relaxed mb-6">{selected.description}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-text mb-2">Benefits</h3>
                    <ul className="space-y-2">
                      {selected.benefits.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-light"
                        >
                          <span className="text-gold mt-0.5">&#10003;</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-text mb-2">Who Is It For?</h3>
                    <p className="text-sm text-text-light">{selected.whoIsItFor}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-text mb-2">The Procedure</h3>
                    <p className="text-sm text-text-light">{selected.procedure}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-medium text-sm text-text mb-1">Expected Results</h4>
                      <p className="text-xs text-text-light">{selected.results}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-medium text-sm text-text mb-1">Recovery</h4>
                      <p className="text-xs text-text-light">{selected.recovery}</p>
                    </div>
                  </div>

                  <button
                    ref={bookButtonRef}
                    onClick={handleBookClick}
                    className="btn-primary w-full text-center"
                  >
                    Book Appointment for {selected.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Booking Form Section */}
      {showBooking && selected && (
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
                  <span className="text-gold font-medium">{selected.name}</span> and our
                  team will get back to you shortly.
                </p>
              </div>
              <BookingForm selectedService={selected.name} />
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
