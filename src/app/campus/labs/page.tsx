import { PageLayout } from "@/components/layout/page-layout";
import { Microscope } from "lucide-react";

export default function LabsPage() {
  return (
    <PageLayout title="Labs & Classrooms" description="Modern laboratories and multimedia classrooms.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Microscope className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Laboratories & Classrooms</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Science Labs</h3>
              <p className="text-gray-700">Physics, chemistry, and biology laboratories with modern equipment</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Computer Labs</h3>
              <p className="text-gray-700">Internet-connected computers for digital learning</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Technical Workshop</h3>
              <p className="text-gray-700">Electrical engineering workshop for CTEVT programs</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Multimedia Classrooms</h3>
              <p className="text-gray-700">Projector-equipped rooms for interactive learning</p>
            </div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
