import { PageLayout } from "@/components/layout/page-layout";
import Link from "next/link";
import { GraduationCap, Zap, BookOpen, Users, ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics - Ranabir Janahit Secondary School",
  description: "Explore our comprehensive academic programs from early childhood to technical education.",
};

export default function AcademicsPage() {
  const sections = [
    {
      title: "General Education",
      icon: GraduationCap,
      description: "Comprehensive education from early childhood to secondary level",
      links: [
        { title: "Grade 1-5 (Primary)", href: "/academics/primary", description: "Foundation building years" },
        { title: "Grade 6-8 (Lower Secondary)", href: "/academics/lower-secondary", description: "Developing core competencies" },
        { title: "Grade 9-10 (Secondary)", href: "/academics/secondary", description: "Preparing for higher education" },
        { title: "Early Childhood Development", href: "/academics/ecd", description: "Nurturing young learners" },
      ],
    },
    {
      title: "10+2 Programs",
      icon: BookOpen,
      description: "Higher secondary education with specialized streams",
      links: [
        { title: "Education Stream", href: "/academics/education", description: "Pathway to teaching careers" },
        { title: "Management Stream", href: "/academics/management", description: "Business and management focus" },
        { title: "NEB Affiliation", href: "/academics/neb", description: "National Examination Board standards" },
        { title: "Curriculum", href: "/academics/curriculum", description: "Course structure and subjects" },
      ],
    },
    {
      title: "Technical Education",
      icon: Zap,
      description: "CTEVT-affiliated technical programs in Electrical Engineering",
      links: [
        { title: "Pre-Diploma Electrical", href: "/academics/pre-diploma", description: "Foundation technical program" },
        { title: "Diploma Electrical (3 Years)", href: "/academics/diploma", description: "Comprehensive technical training" },
        { title: "CTEVT Affiliation", href: "/academics/ctevt", description: "Council for Technical Education" },
        { title: "Vocational Training", href: "/academics/vocational", description: "Skill-based programs" },
      ],
    },
    {
      title: "Support Services",
      icon: Users,
      description: "Comprehensive support for student success",
      links: [
        { title: "Counseling", href: "/academics/counseling", description: "Academic and career guidance" },
        { title: "Library Resources", href: "/academics/library", description: "Extensive learning materials" },
        { title: "Extra-Curricular Activities", href: "/academics/eca", description: "Beyond classroom learning" },
        { title: "Educational Tours", href: "/academics/tours", description: "Experiential learning opportunities" },
      ],
    },
  ];

  return (
    <PageLayout
      title="Academics"
      description="Explore our comprehensive academic programs from early childhood to technical education."
    >
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-4">
            Academic Excellence at Every Level
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ranabir Janahit Secondary School offers a diverse range of academic programs designed to meet the needs 
            of students at every stage of their educational journey. From early childhood development to advanced 
            technical training, we provide quality education that prepares students for success.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our programs are affiliated with the National Examination Board (NEB) and the Council for Technical 
            Education and Vocational Training (CTEVT), ensuring that our students receive nationally recognized 
            qualifications and industry-relevant skills.
          </p>
        </section>

        {/* Program Sections */}
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
