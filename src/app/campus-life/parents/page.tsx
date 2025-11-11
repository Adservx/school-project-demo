import { PageLayout } from "@/components/layout/page-layout";
import { Users, Calendar, Heart, MessageCircle, Handshake, Book, Award, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent Association - Ranabir Janahit Secondary School",
  description: "Join our active parent community and support your child's educational journey at Ranabir Janahit Secondary School.",
};

export default function ParentAssociationPage() {
  return (
    <PageLayout
      title="Parent Association"
      description="Building a strong partnership between home and school for student success."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Welcome to Our Parent Community</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The Parent Association at Ranabir Janahit Secondary School plays a vital role in creating
            a supportive educational environment for our students. We believe that strong partnerships
            between parents, teachers, and the school administration are essential for student success.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through active involvement, parents contribute to school development, support educational
            programs, and help create a nurturing community where every child can thrive.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Handshake className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Mission</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Foster strong communication between parents, teachers, and school administration</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Support and enhance educational programs and school activities</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Create a welcoming and inclusive school community</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Advocate for the needs and interests of students and families</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Organize events that strengthen the school community</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Parent Association Activities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Regular Meetings</h3>
              </div>
              <p className="text-gray-700">
                Monthly meetings to discuss school matters, share updates, and collaborate
                on initiatives that benefit students and the school community.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Volunteer Programs</h3>
              </div>
              <p className="text-gray-700">
                Opportunities to volunteer in school activities, events, library services,
                and classroom support programs.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Event Organization</h3>
              </div>
              <p className="text-gray-700">
                Help plan and execute school events including cultural programs, sports days,
                parent-teacher meetings, and celebrations.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Book className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Educational Support</h3>
              </div>
              <p className="text-gray-700">
                Assist with educational tours, guest speaker programs, career guidance sessions,
                and learning enrichment activities.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Fundraising</h3>
              </div>
              <p className="text-gray-700">
                Organize fundraising activities to support school infrastructure development,
                student scholarships, and special programs.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Parent Workshops</h3>
              </div>
              <p className="text-gray-700">
                Attend workshops on parenting skills, child development, academic support,
                and navigating educational challenges.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Benefits of Involvement</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Better Understanding</h3>
                <p className="text-gray-700">Gain insight into your child&apos;s educational experience and school environment</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Improved Communication</h3>
                <p className="text-gray-700">Build direct relationships with teachers and administrators</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Student Success</h3>
                <p className="text-gray-700">Research shows that parent involvement correlates with better academic outcomes</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Community Building</h3>
                <p className="text-gray-700">Connect with other parents and build a supportive network</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Positive Role Modeling</h3>
                <p className="text-gray-700">Show your children the importance of education and community involvement</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">How to Get Involved</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              All parents and guardians are automatically members of the Parent Association and are
              encouraged to participate actively. Here&apos;s how you can get involved:
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Attend meetings:</strong> Join monthly parent association meetings held at the school</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Volunteer:</strong> Sign up for volunteer opportunities that match your interests and schedule</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Join committees:</strong> Participate in specific committees focusing on events, fundraising, or academics</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Share ideas:</strong> Contribute suggestions and feedback to improve school programs</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Stay informed:</strong> Keep up with school news, updates, and parent association activities</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="h-6 w-6 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold">Contact Parent Association</h2>
          </div>
          <p className="mb-4">
            Have questions about the Parent Association or want to get more involved? We&apos;d love to hear from you!
            Contact the school office to connect with parent association representatives.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
