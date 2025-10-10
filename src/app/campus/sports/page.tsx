import { PageLayout } from "@/components/layout/page-layout";
import { Trophy } from "lucide-react";

export default function SportsPage() {
  return (
    <PageLayout title="Sports Facilities" description="Promoting physical fitness and sportsmanship.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Trophy className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Sports Facilities</h2>
          </div>
          <p className="text-gray-700 mb-4">We encourage physical fitness and sportsmanship through various sports activities.</p>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Playground</h3><p className="text-gray-700 text-sm">Open ground for football, volleyball, and athletics</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Sports Equipment</h3><p className="text-gray-700 text-sm">Equipment for various indoor and outdoor games</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Physical Education</h3><p className="text-gray-700 text-sm">Regular PE classes and sports training</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Competitions</h3><p className="text-gray-700 text-sm">Inter-house and inter-school sports events</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
