import { PageLayout } from "@/components/layout/page-layout";
import { Music, Palette, Users, Trophy, Theater, BookOpen, Heart, Calendar } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Activities - Ranabir Janahit Secondary School",
  description: "Explore the diverse range of student activities, clubs, and organizations at Ranabir Janahit Secondary School.",
};

export default function StudentActivitiesPage() {
  return (
    <PageLayout
      title="Student Activities"
      description="Engage in diverse extracurricular activities that enhance learning and personal growth."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Beyond the Classroom</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Ranabir Janahit Secondary School, we believe that education extends far beyond textbooks and classrooms.
            Our comprehensive student activities program is designed to develop well-rounded individuals with diverse
            skills, interests, and experiences.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Students have the opportunity to participate in various clubs, competitions, cultural events, and
            community service activities that complement their academic learning.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Activity Categories</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Music className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Music & Dance</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• School choir and vocal groups</li>
                <li>• Traditional dance teams</li>
                <li>• Music competitions and performances</li>
                <li>• Cultural program presentations</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Palette className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Arts & Crafts</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Drawing and painting workshops</li>
                <li>• Handicraft and creative arts</li>
                <li>• Art exhibitions and competitions</li>
                <li>• Cultural heritage projects</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Theater className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Drama & Debate</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Theater productions and plays</li>
                <li>• Debate club and competitions</li>
                <li>• Public speaking training</li>
                <li>• Poetry and storytelling events</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Competitions</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Inter-house competitions</li>
                <li>• Quiz and spelling bee contests</li>
                <li>• Science and math olympiads</li>
                <li>• District and regional events</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Literary Activities</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• School magazine and newsletter</li>
                <li>• Creative writing workshops</li>
                <li>• Book clubs and reading groups</li>
                <li>• Essay and poetry competitions</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Community Service</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Social awareness campaigns</li>
                <li>• Environmental clean-up drives</li>
                <li>• Volunteer programs</li>
                <li>• Community outreach projects</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Benefits of Participation</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Leadership Development</h3>
                <p className="text-gray-700">Build confidence, teamwork, and leadership skills through active participation</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Social Skills</h3>
                <p className="text-gray-700">Develop communication, collaboration, and interpersonal abilities</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Cultural Awareness</h3>
                <p className="text-gray-700">Appreciate diversity and understand different perspectives</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Time Management</h3>
                <p className="text-gray-700">Learn to balance academics with extracurricular commitments</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Personal Growth</h3>
                <p className="text-gray-700">Discover new talents, interests, and passions beyond academics</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Get Involved</h2>
          <p className="mb-4">
            Students are encouraged to participate in at least one extracurricular activity.
            Contact your class teacher or the activity coordinator to learn more about joining
            clubs and activities that interest you.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
