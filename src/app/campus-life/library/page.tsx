import { PageLayout } from "@/components/layout/page-layout";
import { BookOpen, Users, Wifi, Clock, Search, BookMarked, Laptop, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library - Ranabir Janahit Secondary School",
  description: "Explore our comprehensive library facilities with extensive resources for learning and research.",
};

export default function CampusLibraryPage() {
  return (
    <PageLayout
      title="Library"
      description="Your gateway to knowledge with extensive learning resources and modern facilities."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">A Hub of Learning</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The Ranabir Janahit Secondary School library is more than just a collection of books—it's a
            vibrant learning space that supports academic excellence and fosters a love for reading. Our
            well-stocked library provides students with access to a wide range of resources to support
            their studies and personal growth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a quiet and comfortable environment, modern facilities, and a diverse collection of
            materials, our library serves as an essential resource for students, teachers, and the
            entire school community.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookMarked className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Library Resources</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Book Collection</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Textbooks for all grade levels</li>
                <li>• Reference books and encyclopedias</li>
                <li>• Fiction and non-fiction literature</li>
                <li>• Nepali and English language books</li>
                <li>• Technical and vocational education materials</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Search className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Study Materials</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Past examination papers</li>
                <li>• Study guides and workbooks</li>
                <li>• Subject-specific resources</li>
                <li>• Educational journals and magazines</li>
                <li>• Research materials and reports</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Laptop className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Digital Resources</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Computer workstations for research</li>
                <li>• Internet access for students</li>
                <li>• Digital catalog system</li>
                <li>• Educational software and e-resources</li>
                <li>• Multimedia learning materials</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Special Collections</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Career guidance resources</li>
                <li>• Electrical engineering references</li>
                <li>• Cultural and local history books</li>
                <li>• Teacher resource materials</li>
                <li>• Competitive exam preparation guides</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Library Services</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Book Lending Services</h3>
                <p className="text-gray-700">Students can borrow books for home study with a simple checkout system</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Reading Areas</h3>
                <p className="text-gray-700">Quiet study spaces and reading corners for individual and group study</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Research Assistance</h3>
                <p className="text-gray-700">Library staff available to help students find materials and conduct research</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Reading Programs</h3>
                <p className="text-gray-700">Regular reading competitions, book clubs, and literary activities to promote reading culture</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Information Literacy Training</h3>
                <p className="text-gray-700">Workshops on research skills, citation methods, and effective use of library resources</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">New Acquisitions</h3>
                <p className="text-gray-700">Regular updates with new books and materials based on curriculum needs and student requests</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Library Hours & Rules</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-apex-midnight mb-3">Opening Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>School Days:</strong> 8:00 AM - 4:00 PM</p>
                <p><strong>Study Periods:</strong> Available during class hours</p>
                <p><strong>After School:</strong> Extended hours during exam periods</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-apex-midnight mb-3">Library Guidelines</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Maintain silence in reading areas</li>
                <li>• Handle books with care</li>
                <li>• Return books on time</li>
                <li>• No food or drinks in the library</li>
                <li>• Respect library property and fellow users</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Why Use Our Library?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-apex-gold/10 to-transparent rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-apex-gold mb-2">1000+</div>
              <div className="text-sm text-gray-700">Books & Resources</div>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/10 to-transparent rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-apex-gold mb-2">Quiet</div>
              <div className="text-sm text-gray-700">Study Environment</div>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/10 to-transparent rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-apex-gold mb-2">Free</div>
              <div className="text-sm text-gray-700">For All Students</div>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Visit the Library</h2>
          <p className="mb-4">
            Our library is open to all students and staff. Visit us during school hours to explore
            our collection, study, or get help with your research projects.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
