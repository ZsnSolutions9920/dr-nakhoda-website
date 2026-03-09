"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "clinic322", "clinic8", "clinic272", "clinic323", "clinic31", "clinic1",
  "clinic13", "clinic9", "clinic28", "clinic327", "clinic274", "clinic10",
  "clinic11", "clinic22", "clinic29", "clinic11a", "clinic20", "clinic324",
  "clinic6", "clinic18", "clinic329", "clinic321", "clinic16", "clinic14-1",
  "clinic326", "clinic25", "clinic30", "clinic11f", "clinic3", "clinic11e",
  "clinic2", "clinic4", "clinic328", "clinic32", "clinic21", "clinic12",
  "clinic11b", "clinic11c", "clinic5", "clinic273", "clinic7",
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream via-white to-accent pt-32 pb-16">
        <div className="section-padding text-center">
          <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
            Gallery
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-text mb-4">
            Inside Our Clinic
          </h1>
          <p className="text-text-light max-w-2xl mx-auto">
            Take a look at our state-of-the-art facility, treatment rooms, and the
            welcoming environment we have created for our patients.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white">
        <div className="section-padding">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((img) => {
              const url = `https://drnakhodas.com/wp-content/uploads/2024/01/${img}.jpg`;
              return (
                <button
                  key={img}
                  onClick={() => setLightbox(url)}
                  className="block w-full rounded-2xl overflow-hidden break-inside-avoid hover:opacity-90 transition-opacity"
                >
                  <Image
                    src={url}
                    alt="Dr. Nakhoda's Skin Institute"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:opacity-70"
            aria-label="Close"
          >
            &times;
          </button>
          <Image
            src={lightbox}
            alt="Gallery image"
            width={1200}
            height={800}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
