import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream via-white to-accent pt-32 pb-16">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
                About Us
              </p>
              <h1 className="font-heading text-4xl md:text-5xl text-text mb-6">
                The Aesthetics of <span className="text-gold">Happy Skin</span>
              </h1>
              <p className="text-text-light leading-relaxed mb-6">
                Dr. Nakhoda&apos;s Skin Institute is one of Pakistan&apos;s first and most
                trusted laser clinics. Founded in 1999 as Lasersoft – the Skin Clinic,
                we were among the first to introduce Nd:YAG laser technology in Pakistan.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                For over two decades, we have maintained our reputation through continuous
                innovation, adding the newest and most advanced laser systems, while
                upholding the highest professional standards — particularly in sterilization
                and product quality.
              </p>
              <p className="text-text-light leading-relaxed">
                Every treatment is specially designed for each individual under the guidance
                and care of Dr. Tasneem Nakhoda and her competent team. Our clinic features
                a private waiting area for your comfort and a welcoming environment that
                puts you at ease.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <Image
                src="https://drnakhodas.com/wp-content/uploads/2024/01/clinic1.jpg"
                alt="Dr. Nakhoda's Skin Institute"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[500px] order-2 lg:order-1">
              <Image
                src="https://drnakhodas.com/wp-content/uploads/2024/01/drnakhoda-image.jpg"
                alt="Dr. Tasneem Nakhoda"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
                Meet Your Doctor
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-text mb-6">
                Dr. Tasneem Nakhoda
              </h2>
              <p className="text-gold font-medium mb-4">
                Board Certified Dermatologist
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                Dr. Tasneem Nakhoda is a board certified dermatologist with over 20 years of
                experience, trained in both Pakistan and the USA. She graduated from Dow
                University in 1987, completed her MCPS in 1992, and pursued further
                specialization in dermatology.
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                She trained under Dr. Amy Paller, a leading authority in pediatric
                dermatology at Northwestern University, Chicago, and received cosmetic
                training with Dr. Montalvo, also at Northwestern University.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                Dr. Nakhoda pioneered several treatments in Pakistan, including delivering
                the first Botox lecture at the PAD forum in 2004, and introducing PRP and
                Fractional Radiofrequency treatments. She is a certified trainer for
                Silhouette Soft Threads and serves on advisory boards for leading
                cosmeceutical companies.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cream rounded-xl p-4">
                  <p className="font-heading text-xl text-gold">20+</p>
                  <p className="text-xs text-text-light">Years of Experience</p>
                </div>
                <div className="bg-cream rounded-xl p-4">
                  <p className="font-heading text-xl text-gold">USA</p>
                  <p className="text-xs text-text-light">Trained Internationally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="bg-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
              Professional Memberships
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Pakistan Association of Dermatologists (Lifetime Member)",
              "American Academy of Dermatology (10 Years & International Fellowship)",
              "Women's Dermatologic Society",
              "Society of Pediatric Dermatology",
              "Certified Trainer — Silhouette Soft Threads",
              "Trainer — Sinclair College",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg mt-0.5">&#10003;</span>
                  <p className="text-sm text-text-light">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Photos */}
      <section className="bg-white">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
              Inside Our Clinic
            </h2>
            <p className="text-text-light">A welcoming space designed for your comfort.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["clinic322", "clinic272", "clinic323", "clinic31", "clinic13", "clinic9"].map(
              (img) => (
                <div key={img} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={`https://drnakhodas.com/wp-content/uploads/2024/01/${img}.jpg`}
                    alt="Clinic interior"
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
            Experience the Difference
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Book a consultation with Dr. Nakhoda and discover a personalized treatment
            plan designed just for you.
          </p>
          <Link
            href="/#booking"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-cream transition-all"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
