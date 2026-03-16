"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { allServices } from "@/lib/services";
import { BookingForm } from "@/components/BookingForm";

export default function TreatmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubService, setSelectedSubService] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const subServicesRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      setTimeout(() => {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showBooking && bookingRef.current) {
      setTimeout(() => {
        bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [showBooking]);

  const selectedCategoryData = allServices.find((s) => s.name === selectedCategory);

  const handleCategorySelect = useCallback(
    (categoryName: string) => {
      const category = allServices.find((s) => s.name === categoryName);
      if (!category) return;

      // If category has no sub-services, go straight to booking
      if (category.subServices.length === 0) {
        if (selectedCategory === categoryName && showBooking) {
          setSelectedCategory(null);
          setSelectedSubService(null);
          setShowBooking(false);
        } else {
          setSelectedCategory(categoryName);
          setSelectedSubService(categoryName);
          setShowBooking(true);
        }
        return;
      }

      if (selectedCategory === categoryName) {
        setSelectedCategory(null);
        setSelectedSubService(null);
        setShowBooking(false);
      } else {
        setSelectedCategory(categoryName);
        setSelectedSubService(null);
        setShowBooking(false);
      }
    },
    [selectedCategory, showBooking]
  );

  const handleSubServiceSelect = useCallback(
    (subService: string) => {
      if (selectedSubService === subService) {
        setSelectedSubService(null);
        setShowBooking(false);
      } else {
        setSelectedSubService(subService);
        setShowBooking(true);
      }
    },
    [selectedSubService]
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream via-white to-accent pt-32 pb-16">
        <div className="section-padding text-center">
          <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
            Our Services
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-text mb-4">
            Advanced Skin & Aesthetic Treatments
          </h1>
          <p className="text-text-light max-w-2xl mx-auto">
            Select a service category to explore our treatments and book your appointment.
          </p>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section id="services" className="bg-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
              What Are You Looking For?
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Choose a service category below to see all available treatments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {allServices.map((service) => (
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
                  {service.subServices.length > 0
                    ? `${service.subServices.length} treatments`
                    : "1 treatment"}
                </p>
              </button>
            ))}
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
              {selectedCategoryData.subServices.map((subService) => (
                <button
                  key={subService}
                  onClick={() => handleSubServiceSelect(subService)}
                  className={`rounded-xl px-5 py-4 text-left transition-all duration-300 cursor-pointer border ${
                    selectedSubService === subService
                      ? "bg-gold/10 border-gold ring-2 ring-gold/30 shadow-sm"
                      : "bg-cream/50 border-gray-100 hover:border-gold/30 hover:bg-cream hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                        selectedSubService === subService ? "bg-gold" : "bg-gold/30"
                      }`}
                    />
                    <span
                      className={`text-sm leading-snug ${
                        selectedSubService === subService
                          ? "text-text font-medium"
                          : "text-text-light"
                      }`}
                    >
                      {subService}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking Form Section */}
      {showBooking && selectedSubService && (
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
                  <span className="text-gold font-medium">{selectedSubService}</span> and
                  our team will get back to you shortly.
                </p>
              </div>
              <BookingForm selectedService={selectedSubService} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary">
        <div className="section-padding text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Book a consultation and Dr. Nakhoda will create a personalized treatment
            plan based on your skin goals.
          </p>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-cream transition-all"
          >
            Browse Services
          </a>
        </div>
      </section>
    </>
  );
}
