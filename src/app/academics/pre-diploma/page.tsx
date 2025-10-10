import { PageLayout } from "@/components/layout/page-layout";
import { Zap, BookOpen, Award } from "lucide-react";

export default function PreDiplomaPage() {
  return (
    <PageLayout
      title="Pre-Diploma in Electrical Engineering"
      description="CTEVT-affiliated foundation program in electrical engineering."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Program Overview</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our Pre-Diploma in Electrical Engineering is a CTEVT-affiliated foundation program that prepares 
            students for diploma-level technical education. This program provides basic knowledge and skills 
            in electrical engineering fundamentals.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Program Details</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Duration</h3>
              <p className="text-gray-700">18 months (3 semesters)</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Affiliation</h3>
              <p className="text-gray-700">Council for Technical Education and Vocational Training (CTEVT)</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Progression</h3>
              <p className="text-gray-700">Graduates can continue to Diploma in Electrical Engineering</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Curriculum Highlights</h2>
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Basic electrical circuits and theory</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Electrical measurements and instruments</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Workshop practice and safety</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Technical drawing and documentation</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p className="text-gray-700">Mathematics and applied science</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Admission Requirements</h2>
          <p className="mb-4">SEE pass or equivalent. For detailed information, contact our office.</p>
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
