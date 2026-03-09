import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="https://drnakhodas.com/wp-content/uploads/2023/12/logo.svg"
              alt="Dr. Nakhoda's Skin Institute"
              width={160}
              height={45}
              className="h-10 w-auto brightness-0 invert mb-4"
              unoptimized
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              State-of-the-art skin treatment center providing FDA-approved laser treatments
              with over 20 years of excellence in dermatology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/treatments", label: "Treatments" },
                { href: "/pharmacy", label: "Pharmacy" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>GPC-11, Rojhan Street, Block-5,<br />Clifton, Karachi, Pakistan</p>
              <p>
                <a href="tel:+923002105374" className="hover:text-gold transition-colors">
                  +92-300-2105374
                </a>
              </p>
              <p>
                <a href="tel:+923213822113" className="hover:text-gold transition-colors">
                  +92-321-3822113
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-lg mb-4">Clinic Hours</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Monday – Friday</p>
              <p className="text-white">10:00 AM – 7:00 PM</p>
              <div className="pt-4">
                <h4 className="text-white text-sm font-medium mb-2">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/DrNakhoda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/drnakhodaskininstitute/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dr. Nakhoda&apos;s Skin Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
