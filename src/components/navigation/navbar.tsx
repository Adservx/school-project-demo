"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Lazy load MegaMenu for better initial load performance
const MegaMenu = dynamic(() => import("./mega-menu").then(mod => ({ default: mod.MegaMenu })), {
  ssr: true,
});

const aboutSections = [
  {
    title: "Our Story",
    items: [
      { title: "Mission & Vision", href: "/about/mission" },
      { title: "History", href: "/about/history" },
      { title: "Achievements", href: "/about/achievements" },
      { title: "Affiliations", href: "/about/affiliations" },
    ],
  },
  {
    title: "Leadership",
    items: [
      { title: "Principal", href: "/about/principal" },
      { title: "Faculty", href: "/about/faculty" },
      { title: "Staff", href: "/about/staff" },
      { title: "Management Committee", href: "/about/committee" },
    ],
  },
  {
    title: "Campus",
    items: [
      { title: "Facilities", href: "/campus/facilities" },
      { title: "Library", href: "/campus/library" },
      { title: "Labs & Classrooms", href: "/campus/labs" },
      { title: "Sports Facilities", href: "/campus/sports" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "News & Events", href: "/news" },
      { title: "Downloads", href: "/resources/downloads" },
      { title: "Gallery", href: "/gallery" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
];

const academicsSections = [
  {
    title: "General Education",
    items: [
      { title: "Grade 1-5 (Primary)", href: "/academics/primary" },
      { title: "Grade 6-8 (Lower Secondary)", href: "/academics/lower-secondary" },
      { title: "Grade 9-10 (Secondary)", href: "/academics/secondary" },
      { title: "Early Childhood Development", href: "/academics/ecd" },
    ],
  },
  {
    title: "10+2 Programs",
    items: [
      { title: "Education Stream", href: "/academics/education" },
      { title: "Management Stream", href: "/academics/management" },
      { title: "NEB Affiliation", href: "/academics/neb" },
      { title: "Curriculum", href: "/academics/curriculum" },
    ],
  },
  {
    title: "Technical Education",
    items: [
      { title: "Pre-Diploma Electrical", href: "/academics/pre-diploma" },
      { title: "Diploma Electrical (3 Years)", href: "/academics/diploma" },
      { title: "CTEVT Affiliation", href: "/academics/ctevt" },
      { title: "Vocational Training", href: "/academics/vocational" },
    ],
  },
  {
    title: "Support Services",
    items: [
      { title: "Counseling", href: "/academics/counseling" },
      { title: "Library Resources", href: "/academics/library" },
      { title: "Extra-Curricular Activities", href: "/academics/eca" },
      { title: "Educational Tours", href: "/academics/tours" },
    ],
  },
];

const admissionsSections = [
  {
    title: "Get Started",
    items: [
      { title: "Apply Now", href: "/admissions/apply" },
      { title: "Visit Campus", href: "/admissions/visit" },
      { title: "Request Information", href: "/admissions/info" },
      { title: "Admission Process", href: "/admissions/process" },
    ],
  },
  {
    title: "Requirements",
    items: [
      { title: "General Admission", href: "/admissions/general" },
      { title: "10+2 Admission", href: "/admissions/plus-two" },
      { title: "CTEVT Programs", href: "/admissions/ctevt" },
      { title: "Documents Required", href: "/admissions/documents" },
    ],
  },
  {
    title: "Fees & Aid",
    items: [
      { title: "Fee Structure", href: "/admissions/fees" },
      { title: "Scholarships", href: "/admissions/scholarships" },
      { title: "Payment Options", href: "/admissions/payment" },
      { title: "Financial Support", href: "/admissions/support" },
    ],
  },
  {
    title: "Information",
    items: [
      { title: "Admission Calendar", href: "/admissions/calendar" },
      { title: "FAQs", href: "/admissions/faq" },
      { title: "Prospectus", href: "/admissions/prospectus" },
      { title: "Contact Admissions", href: "/admissions/contact" },
    ],
  },
];

const campusLifeSections = [
  {
    title: "Student Life",
    items: [
      { title: "Daily Schedule", href: "/campus-life/schedule" },
      { title: "Student Activities", href: "/campus-life/activities" },
      { title: "Health & Wellness", href: "/campus-life/health" },
      { title: "Counseling Services", href: "/campus-life/counseling" },
    ],
  },
  {
    title: "Activities",
    items: [
      { title: "Sports Programs", href: "/campus-life/sports" },
      { title: "Extra-Curricular", href: "/campus-life/eca" },
      { title: "Community Service", href: "/campus-life/service" },
      { title: "Events Calendar", href: "/events" },
    ],
  },
  {
    title: "Facilities",
    items: [
      { title: "Library", href: "/campus-life/library" },
      { title: "Science Labs", href: "/campus-life/labs" },
      { title: "Multimedia Classrooms", href: "/campus-life/classrooms" },
      { title: "Conference Hall", href: "/campus-life/conference" },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "Parent Association", href: "/campus-life/parents" },
      { title: "Alumni Network", href: "/alumni" },
      { title: "School Programs", href: "/campus-life/programs" },
      { title: "Partnerships", href: "/campus-life/partnerships" },
    ],
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-apex-midnight/95 backdrop-blur-md shadow-lg"
          : "bg-apex-midnight"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-lg flex-shrink-0">
              <Image 
                src="/logo/logo.jpg" 
                alt="Ranabir Janahit Secondary School Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover scale-125"
                priority
                quality={90}
                sizes="(max-width: 640px) 40px, 48px"
              />
            </div>
            <div className="block">
              <div className="font-display font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-apex-platinum leading-tight">
                RANABIR JANAHIT
              </div>
              <div className="text-[10px] sm:text-xs text-white tracking-wider sm:tracking-widest">
                SECONDARY SCHOOL
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <MegaMenu title="ABOUT" sections={aboutSections} prefetch />
            <MegaMenu title="ACADEMICS" sections={academicsSections} prefetch />
            <MegaMenu title="ADMISSIONS" sections={admissionsSections} prefetch />
            <MegaMenu title="CAMPUS LIFE" sections={campusLifeSections} prefetch />
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <button
              className="hidden sm:block p-2 text-apex-platinum hover:text-apex-gold transition-colors"
              aria-label="Search"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <Button variant="gold" size="sm" className="hidden md:inline-flex text-xs sm:text-sm">
              Apply Now
            </Button>
            <Button variant="outline" size="sm" className="hidden lg:inline-flex border-apex-gold text-apex-gold hover:bg-apex-gold hover:text-apex-midnight text-xs sm:text-sm">
              Portal
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-1.5 sm:p-2 text-apex-platinum hover:text-apex-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-apex-midnight border-t border-apex-gold/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <Link
              href="/about"
              prefetch={true}
              className="block px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-apex-platinum hover:text-apex-gold transition-colors rounded-lg hover:bg-apex-platinum/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/academics"
              prefetch={true}
              className="block px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-apex-platinum hover:text-apex-gold transition-colors rounded-lg hover:bg-apex-platinum/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Academics
            </Link>
            <Link
              href="/admissions"
              prefetch={true}
              className="block px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-apex-platinum hover:text-apex-gold transition-colors rounded-lg hover:bg-apex-platinum/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link
              href="/campus-life"
              prefetch={true}
              className="block px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-apex-platinum hover:text-apex-gold transition-colors rounded-lg hover:bg-apex-platinum/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Campus Life
            </Link>
            <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
              <Button variant="gold" className="w-full text-sm sm:text-base">
                Apply Now
              </Button>
              <Button variant="outline" className="w-full border-apex-gold text-apex-gold text-sm sm:text-base">
                Portal Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
