import Image from "next/image";
import Link from "next/link";
import { treatments, serviceCategories, categoryToSlug } from "@/lib/treatments";

export default function TreatmentsPage() {
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
            From skin rejuvenation to body contouring, we offer a comprehensive range of
            FDA-approved treatments tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Service Category Cards */}
      {serviceCategories.map((category) => {
        const categoryTreatments = treatments.filter((t) => t.category === category);
        if (categoryTreatments.length === 0) return null;
        const slug = categoryToSlug(category);

        return (
          <section key={category} className="bg-white border-b border-gray-100">
            <div className="section-padding">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl text-text">
                    {category}
                  </h2>
                  <p className="text-text-light text-sm mt-1">
                    {categoryTreatments.length} treatments available
                  </p>
                </div>
                <Link
                  href={`/services/${slug}`}
                  className="text-sm font-medium text-gold hover:underline hidden sm:inline-flex items-center gap-1"
                >
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryTreatments.map((treatment) => (
                  <div key={treatment.id} className="card">
                    <div className="relative h-56">
                      <Image
                        src={treatment.image}
                        alt={treatment.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl text-text mb-2">
                        {treatment.name}
                      </h3>
                      <p className="text-sm text-text-light mb-4 leading-relaxed">
                        {treatment.shortDescription}
                      </p>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-text mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {treatment.benefits.slice(0, 3).map((b, i) => (
                            <li key={i} className="text-xs text-text-light flex items-start gap-2">
                              <span className="text-gold mt-0.5">&#10003;</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={`/services/${slug}#${treatment.id}`}
                        className="btn-primary text-sm w-full text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center sm:hidden">
                <Link
                  href={`/services/${slug}`}
                  className="text-sm font-medium text-gold hover:underline inline-flex items-center gap-1"
                >
                  View All {category}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        );
      })}

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
