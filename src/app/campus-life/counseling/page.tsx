import { PageLayout } from "@/components/layout/page-layout";
import { Heart, Users, MessageCircle, Shield, BookOpen, Brain, Clock, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counseling Services - Ranabir Janahit Secondary School",
  description: "Professional counseling and support services for student well-being and academic success.",
};

export default function CounselingPage() {
  return (
    <PageLayout
      title="Counseling Services"
      description="Supporting student well-being, mental health, and academic success through professional guidance."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Commitment to Student Well-being</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Ranabir Janahit Secondary School, we understand that academic success is closely linked to
            emotional and mental well-being. Our counseling services provide a safe, confidential environment
            where students can discuss their concerns, receive guidance, and develop strategies for personal growth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our trained counselors are dedicated to helping students navigate academic challenges, social issues,
            personal development, and career planning.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <MessageCircle className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Counseling Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Academic Counseling</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Study skills and time management</li>
                <li>• Subject selection guidance</li>
                <li>• Learning difficulties support</li>
                <li>• Academic goal setting</li>
                <li>• Exam preparation strategies</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Career Guidance</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Career exploration and planning</li>
                <li>• Higher education options</li>
                <li>• Vocational training pathways</li>
                <li>• College application support</li>
                <li>• Future planning workshops</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Personal Counseling</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Emotional support and guidance</li>
                <li>• Stress and anxiety management</li>
                <li>• Self-esteem building</li>
                <li>• Conflict resolution</li>
                <li>• Personal development</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Crisis Support</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Immediate support for urgent issues</li>
                <li>• Bullying and harassment intervention</li>
                <li>• Family crisis support</li>
                <li>• Referral to specialized services</li>
                <li>• Follow-up care</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">How Counseling Helps</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Improved Academic Performance</h3>
                <p className="text-gray-700">Students develop better study habits, time management skills, and learning strategies</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Enhanced Social Skills</h3>
                <p className="text-gray-700">Build confidence in communication, relationships, and social interactions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Better Mental Health</h3>
                <p className="text-gray-700">Learn coping mechanisms for stress, anxiety, and emotional challenges</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Clearer Life Direction</h3>
                <p className="text-gray-700">Make informed decisions about education, career, and personal goals</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Increased Resilience</h3>
                <p className="text-gray-700">Develop problem-solving skills and emotional strength to face challenges</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Accessing Counseling Services</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              <strong>Confidentiality:</strong> All counseling sessions are confidential. Information is only
              shared with permission or when required by law for student safety.
            </p>
            <p className="leading-relaxed">
              <strong>Scheduling:</strong> Students can schedule appointments through their class teacher or
              directly with the counseling office. Walk-in consultations are available for urgent matters.
            </p>
            <p className="leading-relaxed">
              <strong>Parent Involvement:</strong> Parents are welcome to schedule meetings to discuss their
              child&apos;s progress, concerns, or to seek guidance on supporting their child&apos;s development.
            </p>
            <p className="leading-relaxed">
              <strong>Group Sessions:</strong> We also offer group counseling sessions and workshops on topics
              like stress management, peer relationships, and study skills.
            </p>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="h-6 w-6 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold">Schedule a Counseling Session</h2>
          </div>
          <p className="mb-4">
            Our counselors are here to help. Don&apos;t hesitate to reach out if you or your child needs support.
            All services are confidential and provided with care and professionalism.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
