import { PageLayout } from "@/components/layout/page-layout";
import { Wrench } from "lucide-react";

export default function VocationalPage() {
  return (
    <PageLayout title="Vocational Training" description="Practical skills training for employment and entrepreneurship.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Wrench className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Vocational Training</h2>
          </div>
          <p className="text-gray-700 mb-4">Our vocational training programs provide practical skills for immediate employment or self-employment opportunities.</p>
          <div className="space-y-2">
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Hands-on practical training</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Industry-relevant skills</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Employment opportunities</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
