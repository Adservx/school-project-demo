import { PageLayout } from "@/components/layout/page-layout";
import { Briefcase, TrendingUp, Award, Target } from "lucide-react";

export default function ManagementPage() {
  return (
    <PageLayout
      title="10+2 Management Stream"
      description="NEB-affiliated program preparing future business leaders and managers."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Briefcase className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Program Overview</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our 10+2 Management stream, affiliated with NEB, prepares students for careers in business, 
            management, finance, and entrepreneurship. The program provides comprehensive knowledge of 
            business principles, economics, accounting, and management practices.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Curriculum</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Core Subjects</h3>
              <div className="space-y-1 text-gray-700">
                <div>• Compulsory English</div>
                <div>• Compulsory Nepali</div>
                <div>• Business Studies</div>
                <div>• Accountancy</div>
                <div>• Economics</div>
                <div>• Business Mathematics / Marketing</div>
                <div>• Social Studies & Life Skills</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Career Paths</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold mb-1 text-apex-midnight">Business & Management</h3>
              <p className="text-sm text-gray-700">BBS, BBA, MBA programs and management careers</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold mb-1 text-apex-midnight">Accounting & Finance</h3>
              <p className="text-sm text-gray-700">CA, ACCA, banking, and financial services</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold mb-1 text-apex-midnight">Entrepreneurship</h3>
              <p className="text-sm text-gray-700">Start and manage your own business</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold mb-1 text-apex-midnight">Government Services</h3>
              <p className="text-sm text-gray-700">Civil service and administrative positions</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Admission Information</h2>
          <p className="mb-4">Contact us for admission requirements and application process.</p>
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
