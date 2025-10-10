import { PageLayout } from "@/components/layout/page-layout";
import { Users, Heart, Trophy, Music } from "lucide-react";

export default function StudentLifePage() {
  return (
    <PageLayout
      title="Student Life"
      description="A vibrant campus community with diverse activities, clubs, and opportunities for personal growth."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Campus Life</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Student life at Ranabir Janahit Secondary School extends beyond the classroom. We provide 
            a supportive, inclusive environment where students can explore their interests, develop 
            leadership skills, and build lasting friendships.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Trophy className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Extra-Curricular Activities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Sports</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Football, volleyball, basketball</li>
                <li>• Athletics and track events</li>
                <li>• Inter-house competitions</li>
                <li>• District level tournaments</li>
              </ul>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Cultural Activities</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Music and dance programs</li>
                <li>• Drama and theater</li>
                <li>• Cultural festivals</li>
                <li>• Talent shows</li>
              </ul>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Academic Clubs</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Science club</li>
                <li>• Debate society</li>
                <li>• Literary club</li>
                <li>• Mathematics club</li>
              </ul>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Community Service</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Environmental initiatives</li>
                <li>• Social awareness programs</li>
                <li>• Community outreach</li>
                <li>• Volunteer activities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Student Support</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Counseling Services</h3>
              <p className="text-gray-700 text-sm">Academic and personal counseling for student well-being</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Health & Wellness</h3>
              <p className="text-gray-700 text-sm">First aid facilities and health awareness programs</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Career Guidance</h3>
              <p className="text-gray-700 text-sm">Support for higher education and career planning</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Peer Support</h3>
              <p className="text-gray-700 text-sm">Student mentorship and peer learning programs</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Music className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Annual Events</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Annual Sports Day with various competitions</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Cultural programs and talent shows</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Science exhibitions and project displays</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Educational tours and field trips</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Inter-school competitions and events</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-4">
            Experience the vibrant student life at Ranabir Janahit Secondary School. Apply now or 
            schedule a campus visit to learn more.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
