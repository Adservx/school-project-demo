import { PageLayout } from "@/components/layout/page-layout";
import { Users, GraduationCap, BookOpen } from "lucide-react";

export default function FacultyPage() {
  return (
    <PageLayout
      title="Our Faculty"
      description="Meet our dedicated team of experienced educators committed to student success."
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Excellence in Teaching</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our faculty comprises highly qualified and experienced educators who are passionate about teaching and 
            committed to student success. With expertise spanning general education, higher secondary programs, and 
            technical training, our teachers bring both academic knowledge and practical experience to the classroom.
          </p>
        </section>

        {/* Faculty Departments */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-8">Academic Departments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-apex-gold/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="h-10 w-10 text-apex-gold mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Primary Education</h3>
              <p className="text-gray-700 mb-3">Grades 1-5</p>
              <p className="text-sm text-gray-600">Experienced teachers specializing in early childhood and primary education with child-centered teaching approaches.</p>
            </div>

            <div className="border border-apex-gold/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="h-10 w-10 text-apex-gold mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Lower Secondary</h3>
              <p className="text-gray-700 mb-3">Grades 6-8</p>
              <p className="text-sm text-gray-600">Subject specialists in Mathematics, Science, English, Nepali, and Social Studies.</p>
            </div>

            <div className="border border-apex-gold/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="h-10 w-10 text-apex-gold mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Secondary</h3>
              <p className="text-gray-700 mb-3">Grades 9-10</p>
              <p className="text-sm text-gray-600">Expert faculty preparing students for SEE examinations with comprehensive subject knowledge.</p>
            </div>

            <div className="border border-apex-gold/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="h-10 w-10 text-apex-gold mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Education Stream</h3>
              <p className="text-gray-700 mb-3">10+2 NEB</p>
              <p className="text-sm text-gray-600">Qualified instructors in Education, English, Nepali, and related subjects.</p>
            </div>

            <div className="border border-apex-gold/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="h-10 w-10 text-apex-gold mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Management Stream</h3>
              <p className="text-gray-700 mb-3">10+2 NEB</p>
              <p className="text-sm text-gray-600">Faculty with expertise in Business Studies, Economics, Accountancy, and Marketing.</p>
            </div>

            <div className="border border-apex-gold/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="h-10 w-10 text-apex-gold mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Technical Education</h3>
              <p className="text-gray-700 mb-3">CTEVT Programs</p>
              <p className="text-sm text-gray-600">Industry-experienced instructors in Electrical Engineering with practical training expertise.</p>
            </div>
          </div>
        </section>

        {/* Faculty Qualifications */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Qualifications & Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-apex-platinum/20 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Academic Credentials</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Master's and Bachelor's degrees from recognized universities</li>
                <li>• Specialized training in respective subject areas</li>
                <li>• Teaching licenses and certifications</li>
                <li>• Continuous professional development</li>
              </ul>
            </div>

            <div className="bg-apex-platinum/20 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Teaching Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Years of classroom teaching experience</li>
                <li>• Proven track record of student success</li>
                <li>• Expertise in examination preparation</li>
                <li>• Student counseling and mentorship</li>
              </ul>
            </div>

            <div className="bg-apex-platinum/20 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Technical Expertise</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Industry experience in technical fields</li>
                <li>• Practical training and laboratory skills</li>
                <li>• CTEVT-certified instructors</li>
                <li>• Updated with latest industry standards</li>
              </ul>
            </div>

            <div className="bg-apex-platinum/20 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Professional Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Regular training workshops and seminars</li>
                <li>• Curriculum development participation</li>
                <li>• Educational technology integration</li>
                <li>• Research and publication activities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Teaching Approach */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Our Teaching Philosophy</h2>
          <div className="space-y-4 text-gray-700">
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Student-Centered Learning</h3>
              <p>We prioritize individual student needs, learning styles, and pace, ensuring every student receives personalized attention and support.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Interactive Teaching</h3>
              <p>Our faculty employs engaging teaching methods including discussions, group work, practical demonstrations, and hands-on activities.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Holistic Development</h3>
              <p>Beyond academics, our teachers focus on developing critical thinking, creativity, ethical values, and life skills.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Continuous Assessment</h3>
              <p>Regular evaluation and feedback help students track their progress and identify areas for improvement.</p>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Join Our Faculty</h2>
          <p className="mb-4 leading-relaxed">
            We are always looking for passionate, qualified educators to join our team. If you are committed to 
            excellence in teaching and student success, we invite you to explore career opportunities at Ranabir 
            Janahit Secondary School.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> ranabirjanahit@gmail.com | +977 9856029222
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
