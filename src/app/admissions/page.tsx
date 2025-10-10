import { PageLayout } from "@/components/layout/page-layout";
import Link from "next/link";
import { ClipboardCheck, FileText, DollarSign, Info, ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions - Ranabir Janahit Secondary School",
  description: "Join Ranabir Janahit Secondary School - Learn about our admission process, requirements, and financial aid.",
};

export default function AdmissionsPage() {
  const sections = [
    {
      title: "Get Started",
      icon: ClipboardCheck,
      description: "Begin your journey with us",
      links: [
        { title: "Apply Now", href: "/admissions/apply", description: "Start your application online" },
        { title: "Visit Campus", href: "/admissions/visit", description: "Schedule a campus tour" },
        { title: "Request Information", href: "/admissions/info", description: "Get detailed program information" },
        { title: "Admission Process", href: "/admissions/process", description: "Step-by-step guide" },
      ],
    },
    {
      title: "Requirements",
      icon: FileText,
      description: "What you need to apply",
      links: [
        { title: "General Admission", href: "/admissions/general", description: "Basic level requirements" },
        { title: "10+2 Admission", href: "/admissions/plus-two", description: "Higher secondary criteria" },
        { title: "CTEVT Programs", href: "/admissions/ctevt", description: "Technical program requirements" },
        { title: "Documents Required", href: "/admissions/documents", description: "Complete checklist" },
      ],
    },
    {
      title: "Fees & Aid",
      icon: DollarSign,
      description: "Financial information and support",
      links: [
        { title: "Fee Structure", href: "/admissions/fees", description: "Tuition and other costs" },
        { title: "Scholarships", href: "/admissions/scholarships", description: "Financial aid opportunities" },
        { title: "Payment Options", href: "/admissions/payment", description: "Flexible payment plans" },
        { title: "Financial Support", href: "/admissions/support", description: "Additional assistance programs" },
      ],
    },
    {
      title: "Information",
      icon: Info,
      description: "Additional resources",
      links: [
        { title: "Admission Calendar", href: "/admissions/calendar", description: "Important dates and deadlines" },
        { title: "FAQs", href: "/admissions/faq", description: "Frequently asked questions" },
        { title: "Prospectus", href: "/admissions/prospectus", description: "Complete program guide" },
        { title: "Contact Admissions", href: "/admissions/contact", description: "Get personalized assistance" },
      ],
    },
  ];

  return (
    <PageLayout
      title="Admissions"
      description="Join Ranabir Janahit Secondary School - Learn about our admission process, requirements, and financial aid."
    >
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-4">
            Welcome to Our Admissions Process
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We're excited that you're considering Ranabir Janahit Secondary School for your educational journey. 
            Our admissions process is designed to be straightforward and supportive, helping you find the right 
            program for your goals and aspirations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether you're applying for general education, 10+2 programs, or technical training, we offer 
            comprehensive support throughout the admission process. Explore the sections below to learn more 
            about requirements, fees, and how to apply.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/admissions/apply"
              className="inline-flex items-center px-6 py-3 bg-apex-gold text-apex-midnight font-semibold rounded-lg hover:bg-apex-gold/90 transition-colors"
            >
              Apply Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/admissions/visit"
              className="inline-flex items-center px-6 py-3 border-2 border-apex-gold text-apex-gold font-semibold rounded-lg hover:bg-apex-gold hover:text-apex-midnight transition-colors"
            >
              Schedule a Visit
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Admission Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon className="h-8 w-8 text-apex-gold" />
                  <h2 className="font-display text-2xl font-bold text-apex-midnight">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.href}
                      className="block p-4 rounded-lg border border-gray-200 hover:border-apex-gold hover:bg-apex-gold/5 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-apex-midnight group-hover:text-apex-gold transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-apex-gold transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
