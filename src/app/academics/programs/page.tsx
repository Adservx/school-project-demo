import { PageLayout } from "@/components/layout/page-layout";
import { GraduationCap, BookOpen, Zap, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Programs - Ranabir Janahit Secondary School",
  description: "Comprehensive academic programs from Early Childhood Development to Higher Secondary and Technical Education at Ranabir Janahit Secondary School.",
};

export default function AcademicProgramsPage() {
  return (
    <PageLayout
      title="Academic Programs"
      description="Quality education from nursery through higher secondary, plus technical vocational training."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Educational Offerings</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ranabir Janahit Secondary School provides a comprehensive educational pathway from Early Childhood
            Development through Higher Secondary Education, complemented by specialized technical and vocational
            training programs. Our diverse offerings ensure that every student finds the right educational path
            to achieve their goals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With affiliations from the National Examinations Board (NEB) and the Council for Technical Education
            and Vocational Training (CTEVT), we deliver quality education that meets national standards while
            preparing students for successful futures.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">General Education Programs</h2>
          </div>
          <div className="space-y-6">
            <Link
              href="/academics/ecd"
              className="block border-l-4 border-apex-gold pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-apex-midnight mb-2">Early Childhood Development (ECD)</h3>
                  <p className="text-gray-700 mb-2">
                    Foundation stage for children aged 3-5 years, focusing on holistic development through
                    play-based learning and age-appropriate activities.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Nursery and KG programs</li>
                    <li>• Play-based learning methodology</li>
                    <li>• Social and emotional development</li>
                    <li>• School readiness preparation</li>
                  </ul>
                </div>
                <ArrowRight className="h-6 w-6 text-apex-gold flex-shrink-0" />
              </div>
            </Link>

            <Link
              href="/academics/primary"
              className="block border-l-4 border-apex-gold pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-apex-midnight mb-2">Primary Level (Grade 1-5)</h3>
                  <p className="text-gray-700 mb-2">
                    Building strong foundational skills in reading, writing, mathematics, and general knowledge
                    through engaging and interactive teaching methods.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Core subjects: Nepali, English, Mathematics, Science, Social Studies</li>
                    <li>• Activity-based learning</li>
                    <li>• Character development and values education</li>
                    <li>• Regular assessments and parent communication</li>
                  </ul>
                </div>
                <ArrowRight className="h-6 w-6 text-apex-gold flex-shrink-0" />
              </div>
            </Link>

            <Link
              href="/academics/lower-secondary"
              className="block border-l-4 border-apex-gold pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-apex-midnight mb-2">Lower Secondary Level (Grade 6-8)</h3>
                  <p className="text-gray-700 mb-2">
                    Transition phase introducing more specialized subjects and preparing students for
                    secondary education with enhanced academic rigor.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Expanded curriculum with specialized subjects</li>
                    <li>• Introduction to science practicals</li>
                    <li>• Optional subjects and electives</li>
                    <li>• Career guidance and counseling begins</li>
                  </ul>
                </div>
                <ArrowRight className="h-6 w-6 text-apex-gold flex-shrink-0" />
              </div>
            </Link>

            <Link
              href="/academics/secondary"
              className="block border-l-4 border-apex-gold pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-apex-midnight mb-2">Secondary Level (Grade 9-10)</h3>
                  <p className="text-gray-700 mb-2">
                    Preparation for the Secondary Education Examination (SEE) with comprehensive coverage
                    of all subjects and intensive exam preparation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• SEE examination preparation</li>
                    <li>• Compulsory and optional subjects</li>
                    <li>• Regular mock tests and assessments</li>
                    <li>• Higher education pathway guidance</li>
                  </ul>
                </div>
                <ArrowRight className="h-6 w-6 text-apex-gold flex-shrink-0" />
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">10+2 Programs (NEB Affiliated)</h2>
          </div>
          <div className="space-y-6">
            <Link
              href="/academics/education"
              className="block border-l-4 border-apex-gold pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-apex-midnight mb-2">Education Stream</h3>
                  <p className="text-gray-700 mb-2">
                    Specialized program for students interested in pursuing careers in teaching and education,
                    affiliated with the National Examinations Board (NEB).
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Pedagogy and teaching methodologies</li>
                    <li>• Educational psychology</li>
                    <li>• Subject specializations</li>
                    <li>• Teaching practice and internships</li>
                  </ul>
                </div>
                <ArrowRight className="h-6 w-6 text-apex-gold flex-shrink-0" />
              </div>
            </Link>

            <Link
              href="/academics/management"
              className="block border-l-4 border-apex-gold pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-apex-midnight mb-2">Management Stream</h3>
                  <p className="text-gray-700 mb-2">
                    Business-focused curriculum preparing students for careers in management, commerce,
                    and entrepreneurship with NEB affiliation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Business studies and accounting</li>
                    <li>• Economics and finance</li>
                    <li>• Marketing and entrepreneurship</li>
                    <li>• Computer applications for business</li>
                  </ul>
                </div>
                <ArrowRight className="h-6 w-6 text-apex-gold flex-shrink-0" />
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Technical Education (CTEVT Affiliated)</h2>
          </div>
          <div className="space-y-6">
            <Link
              href="/academics/pre-diploma"
              className="block border-l-4 border-apex-gold pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-apex-midnight mb-2">Pre-Diploma in Electrical Engineering</h3>
                  <p className="text-gray-700 mb-2">
                    One-year foundational program introducing students to electrical engineering concepts
                    and basic technical skills, affiliated with CTEVT.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Basic electrical theory and circuits</li>
                    <li>• Hands-on practical training</li>
                    <li>• Workshop and lab experience</li>
                    <li>• Pathway to Diploma program</li>
                  </ul>
                </div>
                <ArrowRight className="h-6 w-6 text-apex-gold flex-shrink-0" />
              </div>
            </Link>

            <Link
              href="/academics/diploma"
              className="block border-l-4 border-apex-gold pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-apex-midnight mb-2">Diploma in Electrical Engineering (3 Years)</h3>
                  <p className="text-gray-700 mb-2">
                    Comprehensive three-year technical program providing in-depth knowledge and practical
                    skills in electrical engineering, CTEVT affiliated.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Advanced electrical systems and controls</li>
                    <li>• Power generation and distribution</li>
                    <li>• Industrial training and internships</li>
                    <li>• CTEVT certification upon completion</li>
                  </ul>
                </div>
                <ArrowRight className="h-6 w-6 text-apex-gold flex-shrink-0" />
              </div>
            </Link>

            <Link
              href="/academics/vocational"
              className="block border-l-4 border-apex-gold pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-apex-midnight mb-2">Vocational Training Programs</h3>
                  <p className="text-gray-700 mb-2">
                    Short-term skill development programs providing practical training in various technical
                    trades for immediate employment opportunities.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Electrical wiring and installation</li>
                    <li>• Basic maintenance and repair</li>
                    <li>• Safety and quality standards</li>
                    <li>• Industry-recognized certifications</li>
                  </ul>
                </div>
                <ArrowRight className="h-6 w-6 text-apex-gold flex-shrink-0" />
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Why Choose Our Programs?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Nationally Recognized</h3>
                <p className="text-sm text-gray-700">NEB and CTEVT affiliations ensure quality and recognition</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Experienced Faculty</h3>
                <p className="text-sm text-gray-700">Qualified teachers dedicated to student success</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Modern Facilities</h3>
                <p className="text-sm text-gray-700">Well-equipped labs, libraries, and learning spaces</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Holistic Development</h3>
                <p className="text-sm text-gray-700">Focus on academics, skills, and character building</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Career Support</h3>
                <p className="text-sm text-gray-700">Guidance for higher education and employment</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Affordable Education</h3>
                <p className="text-sm text-gray-700">Scholarships available for deserving students</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Ready to Enroll?</h2>
          <p className="mb-4">
            Explore our programs in detail and find the perfect educational path for you.
            Contact our admissions office for more information or to schedule a campus visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/admissions/apply"
              className="inline-flex items-center justify-center px-6 py-3 bg-apex-gold text-apex-midnight rounded-lg font-semibold hover:bg-apex-gold/90 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-apex-gold text-apex-gold rounded-lg font-semibold hover:bg-apex-gold/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
