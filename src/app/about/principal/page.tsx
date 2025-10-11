import { PageLayout } from "@/components/layout/page-layout";
import { Mail, Phone, Award } from "lucide-react";
import Image from "next/image";

export default function PrincipalPage() {
  return (
    <PageLayout
      title="Principal's Message"
      description="Leadership and vision from our Principal, Laxmi Regmi"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Principal Info */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-apex-gold/20 rounded-lg p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image 
                    src="/princpic.jpg" 
                    alt="Laxmi Regmi - Principal" 
                    width={128} 
                    height={128} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-apex-midnight mb-2">Laxmi Regmi</h3>
                <p className="text-apex-midnight/70 font-semibold mb-4">Principal</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-apex-gold" />
                    <span className="text-gray-700">ranabirjanahit@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-apex-gold" />
                    <span className="text-gray-700">+977 9856029222</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Welcome Message</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dear Students, Parents, and Well-wishers,
                </p>
                <p>
                  It is my great pleasure to welcome you to Ranabir Janahit Secondary School, an institution 
                  with a proud history of over six decades of educational excellence. As Principal, I am honored 
                  to lead a dedicated team of educators committed to nurturing young minds and building a 
                  competent workforce for our nation.
                </p>
                <p>
                  Our school stands as a beacon of quality education in Syangja District, offering comprehensive 
                  programs from early childhood development to technical education. We believe that education is 
                  not merely about academic achievement, but about developing well-rounded individuals who are 
                  equipped with knowledge, skills, values, and the confidence to face life&apos;s challenges.
                </p>
                <p>
                  Through our diverse programs—from Grade Nursery-12 general education to 10+2 streams in Education 
                  and Management, and CTEVT-affiliated technical courses in Electrical Engineering—we provide 
                  pathways for every student to discover and pursue their passion.
                </p>
                <p>
                  We are committed to maintaining high academic standards while fostering an inclusive, supportive 
                  environment where every student can thrive. Our experienced faculty, modern facilities, and 
                  strong community partnerships create an ideal learning ecosystem.
                </p>
                <p>
                  I invite you to explore our programs, visit our campus, and join our vibrant educational community. 
                  Together, we will continue building on our legacy of excellence and preparing students for success 
                  in an ever-changing world.
                </p>
                <p className="font-semibold">
                  With warm regards,<br />
                  Laxmi Regmi<br />
                  Principal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Philosophy */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Leadership Philosophy</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Student-Centered Approach</h3>
              <p className="text-gray-700">Every decision we make prioritizes student learning, growth, and well-being.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Collaborative Culture</h3>
              <p className="text-gray-700">Building strong partnerships among teachers, students, parents, and community.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Continuous Improvement</h3>
              <p className="text-gray-700">Embracing innovation and constantly seeking ways to enhance educational quality.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Inclusive Excellence</h3>
              <p className="text-gray-700">Ensuring every student has access to quality education and opportunities to succeed.</p>
            </div>
          </div>
        </section>

        {/* Priorities */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Current Priorities</h2>
          <div className="space-y-4">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Academic Excellence</h3>
              <p className="text-gray-700">Enhancing teaching quality and student performance across all programs through teacher training and curriculum development.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Infrastructure Development</h3>
              <p className="text-gray-700">Upgrading facilities, laboratories, and learning resources to provide a world-class educational environment.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Technology Integration</h3>
              <p className="text-gray-700">Incorporating modern technology and digital tools to enhance learning outcomes and prepare students for the digital age.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Community Engagement</h3>
              <p className="text-gray-700">Strengthening partnerships with parents, local organizations, and industry to create more opportunities for our students.</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
