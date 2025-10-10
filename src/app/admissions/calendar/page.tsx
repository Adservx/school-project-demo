import { PageLayout } from "@/components/layout/page-layout";
import { Calendar } from "lucide-react";

export default function CalendarPage() {
  return (
    <PageLayout title="Admission Calendar" description="Important dates for admission process.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Admission Calendar</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Application Period</h3>
              <p className="text-gray-700">Applications accepted throughout the year</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Academic Year Starts</h3>
              <p className="text-gray-700">Baisakh (April/May) annually</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Entrance Tests</h3>
              <p className="text-gray-700">Scheduled after application submission</p>
            </div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="mb-4">For current admission deadlines and schedules, contact our office.</p>
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
