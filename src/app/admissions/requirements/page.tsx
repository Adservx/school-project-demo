import { PageLayout } from "@/components/layout/page-layout";
import { FileText, CheckCircle } from "lucide-react";

export default function RequirementsPage() {
  return (
    <PageLayout title="Admission Requirements" description="General requirements for admission to our programs.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">General Requirements</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Grades 1-5</h3>
              <p className="text-gray-700">Age-appropriate admission, previous school records (if applicable)</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Grades 6-10</h3>
              <p className="text-gray-700">Previous grade completion certificate, transfer certificate, character certificate</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">10+2 Programs</h3>
              <p className="text-gray-700">SEE pass certificate with minimum GPA as per NEB requirements</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">CTEVT Programs</h3>
              <p className="text-gray-700">SEE pass or equivalent, interest in technical education</p>
            </div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="mb-4">For detailed requirements specific to your program, contact our admissions office.</p>
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
