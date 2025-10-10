import { PageLayout } from "@/components/layout/page-layout";
import { Users, Award, Heart, Mail } from "lucide-react";

export default function AlumniPage() {
  return (
    <PageLayout
      title="Alumni Network"
      description="Stay connected with Ranabir Janahit Secondary School and fellow alumni."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Alumni Community</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our alumni are our pride and ambassadors. Since our establishment in 2019 B.S., we have educated 
            thousands of students who have gone on to successful careers in various fields including education, 
            engineering, medicine, government service, and business.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Alumni Achievements</h2>
          </div>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Higher Education</h3>
              <p className="text-gray-700">Alumni pursuing degrees at top universities in Nepal and abroad</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Professional Success</h3>
              <p className="text-gray-700">Graduates working in leading companies, government, and organizations</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Entrepreneurship</h3>
              <p className="text-gray-700">Alumni running successful businesses and contributing to economic development</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Community Service</h3>
              <p className="text-gray-700">Former students giving back through teaching, social work, and community initiatives</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Stay Connected</h2>
          </div>
          <p className="text-gray-700 mb-4">We encourage our alumni to stay connected with the school and fellow graduates:</p>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Attend alumni reunions and school events</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Share your success stories and experiences</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Mentor current students</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Support school development initiatives</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Connect with fellow alumni through our network</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Mail className="h-6 w-6 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold">Get in Touch</h2>
          </div>
          <p className="mb-4">
            If you are an alumnus of Ranabir Janahit Secondary School, we would love to hear from you! 
            Share your updates, achievements, and stay connected with your alma mater.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
