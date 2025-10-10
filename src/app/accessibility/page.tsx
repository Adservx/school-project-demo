import { PageLayout } from "@/components/layout/page-layout";
import { Eye } from "lucide-react";

export default function AccessibilityPage() {
  return (
    <PageLayout
      title="Accessibility"
      description="Our commitment to making education accessible to all students."
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Accessibility Statement</h2>
          </div>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>Ranabir Janahit Secondary School is committed to ensuring accessibility for all students, including those with disabilities.</p>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">Our Commitment</h3>
            <p>We strive to provide an inclusive learning environment where all students can access quality education regardless of physical, sensory, or learning challenges.</p>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">Facilities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accessible campus infrastructure</li>
              <li>Support for students with special needs</li>
              <li>Inclusive teaching practices</li>
              <li>Assistive learning materials when needed</li>
            </ul>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">Website Accessibility</h3>
            <p>We are working to ensure our website meets accessibility standards. If you encounter any accessibility barriers, please contact us.</p>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">Feedback</h3>
            <p>We welcome feedback on accessibility. Contact us at ranabirjanahit@gmail.com</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
