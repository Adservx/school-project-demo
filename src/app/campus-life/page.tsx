import { PageLayout } from "@/components/layout/page-layout";
import Link from "next/link";
import { Calendar, Activity, Building2, Users2, ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Life - Ranabir Janahit Secondary School",
  description: "Experience vibrant student life at Ranabir Janahit Secondary School with diverse activities, modern facilities, and a supportive community.",
};

export default function CampusLifePage() {
  const sections = [
    {
      title: "Student Life",
      icon: Users2,
      description: "Daily experiences and student support",
      links: [
        { title: "Daily Schedule", href: "/campus-life/schedule", description: "Typical day at our school" },
        { title: "Student Activities", href: "/campus-life/activities", description: "Clubs and organizations" },
        { title: "Health & Wellness", href: "/campus-life/health", description: "Student health services" },
        { title: "Counseling Services", href: "/campus-life/counseling", description: "Academic and personal support" },
      ],
    },
    {
      title: "Activities",
      icon: Activity,
      description: "Beyond the classroom",
      links: [
        { title: "Sports Programs", href: "/campus-life/sports", description: "Athletic opportunities" },
        { title: "Extra-Curricular", href: "/campus-life/eca", description: "Clubs and special interest groups" },
        { title: "Community Service", href: "/campus-life/service", description: "Giving back to society" },
        { title: "Events Calendar", href: "/events", description: "Upcoming activities and programs" },
      ],
    },
    {
      title: "Facilities",
      icon: Building2,
      description: "Modern learning and recreation spaces",
      links: [
        { title: "Library", href: "/campus-life/library", description: "Extensive book and digital resources" },
        { title: "Science Labs", href: "/campus-life/labs", description: "State-of-the-art laboratories" },
        { title: "Multimedia Classrooms", href: "/campus-life/classrooms", description: "Technology-enabled learning" },
        { title: "Conference Hall", href: "/campus-life/conference", description: "Events and gatherings space" },
      ],
    },
    {
      title: "Community",
      icon: Calendar,
      description: "Building connections",
      links: [
        { title: "Parent Association", href: "/campus-life/parents", description: "Family engagement programs" },
        { title: "Alumni Network", href: "/alumni", description: "Stay connected after graduation" },
        { title: "School Programs", href: "/campus-life/programs", description: "Special initiatives and events" },
        { title: "Partnerships", href: "/campus-life/partnerships", description: "Community and industry links" },
      ],
    },
  ];

  return (
    <PageLayout
      title="Campus Life"
      description="Experience vibrant student life at Ranabir Janahit Secondary School with diverse activities, modern facilities, and a supportive community."
    >
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-4">
            A Vibrant Campus Community
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Life at Ranabir Janahit Secondary School extends far beyond the classroom. Our campus is a vibrant 
            community where students engage in diverse activities, develop new skills, build lasting friendships, 
            and grow as individuals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From sports and cultural programs to community service and leadership opportunities, we provide a 
            well-rounded educational experience. Our modern facilities, dedicated staff, and supportive environment 
            ensure that every student can thrive academically, socially, and personally.
          </p>
        </section>

        {/* Campus Life Sections */}
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

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-apex-midnight to-apex-midnight/90 rounded-lg shadow-lg p-8 mt-8 text-center">
          <h2 className="font-display text-3xl font-bold text-apex-platinum mb-4">
            Experience Campus Life Firsthand
          </h2>
          <p className="text-lg text-apex-platinum/80 mb-6 max-w-2xl mx-auto">
            The best way to understand our vibrant campus community is to visit us. Schedule a campus tour 
            and see for yourself what makes Ranabir Janahit Secondary School special.
          </p>
          <Link
            href="/admissions/visit"
            className="inline-flex items-center px-6 py-3 bg-apex-gold text-apex-midnight font-semibold rounded-lg hover:bg-apex-gold/90 transition-colors"
          >
            Schedule a Campus Visit
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </div>
    </PageLayout>
  );
}
