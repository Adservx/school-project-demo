import { PageLayout } from "@/components/layout/page-layout";
import Link from "next/link";
import { Target, Users, Building, Award, ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Ranabir Janahit Secondary School",
  description: "Learn more about Ranabir Janahit Secondary School - our mission, leadership, campus, and community.",
};

export default function AboutPage() {
  const sections = [
    {
      title: "Our Story",
      icon: Target,
      links: [
        { title: "Mission & Vision", href: "/about/mission", description: "Our guiding principles and aspirations" },
        { title: "History", href: "/about/history", description: "Our journey since establishment" },
        { title: "Achievements", href: "/about/achievements", description: "Recognition and milestones" },
        { title: "Affiliations", href: "/about/affiliations", description: "Our academic partnerships" },
      ],
    },
    {
      title: "Leadership",
      icon: Users,
      links: [
        { title: "Principal", href: "/about/principal", description: "Meet our school leader" },
        { title: "Faculty", href: "/about/faculty", description: "Our dedicated teaching staff" },
        { title: "Staff", href: "/about/staff", description: "Administrative and support team" },
        { title: "Management Committee", href: "/about/committee", description: "Governing body members" },
      ],
    },
    {
      title: "Campus",
      icon: Building,
      links: [
        { title: "Facilities", href: "/campus/facilities", description: "Modern learning infrastructure" },
        { title: "Library", href: "/campus/library", description: "Extensive learning resources" },
        { title: "Labs & Classrooms", href: "/campus/labs", description: "State-of-the-art learning spaces" },
        { title: "Sports Facilities", href: "/campus/sports", description: "Athletic and recreational areas" },
      ],
    },
    {
      title: "Resources",
      icon: Award,
      links: [
        { title: "News & Events", href: "/news", description: "Latest updates and activities" },
        { title: "Downloads", href: "/resources/downloads", description: "Important documents and forms" },
        { title: "Gallery", href: "/gallery", description: "Photos and memories" },
        { title: "Contact Us", href: "/contact", description: "Get in touch with us" },
      ],
    },
  ];

  return (
    <PageLayout
      title="About Us"
      description="Learn more about Ranabir Janahit Secondary School - our mission, leadership, campus, and community."
    >
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-4">
            Welcome to Ranabir Janahit Secondary School
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Established with a vision to provide quality education and technical training, Ranabir Janahit Secondary School 
            has been serving the community by nurturing young minds and preparing them for successful futures.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We offer comprehensive education from Early Childhood Development to Higher Secondary level, along with 
            CTEVT-affiliated technical programs in Electrical Engineering. Our commitment to excellence, innovation, 
            and inclusivity makes us a trusted choice for families seeking quality education.
          </p>
        </section>

        {/* Navigation Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className="h-8 w-8 text-apex-gold" />
                  <h2 className="font-display text-2xl font-bold text-apex-midnight">
                    {section.title}
                  </h2>
                </div>
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
