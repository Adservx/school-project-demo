import { PageLayout } from "@/components/layout/page-layout";
import { Zap } from "lucide-react";

export default function CTEVTAdmissionPage() {
  return (
    <PageLayout title="CTEVT Programs Admission" description="Admission to Pre-Diploma and Diploma in Electrical Engineering.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Technical Education Admission</h2>
          </div>
          <p className="text-gray-700 mb-4">Admission to CTEVT-affiliated electrical engineering programs.</p>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Pre-Diploma</h3><p className="text-gray-700 text-sm">18 months program, SEE pass or equivalent</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Diploma</h3><p className="text-gray-700 text-sm">3 years program, SEE pass or equivalent</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Requirements</h3><p className="text-gray-700 text-sm">SEE certificate, interest in technical field, required documents</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
