import { PageLayout } from "@/components/layout/page-layout";
import { MapPin } from "lucide-react";

export default function ToursPage() {
  return (
    <PageLayout title="Educational Tours" description="Field trips and educational tours to enhance learning experiences.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Educational Tours</h2>
          </div>
          <p className="text-gray-700 mb-4">We organize educational tours and field trips to provide practical learning experiences beyond the classroom.</p>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Historical Sites</h3><p className="text-gray-700 text-sm">Visits to cultural and historical locations</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Industrial Visits</h3><p className="text-gray-700 text-sm">Technical students visit factories and industries</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Science Excursions</h3><p className="text-gray-700 text-sm">Field trips for science and environmental studies</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
