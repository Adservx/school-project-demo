import { PageLayout } from "@/components/layout/page-layout";
import { DollarSign, Award, CreditCard, HelpCircle } from "lucide-react";

export default function FeesPage() {
  return (
    <PageLayout
      title="Fees & Scholarships"
      description="Affordable education with transparent fee structure and scholarship opportunities."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <DollarSign className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Fee Structure</h2>
          </div>
          <p className="text-gray-700 mb-6">
            As a government-aided community school, we are committed to providing quality education at 
            affordable rates. Our fee structure is transparent and approved by the school management committee.
          </p>
          <div className="bg-apex-platinum/20 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-apex-midnight">Program-wise Fees</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="text-gray-700">Grades 1-5 (Primary)</span>
                <span className="font-semibold text-apex-midnight">Contact for details</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="text-gray-700">Grades 6-8 (Lower Secondary)</span>
                <span className="font-semibold text-apex-midnight">Contact for details</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="text-gray-700">Grades 9-10 (Secondary)</span>
                <span className="font-semibold text-apex-midnight">Contact for details</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="text-gray-700">10+2 Education Stream</span>
                <span className="font-semibold text-apex-midnight">Contact for details</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="text-gray-700">10+2 Management Stream</span>
                <span className="font-semibold text-apex-midnight">Contact for details</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="text-gray-700">CTEVT Electrical Engineering</span>
                <span className="font-semibold text-apex-midnight">Contact for details</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Scholarships</h2>
          </div>
          <p className="text-gray-700 mb-6">
            We believe that financial constraints should not prevent talented students from accessing quality 
            education. Various scholarship opportunities are available for deserving students.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-4 py-2 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Merit-Based Scholarships</h3>
              <p className="text-gray-700 text-sm">For students with excellent academic performance</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Need-Based Support</h3>
              <p className="text-gray-700 text-sm">Financial assistance for economically disadvantaged students</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Government Scholarships</h3>
              <p className="text-gray-700 text-sm">Support programs from government and local authorities</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Special Categories</h3>
              <p className="text-gray-700 text-sm">Support for students from marginalized communities, differently-abled students, etc.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <CreditCard className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Payment Options</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Annual payment with discount options</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Semester-wise payment plans</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Monthly installment options available</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Cash and bank transfer accepted</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <HelpCircle className="h-6 w-6 text-apex-gold" />
            <h2 className="font-display text-xl font-bold">Need More Information?</h2>
          </div>
          <p className="mb-4">
            For detailed fee structure, scholarship application procedures, and payment options, 
            please contact our accounts office or visit the school.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222, +977 9846113663 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
