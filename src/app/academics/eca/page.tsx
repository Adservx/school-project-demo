import { PageLayout } from "@/components/layout/page-layout";
import { Music } from "lucide-react";

export default function ECAPage() {
  return (
    <PageLayout title="Extra-Curricular Activities" description="Sports, arts, clubs, and activities beyond the classroom.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Music className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Extra-Curricular Activities</h2>
          </div>
          <p className="text-gray-700 mb-4">We offer diverse extra-curricular activities to develop well-rounded students.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-apex-platinum/20 p-4 rounded-lg"><h3 className="font-semibold mb-2 text-apex-midnight">Sports</h3><p className="text-sm text-gray-700">Football, volleyball, athletics</p></div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg"><h3 className="font-semibold mb-2 text-apex-midnight">Arts & Culture</h3><p className="text-sm text-gray-700">Music, dance, drama</p></div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg"><h3 className="font-semibold mb-2 text-apex-midnight">Clubs</h3><p className="text-sm text-gray-700">Science, debate, literary clubs</p></div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg"><h3 className="font-semibold mb-2 text-apex-midnight">Community Service</h3><p className="text-sm text-gray-700">Social and environmental programs</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
