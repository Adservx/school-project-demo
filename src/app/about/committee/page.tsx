import { PageLayout } from "@/components/layout/page-layout";
import { Users, Shield, Target } from "lucide-react";

export default function CommitteePage() {
  return (
    <PageLayout
      title="Management Committee"
      description="The governing body providing strategic direction and oversight for our institution."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">School Management Committee</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a government-aided community school, Ranabir Janahit Secondary School is governed by a School 
            Management Committee (SMC) comprising representatives from the local community, parents, teachers, 
            and government authorities. The committee provides strategic direction, ensures accountability, and 
            works to improve the quality of education.
          </p>
        </section>

        {/* Role & Responsibilities */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Roles & Responsibilities</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Policy & Planning</h3>
              <p className="text-gray-700">
                Formulating school policies, approving annual plans, and setting strategic direction for institutional development.
              </p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Financial Oversight</h3>
              <p className="text-gray-700">
                Approving budgets, monitoring expenditures, ensuring financial transparency, and mobilizing resources for school development.
              </p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Quality Assurance</h3>
              <p className="text-gray-700">
                Monitoring academic performance, ensuring quality teaching and learning, and implementing improvement measures.
              </p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Infrastructure Development</h3>
              <p className="text-gray-700">
                Planning and overseeing construction, renovation, and maintenance of school facilities and resources.
              </p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Community Relations</h3>
              <p className="text-gray-700">
                Building partnerships with parents, local organizations, and stakeholders to support school objectives.
              </p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Staff Management</h3>
              <p className="text-gray-700">
                Participating in teacher recruitment, performance evaluation, and professional development initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Committee Composition */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Committee Composition</h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              The School Management Committee is formed according to government regulations and includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-apex-platinum/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-apex-midnight">Community Representatives</h3>
                <p className="text-sm">Local community members elected to represent community interests.</p>
              </div>
              <div className="bg-apex-platinum/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-apex-midnight">Parent Representatives</h3>
                <p className="text-sm">Parents of current students elected by the parent body.</p>
              </div>
              <div className="bg-apex-platinum/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-apex-midnight">Teacher Representatives</h3>
                <p className="text-sm">Teachers elected to represent faculty interests and perspectives.</p>
              </div>
              <div className="bg-apex-platinum/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-apex-midnight">Government Representative</h3>
                <p className="text-sm">Representative from local government or education office.</p>
              </div>
              <div className="bg-apex-platinum/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-apex-midnight">Principal (Ex-officio)</h3>
                <p className="text-sm">School Principal serves as member secretary of the committee.</p>
              </div>
              <div className="bg-apex-platinum/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-apex-midnight">Chairperson</h3>
                <p className="text-sm">Elected from among community representatives to lead the committee.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Priorities */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Current Priorities</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Improving academic performance and student achievement across all programs</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Upgrading infrastructure including classrooms, laboratories, and facilities</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Enhancing teacher quality through training and professional development</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Expanding technical education programs and industry partnerships</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Strengthening community engagement and parent participation</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Ensuring financial sustainability and resource mobilization</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Promoting inclusive education and student welfare programs</p>
            </div>
          </div>
        </section>

        {/* Meetings & Transparency */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Governance & Transparency</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The School Management Committee meets regularly to review progress, address challenges, and make 
              decisions on important matters. All decisions are made transparently and in the best interest of 
              students and the school community.
            </p>
            <p>
              Financial reports, meeting minutes, and major decisions are shared with stakeholders to ensure 
              accountability and transparency in school governance.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Contact the Committee</h2>
          <p className="mb-4 leading-relaxed">
            For inquiries, suggestions, or concerns related to school governance and management, please contact 
            the school office. Your feedback is valuable in helping us serve the community better.
          </p>
          <p className="text-sm">
            <strong>School Office:</strong> +977 9856029222, +977 9846113663<br />
            <strong>Email:</strong> ranabirjanahit@gmail.com<br />
            <strong>Address:</strong> Khahare, Waling Municipality Ward 1, Syangja District
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
