import { PageLayout } from "@/components/layout/page-layout";
import { FileText, Download, Book, ClipboardList, Calendar, FileCheck, FolderOpen, AlertCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads - Ranabir Janahit Secondary School",
  description: "Download important documents, forms, syllabi, and resources from Ranabir Janahit Secondary School.",
};

export default function DownloadsPage() {
  return (
    <PageLayout
      title="Downloads"
      description="Access important documents, forms, and resources."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <FolderOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Resource Center</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to our download center. Here you can find important documents, forms, syllabi,
            and other resources that support your educational journey at Ranabir Janahit Secondary School.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            All documents are available for download. If you need assistance or cannot find what
            you&apos;re looking for, please contact the school office.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Admission Documents</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Admission Application Form</h3>
                  <p className="text-sm text-gray-600">General admission form for all programs</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">10+2 Admission Form</h3>
                  <p className="text-sm text-gray-600">Application form for Education & Management streams</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">CTEVT Program Application</h3>
                  <p className="text-sm text-gray-600">Form for Pre-Diploma and Diploma programs</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Document Checklist</h3>
                  <p className="text-sm text-gray-600">List of required documents for admission</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Scholarship Application Form</h3>
                  <p className="text-sm text-gray-600">Apply for financial aid and scholarships</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Book className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Academic Resources</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">School Prospectus</h3>
                  <p className="text-sm text-gray-600">Complete information about our programs and facilities</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Academic Calendar 2024</h3>
                  <p className="text-sm text-gray-600">Important dates, holidays, and exam schedules</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Curriculum Overview</h3>
                  <p className="text-sm text-gray-600">Overview of courses and subjects by grade level</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Exam Schedule</h3>
                  <p className="text-sm text-gray-600">Current term examination timetable</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Book List</h3>
                  <p className="text-sm text-gray-600">Required textbooks and materials by grade</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <ClipboardList className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Forms & Policies</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Leave Application Form</h3>
                  <p className="text-sm text-gray-600">Student leave and absence request form</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Transfer Certificate Request</h3>
                  <p className="text-sm text-gray-600">Form for requesting transfer certificate</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Student Code of Conduct</h3>
                  <p className="text-sm text-gray-600">School rules and behavioral expectations</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Fee Payment Slip</h3>
                  <p className="text-sm text-gray-600">Fee deposit slip and payment instructions</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Parent Consent Form</h3>
                  <p className="text-sm text-gray-600">Consent for field trips and activities</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileCheck className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Program Information</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">10+2 Program Guide</h3>
                  <p className="text-sm text-gray-600">Complete information about Education & Management streams</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">CTEVT Program Brochure</h3>
                  <p className="text-sm text-gray-600">Details about Electrical Engineering programs</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">ECD Program Information</h3>
                  <p className="text-sm text-gray-600">Early Childhood Development program details</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-apex-gold" />
                <div>
                  <h3 className="font-semibold text-apex-midnight">Fee Structure 2024</h3>
                  <p className="text-sm text-gray-600">Complete fee breakdown for all programs</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-800 text-sm mb-3">
                If you&apos;re having trouble downloading any documents or need a specific form that&apos;s not listed here,
                please contact the school office. We&apos;re happy to assist you.
              </p>
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> Some documents may require Adobe PDF Reader to view. You can download it for free
                from Adobe&apos;s official website.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-6 w-6 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold">Request Additional Documents</h2>
          </div>
          <p className="mb-4">
            Can&apos;t find the document you need? Contact us and we&apos;ll be happy to provide it or guide you
            to the right resource.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
