import { PageLayout } from "@/components/layout/page-layout";
import { BookOpen } from "lucide-react";

export default function CampusLibraryPage() {
  return (
    <PageLayout title="Campus Library" description="Comprehensive library resources for all students.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Library</h2>
          </div>
          <p className="text-gray-700 mb-4">Well-stocked library with diverse resources supporting all programs.</p>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Collection</h3><p className="text-gray-700 text-sm">Textbooks, reference books, magazines, and digital resources</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Study Spaces</h3><p className="text-gray-700 text-sm">Quiet reading areas for individual and group study</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Services</h3><p className="text-gray-700 text-sm">Book lending, reference assistance, and research support</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
