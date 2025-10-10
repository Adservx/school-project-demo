import { PageLayout } from "@/components/layout/page-layout";
import { Clock } from "lucide-react";

export default function SchedulePage() {
  return (
    <PageLayout title="Daily Schedule" description="Typical daily schedule for students.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Daily Schedule</h2>
          </div>
          <p className="text-gray-700 mb-4">Our structured daily schedule balances academics, activities, and breaks.</p>
          <div className="space-y-2 bg-apex-platinum/20 p-4 rounded-lg">
            <div className="flex justify-between border-b border-gray-300 pb-2"><span className="font-semibold text-apex-midnight">Morning Assembly</span><span className="text-gray-700">10:00 AM</span></div>
            <div className="flex justify-between border-b border-gray-300 pb-2"><span className="font-semibold text-apex-midnight">Classes</span><span className="text-gray-700">10:15 AM - 4:00 PM</span></div>
            <div className="flex justify-between border-b border-gray-300 pb-2"><span className="font-semibold text-apex-midnight">Lunch Break</span><span className="text-gray-700">12:30 PM - 1:00 PM</span></div>
            <div className="flex justify-between"><span className="font-semibold text-apex-midnight">School Dismissal</span><span className="text-gray-700">4:00 PM</span></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
