import { PageLayout } from "@/components/layout/page-layout";
import { Zap, GraduationCap, Wrench, Award, Users, BookOpen, Briefcase, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Engineering Programs - Ranabir Janahit Secondary School",
  description: "CTEVT-affiliated electrical engineering programs including Pre-Diploma and Diploma courses at Ranabir Janahit Secondary School.",
};

export default function ElectricalEngineeringPage() {
  return (
    <PageLayout
      title="Electrical Engineering Programs"
      description="CTEVT-affiliated technical education preparing skilled electrical engineers."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Technical Education Excellence</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ranabir Janahit Secondary School is proud to offer comprehensive electrical engineering programs
            affiliated with CTEVT (Council for Technical Education and Vocational Training). Our programs
            are designed to produce skilled electrical engineers who can meet the growing demands of Nepal's
            technical workforce.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With state-of-the-art laboratories, experienced instructors, and industry-relevant curriculum,
            we prepare students for successful careers in the electrical engineering field.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Programs Offered</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-gray-50 rounded-r-lg">
              <h3 className="font-semibold text-2xl text-apex-midnight mb-3">Pre-Diploma in Electrical Engineering</h3>
              <p className="text-gray-700 mb-3">
                A foundational program designed for students who have completed SEE (Secondary Education Examination)
                and want to pursue a career in electrical engineering.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-apex-midnight mb-2">Program Details:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Duration: 1 Year</li>
                    <li>• Entry Requirement: SEE Pass</li>
                    <li>• CTEVT Affiliated</li>
                    <li>• Certificate Upon Completion</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-apex-midnight mb-2">Key Areas:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Basic Electrical Concepts</li>
                    <li>• Circuit Theory</li>
                    <li>• Workshop Practice</li>
                    <li>• Technical Drawing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-gray-50 rounded-r-lg">
              <h3 className="font-semibold text-2xl text-apex-midnight mb-3">Diploma in Electrical Engineering (3 Years)</h3>
              <p className="text-gray-700 mb-3">
                A comprehensive three-year program that provides in-depth knowledge and practical skills in
                electrical engineering, preparing graduates for immediate employment or further studies.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-apex-midnight mb-2">Program Details:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Duration: 3 Years</li>
                    <li>• Entry: SEE or Pre-Diploma Pass</li>
                    <li>• CTEVT Affiliated</li>
                    <li>• Diploma Certificate</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-apex-midnight mb-2">Major Subjects:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Power Systems</li>
                    <li>• Electrical Machines</li>
                    <li>• Control Systems</li>
                    <li>• Electronics & Instrumentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Curriculum Highlights</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Theoretical Foundation</h3>
                <p className="text-gray-700">Comprehensive classroom instruction covering fundamental and advanced electrical engineering concepts</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Practical Training</h3>
                <p className="text-gray-700">Extensive hands-on laboratory work and workshop practice with modern equipment</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Industry Exposure</h3>
                <p className="text-gray-700">Industrial visits, internships, and project work in real-world settings</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Project-Based Learning</h3>
                <p className="text-gray-700">Capstone projects requiring design, implementation, and presentation of electrical systems</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Safety Training</h3>
                <p className="text-gray-700">Comprehensive electrical safety protocols and workplace safety standards</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Wrench className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Laboratory Facilities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Electrical Lab</h3>
              <p className="text-sm text-gray-700">Circuit design, testing equipment, measurement instruments, and power supply units</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Workshop</h3>
              <p className="text-sm text-gray-700">Practical wiring installation, panel board assembly, and electrical fitting practice</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Electronics Lab</h3>
              <p className="text-sm text-gray-700">PCB design, microcontroller programming, and electronic circuit testing</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Machines Lab</h3>
              <p className="text-sm text-gray-700">Motors, transformers, generators, and other electrical machinery for testing</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Briefcase className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Career Opportunities</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Graduates of our electrical engineering programs are well-prepared for diverse career paths:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Electrical Engineer in industries and factories</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Power plant technician and operator</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Electrical contractor and consultant</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Maintenance engineer in organizations</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Telecommunication and networking technician</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Building electrical system designer</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Renewable energy technician (solar, hydro)</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Entrepreneurship in electrical services</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Why Choose Our Program?</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">CTEVT Affiliation</h3>
              <p className="text-gray-700 text-sm">Government-recognized certification with national validity</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Experienced Faculty</h3>
              <p className="text-gray-700 text-sm">Qualified instructors with industry experience and technical expertise</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Practical Focus</h3>
              <p className="text-gray-700 text-sm">Emphasis on hands-on training and real-world skills development</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Job Placement Support</h3>
              <p className="text-gray-700 text-sm">Career guidance, industry connections, and placement assistance</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Affordable Education</h3>
              <p className="text-gray-700 text-sm">Quality technical education at reasonable fees with scholarship opportunities</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Admission Requirements</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-semibold text-apex-midnight mb-3">For Pre-Diploma Program:</p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• SEE (Secondary Education Examination) Pass Certificate</li>
              <li>• Character Certificate from previous school</li>
              <li>• Recent passport-size photographs</li>
              <li>• Citizenship certificate (or parents' for minors)</li>
            </ul>
            <p className="font-semibold text-apex-midnight mb-3">For Diploma Program:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• SEE Pass or Pre-Diploma in relevant field</li>
              <li>• All documents as required for Pre-Diploma</li>
              <li>• Entrance test may be conducted</li>
            </ul>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Start Your Engineering Career</h2>
          <p className="mb-4">
            Join our electrical engineering programs and build a rewarding career in one of the most in-demand
            technical fields. For admission information, program details, or campus tours, contact us today.
          </p>
          <p className="text-sm mb-2">
            <strong>Contact:</strong> +977 9856029222, +977 9846113663
          </p>
          <p className="text-sm">
            <strong>Email:</strong> ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
