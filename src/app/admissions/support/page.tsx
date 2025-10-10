import { PageLayout } from "@/components/layout/page-layout";
import { Heart } from "lucide-react";

export default function SupportPage() {
  return (
    <PageLayout title="Financial Support" description="Financial assistance programs for students in need.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Financial Support</h2>
          </div>
          <p className="text-gray-700 mb-4">We are committed to making education accessible to all deserving students regardless of financial background.</p>
          <div className="space-y-3">
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Need-based financial assistance</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Fee waivers for deserving students</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Government support programs</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Flexible payment arrangements</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
