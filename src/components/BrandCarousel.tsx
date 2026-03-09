"use client";

const brands = [
  "Dermapen",
  "Botox Cosmetic",
  "Soprano Ice",
  "Pelleve",
  "HydraFacial MD",
  "CoolSculpting",
  "Silhouette Soft",
  "Lutronic",
  "Omnilux",
  "Thermage",
  "Ultherapy",
  "Candela GentleMax Pro",
  "EMFACE",
  "PRX-T33",
  "Fotona",
  "AdvaTx",
  "Sofwave",
  "Endolift",
  "Finexel",
];

export function BrandCarousel() {
  return (
    <section className="bg-white border-y border-gray-100 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <p className="text-center text-xs font-medium text-text-light uppercase tracking-widest">
          Trusted Technologies We Use
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-scroll">
          {/* Double the list for seamless loop */}
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-none px-8 flex items-center justify-center h-16"
            >
              <span className="text-text/30 font-bold text-lg whitespace-nowrap tracking-wide select-none">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
