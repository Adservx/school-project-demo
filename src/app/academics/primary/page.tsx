import { PageLayout } from "@/components/layout/page-layout";
import { BookOpen, Users, Star, Heart } from "lucide-react";

export default function PrimaryPage() {
  return (
    <PageLayout
      title="Primary Education (Grades 1-5)"
      description="Building strong foundations through child-centered learning and holistic development."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Overview */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Program Overview</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our primary education program (Grades 1-5) provides a strong foundation for lifelong learning. 
            We focus on developing fundamental literacy, numeracy, and social skills in a nurturing, 
            child-friendly environment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Following the national curriculum framework, our experienced teachers use interactive, 
            activity-based teaching methods to make learning engaging and effective for young learners.
          </p>
        </section>

        {/* Curriculum */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Curriculum & Subjects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Core Subjects</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Nepali Language</li>
                <li>• English Language</li>
                <li>• Mathematics</li>
                <li>• Social Studies</li>
                <li>• Science & Environment</li>
              </ul>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Co-curricular</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Creative Arts & Drawing</li>
                <li>• Physical Education</li>
                <li>• Music & Dance</li>
                <li>• Computer Basics</li>
                <li>• Life Skills Education</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Teaching Approach */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Teaching Methodology</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Child-Centered Learning</h3>
              <p className="text-gray-700">Interactive lessons tailored to individual learning styles and pace.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Activity-Based Education</h3>
              <p className="text-gray-700">Hands-on activities, games, and projects to make learning fun and meaningful.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Continuous Assessment</h3>
              <p className="text-gray-700">Regular evaluation through class work, homework, and periodic tests.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Holistic Development</h3>
              <p className="text-gray-700">Focus on cognitive, physical, social, and emotional growth.</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Star className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Key Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Experienced and trained primary education teachers</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Small class sizes for personalized attention</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Child-friendly classrooms and learning materials</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Library access with age-appropriate books</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Regular parent-teacher communication</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Extra-curricular activities and events</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Safe and nurturing school environment</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Affordable fee structure with scholarship options</p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Learning Outcomes</h2>
          </div>
          <p className="text-gray-700 mb-4">By the end of Grade 5, students will:</p>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Develop strong reading, writing, and communication skills in Nepali and English</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Master fundamental mathematical concepts and problem-solving skills</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Understand basic scientific concepts and develop curiosity about the world</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Build social awareness and understanding of their community and country</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Develop creativity, critical thinking, and collaborative skills</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Build confidence, self-discipline, and positive values</p>
            </div>
          </div>
        </section>

        {/* Admission */}
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Admission Information</h2>
          <p className="mb-4 leading-relaxed">
            Admissions for Grades 1-5 are open throughout the year. For admission requirements, fee structure, 
            and application process, please visit our admissions office or contact us.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
