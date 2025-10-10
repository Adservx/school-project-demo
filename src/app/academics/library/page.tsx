import { PageLayout } from "@/components/layout/page-layout";
import { BookOpen } from "lucide-react";

export default function LibraryPage() {
  return (
    <PageLayout title="Library Resources" description="Access to books, reference materials, and digital resources.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Library Resources</h2>
          </div>
          <p className="text-gray-700 mb-4">Our library provides a wide range of resources to support learning across all programs.</p>
          <div className="space-y-2">
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Textbooks and reference books</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Magazines and periodicals</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Digital resources</p></div>
            <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Quiet study spaces</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
