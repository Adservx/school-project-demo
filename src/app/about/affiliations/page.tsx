import { PageLayout } from "@/components/layout/page-layout";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

export default function AffiliationsPage() {
  return (
    <PageLayout
      title="Affiliations & Accreditations"
      description="Our official affiliations with government educational bodies and accreditation authorities."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Main Affiliations */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Official Affiliations</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-2xl text-apex-midnight mb-3">Government of Nepal</h3>
              <p className="text-gray-700 mb-3">
                Ranabir Janahit Secondary School operates as a <strong>government-aided community school</strong> under 
                the Ministry of Education, Science and Technology, Government of Nepal.
              </p>
              <div className="flex items-start space-x-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                <span>Registered with Department of Education (DOE)</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-700 mt-2">
                <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                <span>Recognized by District Education Office, Syangja</span>
              </div>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-2xl text-apex-midnight mb-3">National Examination Board (NEB)</h3>
              <p className="text-gray-700 mb-3">
                Our 10+2 programs in Education and Management streams are affiliated with the National Examination Board, 
                ensuring nationally recognized qualifications for our students.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                  <span>10+2 Education Stream (NEB Affiliated)</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                  <span>10+2 Management Stream (NEB Affiliated)</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                  <span>Regular curriculum updates and quality assurance</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-2xl text-apex-midnight mb-3">Council for Technical Education and Vocational Training (CTEVT)</h3>
              <p className="text-gray-700 mb-3">
                Our technical education programs are affiliated with CTEVT, the national authority for technical and 
                vocational education in Nepal, ensuring industry-relevant training and nationally recognized certifications.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                  <span>Pre-Diploma in Electrical Engineering (CTEVT Affiliated)</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                  <span>Diploma in Electrical Engineering - 3 Years (CTEVT Affiliated)</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                  <span>Regular inspections and quality monitoring</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-apex-gold mt-0.5 flex-shrink-0" />
                  <span>Industry-aligned curriculum and practical training</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Recognition & Standards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Quality Assurance</h3>
              <p className="text-gray-700">Regular monitoring and evaluation by government authorities to maintain educational standards.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Curriculum Compliance</h3>
              <p className="text-gray-700">Adherence to national curriculum frameworks and examination standards.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Faculty Qualifications</h3>
              <p className="text-gray-700">All teachers meet or exceed minimum qualification requirements set by regulatory bodies.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Infrastructure Standards</h3>
              <p className="text-gray-700">Facilities meet government-mandated requirements for educational institutions.</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Benefits of Our Affiliations</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Nationally Recognized Certificates</h3>
                <p>All qualifications are recognized throughout Nepal and accepted by universities and employers.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Quality Education</h3>
                <p>Curriculum and teaching standards are maintained according to national frameworks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Further Education Pathways</h3>
                <p>Students can seamlessly transition to higher education institutions in Nepal and abroad.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-apex-midnight">Employment Opportunities</h3>
                <p>CTEVT certifications are highly valued by employers in technical and industrial sectors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Verification */}
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Verification</h2>
          <p className="mb-4">
            For verification of our affiliations and accreditations, please contact:
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>School Office:</strong> +977 9856029222, +977 9846113663</p>
            <p><strong>Email:</strong> ranabirjanahit@gmail.com</p>
            <p><strong>Address:</strong> Khahare, Waling Municipality Ward 1, Syangja District, Nepal</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
