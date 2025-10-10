import { PageLayout } from "@/components/layout/page-layout";
import { Building, BookOpen, Microscope, Computer, Dumbbell, Users, Home } from "lucide-react";

export default function FacilitiesPage() {
  return (
    <PageLayout
      title="Campus Facilities"
      description="Modern infrastructure and facilities supporting quality education and student development."
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Building className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Facilities</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ranabir Janahit Secondary School provides modern facilities and infrastructure to support 
            quality education across all programs. Our campus is equipped with classrooms, laboratories, 
            library, sports facilities, and specialized spaces for technical education.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-apex-gold/20 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-apex-gold" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Library</h3>
            <p className="text-gray-700 text-sm">
              Well-stocked library with textbooks, reference books, magazines, and digital resources 
              for all levels and programs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-apex-gold/20 rounded-full flex items-center justify-center mb-4">
              <Microscope className="h-8 w-8 text-apex-gold" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Science Laboratories</h3>
            <p className="text-gray-700 text-sm">
              Fully equipped physics, chemistry, and biology labs for practical experiments and 
              hands-on learning.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-apex-gold/20 rounded-full flex items-center justify-center mb-4">
              <Computer className="h-8 w-8 text-apex-gold" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Computer Labs</h3>
            <p className="text-gray-700 text-sm">
              Modern computer labs with internet connectivity for computer education and digital learning.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-apex-gold/20 rounded-full flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-apex-gold" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Classrooms</h3>
            <p className="text-gray-700 text-sm">
              Spacious, well-ventilated classrooms with proper lighting and furniture for comfortable learning.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-apex-gold/20 rounded-full flex items-center justify-center mb-4">
              <Dumbbell className="h-8 w-8 text-apex-gold" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Sports Facilities</h3>
            <p className="text-gray-700 text-sm">
              Playground and sports equipment for various games including football, volleyball, and athletics.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-apex-gold/20 rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-apex-gold" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Conference Hall</h3>
            <p className="text-gray-700 text-sm">
              Multipurpose hall for assemblies, meetings, cultural programs, and special events.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Technical Education Facilities</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Electrical Workshop</h3>
              <p className="text-gray-700">
                Fully equipped workshop for CTEVT programs with modern electrical equipment, tools, 
                and safety gear for practical training.
              </p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Technical Library</h3>
              <p className="text-gray-700">
                Specialized collection of technical books, manuals, and reference materials for 
                engineering students.
              </p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Home className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Student Hostel</h3>
              </div>
              <p className="text-gray-700">
                Comfortable hostel accommodation available for CTEVT program students, providing 
                a safe and conducive living environment for those coming from distant areas. 
                The hostel includes basic amenities, study areas, and 24/7 security.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Visit Our Campus</h2>
          <p className="mb-4">
            Experience our facilities firsthand by scheduling a campus visit. Contact us to arrange a tour.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
