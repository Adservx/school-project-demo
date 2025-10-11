import { PageLayout } from "@/components/layout/page-layout";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProspectusPage() {
  return (
    <PageLayout title="School Prospectus" description="Download our school prospectus for detailed information.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">School Prospectus</h2>
          </div>
          <p className="text-gray-700 mb-6">Our prospectus contains comprehensive information about our programs, facilities, admission process, and fee structure.</p>
          <div className="bg-apex-platinum/20 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-lg mb-3 text-apex-midnight">What&apos;s Included</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">School history and mission</p></div>
              <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Program details and curriculum</p></div>
              <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Admission requirements and process</p></div>
              <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Fee structure and payment options</p></div>
              <div className="flex items-start space-x-2"><div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div><p className="text-gray-700">Facilities and campus information</p></div>
            </div>
          </div>
          <Button variant="gold" className="w-full md:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Download Prospectus (PDF)
          </Button>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="mb-4">For a printed copy or more information, visit our office.</p>
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
