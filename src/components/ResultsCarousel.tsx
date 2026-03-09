"use client";

import Image from "next/image";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import type { StaticImageData } from "next/image";

const results: { src: StaticImageData; label: string }[] = [
  { src: photo1, label: "Skin Rejuvenation" },
  { src: photo2, label: "Laser Treatment" },
  { src: photo3, label: "Acne Treatment" },
  { src: photo4, label: "Anti-Aging Results" },
  { src: photo5, label: "Skin Tightening" },
  { src: photo6, label: "HydraFacial Results" },
  { src: photo7, label: "Chemical Peel" },
];

export function ResultsCarousel() {
  const items = [...results, ...results];

  return (
    <section className="bg-cream py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gold font-medium text-sm uppercase tracking-wide mb-1">
              Real Results
            </p>
            <h2 className="font-heading text-2xl md:text-3xl text-text">
              Before &amp; After
            </h2>
          </div>
          <a
            href="/gallery"
            className="text-sm font-medium text-gold hover:underline hidden sm:inline-flex items-center gap-1"
          >
            View Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div className="flex animate-results-scroll">
          {items.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex-none w-[260px] sm:w-[300px] px-2 group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-sm">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes results-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-results-scroll {
          animation: results-scroll 35s linear infinite;
          width: max-content;
        }
        .animate-results-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
