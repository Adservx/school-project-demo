import { PageLayout } from "@/components/layout/page-layout";
import { Baby, Heart, Users, Star } from "lucide-react";

export default function ECDPage() {
  return (
    <PageLayout
      title="Early Childhood Development (ECD)"
      description="Nurturing young minds through play-based learning and holistic development."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Baby className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Program Overview</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our Early Childhood Development program provides a nurturing, play-based learning environment 
            for young children. We focus on holistic development including cognitive, physical, social, 
            emotional, and creative growth during these crucial early years.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <Heart className="h-6 w-6 text-apex-gold mb-2" />
              <h3 className="font-semibold mb-2 text-apex-midnight">Safe Environment</h3>
              <p className="text-sm text-gray-700">Child-friendly, secure facilities with caring staff</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <Users className="h-6 w-6 text-apex-gold mb-2" />
              <h3 className="font-semibold mb-2 text-apex-midnight">Trained Teachers</h3>
              <p className="text-sm text-gray-700">Experienced educators in early childhood education</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <Star className="h-6 w-6 text-apex-gold mb-2" />
              <h3 className="font-semibold mb-2 text-apex-midnight">Play-Based Learning</h3>
              <p className="text-sm text-gray-700">Learning through play, exploration, and discovery</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <Baby className="h-6 w-6 text-apex-gold mb-2" />
              <h3 className="font-semibold mb-2 text-apex-midnight">Individual Attention</h3>
              <p className="text-sm text-gray-700">Small class sizes for personalized care</p>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Enrollment Information</h2>
          <p className="mb-4">For admission to our ECD program, please contact our office.</p>
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
