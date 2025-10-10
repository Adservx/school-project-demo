import { PageLayout } from "@/components/layout/page-layout";
import { BookOpen } from "lucide-react";

export default function PlusTwoAdmissionPage() {
  return (
    <PageLayout title="10+2 Admission" description="Admission information for Education and Management streams.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">10+2 Programs Admission</h2>
          </div>
          <p className="text-gray-700 mb-4">Admission to our NEB-affiliated Education and Management streams.</p>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Eligibility</h3><p className="text-gray-700 text-sm">SEE pass with minimum GPA as per NEB requirements</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Programs</h3><p className="text-gray-700 text-sm">Education Stream, Management Stream</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Documents</h3><p className="text-gray-700 text-sm">SEE certificate, character certificate, transfer certificate, citizenship copy</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
