import { PageLayout } from "@/components/layout/page-layout";
import { Trophy, Users, Heart, Target, Award, Calendar, CheckCircle, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Programs - Ranabir Janahit Secondary School",
  description: "Comprehensive sports and athletics programs promoting physical fitness, teamwork, and sportsmanship.",
};

export default function SportsPage() {
  return (
    <PageLayout
      title="Sports Programs"
      description="Promoting physical fitness, teamwork, and competitive spirit through diverse sports activities."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Trophy className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Athletics & Physical Education</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Ranabir Janahit Secondary School, we believe that physical education is as important as
            academic excellence. Our comprehensive sports program is designed to promote physical fitness,
            develop athletic skills, foster teamwork, and instill values of sportsmanship and discipline.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Students have the opportunity to participate in various sports activities, compete in tournaments,
            and develop healthy lifestyles that will benefit them throughout their lives.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Sports Activities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Outdoor Sports</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Football (Soccer)</li>
                <li>• Volleyball</li>
                <li>• Basketball</li>
                <li>• Cricket</li>
                <li>• Track and Field Athletics</li>
                <li>• Badminton</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Indoor Sports</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Table Tennis</li>
                <li>• Chess</li>
                <li>• Carom</li>
                <li>• Indoor Badminton</li>
                <li>• Yoga and Fitness</li>
                <li>• Martial Arts</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Athletics Programs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Sprinting (100m, 200m, 400m)</li>
                <li>• Long Distance Running</li>
                <li>• High Jump & Long Jump</li>
                <li>• Shot Put & Javelin</li>
                <li>• Relay Races</li>
                <li>• Cross Country</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <h3 className="font-semibold text-xl text-apex-midnight mb-3">Fitness Activities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Physical Training (PT)</li>
                <li>• Aerobics and Dance Fitness</li>
                <li>• Strength Training</li>
                <li>• Flexibility Exercises</li>
                <li>• Sports-Specific Training</li>
                <li>• Wellness Programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Sports Programs & Events</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Daily Physical Education</h3>
                <p className="text-gray-700">Regular PE classes for all students focusing on fitness, skills, and sports fundamentals</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Annual Sports Day</h3>
                <p className="text-gray-700">Major annual event featuring athletics competitions, team sports, and cultural performances</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Inter-House Competitions</h3>
                <p className="text-gray-700">Regular house competitions throughout the year promoting friendly rivalry and team spirit</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Inter-School Tournaments</h3>
                <p className="text-gray-700">Participation in district and regional level competitions in various sports</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Sports Training Camps</h3>
                <p className="text-gray-700">Intensive training sessions during holidays for students interested in competitive sports</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Sports Coaching</h3>
                <p className="text-gray-700">Specialized coaching for talented students in specific sports disciplines</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Benefits of Sports Participation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Physical Health</h3>
              <p className="text-sm text-gray-700">Improved fitness, strength, endurance, and overall physical well-being</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Mental Well-being</h3>
              <p className="text-sm text-gray-700">Reduced stress, improved mood, and enhanced mental health</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Teamwork Skills</h3>
              <p className="text-sm text-gray-700">Learn cooperation, collaboration, and how to work effectively with others</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Discipline & Dedication</h3>
              <p className="text-sm text-gray-700">Develop commitment, time management, and goal-setting abilities</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Leadership Qualities</h3>
              <p className="text-sm text-gray-700">Build confidence, decision-making skills, and leadership capabilities</p>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/5 to-transparent rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-apex-midnight mb-2">Academic Performance</h3>
              <p className="text-sm text-gray-700">Studies show correlation between physical activity and better academic results</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Sports Facilities</h2>
          </div>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Playing Fields</h3>
              <p className="text-gray-700 text-sm">Large outdoor grounds for football, volleyball, cricket, and athletics</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Basketball & Volleyball Courts</h3>
              <p className="text-gray-700 text-sm">Dedicated courts with proper markings and equipment</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Indoor Sports Area</h3>
              <p className="text-gray-700 text-sm">Covered space for table tennis, badminton, and indoor games</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Sports Equipment</h3>
              <p className="text-gray-700 text-sm">Quality sports equipment and gear available for all activities</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Changing Facilities</h3>
              <p className="text-gray-700 text-sm">Separate changing rooms and storage for sports equipment</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Join Our Sports Programs</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              All students are encouraged to participate in sports activities. Whether you&apos;re an experienced
              athlete or just starting out, our sports program has something for everyone.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Registration:</strong> Sign up for sports teams at the beginning of each academic term</p>
              <p className="text-gray-700"><strong>Schedule:</strong> Sports activities are held during PE classes and after school</p>
              <p className="text-gray-700"><strong>Requirements:</strong> Medical clearance and parental consent for participation</p>
              <p className="text-gray-700"><strong>Recognition:</strong> Awards and certificates for outstanding performance and sportsmanship</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="h-6 w-6 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold">Sports Program Information</h2>
          </div>
          <p className="mb-4">
            For more information about our sports programs, facilities, or how to get involved,
            contact the school&apos;s sports coordinator or administration office.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
