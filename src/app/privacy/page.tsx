import { PageLayout } from "@/components/layout/page-layout";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information."
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Privacy Policy</h2>
          </div>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>Last updated: January 2025</p>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">Information We Collect</h3>
            <p>We collect information that you provide directly to us, including when you apply for admission, contact us, or use our services.</p>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">How We Use Your Information</h3>
            <p>We use the information we collect to process applications, communicate with students and parents, improve our services, and comply with legal obligations.</p>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">Information Security</h3>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">Contact Us</h3>
            <p>If you have questions about this Privacy Policy, please contact us at ranabirjanahit@gmail.com</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
