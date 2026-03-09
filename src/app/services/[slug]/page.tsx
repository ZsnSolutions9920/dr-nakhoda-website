import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  treatments,
  serviceCategories,
  categoryToSlug,
  slugToCategory,
} from "@/lib/treatments";
import { BookingForm } from "@/components/BookingForm";

// Generate static params for all service categories
export function generateStaticParams() {
  return serviceCategories.map((category) => ({
    slug: categoryToSlug(category),
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = slugToCategory(slug);
  if (!category) return { title: "Service Not Found" };

  return {
    title: `${category} | Dr. Nakhoda's Skin Institute`,
    description: `Explore our ${category} treatments. Board certified dermatologist with 20+ years experience in Karachi, Pakistan.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = slugToCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryTreatments = treatments.filter((t) => t.category === category);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream via-white to-accent pt-32 pb-16">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-1 text-gold text-sm font-medium mb-4 hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl text-text mb-4">
              {category}
            </h1>
            <p className="text-text-light text-lg">
              Discover our advanced {category.toLowerCase()} treatments designed to deliver
              real, visible results with personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments */}
      {categoryTreatments.map((treatment, index) => (
        <section
          key={treatment.id}
          id={treatment.id}
          className={index % 2 === 0 ? "bg-white" : "bg-warm"}
        >
          <div className="section-padding">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 !== 0 ? "lg:[direction:rtl] lg:[&>*]:[direction:ltr]" : ""
            }`}>
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden h-[350px] lg:h-[450px] shadow-lg">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
                  {treatment.category}
                </p>
                <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
                  {treatment.name}
                </h2>
                <p className="text-text-light leading-relaxed mb-6">
                  {treatment.description}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="font-medium text-text mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {treatment.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-light">
                        <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who is it for */}
                <div className="mb-6">
                  <h3 className="font-medium text-text mb-2">Who Is It For?</h3>
                  <p className="text-sm text-text-light">{treatment.whoIsItFor}</p>
                </div>

                {/* Procedure */}
                <div className="mb-6">
                  <h3 className="font-medium text-text mb-2">The Procedure</h3>
                  <p className="text-sm text-text-light">{treatment.procedure}</p>
                </div>

                {/* Results & Recovery */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-cream rounded-xl p-4">
                    <h4 className="font-medium text-sm text-text mb-1">Expected Results</h4>
                    <p className="text-xs text-text-light">{treatment.results}</p>
                  </div>
                  <div className="bg-cream rounded-xl p-4">
                    <h4 className="font-medium text-sm text-text mb-1">Recovery</h4>
                    <p className="text-xs text-text-light">{treatment.recovery}</p>
                  </div>
                </div>

                <Link href="#booking" className="btn-primary">
                  Book {treatment.name}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Booking Form */}
      <section id="booking" className="bg-gradient-to-b from-cream to-white">
        <div className="section-padding">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
                Ready to Begin?
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
                Book Your Appointment
              </h2>
              <p className="text-text-light">
                Fill in your details and our team will get back to you shortly.
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-white border-t border-gray-100">
        <div className="section-padding">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl text-text mb-4">
              Explore Other Services
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceCategories
              .filter((c) => c !== category)
              .map((c) => (
                <Link
                  key={c}
                  href={`/services/${categoryToSlug(c)}`}
                  className="rounded-2xl p-5 bg-warm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <h3 className="font-medium text-sm text-text leading-snug">{c}</h3>
                  <p className="text-xs text-text-light mt-1">
                    {treatments.filter((t) => t.category === c).length} treatments
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary">
        <div className="section-padding text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Book a consultation and Dr. Nakhoda will create a personalized treatment
            plan based on your goals.
          </p>
          <Link
            href="/#services"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-cream transition-all"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
