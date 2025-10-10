import { PageLayout } from "@/components/layout/page-layout";
import { GraduationCap } from "lucide-react";

export default function GeneralAdmissionPage() {
  return (
    <PageLayout title="General Admission" description="Admission information for Grades 1-10.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">General Education Admission</h2>
          </div>
          <p className="text-gray-700 mb-4">We accept students for Grades 1-10 throughout the year based on availability.</p>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Requirements</h3><p className="text-gray-700 text-sm">Age-appropriate admission, previous school records</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Documents</h3><p className="text-gray-700 text-sm">Birth certificate, previous grade certificate, transfer certificate, character certificate</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Process</h3><p className="text-gray-700 text-sm">Submit application, attend interview/test if required, complete enrollment</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
