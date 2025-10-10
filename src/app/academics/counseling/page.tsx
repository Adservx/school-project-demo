import { PageLayout } from "@/components/layout/page-layout";
import { Heart } from "lucide-react";

export default function CounselingPage() {
  return (
    <PageLayout title="Counseling Services" description="Academic and personal counseling support for students.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Counseling Services</h2>
          </div>
          <p className="text-gray-700 mb-4">We provide counseling support to help students with academic challenges, career planning, and personal development.</p>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Academic Counseling</h3><p className="text-gray-700 text-sm">Support for study skills and academic performance</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Career Guidance</h3><p className="text-gray-700 text-sm">Help with subject selection and career planning</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Personal Support</h3><p className="text-gray-700 text-sm">Confidential support for personal concerns</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
