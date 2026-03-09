import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "Murad",
    description:
      "Science-backed skincare founded by a dermatologist. Murad products target specific skin concerns like acne, aging, and hyperpigmentation using clinically proven ingredients.",
    products: ["Face Wash", "Moisturizers", "Serums", "Sunscreens", "Anti-Aging Creams"],
  },
  {
    name: "Obagi",
    description:
      "A trusted name in medical-grade skincare. Obagi products are designed to transform skin at the cellular level, improving tone, texture, and clarity.",
    products: ["Vitamin C Serums", "Retinol Treatments", "Sunscreens", "Skin Brighteners"],
  },
  {
    name: "Bioderma",
    description:
      "French dermatological skincare that respects your skin's natural biology. Bioderma products are gentle yet effective, suitable for sensitive and reactive skin.",
    products: ["Micellar Water", "Moisturizers", "Sunblock", "Cleansers"],
  },
  {
    name: "Universe Skin",
    description:
      "Professional-grade cosmeceuticals designed for post-treatment care and daily skin maintenance. Formulated to work alongside clinical treatments for enhanced results.",
    products: ["Post-Procedure Care", "Hydrating Masks", "Repair Creams"],
  },
];

const categories = [
  {
    name: "Face Wash & Cleansers",
    description: "Gentle cleansers suitable for all skin types. Removes impurities without stripping your skin's natural moisture.",
    icon: "💧",
  },
  {
    name: "Moisturizers",
    description: "Hydrating formulas that lock in moisture and protect your skin barrier throughout the day.",
    icon: "✨",
  },
  {
    name: "Sunblock & SPF",
    description: "Essential sun protection to prevent premature aging, dark spots, and skin damage. A must for every skincare routine.",
    icon: "☀️",
  },
  {
    name: "Acne Control",
    description: "Targeted treatments to manage breakouts, reduce inflammation, and prevent acne scarring.",
    icon: "🌿",
  },
  {
    name: "Anti-Dandruff Shampoos",
    description: "Medicated shampoos that effectively treat dandruff and scalp conditions while being gentle on hair.",
    icon: "💆",
  },
  {
    name: "Specialty Products",
    description: "Additional skincare products recommended by Dr. Nakhoda for specific skin concerns and post-treatment care.",
    icon: "🧴",
  },
];

export default function PharmacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream via-white to-accent pt-32 pb-16">
        <div className="section-padding text-center">
          <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
            Our Pharmacy
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-text mb-4">
            Premium Skincare Products
          </h1>
          <p className="text-text-light max-w-2xl mx-auto">
            Our in-clinic pharmacy stocks only high-quality, dermatologist-recommended
            skincare products from the world&apos;s most trusted brands.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-white">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-text mb-4">Brands We Carry</h2>
            <p className="text-text-light">Only authentic, medical-grade products.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {brands.map((brand) => (
              <div key={brand.name} className="card p-6">
                <h3 className="font-heading text-xl text-gold mb-3">{brand.name}</h3>
                <p className="text-sm text-text-light leading-relaxed mb-4">
                  {brand.description}
                </p>
                <div>
                  <p className="text-xs font-medium text-text mb-2">Available Products:</p>
                  <div className="flex flex-wrap gap-2">
                    {brand.products.map((p) => (
                      <span
                        key={p}
                        className="text-xs bg-cream text-gold px-3 py-1 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-text mb-4">Product Categories</h2>
            <p className="text-text-light">Everything your skin needs, all in one place.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="text-3xl mb-3">{cat.icon}</p>
                <h3 className="font-medium text-text mb-2">{cat.name}</h3>
                <p className="text-sm text-text-light leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Pharmacy Photos */}
      <section className="bg-white">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-text mb-4">Visit Our Pharmacy</h2>
            <p className="text-text-light">Located inside our clinic for your convenience.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["clinic6", "clinic18", "clinic16", "clinic14-1", "clinic25", "clinic30"].map(
              (img) => (
                <div key={img} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={`https://drnakhodas.com/wp-content/uploads/2024/01/${img}.jpg`}
                    alt="Pharmacy interior"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="section-padding text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Need Product Recommendations?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Visit our clinic or contact us for personalized skincare product
            recommendations from Dr. Nakhoda.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+923002105374"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-cream transition-all"
            >
              Call Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
