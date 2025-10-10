import { PageLayout } from "@/components/layout/page-layout";
import { FileText, CheckCircle, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ApplyPage() {
  return (
    <PageLayout
      title="Apply Now"
      description="Start your journey at Ranabir Janahit Secondary School. Apply for admission today."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Application Process</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-apex-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
              <div>
                <h3 className="font-semibold text-lg text-apex-midnight mb-1">Obtain Application Form</h3>
                <p className="text-gray-700">Visit our school office or download the application form online.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-apex-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
              <div>
                <h3 className="font-semibold text-lg text-apex-midnight mb-1">Submit Required Documents</h3>
                <p className="text-gray-700">Prepare and submit all necessary documents with the completed form.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-apex-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
              <div>
                <h3 className="font-semibold text-lg text-apex-midnight mb-1">Pay Application Fee</h3>
                <p className="text-gray-700">Pay the non-refundable application processing fee.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-apex-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
              <div>
                <h3 className="font-semibold text-lg text-apex-midnight mb-1">Entrance Test/Interview</h3>
                <p className="text-gray-700">Attend entrance examination or interview as required for your program.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-apex-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">5</div>
              <div>
                <h3 className="font-semibold text-lg text-apex-midnight mb-1">Admission Confirmation</h3>
                <p className="text-gray-700">Receive admission decision and complete enrollment formalities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Required Documents</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Completed application form</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Recent passport-size photographs</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Previous academic transcripts/certificates</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Character certificate</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Citizenship/birth certificate copy</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Transfer certificate (if applicable)</span>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Important Dates</h2>
          </div>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Application Period</h3>
              <p className="text-gray-700">Applications accepted throughout the year</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Academic Session Starts</h3>
              <p className="text-gray-700">Baisakh (April/May) annually</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold mb-4">Ready to Apply?</h2>
            <p className="mb-6">Visit our admissions office or contact us for assistance with your application.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold">Download Application Form</Button>
              <Button variant="outline" className="border-apex-gold text-apex-gold hover:bg-apex-gold hover:text-apex-midnight">
                <Phone className="h-4 w-4 mr-2" />
                Contact Admissions
              </Button>
            </div>
            <p className="text-sm mt-6">
              <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
