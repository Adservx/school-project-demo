import { PageLayout } from "@/components/layout/page-layout";
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  return (
    <PageLayout title="Frequently Asked Questions" description="Common questions about admissions and our programs.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <HelpCircle className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Admission FAQs</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">When can I apply?</h3>
              <p className="text-gray-700">Applications are accepted throughout the year based on seat availability.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">What programs do you offer?</h3>
              <p className="text-gray-700">Grades Nursery-12, 10+2 Education & Management, CTEVT Electrical Engineering programs.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Are scholarships available?</h3>
              <p className="text-gray-700">Yes, we offer merit-based and need-based scholarships for deserving students.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Can I visit the campus?</h3>
              <p className="text-gray-700">Yes, campus visits can be arranged by appointment. Contact our office to schedule.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">What is the fee structure?</h3>
              <p className="text-gray-700">Fee structure varies by program. Contact admissions office for detailed information.</p>
            </div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="mb-4">Have more questions? Contact our admissions office.</p>
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
