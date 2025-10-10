import { PageLayout } from "@/components/layout/page-layout";
import { Award } from "lucide-react";

export default function ScholarshipsPage() {
  return (
    <PageLayout title="Scholarships" description="Financial assistance and scholarship opportunities for deserving students.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Scholarship Programs</h2>
          </div>
          <p className="text-gray-700 mb-4">We offer various scholarships to support talented and deserving students.</p>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Merit Scholarships</h3>
              <p className="text-gray-700">For students with excellent academic performance</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Need-Based Support</h3>
              <p className="text-gray-700">Financial assistance for economically disadvantaged students</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Government Programs</h3>
              <p className="text-gray-700">Support from government and local authorities</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Special Categories</h3>
              <p className="text-gray-700">Support for marginalized communities and differently-abled students</p>
            </div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="mb-4">For scholarship application and eligibility criteria, contact our office.</p>
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
