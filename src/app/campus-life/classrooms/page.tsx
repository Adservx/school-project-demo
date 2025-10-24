import { PageLayout } from "@/components/layout/page-layout";
import { Monitor, Wifi, Projector, Volume2, Camera, Laptop, Lightbulb, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multimedia Classrooms - Ranabir Janahit Secondary School",
  description: "State-of-the-art multimedia classrooms equipped with modern technology for enhanced learning experiences.",
};

export default function MultimediaClassroomsPage() {
  return (
    <PageLayout
      title="Multimedia Classrooms"
      description="Experience modern education with our technology-enabled learning spaces."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Monitor className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Modern Learning Spaces</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our multimedia classrooms are designed to create an interactive and engaging learning environment.
            Equipped with cutting-edge technology, these spaces facilitate dynamic teaching methods and
            enhance student comprehension through visual and audio learning aids.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From interactive presentations to digital content delivery, our classrooms provide the tools
            necessary for 21st-century education.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Technology Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Projector className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Digital Projectors</h3>
              </div>
              <p className="text-gray-700">
                High-definition projectors for clear and vibrant display of educational content,
                presentations, videos, and interactive lessons.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Volume2 className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Audio Systems</h3>
              </div>
              <p className="text-gray-700">
                Quality sound systems ensuring every student can hear clearly, making lectures
                and multimedia content accessible to all.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Wifi className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Internet Connectivity</h3>
              </div>
              <p className="text-gray-700">
                High-speed internet access enabling online resources, research, and
                digital learning platforms integration.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Laptop className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Computer Integration</h3>
              </div>
              <p className="text-gray-700">
                Teacher workstations with computers for seamless content delivery and
                classroom management.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Monitor className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Smart Boards</h3>
              </div>
              <p className="text-gray-700">
                Interactive whiteboards that allow teachers to create engaging, touch-enabled
                lessons and demonstrations.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Camera className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Document Cameras</h3>
              </div>
              <p className="text-gray-700">
                Visual presenters for displaying books, diagrams, experiments, and
                demonstrations in real-time.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Learning Benefits</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Enhanced Visual Learning</h3>
                <p className="text-gray-700">Complex concepts become easier to understand through visual demonstrations and interactive content</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Increased Engagement</h3>
                <p className="text-gray-700">Multimedia presentations capture student attention and make learning more interactive</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Access to Global Resources</h3>
                <p className="text-gray-700">Students can access online educational materials, virtual tours, and international learning platforms</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Collaborative Learning</h3>
                <p className="text-gray-700">Technology enables group projects, presentations, and peer-to-peer learning activities</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Digital Literacy</h3>
                <p className="text-gray-700">Students develop essential technology skills required for modern academic and professional success</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Flexible Teaching Methods</h3>
                <p className="text-gray-700">Teachers can adapt their teaching style to accommodate different learning preferences</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Classroom Applications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-apex-midnight mb-2">Science & Mathematics</h3>
              <p className="text-sm text-gray-700">Virtual experiments, 3D models, mathematical simulations, and interactive problem-solving</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-apex-midnight mb-2">Languages & Literature</h3>
              <p className="text-sm text-gray-700">Audio-visual content, pronunciation guides, digital literature, and multimedia storytelling</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-apex-midnight mb-2">Technical Education</h3>
              <p className="text-sm text-gray-700">Circuit simulations, technical diagrams, video demonstrations, and digital blueprints</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-apex-midnight mb-2">Social Studies</h3>
              <p className="text-sm text-gray-700">Virtual field trips, historical documentaries, interactive maps, and cultural presentations</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Visit Our Classrooms</h2>
          <p className="mb-4">
            Experience our multimedia classrooms firsthand during a campus tour. See how technology
            enhances learning and prepares students for the digital age.
          </p>
          <p className="text-sm">
            <strong>Schedule a Visit:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
