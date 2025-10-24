import { PageLayout } from "@/components/layout/page-layout";
import { Calendar, Trophy, Music, BookOpen, Users, Heart, Globe, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Programs - Ranabir Janahit Secondary School",
  description: "Explore our diverse school programs designed to nurture academic excellence, character development, and lifelong learning.",
};

export default function SchoolProgramsPage() {
  return (
    <PageLayout
      title="School Programs"
      description="Comprehensive programs designed to develop well-rounded, successful students."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Educational Programs</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ranabir Janahit Secondary School offers a wide range of programs designed to support student
            development in all areas - academic, social, emotional, and physical. Our programs go beyond
            traditional classroom instruction to provide holistic education that prepares students for
            success in life.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Each program is carefully designed to meet the diverse needs of our students while fostering
            excellence, character, and a love for learning.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Academic Programs</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <h3 className="font-semibold text-xl text-apex-midnight mb-2">Academic Excellence Initiative</h3>
              <p className="text-gray-700 mb-2">
                Special programs to help high-achieving students reach their full potential through
                advanced coursework, competitions, and enrichment activities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Advanced learning modules and challenges</li>
                <li>• Preparation for olympiads and competitions</li>
                <li>• Research projects and presentations</li>
                <li>• Mentorship from experienced educators</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <h3 className="font-semibold text-xl text-apex-midnight mb-2">Remedial Support Program</h3>
              <p className="text-gray-700 mb-2">
                Additional support for students who need extra help to master concepts and improve
                academic performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Individual and small group tutoring</li>
                <li>• After-school support sessions</li>
                <li>• Learning strategy workshops</li>
                <li>• Regular progress monitoring</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <h3 className="font-semibold text-xl text-apex-midnight mb-2">Exam Preparation Programs</h3>
              <p className="text-gray-700 mb-2">
                Comprehensive preparation for SEE, NEB, and CTEVT examinations to ensure student success.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Mock examinations and practice tests</li>
                <li>• Exam strategy and time management</li>
                <li>• Subject-specific review sessions</li>
                <li>• Past paper analysis and discussion</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Character Development Programs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Leadership Program</h3>
              <p className="text-gray-700 text-sm">
                Develop leadership skills through student council, prefect systems, and leadership
                workshops that build confidence and responsibility.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Life Skills Education</h3>
              <p className="text-gray-700 text-sm">
                Essential life skills including communication, decision-making, problem-solving,
                critical thinking, and emotional intelligence.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Values Education</h3>
              <p className="text-gray-700 text-sm">
                Character building through moral education, ethical values, respect for diversity,
                and social responsibility.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Community Service</h3>
              <p className="text-gray-700 text-sm">
                Opportunities for students to give back through volunteer work, social projects,
                and community development initiatives.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Trophy className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Co-Curricular Programs</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Music className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Arts & Culture Program</h3>
                <p className="text-gray-700">Music, dance, drama, and visual arts programs to nurture creativity and cultural appreciation</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Trophy className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Sports & Physical Education</h3>
                <p className="text-gray-700">Comprehensive sports program including team sports, athletics, and physical fitness activities</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Globe className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Environmental Education</h3>
                <p className="text-gray-700">Programs promoting environmental awareness, conservation, and sustainable practices</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <BookOpen className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Reading & Library Program</h3>
                <p className="text-gray-700">Initiatives to promote reading culture, book clubs, and library-based learning activities</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Special Events & Activities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Annual Sports Meet</h3>
              <p className="text-sm text-gray-700">Inter-house sports competitions promoting teamwork, fitness, and school spirit</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Cultural Festival</h3>
              <p className="text-sm text-gray-700">Celebration of arts, music, dance, and cultural diversity through performances and exhibitions</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Science Fair</h3>
              <p className="text-sm text-gray-700">Student science projects, experiments, and innovations showcased annually</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Educational Tours</h3>
              <p className="text-sm text-gray-700">Field trips to historical sites, industries, and educational institutions</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Career Fair</h3>
              <p className="text-sm text-gray-700">Interaction with professionals, higher education representatives, and career counselors</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Annual Day Celebration</h3>
              <p className="text-sm text-gray-700">Year-end celebration featuring awards, performances, and recognition of achievements</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Support Programs</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700"><strong>Scholarship Program:</strong> Financial support for deserving and underprivileged students</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700"><strong>Counseling Services:</strong> Academic, career, and personal counseling support</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700"><strong>Parent Engagement:</strong> Regular communication and involvement of parents in student development</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700"><strong>Health & Wellness:</strong> Programs promoting physical and mental health of students</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700"><strong>Special Needs Support:</strong> Individualized support for students with learning differences</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Learn More About Our Programs</h2>
          <p className="mb-4">
            For detailed information about any of our programs, enrollment procedures, or how your
            child can participate, please contact the school office or schedule a campus visit.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
