"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { allServiceCategoryNames } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/treatments", label: "Services", hasDropdown: true },
  { href: "/pharmacy", label: "Pharmacy" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDesktopDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://drnakhodas.com/wp-content/uploads/2023/12/logo.svg"
            alt="Dr. Nakhoda's Skin Institute"
            width={180}
            height={50}
            className="h-12 w-auto"
            unoptimized
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-text-light hover:text-primary transition-colors"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      desktopDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Desktop Dropdown */}
                {desktopDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-3 w-64 overflow-hidden">
                      <div className="max-h-80 overflow-y-auto">
                        {allServiceCategoryNames.map((category) => (
                          <Link
                            key={category}
                            href="/treatments"
                            onClick={() => setDesktopDropdownOpen(false)}
                            className="flex items-center gap-3 px-5 py-2.5 text-sm text-text-light hover:bg-cream hover:text-primary transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold/40 shrink-0" />
                            {category}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          href="/treatments"
                          onClick={() => setDesktopDropdownOpen(false)}
                          className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-primary hover:bg-cream transition-colors"
                        >
                          View All Services
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-light hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link href="/#services" className="btn-primary text-sm">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href}>
                {/* Services toggle */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium text-text-light hover:text-primary border-b border-gray-50"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mobile services list */}
                {mobileServicesOpen && (
                  <div className="bg-cream/50 rounded-xl my-1 max-h-64 overflow-y-auto">
                    {allServiceCategoryNames.map((category) => (
                      <Link
                        key={category}
                        href="/treatments"
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 text-sm text-text-light hover:text-primary transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold/40 shrink-0" />
                        {category}
                      </Link>
                    ))}
                    <Link
                      href="/treatments"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary"
                    >
                      View All Services
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-text-light hover:text-primary border-b border-gray-50"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/#services"
            onClick={() => setMobileOpen(false)}
            className="btn-primary text-sm mt-4 w-full text-center"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
