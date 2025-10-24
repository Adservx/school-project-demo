import { PageLayout } from "@/components/layout/page-layout";
import { Handshake, Building2, GraduationCap, Globe, Users, Award, Heart, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships - Ranabir Janahit Secondary School",
  description: "Our partnerships and collaborations with educational institutions, organizations, and community stakeholders.",
};

export default function PartnershipsPage() {
  return (
    <PageLayout
      title="Partnerships"
      description="Building stronger communities through strategic collaborations and partnerships."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Handshake className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Collaborative Excellence</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ranabir Janahit Secondary School believes in the power of collaboration. Our strategic partnerships
            with educational institutions, government agencies, private organizations, and community stakeholders
            enhance our ability to provide quality education and opportunities for our students.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            These partnerships bring additional resources, expertise, and opportunities that enrich the educational
            experience and prepare students for successful futures.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Partnership Categories</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <GraduationCap className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Academic Affiliations</h3>
              </div>
              <p className="text-gray-700 mb-2">Official affiliations ensuring quality education standards:</p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• <strong>NEB (National Examinations Board):</strong> For 10+2 Education and Management programs</li>
                <li>• <strong>CTEVT (Council for Technical Education and Vocational Training):</strong> For technical education programs</li>
                <li>• <strong>District Education Office:</strong> For primary and secondary education programs</li>
                <li>• Regular curriculum updates and quality assurance</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Building2 className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Government Partnerships</h3>
              </div>
              <p className="text-gray-700 mb-2">Collaboration with government bodies and local authorities:</p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• <strong>Waling Municipality:</strong> Support as a model school of the municipality</li>
                <li>• <strong>Education Development and Coordination Unit:</strong> Program implementation and monitoring</li>
                <li>• <strong>District Administration Office:</strong> Community development initiatives</li>
                <li>• Access to government schemes and educational programs</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Community Organizations</h3>
              </div>
              <p className="text-gray-700 mb-2">Strong ties with local community groups and NGOs:</p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• Local community organizations and social groups</li>
                <li>• NGOs working in education and child development</li>
                <li>• Youth clubs and community development forums</li>
                <li>• Collaborative programs for community welfare</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <Building2 className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Industry Partnerships</h3>
              </div>
              <p className="text-gray-700 mb-2">Connections with businesses and technical organizations:</p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• Local electrical and technical firms for student internships</li>
                <li>• Business organizations for vocational training support</li>
                <li>• Industry experts for guest lectures and workshops</li>
                <li>• Practical training and skill development opportunities</li>
              </ul>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <GraduationCap className="h-5 w-5 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Educational Networks</h3>
              </div>
              <p className="text-gray-700 mb-2">Collaboration with other schools and educational institutions:</p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• Inter-school competitions and events</li>
                <li>• Teacher exchange and professional development programs</li>
                <li>• Resource sharing and best practice forums</li>
                <li>• Joint educational initiatives and projects</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Partnership Benefits</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Enhanced Learning Opportunities</h3>
                <p className="text-gray-700">Access to additional resources, expertise, and learning experiences beyond the school</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Career Development</h3>
                <p className="text-gray-700">Internships, vocational training, and employment connections for students</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Infrastructure Development</h3>
                <p className="text-gray-700">Support for facility upgrades, equipment, and educational materials</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Professional Development</h3>
                <p className="text-gray-700">Training and skill enhancement programs for teachers and staff</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Community Impact</h3>
                <p className="text-gray-700">Collaborative projects that benefit the broader community</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Quality Assurance</h3>
                <p className="text-gray-700">Maintaining high standards through affiliation requirements and external monitoring</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Become a Partner</h2>
          </div>
          <p className="text-gray-700 mb-4">
            We welcome partnerships with organizations that share our commitment to quality education
            and community development. If your organization is interested in collaborating with
            Ranabir Janahit Secondary School, we would love to hear from you.
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-apex-midnight mb-3">Partnership Opportunities Include:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Scholarship and financial support programs</li>
              <li>• Technical training and equipment donations</li>
              <li>• Guest speaker and mentorship programs</li>
              <li>• Infrastructure development support</li>
              <li>• Educational material and resource contributions</li>
              <li>• Internship and employment opportunities for students</li>
              <li>• Community development initiatives</li>
            </ul>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Mail className="h-6 w-6 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold">Partner With Us</h2>
          </div>
          <p className="mb-4">
            Interested in forming a partnership with Ranabir Janahit Secondary School?
            Contact us to discuss collaboration opportunities and how we can work together
            to create positive impact in education and community development.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
