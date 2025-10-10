import { PageLayout } from "@/components/layout/page-layout";
import { Image as ImageIcon, Camera, Award, Users, Building } from "lucide-react";

const galleryCategories = [
  { name: "Campus & Facilities", icon: Building, count: 24 },
  { name: "Academic Activities", icon: Users, count: 32 },
  { name: "Sports & Events", icon: Award, count: 28 },
  { name: "Cultural Programs", icon: Camera, count: 20 },
];

export default function GalleryPage() {
  return (
    <PageLayout
      title="Photo Gallery"
      description="Explore our campus, facilities, events, and student activities through our photo gallery."
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <ImageIcon className="h-16 w-16 text-apex-gold mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-apex-midnight mb-4">
            Capturing Our Journey
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Browse through our collection of photographs showcasing campus life, academic excellence, 
            cultural events, sports activities, and the vibrant community at Ranabir Janahit Secondary School.
          </p>
        </section>

        {/* Gallery Categories */}
        <section>
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-8">Gallery Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-apex-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-apex-gold/30 transition-colors">
                    <Icon className="h-8 w-8 text-apex-gold" />
                  </div>
                  <h3 className="font-semibold text-lg text-center text-apex-midnight mb-2">
                    {category.name}
                  </h3>
                  <p className="text-center text-sm text-gray-600">
                    {category.count} photos
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Photo Grid Placeholder */}
        <section>
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-8">Recent Photos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="aspect-video bg-apex-gold/20 flex items-center justify-center group-hover:bg-apex-gold/30 transition-colors">
                  <Camera className="h-12 w-12 text-apex-gold" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-apex-midnight mb-1">Photo Title {item}</h3>
                  <p className="text-sm text-gray-600">Category • Date</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold text-apex-midnight mb-6">Video Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-apex-gold/20 rounded-lg aspect-video flex items-center justify-center cursor-pointer hover:bg-apex-gold/30 transition-colors"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-apex-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-apex-midnight font-semibold">School Video {item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Virtual Tour */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold text-apex-midnight mb-6">Virtual Campus Tour</h2>
          <div className="bg-apex-gold/20 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center">
              <Building className="h-16 w-16 text-apex-gold mx-auto mb-4" />
              <p className="text-apex-midnight font-semibold mb-2">360° Virtual Tour</p>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold mb-4">Follow Us on Social Media</h2>
            <p className="mb-6">
              Stay connected and see more photos and updates from our school community on Facebook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/ranabirjanahit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-apex-gold text-apex-midnight rounded-lg font-semibold hover:bg-apex-gold/90 transition-colors"
              >
                Visit Main Facebook Page
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61561336004241"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-apex-gold text-apex-gold rounded-lg font-semibold hover:bg-apex-gold hover:text-apex-midnight transition-colors"
              >
                CTEVT Programs Page
              </a>
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-xl font-bold text-apex-midnight mb-4">Photo Submission</h2>
          <p className="text-gray-700 mb-4">
            If you have photos from school events or activities that you'd like to share, please contact 
            our administration office. We welcome contributions from students, parents, and alumni.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Contact:</strong> ranabirjanahit@gmail.com | +977 9856029222
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
