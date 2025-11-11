import { PageLayout } from "@/components/layout/page-layout";
import { Heart, Users, TreePine, BookOpen, Lightbulb, Handshake, Award, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Service - Ranabir Janahit Secondary School",
  description: "Making a difference through community service programs and social responsibility initiatives.",
};

export default function CommunityServicePage() {
  return (
    <PageLayout
      title="Community Service"
      description="Building character and citizenship through meaningful community engagement."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Service to Community</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Ranabir Janahit Secondary School, we believe in nurturing socially responsible citizens who
            contribute positively to their communities. Our community service program encourages students to
            actively participate in initiatives that address local needs and promote social welfare.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through service learning, students develop empathy, leadership skills, and a sense of civic duty
            while making tangible impacts in the lives of others and their surrounding community.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Service Programs</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <TreePine className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Environmental Conservation</h3>
              </div>
              <p className="text-gray-700 mb-2">Protecting our environment through active conservation efforts:</p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• Tree plantation drives and green campus initiatives</li>
                <li>• Clean-up campaigns in local areas and water sources</li>
                <li>• Waste management and recycling awareness programs</li>
                <li>• Environmental awareness campaigns in the community</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Education Outreach</h3>
              </div>
              <p className="text-gray-700 mb-2">Supporting education in underserved communities:</p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• Tutoring programs for younger students</li>
                <li>• Adult literacy classes for community members</li>
                <li>• Book donation drives for rural schools</li>
                <li>• Educational awareness programs in villages</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Health & Wellness</h3>
              </div>
              <p className="text-gray-700 mb-2">Promoting health and wellbeing in the community:</p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• Health awareness campaigns and hygiene education</li>
                <li>• Blood donation camps and health check-up programs</li>
                <li>• Nutrition awareness for mothers and children</li>
                <li>• Support for local health initiatives</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Lightbulb className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Social Awareness</h3>
              </div>
              <p className="text-gray-700 mb-2">Raising awareness on important social issues:</p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• Gender equality and women&apos;s empowerment programs</li>
                <li>• Child rights and protection awareness</li>
                <li>• Anti-drug and substance abuse campaigns</li>
                <li>• Disaster preparedness and safety education</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Handshake className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Community Development</h3>
              </div>
              <p className="text-gray-700 mb-2">Supporting local community development initiatives:</p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• Infrastructure improvement projects</li>
                <li>• Support for elderly and differently-abled persons</li>
                <li>• Cultural preservation and heritage protection</li>
                <li>• Livelihood skill training programs</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Emergency Response</h3>
              </div>
              <p className="text-gray-700 mb-2">Providing support during emergencies and disasters:</p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• Relief material collection and distribution</li>
                <li>• Fundraising for disaster-affected families</li>
                <li>• Volunteer support in emergency situations</li>
                <li>• First aid training and awareness programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Benefits of Community Service</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Character Development</h3>
              <p className="text-sm text-gray-700">Build empathy, compassion, and social responsibility</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Leadership Skills</h3>
              <p className="text-sm text-gray-700">Develop organizational and project management abilities</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Real-World Experience</h3>
              <p className="text-sm text-gray-700">Gain practical skills and understand social challenges</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Community Connections</h3>
              <p className="text-sm text-gray-700">Build relationships and networks in the local community</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Personal Growth</h3>
              <p className="text-sm text-gray-700">Increase self-confidence and sense of purpose</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Career Readiness</h3>
              <p className="text-sm text-gray-700">Enhance resume and develop valuable soft skills</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Student Testimonials</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-apex-gold">
              <p className="text-gray-700 italic mb-2">
                &quot;Participating in community service taught me the value of giving back. The tree plantation
                drive we organized made me realize how small actions can create big impacts.&quot;
              </p>
              <p className="text-sm text-apex-midnight font-semibold">- Grade 10 Student</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-apex-gold">
              <p className="text-gray-700 italic mb-2">
                &quot;Teaching basic electrical skills to villagers as part of our CTEVT service program
                was incredibly rewarding. It showed me how education can transform lives.&quot;
              </p>
              <p className="text-sm text-apex-midnight font-semibold">- Diploma Student</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">How to Participate</h2>
          <div className="space-y-4 text-gray-700">
            <p>All students are encouraged to participate in community service activities throughout the year.</p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
                <p><strong>Sign Up:</strong> Register for service activities through your class teacher or student council</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
                <p><strong>Regular Activities:</strong> Participate in scheduled community service programs throughout the year</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
                <p><strong>Leadership Roles:</strong> Take on organizing roles in planning and executing service projects</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
                <p><strong>Documentation:</strong> Service hours are recorded and recognized in student records</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
                <p><strong>Recognition:</strong> Outstanding service contributions are acknowledged in school events</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="h-6 w-6 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold">Get Involved</h2>
          </div>
          <p className="mb-4">
            Want to participate in community service programs or have ideas for new initiatives?
            Contact the student council or service coordinator to learn more about current
            and upcoming community service opportunities.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
