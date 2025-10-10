import { PageLayout } from "@/components/layout/page-layout";
import { Building } from "lucide-react";

export default function CampusFacilitiesPage() {
  return (
    <PageLayout title="Campus Facilities" description="Modern infrastructure supporting quality education.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Building className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Our Facilities</h2>
          </div>
          <p className="text-gray-700 mb-4">Well-equipped campus with modern facilities for comprehensive education.</p>
          <div className="space-y-2">
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Spacious classrooms</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Science laboratories</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Computer labs</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Library</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Sports facilities</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Technical workshops</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
