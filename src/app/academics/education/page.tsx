import { PageLayout } from "@/components/layout/page-layout";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

export default function EducationPage() {
  return (
    <PageLayout
      title="10+2 Education Stream"
      description="NEB-affiliated higher secondary program preparing future educators and academics."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Program Overview</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our 10+2 Education stream, affiliated with the National Examination Board (NEB), is designed for 
            students aspiring to pursue careers in teaching, education administration, or further academic studies. 
            The program provides a strong foundation in educational theory, pedagogy, and subject knowledge.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Graduates are well-prepared for Bachelor&apos;s programs in Education (B.Ed.) and other academic fields, 
            as well as for teaching positions after completing required qualifications.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Curriculum & Subjects</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Compulsory Subjects (Grade 11 & 12)</h3>
              <div className="space-y-2 text-gray-700">
                <div>• Compulsory English</div>
                <div>• Compulsory Nepali</div>
                <div>• Social Studies & Life Skills</div>
              </div>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Major Subjects</h3>
              <div className="space-y-2 text-gray-700">
                <div>• Education (Compulsory)</div>
                <div>• Major English</div>
                <div>• Major Nepali</div>
                <div>• Mathematics / Rural Development (Elective)</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Key Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">NEB Affiliation</h3>
              <p className="text-gray-700">Nationally recognized qualification from National Examination Board.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Experienced Faculty</h3>
              <p className="text-gray-700">Qualified teachers with expertise in education and subject areas.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Practical Training</h3>
              <p className="text-gray-700">Teaching practice and educational field visits.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Career Guidance</h3>
              <p className="text-gray-700">Counseling for higher education and career planning.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Career Opportunities</h2>
          </div>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Teaching Profession</h3>
              <p className="text-gray-700">Pursue B.Ed. and become a qualified teacher in schools.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Higher Education</h3>
              <p className="text-gray-700">Continue to Bachelor&apos;s and Master&apos;s programs in Education or Arts.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Educational Administration</h3>
              <p className="text-gray-700">Career opportunities in educational planning and administration.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Civil Services</h3>
              <p className="text-gray-700">Prepare for government service examinations.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Admission Requirements</h2>
          </div>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p>Completion of SEE (Grade 10) or equivalent examination</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p>Minimum GPA as per NEB requirements</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p>Character certificate from previous school</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p>Required documents and application fee</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Apply Now</h2>
          <p className="mb-4 leading-relaxed">
            Admissions are open for the Education stream. For detailed information about the program, 
            fee structure, and application process, please contact our admissions office.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
