import { PageLayout } from "@/components/layout/page-layout";
import { Target, Eye, Heart, Users } from "lucide-react";

export default function MissionPage() {
  return (
    <PageLayout
      title="Mission & Vision"
      description="Our commitment to building a competent workforce through quality education and technical training."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Vision */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Vision</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            To be a leading educational institution in Nepal, recognized for excellence in academic and technical education, 
            producing skilled graduates who contribute meaningfully to national development and global competitiveness.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Mission</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              Ranabir Janahit Secondary School is committed to:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-apex-gold mr-3 mt-1">•</span>
                <span>Providing quality education from early childhood to higher secondary level with a focus on holistic development</span>
              </li>
              <li className="flex items-start">
                <span className="text-apex-gold mr-3 mt-1">•</span>
                <span>Offering industry-relevant technical education through CTEVT-affiliated programs in Electrical Engineering</span>
              </li>
              <li className="flex items-start">
                <span className="text-apex-gold mr-3 mt-1">•</span>
                <span>Creating an inclusive learning environment that nurtures critical thinking, creativity, and ethical values</span>
              </li>
              <li className="flex items-start">
                <span className="text-apex-gold mr-3 mt-1">•</span>
                <span>Empowering students with practical skills and knowledge to succeed in higher education and professional careers</span>
              </li>
              <li className="flex items-start">
                <span className="text-apex-gold mr-3 mt-1">•</span>
                <span>Serving the community by providing accessible, affordable education to students from all backgrounds</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Excellence</h3>
              <p className="text-gray-700">Striving for the highest standards in teaching, learning, and student achievement.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Integrity</h3>
              <p className="text-gray-700">Upholding honesty, transparency, and ethical conduct in all our endeavors.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Innovation</h3>
              <p className="text-gray-700">Embracing modern teaching methods and technology to enhance learning outcomes.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Community</h3>
              <p className="text-gray-700">Building strong partnerships with families, local organizations, and the broader community.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Inclusivity</h3>
              <p className="text-gray-700">Welcoming and supporting students from diverse backgrounds and abilities.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Empowerment</h3>
              <p className="text-gray-700">Equipping students with skills, confidence, and opportunities to shape their future.</p>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Strategic Goals</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Academic Excellence</h3>
              <p>Maintain high academic standards and improve student performance across all levels and programs.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Infrastructure Development</h3>
              <p>Continuously upgrade facilities, laboratories, and learning resources to support quality education.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Faculty Development</h3>
              <p>Invest in teacher training and professional development to ensure effective instruction.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Community Engagement</h3>
              <p>Strengthen partnerships with parents, local organizations, and industry to enhance educational opportunities.</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
