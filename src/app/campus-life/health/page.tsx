import { PageLayout } from "@/components/layout/page-layout";
import { Heart, Stethoscope, Apple, Brain, Activity, Shield, Phone, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & Wellness - Ranabir Janahit Secondary School",
  description: "Comprehensive health and wellness services to support student physical and mental wellbeing.",
};

export default function HealthWellnessPage() {
  return (
    <PageLayout
      title="Health & Wellness"
      description="Supporting the physical and mental wellbeing of our students and staff."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Commitment to Wellness</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Ranabir Janahit Secondary School, we recognize that healthy students are successful students.
            Our comprehensive health and wellness program ensures that students have access to the care and
            support they need to thrive academically, physically, and emotionally.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We maintain a safe and nurturing environment where students can develop healthy habits and
            receive prompt attention for any health concerns.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Stethoscope className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Health Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">First Aid Services</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Immediate first aid care available during school hours for minor injuries, illnesses,
                and emergencies.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Basic first aid treatment</li>
                <li>• Emergency response protocols</li>
                <li>• Trained staff on duty</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Activity className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Health Monitoring</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Regular health check-ups and monitoring to ensure student wellbeing and early
                detection of health issues.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Annual health screenings</li>
                <li>• Height and weight monitoring</li>
                <li>• Vision and hearing checks</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Apple className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Nutrition Guidance</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Education and guidance on healthy eating habits and nutritional requirements
                for growing students.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Nutrition education programs</li>
                <li>• Healthy eating awareness</li>
                <li>• Dietary guidance</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Mental Health Support</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Counseling services and mental health support to help students manage stress,
                anxiety, and emotional challenges.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Individual counseling</li>
                <li>• Stress management workshops</li>
                <li>• Peer support programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Wellness Programs</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Health Education Classes</h3>
                <p className="text-gray-700">Regular classes on personal hygiene, disease prevention, and healthy lifestyle choices</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Physical Fitness Activities</h3>
                <p className="text-gray-700">Daily physical education classes and sports programs to promote active lifestyles</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Mental Wellness Workshops</h3>
                <p className="text-gray-700">Sessions on emotional intelligence, mindfulness, and stress management techniques</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Health Awareness Campaigns</h3>
                <p className="text-gray-700">Regular campaigns on topics like dental health, eye care, and disease prevention</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Parent Health Consultations</h3>
                <p className="text-gray-700">Regular communication with parents about student health and wellness matters</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Emergency Procedures</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              We have comprehensive emergency procedures in place to handle any health emergencies
              that may arise during school hours:
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                <p className="text-gray-700"><strong>Immediate parent notification</strong> for any significant health issues</p>
              </div>
              <div className="flex items-start space-x-2">
                <Shield className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                <p className="text-gray-700"><strong>Coordination with local health facilities</strong> for emergency medical care</p>
              </div>
              <div className="flex items-start space-x-2">
                <Activity className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                <p className="text-gray-700"><strong>Trained staff</strong> available to administer first aid and emergency response</p>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                <p className="text-gray-700"><strong>24/7 emergency contact system</strong> for urgent situations</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Health & Wellness Contact</h2>
          <p className="mb-4">
            For health-related concerns, emergency situations, or questions about our wellness programs,
            please contact the school administration.
          </p>
          <p className="text-sm mb-4">
            <strong>Emergency Contact:</strong> +977 9856029222, +977 9846113663
          </p>
          <p className="text-sm">
            <strong>Email:</strong> ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
