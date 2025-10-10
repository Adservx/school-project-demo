import { PageLayout } from "@/components/layout/page-layout";
import { Calendar, Award, Building, Users } from "lucide-react";

export default function HistoryPage() {
  return (
    <PageLayout
      title="Our History"
      description="The journey of Ranabir Janahit Secondary School from its establishment to becoming a leading educational institution."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Establishment */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Building className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Establishment</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ranabir Janahit Secondary School was established in <strong>2019 B.S.</strong> (1962 A.D.) in Khahare, 
            Waling Municipality Ward 1, Syangja District, Gandaki Province, Nepal. Founded with a vision to provide 
            quality education to the local community, the school has grown from humble beginnings to become a 
            comprehensive educational institution.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a <strong>government-aided community school</strong>, we have remained committed to our founding 
            principle of making education accessible and affordable to all students, regardless of their economic background.
          </p>
        </section>

        {/* Timeline */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Key Milestones</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <div className="font-semibold text-xl text-apex-midnight mb-2">2019 B.S. (1962 A.D.)</div>
              <p className="text-gray-700">School established as a primary school serving the local community of Khahare.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <div className="font-semibold text-xl text-apex-midnight mb-2">Early Years</div>
              <p className="text-gray-700">Expanded to include lower secondary education (Grades 6-8), responding to community needs.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <div className="font-semibold text-xl text-apex-midnight mb-2">Secondary Level</div>
              <p className="text-gray-700">Upgraded to secondary school status, offering education up to Grade 10 (SEE level).</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <div className="font-semibold text-xl text-apex-midnight mb-2">10+2 Programs</div>
              <p className="text-gray-700">Introduced higher secondary programs in Education and Management streams, affiliated with National Examination Board (NEB).</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <div className="font-semibold text-xl text-apex-midnight mb-2">Technical Education</div>
              <p className="text-gray-700">Launched CTEVT-affiliated Pre-Diploma and Diploma programs in Electrical Engineering, becoming a comprehensive technical education provider.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <div className="font-semibold text-xl text-apex-midnight mb-2">Recent Years</div>
              <p className="text-gray-700">Continuous infrastructure development, faculty enhancement, and expansion of facilities to serve over 1,000 students across all programs.</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Notable Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Academic Excellence</h3>
              <p className="text-gray-700">Consistent high performance in SEE and NEB examinations with numerous distinction holders.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">CTEVT Affiliation</h3>
              <p className="text-gray-700">Successfully established technical education programs recognized by national authorities.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Community Impact</h3>
              <p className="text-gray-700">Educated thousands of students who have gone on to successful careers and higher education.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Infrastructure Growth</h3>
              <p className="text-gray-700">Developed modern facilities including science labs, computer labs, and multimedia classrooms.</p>
            </div>
          </div>
        </section>

        {/* Legacy */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Legacy</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Over six decades of service to education, Ranabir Janahit Secondary School has built a strong legacy 
            of academic excellence, community service, and student success. Our alumni network spans across Nepal 
            and abroad, with graduates serving in various professional fields including education, engineering, 
            medicine, government service, and business. We continue to honor our founding vision while adapting 
            to modern educational needs and preparing students for the challenges of the 21st century.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
