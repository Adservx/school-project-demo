import { PageLayout } from "@/components/layout/page-layout";
import { FileText, CheckCircle } from "lucide-react";

export default function DocumentsPage() {
  return (
    <PageLayout title="Documents Required" description="List of documents needed for admission application.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Required Documents</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" /><p className="text-gray-700">Completed application form</p></div>
            <div className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" /><p className="text-gray-700">Recent passport-size photographs (4 copies)</p></div>
            <div className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" /><p className="text-gray-700">Previous academic certificates/transcripts</p></div>
            <div className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" /><p className="text-gray-700">Character certificate from previous school</p></div>
            <div className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" /><p className="text-gray-700">Transfer certificate (if applicable)</p></div>
            <div className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" /><p className="text-gray-700">Birth certificate or citizenship copy</p></div>
            <div className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" /><p className="text-gray-700">Parent/guardian citizenship copy</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="mb-4">Additional documents may be required for specific programs. Contact admissions office for details.</p>
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
