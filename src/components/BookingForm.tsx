"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { treatments } from "@/lib/treatments";

interface BookingFormProps {
  selectedService?: string;
}

export function BookingForm({ selectedService }: BookingFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: selectedService || "",
  });

  // Update service when selectedService changes
  if (selectedService && form.service !== selectedService) {
    setForm((prev) => ({ ...prev, service: selectedService }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+92-XXX-XXXXXXX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text mb-1.5">
            Selected Service
          </label>
          <select
            id="service"
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
          >
            <option value="">Choose a treatment</option>
            {treatments.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Book My Appointment"}
        </button>
      </div>
    </form>
  );
}
