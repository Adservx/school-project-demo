import { PageLayout } from "@/components/layout/page-layout";
import { BookOpen, GraduationCap, Target, Award } from "lucide-react";

export default function LowerSecondaryPage() {
  return (
    <PageLayout
      title="Lower Secondary Education (Grades 6-8)"
      description="Bridging primary and secondary education with comprehensive subject knowledge and skill development."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Overview */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Program Overview</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our lower secondary program (Grades 6-8) serves as a crucial bridge between primary and secondary 
            education. Students develop deeper subject knowledge, critical thinking skills, and prepare for 
            the challenges of secondary level education.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Following the national curriculum, we provide comprehensive education with subject specialists 
            teaching each discipline, ensuring quality instruction and strong academic foundations.
          </p>
        </section>

        {/* Curriculum */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Curriculum & Subjects</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-apex-gold pl-6 py-2 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Compulsory Subjects</h3>
              <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                <div>• Nepali Language</div>
                <div>• English Language</div>
                <div>• Mathematics</div>
                <div>• Science</div>
                <div>• Social Studies</div>
                <div>• Computer Science</div>
                <div>• Health & Physical Education</div>
                <div>• Optional Subject (Sanskrit/Nepali Literature)</div>
              </div>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-2 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Co-curricular Activities</h3>
              <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                <div>• Sports & Athletics</div>
                <div>• Arts & Crafts</div>
                <div>• Music & Cultural Programs</div>
                <div>• Debate & Public Speaking</div>
                <div>• Science Club</div>
                <div>• Environmental Club</div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Approach */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Teaching & Learning</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Subject Specialists</h3>
              <p className="text-gray-700">Dedicated teachers for each subject with expertise in their fields.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Interactive Learning</h3>
              <p className="text-gray-700">Engaging lessons with discussions, group work, and practical activities.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Laboratory Work</h3>
              <p className="text-gray-700">Hands-on science experiments and computer lab sessions.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Regular Assessment</h3>
              <p className="text-gray-700">Continuous evaluation through tests, assignments, and projects.</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Program Highlights</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Qualified subject teachers with years of teaching experience</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Well-equipped science and computer laboratories</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Comprehensive library with reference books and study materials</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Regular parent-teacher meetings for progress updates</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Extra classes and remedial support for struggling students</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Career counseling and guidance for subject selection</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Participation in inter-school competitions and events</p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Learning Outcomes</h2>
          </div>
          <p className="text-gray-700 mb-4">Students completing Grade 8 will:</p>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Have strong command of Nepali and English languages for academic purposes</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Master mathematical concepts including algebra, geometry, and statistics</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Understand scientific principles in physics, chemistry, and biology</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Develop analytical and critical thinking skills</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Be well-prepared for secondary level (Grades 9-10) education</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <p className="text-gray-700">Build confidence, leadership, and teamwork abilities</p>
            </div>
          </div>
        </section>

        {/* Progression */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold text-apex-midnight mb-4">Progression to Secondary Level</h2>
          <p className="text-gray-700 leading-relaxed">
            Upon successful completion of Grade 8, students automatically progress to our secondary program 
            (Grades 9-10), where they will prepare for the Secondary Education Examination (SEE), a crucial 
            milestone in Nepal's education system.
          </p>
        </section>

        {/* Admission */}
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Admission Information</h2>
          <p className="mb-4 leading-relaxed">
            Admissions for Grades 6-8 are open. Students from other schools are welcome to apply. 
            For admission requirements and procedures, please contact our admissions office.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
