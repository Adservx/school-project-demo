import { PageLayout } from "@/components/layout/page-layout";
import { GraduationCap, BookOpen, Users, Award, Target, CheckCircle, FileText, Phone } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "10+2 Programs - Ranabir Janahit Secondary School",
  description: "Higher Secondary Education programs in Education and Management streams, affiliated with NEB.",
};

export default function PlusTwoPage() {
  return (
    <PageLayout
      title="10+2 Programs"
      description="Higher Secondary Education with Education and Management streams affiliated with NEB."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Higher Secondary Education</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ranabir Janahit Secondary School offers comprehensive 10+2 (Plus Two) programs affiliated with
            the National Examinations Board (NEB). Our higher secondary education programs prepare students
            for university education and professional careers while building strong academic foundations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We offer two streams - Education and Management - each designed to cater to different career
            aspirations and provide pathways to various fields of higher education.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Available Streams</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-apex-gold pl-6 py-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-2xl text-apex-midnight">Education Stream</h3>
                <Link
                  href="/academics/education"
                  className="text-sm text-apex-gold hover:text-apex-midnight transition-colors"
                >
                  Learn More →
                </Link>
              </div>
              <p className="text-gray-700 mb-3">
                Designed for students aspiring to pursue careers in teaching and education. This stream
                provides a solid foundation in educational theory, pedagogy, and subject knowledge.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-apex-midnight mb-2">Core Subjects:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>• Compulsory English</div>
                  <div>• Compulsory Nepali</div>
                  <div>• Education</div>
                  <div>• Optional Mathematics/Science/Social Studies</div>
                  <div>• Optional subject as per NEB curriculum</div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-2xl text-apex-midnight">Management Stream</h3>
                <Link
                  href="/academics/management"
                  className="text-sm text-apex-gold hover:text-apex-midnight transition-colors"
                >
                  Learn More →
                </Link>
              </div>
              <p className="text-gray-700 mb-3">
                Perfect for students interested in business, commerce, and management fields. This stream
                equips students with essential business knowledge and management skills.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-apex-midnight mb-2">Core Subjects:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>• Compulsory English</div>
                  <div>• Compulsory Nepali</div>
                  <div>• Accountancy</div>
                  <div>• Business Studies</div>
                  <div>• Economics</div>
                  <div>• Business Mathematics/Marketing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">NEB Affiliation</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Our 10+2 programs are affiliated with the National Examinations Board (NEB), ensuring that
            students receive nationally recognized education that meets established quality standards.
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Nationally Recognized Certification</h3>
                <p className="text-gray-700">NEB certificates are accepted by all Nepali universities and many international institutions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Standardized Curriculum</h3>
                <p className="text-gray-700">Follow NEB-approved syllabus ensuring comprehensive and quality education</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Quality Assurance</h3>
                <p className="text-gray-700">Regular monitoring and evaluation to maintain educational standards</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">University Pathway</h3>
                <p className="text-gray-700">Direct pathway to bachelor&apos;s programs in Nepali universities</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Program Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Experienced Faculty</h3>
              <p className="text-gray-700 text-sm">
                Qualified and experienced teachers dedicated to student success and academic excellence.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Modern Facilities</h3>
              <p className="text-gray-700 text-sm">
                Well-equipped classrooms, library resources, and learning materials supporting education.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Exam Preparation</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive preparation for NEB examinations including mock tests and practice sessions.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Career Guidance</h3>
              <p className="text-gray-700 text-sm">
                Counseling services to help students make informed decisions about higher education and careers.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Extra-Curricular Activities</h3>
              <p className="text-gray-700 text-sm">
                Opportunities to participate in sports, cultural activities, and leadership programs.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Scholarship Opportunities</h3>
              <p className="text-gray-700 text-sm">
                Financial support available for deserving and underprivileged students.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Career Pathways</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Education Stream Graduates Can Pursue:</h3>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li>• Bachelor of Education (B.Ed.)</li>
                <li>• Bachelor of Arts in Education</li>
                <li>• Teaching certifications and credentials</li>
                <li>• Educational administration programs</li>
                <li>• Psychology and social work degrees</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Management Stream Graduates Can Pursue:</h3>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li>• BBA (Bachelor of Business Administration)</li>
                <li>• BBS (Bachelor of Business Studies)</li>
                <li>• BBM (Bachelor of Business Management)</li>
                <li>• Bachelor of Commerce (B.Com)</li>
                <li>• CA (Chartered Accountancy)</li>
                <li>• Banking and Finance programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Admission Requirements</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Successful completion of SEE (Secondary Education Examination) or equivalent</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Minimum grade requirements as per NEB guidelines</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Completed admission application form</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Character certificate and other required documents</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Entrance test and interview (if required)</p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/admissions/plus-two"
              className="inline-flex items-center px-6 py-3 bg-apex-gold text-apex-midnight font-semibold rounded-lg hover:bg-apex-gold/90 transition-colors"
            >
              Apply for 10+2 Programs →
            </Link>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="h-6 w-6 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold">Learn More About Our 10+2 Programs</h2>
          </div>
          <p className="mb-4">
            Have questions about our higher secondary education programs? Contact us for detailed
            information, admission guidance, or to schedule a campus visit.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
