import { PageLayout } from "@/components/layout/page-layout";
import { Sparkles, Music, Trophy, Palette, Users, BookOpen, Globe, Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extra-Curricular Activities - Ranabir Janahit Secondary School",
  description: "Explore diverse extra-curricular activities that nurture talents and develop well-rounded students.",
};

export default function ExtraCurricularActivitiesPage() {
  return (
    <PageLayout
      title="Extra-Curricular Activities"
      description="Discover your passions and develop new skills beyond the classroom."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Holistic Development</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Ranabir Janahit Secondary School, we believe that true education encompasses more than academic excellence.
            Our extensive Extra-Curricular Activities (ECA) program is designed to nurture the diverse talents and interests
            of our students, helping them develop into well-rounded individuals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through participation in ECAs, students discover their passions, build confidence, develop leadership skills,
            and forge lasting friendships while learning valuable life lessons outside the traditional classroom setting.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Trophy className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Activity Programs</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Music className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Cultural Activities</h3>
              </div>
              <p className="text-gray-700 mb-2">Celebrate and preserve our rich cultural heritage through various programs:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Traditional and modern dance performances</li>
                <li>• Music ensembles and instrumental training</li>
                <li>• Drama, theater, and cultural programs</li>
                <li>• Folk art and traditional craft workshops</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Trophy className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Sports & Athletics</h3>
              </div>
              <p className="text-gray-700 mb-2">Promote physical fitness and team spirit through diverse sports:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Football, volleyball, basketball, and cricket</li>
                <li>• Track and field athletics</li>
                <li>• Indoor games: table tennis, chess, carom</li>
                <li>• Annual sports meet and inter-school competitions</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Academic Clubs</h3>
              </div>
              <p className="text-gray-700 mb-2">Enhance learning through specialized interest groups:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Science club and innovation projects</li>
                <li>• Mathematics club and problem-solving</li>
                <li>• Language clubs (English, Nepali)</li>
                <li>• Quiz competitions and olympiads</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Palette className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Creative Arts</h3>
              </div>
              <p className="text-gray-700 mb-2">Express creativity through various artistic mediums:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Drawing, painting, and sketching</li>
                <li>• Handicrafts and creative projects</li>
                <li>• Photography and digital art</li>
                <li>• School magazine and newsletter</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Leadership & Service</h3>
              </div>
              <p className="text-gray-700 mb-2">Develop leadership and social responsibility:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Student council and prefect system</li>
                <li>• Community service projects</li>
                <li>• Environmental awareness campaigns</li>
                <li>• Social outreach programs</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Globe className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Special Programs</h3>
              </div>
              <p className="text-gray-700 mb-2">Unique opportunities for growth and exploration:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Educational tours and field trips</li>
                <li>• Guest speaker sessions and seminars</li>
                <li>• Career guidance workshops</li>
                <li>• Inter-school exchange programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Benefits of ECA Participation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Personal Development</h3>
              <p className="text-sm text-gray-700">Build self-confidence, discipline, and time management skills</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Social Skills</h3>
              <p className="text-sm text-gray-700">Enhance teamwork, communication, and interpersonal abilities</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Leadership Qualities</h3>
              <p className="text-sm text-gray-700">Develop initiative, responsibility, and decision-making capabilities</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Academic Enhancement</h3>
              <p className="text-sm text-gray-700">Complement classroom learning with practical experiences</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Physical Well-being</h3>
              <p className="text-sm text-gray-700">Maintain health and fitness through active participation</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Future Readiness</h3>
              <p className="text-sm text-gray-700">Develop skills valued by universities and employers</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">How to Participate</h2>
          </div>
          <div className="space-y-3 text-gray-700">
            <p>All students are encouraged to participate in at least one extra-curricular activity during the academic year.</p>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p><strong>Registration:</strong> Sign up for activities at the beginning of each term</p>
              <p><strong>Schedule:</strong> ECA sessions are held after regular classes and on designated activity days</p>
              <p><strong>Commitment:</strong> Regular participation and dedication are expected</p>
              <p><strong>Recognition:</strong> Outstanding participants are recognized in school events and reports</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Join Our ECA Programs</h2>
          <p className="mb-4">
            Discover your potential beyond academics. Contact the ECA coordinator to learn more
            about available activities and how to get involved.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
