import { PageLayout } from "@/components/layout/page-layout";
import { Award } from "lucide-react";

export default function NEBPage() {
  return (
    <PageLayout title="NEB Affiliation" description="Our 10+2 programs are affiliated with the National Examination Board.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">NEB Affiliation</h2>
          </div>
          <p className="text-gray-700 mb-4">Our 10+2 Education and Management programs are affiliated with the National Examination Board (NEB), ensuring nationally recognized qualifications.</p>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2"><p className="text-gray-700">Nationally recognized certificates</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><p className="text-gray-700">Standard curriculum and examination system</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><p className="text-gray-700">Pathway to higher education</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
