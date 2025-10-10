import { PageLayout } from "@/components/layout/page-layout";
import { BookOpen } from "lucide-react";

export default function CurriculumPage() {
  return (
    <PageLayout title="Curriculum" description="Our curriculum follows national standards and frameworks.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Our Curriculum</h2>
          </div>
          <p className="text-gray-700 mb-4">We follow government-approved curriculum frameworks for all programs, ensuring quality education aligned with national standards.</p>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Grades 1-10</h3><p className="text-gray-700 text-sm">National curriculum framework</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">10+2 Programs</h3><p className="text-gray-700 text-sm">NEB-approved curriculum</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">CTEVT Programs</h3><p className="text-gray-700 text-sm">Industry-aligned technical curriculum</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
