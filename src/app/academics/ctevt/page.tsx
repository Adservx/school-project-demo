import { PageLayout } from "@/components/layout/page-layout";
import { Award, CheckCircle, Briefcase } from "lucide-react";

export default function CTEVTPage() {
  return (
    <PageLayout
      title="CTEVT Affiliation"
      description="Our technical education programs are affiliated with the Council for Technical Education and Vocational Training."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">About CTEVT</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The Council for Technical Education and Vocational Training (CTEVT) is the national authority 
            for technical and vocational education in Nepal. CTEVT affiliation ensures that our programs 
            meet national standards and provide industry-relevant training.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Our CTEVT Programs</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Pre-Diploma in Electrical Engineering</h3>
              <p className="text-gray-700">18-month foundation program in electrical engineering</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Diploma in Electrical Engineering</h3>
              <p className="text-gray-700">3-year comprehensive technical education program</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Benefits of CTEVT Certification</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-apex-gold mt-1 flex-shrink-0" />
              <p className="text-gray-700">Nationally recognized qualification</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-apex-gold mt-1 flex-shrink-0" />
              <p className="text-gray-700">Industry-aligned curriculum and training</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-apex-gold mt-1 flex-shrink-0" />
              <p className="text-gray-700">High employability in technical sectors</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-apex-gold mt-1 flex-shrink-0" />
              <p className="text-gray-700">Pathway to higher technical education</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-apex-gold mt-1 flex-shrink-0" />
              <p className="text-gray-700">Quality assurance and regular monitoring</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Learn More</h2>
          <p className="mb-4">For information about our CTEVT programs, contact our technical education department.</p>
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
