import Link from "next/link";
import Image from "next/image";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Mission & Vision", href: "/about/mission" },
    { label: "History", href: "/about/history" },
    { label: "Principal", href: "/about/principal" },
    { label: "Affiliations", href: "/about/affiliations" },
  ],
  academics: [
    { label: "Grade Nursery-12 Programs", href: "/academics/programs" },
    { label: "10+2 Education & Management", href: "/academics/plus-two" },
    { label: "Electrical Engineering", href: "/academics/electrical" },
    { label: "CTEVT Programs", href: "/academics/ctevt" },
  ],
  admissions: [
    { label: "Apply Now", href: "/admissions/apply" },
    { label: "Visit Campus", href: "/admissions/visit" },
    { label: "Fees & Scholarships", href: "/admissions/fees" },
    { label: "Requirements", href: "/admissions/requirements" },
  ],
  resources: [
    { label: "News & Events", href: "/news" },
    { label: "Facilities", href: "/facilities" },
    { label: "Student Life", href: "/student-life" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-apex-midnight text-apex-platinum">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                <Image 
                  src="/logo/logo.jpg" 
                  alt="Ranabir Janahit Secondary School Logo"
                  width={3840}
                  height={3840}
                  className="w-full h-full object-cover scale-125"
                  quality={100}
                />
              </div>
              <div>
                <div className="font-display font-bold text-base sm:text-lg">RANABIR JANAHIT</div>
                <div className="text-xs text-apex-gold tracking-widest">SECONDARY SCHOOL</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-apex-platinum/70 mb-4 sm:mb-6">
              Building competent workforce through quality education and technical training since 2019 B.S.
            </p>
            <div className="flex space-x-6 sm:space-x-8">
              <div className="flex flex-col items-center">
                <a
                  href="https://www.facebook.com/ranabirjanahit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-apex-platinum/10 rounded-full flex items-center justify-center hover:bg-apex-gold hover:text-apex-midnight transition-colors mb-2"
                  aria-label="Facebook - Main School Page"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <span className="text-xs text-apex-platinum/60 text-center">School Faculty Page</span>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="https://www.facebook.com/profile.php?id=61561336004241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-apex-platinum/10 rounded-full flex items-center justify-center hover:bg-apex-gold hover:text-apex-midnight transition-colors mb-2"
                  aria-label="Facebook - CTEVT Programs"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <span className="text-xs text-apex-platinum/60 text-center">CTEVT Faculty Page</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-apex-platinum/70 hover:text-apex-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Academics</h3>
            <ul className="space-y-2">
              {footerLinks.academics.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-apex-platinum/70 hover:text-apex-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Admissions</h3>
            <ul className="space-y-2">
              {footerLinks.admissions.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-apex-platinum/70 hover:text-apex-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-apex-platinum/70 hover:text-apex-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-apex-platinum/10 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base mb-1">Campus Address</div>
                <div className="text-xs sm:text-sm text-apex-platinum/70">
                  Khahare, Waling Municipality Ward 1<br />
                  Syangja District, Gandaki Province, Nepal
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base mb-1">Phone</div>
                <div className="text-xs sm:text-sm text-apex-platinum/70">
                  +977 9856029222<br />
                  +977 9846113663
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base mb-1">Email</div>
                <div className="text-xs sm:text-sm text-apex-platinum/70">
                  ranabirjanahit@gmail.com<br />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-apex-platinum/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-xs sm:text-sm text-apex-platinum/70 text-center md:text-left">
            © {new Date().getFullYear()} Ranabir Janahit Secondary School. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link href="/privacy" className="text-apex-platinum/70 hover:text-apex-gold transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-apex-platinum/70 hover:text-apex-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-apex-platinum/70 hover:text-apex-gold transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
