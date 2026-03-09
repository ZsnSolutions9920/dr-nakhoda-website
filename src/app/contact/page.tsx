"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success. Could be extended to send to API.
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream via-white to-accent pt-32 pb-16">
        <div className="section-padding text-center">
          <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-text mb-4">
            Contact Us
          </h1>
          <p className="text-text-light max-w-2xl mx-auto">
            Have questions or want to book an appointment? We are here to help.
            Reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-heading text-2xl text-text mb-8">Our Locations</h2>

              <div className="space-y-8">
                <div className="bg-cream rounded-2xl p-6">
                  <h3 className="font-medium text-text mb-3">
                    Dr. Nakhoda&apos;s Skin Institute
                  </h3>
                  <div className="space-y-2 text-sm text-text-light">
                    <p>GPC-11, Rojhan Street, Block-5, Clifton, Karachi, Pakistan</p>
                    <p>Monday – Friday: 10:00 AM – 7:00 PM</p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <a href="tel:+923002105374" className="text-gold hover:underline">
                        +92-300-2105374
                      </a>
                      <a href="tel:+923213822113" className="text-gold hover:underline">
                        +92-321-3822113
                      </a>
                      <a href="tel:+922135148292" className="text-gold hover:underline">
                        +92-213-5148292-3
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-cream rounded-2xl p-6">
                  <h3 className="font-medium text-text mb-3">
                    Lasersoft – the Skin Clinic
                  </h3>
                  <div className="space-y-2 text-sm text-text-light">
                    <p>Block 9, Clifton, Behind Sofitel (Ocean) Towers, Karachi - 75600</p>
                    <p>Monday – Saturday: 10:00 AM – 6:00 PM</p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <a href="tel:+923022935606" className="text-gold hover:underline">
                        +92-302-2935606
                      </a>
                      <a href="tel:+922135371560" className="text-gold hover:underline">
                        +92-213-5371560
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3 className="font-medium text-text mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/DrNakhoda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cream text-gold px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition-all"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/drnakhodaskininstitute/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cream text-gold px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition-all"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC3aXZB_lKQVQuoPqYNqTOPA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cream text-gold px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition-all"
                  >
                    YouTube
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.2!2d67.0289!3d24.8138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzQ5LjciTiA2N8KwMDEnNDQuMCJF!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl text-text mb-8">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-cream rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl text-text mb-2">Message Sent!</h3>
                  <p className="text-text-light text-sm">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-medium text-text mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-sm font-medium text-text mb-1.5">
                      Email
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-sm font-medium text-text mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+92-XXX-XXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-message" className="block text-sm font-medium text-text mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
