import { PageLayout } from "@/components/layout/page-layout";
import { ClipboardList } from "lucide-react";

export default function ProcessPage() {
  return (
    <PageLayout title="Admission Process" description="Step-by-step guide to applying for admission.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <ClipboardList className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">How to Apply</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-apex-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
              <div><h3 className="font-semibold text-lg text-apex-midnight mb-1">Get Application Form</h3><p className="text-gray-700">Visit school office or download online</p></div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-apex-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
              <div><h3 className="font-semibold text-lg text-apex-midnight mb-1">Complete Form</h3><p className="text-gray-700">Fill all required information accurately</p></div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-apex-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
              <div><h3 className="font-semibold text-lg text-apex-midnight mb-1">Gather Documents</h3><p className="text-gray-700">Prepare all required certificates and documents</p></div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-apex-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
              <div><h3 className="font-semibold text-lg text-apex-midnight mb-1">Submit Application</h3><p className="text-gray-700">Submit form with documents and application fee</p></div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-apex-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">5</div>
              <div><h3 className="font-semibold text-lg text-apex-midnight mb-1">Entrance Test/Interview</h3><p className="text-gray-700">Attend as scheduled for your program</p></div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-apex-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">6</div>
              <div><h3 className="font-semibold text-lg text-apex-midnight mb-1">Admission Decision</h3><p className="text-gray-700">Receive notification and complete enrollment</p></div>
            </div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
