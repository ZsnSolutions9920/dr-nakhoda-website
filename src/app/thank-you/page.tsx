import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream to-white pt-20">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl text-text mb-4">
          Thank You!
        </h1>
        <p className="text-text-light leading-relaxed mb-8">
          Thank you for booking your appointment. Our clinic team will review your
          request and contact you shortly.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
