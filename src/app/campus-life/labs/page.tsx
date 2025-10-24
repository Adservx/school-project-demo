import { PageLayout } from "@/components/layout/page-layout";
import { Microscope, Atom, FlaskConical, Lightbulb, Beaker, Zap, Eye, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Science Labs - Ranabir Janahit Secondary School",
  description: "State-of-the-art science laboratories for hands-on learning in physics, chemistry, and biology.",
};

export default function ScienceLabsPage() {
  return (
    <PageLayout
      title="Science Labs"
      description="Hands-on learning through well-equipped science laboratories."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Microscope className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Practical Science Education</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our science laboratories provide students with hands-on learning experiences that complement
            theoretical knowledge. Equipped with modern instruments and safety equipment, our labs enable
            students to conduct experiments, verify scientific principles, and develop practical skills.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through laboratory work, students develop critical thinking, observation skills, and a deeper
            understanding of scientific concepts while learning proper research methodology and safety protocols.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <FlaskConical className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Laboratory Facilities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Atom className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Physics Laboratory</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Comprehensive physics lab for mechanics, electricity, magnetism, optics, and modern physics experiments.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Mechanics and motion equipment</li>
                <li>• Electrical circuit components</li>
                <li>• Optics and light experiment kits</li>
                <li>• Measuring instruments and sensors</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Beaker className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Chemistry Laboratory</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Well-equipped chemistry lab with proper ventilation, safety equipment, and chemical storage facilities.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Glassware and apparatus</li>
                <li>• Chemical reagents and solutions</li>
                <li>• Fume hoods and ventilation</li>
                <li>• Safety equipment and first aid</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Microscope className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Biology Laboratory</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Biology lab with microscopes, preserved specimens, and equipment for botanical and zoological studies.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Compound microscopes</li>
                <li>• Prepared and blank slides</li>
                <li>• Preserved specimens and models</li>
                <li>• Dissection equipment</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Electrical Lab (CTEVT)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Specialized electrical engineering laboratory for CTEVT diploma and pre-diploma programs.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Circuit design and testing</li>
                <li>• Electrical wiring practice</li>
                <li>• Measuring instruments</li>
                <li>• Motor and transformer testing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Safety Standards</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Safety Equipment</h3>
                <p className="text-gray-700">Lab coats, safety goggles, gloves, fire extinguishers, and emergency showers available</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Trained Supervision</h3>
                <p className="text-gray-700">Experienced lab instructors supervise all experiments and ensure proper safety protocols</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Safety Training</h3>
                <p className="text-gray-700">Students receive comprehensive safety training before conducting any laboratory work</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Proper Ventilation</h3>
                <p className="text-gray-700">Labs equipped with adequate ventilation systems and fume hoods for chemical experiments</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Regular Maintenance</h3>
                <p className="text-gray-700">Equipment and facilities are regularly inspected, maintained, and updated</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Learning Outcomes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Practical Skills</h3>
              <p className="text-sm text-gray-700">Develop hands-on laboratory techniques and equipment handling skills</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Scientific Method</h3>
              <p className="text-sm text-gray-700">Learn to design experiments, collect data, and analyze results systematically</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Critical Thinking</h3>
              <p className="text-sm text-gray-700">Enhance analytical and problem-solving abilities through experimental work</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Safety Awareness</h3>
              <p className="text-sm text-gray-700">Understand and practice proper laboratory safety procedures and protocols</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Observation Skills</h3>
              <p className="text-sm text-gray-700">Develop keen observation and precise recording of experimental observations</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-apex-midnight mb-2">Teamwork</h3>
              <p className="text-sm text-gray-700">Collaborate effectively during group experiments and laboratory projects</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Laboratory Activities</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Curriculum-Based Experiments</h3>
              <p className="text-gray-700 text-sm">Practical work aligned with academic syllabus for all grade levels</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Science Projects</h3>
              <p className="text-gray-700 text-sm">Student-designed research projects and science fair preparations</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Technical Training</h3>
              <p className="text-gray-700 text-sm">Specialized electrical and technical training for CTEVT students</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Demonstrations</h3>
              <p className="text-gray-700 text-sm">Teacher-led demonstrations of complex phenomena and experiments</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Visit Our Science Labs</h2>
          <p className="mb-4">
            Experience our science facilities during a campus tour. See how practical learning
            enhances scientific understanding and prepares students for technical careers.
          </p>
          <p className="text-sm">
            <strong>Schedule a Visit:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
