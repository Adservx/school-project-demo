import { PageLayout } from "@/components/layout/page-layout";
import { BookOpen, Target, Award, TrendingUp } from "lucide-react";

export default function SecondaryPage() {
  return (
    <PageLayout
      title="Secondary Education (Grades 9-10)"
      description="Preparing students for the Secondary Education Examination (SEE) and future academic success."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Program Overview</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our secondary program (Grades 9-10) prepares students for the Secondary Education Examination (SEE), 
            a crucial national examination that determines progression to higher secondary education. We provide 
            comprehensive instruction, regular practice, and exam preparation support.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With experienced teachers, proven teaching methods, and a track record of excellent SEE results, 
            we ensure students are well-prepared for this important milestone.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Curriculum & Subjects</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Compulsory Subjects</h3>
              <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                <div>• Compulsory Nepali</div>
                <div>• Compulsory English</div>
                <div>• Compulsory Mathematics</div>
                <div>• Compulsory Science</div>
                <div>• Compulsory Social Studies</div>
                <div>• Health & Physical Education</div>
              </div>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-3 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">Optional Subjects</h3>
              <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                <div>• Optional Mathematics</div>
                <div>• Computer Science</div>
                <div>• Account</div>
                <div>• Economics</div>
                <div>• Nepali Literature</div>
                <div>• Sanskrit</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">SEE Preparation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Comprehensive Coverage</h3>
              <p className="text-gray-700">Complete syllabus coverage with emphasis on important topics.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Regular Tests</h3>
              <p className="text-gray-700">Weekly tests, monthly exams, and model question practice.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Extra Classes</h3>
              <p className="text-gray-700">Additional support classes for challenging subjects.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Individual Attention</h3>
              <p className="text-gray-700">Personalized guidance and doubt-clearing sessions.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Track Record</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <TrendingUp className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <p className="text-gray-700">Consistently high pass rates in SEE examinations</p>
            </div>
            <div className="flex items-start space-x-3">
              <TrendingUp className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <p className="text-gray-700">Multiple distinction holders (GPA 3.6+) every year</p>
            </div>
            <div className="flex items-start space-x-3">
              <TrendingUp className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <p className="text-gray-700">Students gaining admission to top colleges and programs</p>
            </div>
            <div className="flex items-start space-x-3">
              <TrendingUp className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <p className="text-gray-700">Recognition as one of the leading schools in Syangja District</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">After SEE</h2>
          <p className="mb-4 leading-relaxed">
            Upon successful completion of SEE, students can continue their education in our 10+2 programs 
            (Education or Management streams) or pursue other higher secondary options. We provide counseling 
            to help students make informed decisions about their future.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
