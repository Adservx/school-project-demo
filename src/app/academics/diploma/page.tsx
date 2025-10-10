import { PageLayout } from "@/components/layout/page-layout";
import { Zap, Award, Wrench, Briefcase } from "lucide-react";

export default function DiplomaPage() {
  return (
    <PageLayout
      title="Diploma in Electrical Engineering (3 Years)"
      description="CTEVT-affiliated comprehensive technical program for aspiring electrical engineers."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Program Overview</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our 3-year Diploma in Electrical Engineering, affiliated with CTEVT, provides comprehensive 
            technical education combining theoretical knowledge with extensive practical training. Graduates 
            are qualified for technical positions in electrical companies, industries, and construction firms.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Program Structure</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Duration</h3>
              <p className="text-gray-700">3 years (6 semesters) with practical training and project work</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Key Areas</h3>
              <div className="text-gray-700 space-y-1">
                <div>• Electrical circuits and systems</div>
                <div>• Power generation and distribution</div>
                <div>• Electrical machines and equipment</div>
                <div>• Electronics and control systems</div>
                <div>• Installation and maintenance</div>
                <div>• Safety and regulations</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Wrench className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Facilities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-apex-midnight">Electrical Workshop</h3>
              <p className="text-sm text-gray-700">Fully equipped workshop for hands-on training</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-apex-midnight">Modern Equipment</h3>
              <p className="text-sm text-gray-700">Industry-standard tools and instruments</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-apex-midnight">Experienced Instructors</h3>
              <p className="text-sm text-gray-700">CTEVT-certified faculty with industry experience</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-apex-midnight">Industry Partnerships</h3>
              <p className="text-sm text-gray-700">Internship and placement opportunities</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Briefcase className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Career Opportunities</h2>
          </div>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p>Electrical technician in industries and factories</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p>Installation and maintenance engineer</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p>Power distribution companies</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p>Construction and infrastructure projects</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2"></div>
              <p>Self-employment as electrical contractor</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Admission Requirements</h2>
          <p className="mb-4">SEE pass or equivalent with interest in technical education.</p>
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
