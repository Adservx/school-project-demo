import { PageLayout } from "@/components/layout/page-layout";
import { Trophy, Award, Star, TrendingUp } from "lucide-react";

export default function AchievementsPage() {
  return (
    <PageLayout
      title="Achievements & Recognition"
      description="Celebrating our students' success and institutional excellence over the years."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Academic Excellence */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Trophy className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Academic Excellence</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-apex-platinum/20 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">SEE (Secondary Education Examination)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-apex-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Consistently high pass rates exceeding district averages</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-apex-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multiple students achieving distinction (GPA 3.6+) annually</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-apex-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Top performers in district rankings</span>
                </li>
              </ul>
            </div>

            <div className="bg-apex-platinum/20 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">NEB (National Examination Board) - 10+2</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-apex-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Strong performance in both Education and Management streams</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-apex-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Students gaining admission to prestigious universities</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-apex-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>High first division pass rates</span>
                </li>
              </ul>
            </div>

            <div className="bg-apex-platinum/20 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-apex-midnight">CTEVT Technical Programs</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-apex-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Excellent practical examination results in Electrical Engineering</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-apex-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>High employment rate of technical graduates</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-apex-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Recognition from industry partners for student competency</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Co-curricular Achievements */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Co-curricular Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Sports</h3>
              <p className="text-gray-700">Participation and medals in district and regional level sports competitions including football, volleyball, and athletics.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Cultural Programs</h3>
              <p className="text-gray-700">Recognition in inter-school cultural competitions, traditional dance, and music performances.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Debate & Oratory</h3>
              <p className="text-gray-700">Students winning prizes in debate competitions and public speaking events at various levels.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Science & Innovation</h3>
              <p className="text-gray-700">Participation in science fairs and technical exhibitions showcasing student projects.</p>
            </div>
          </div>
        </section>

        {/* Institutional Recognition */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Institutional Recognition</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Community Impact</h3>
              <p className="text-gray-700">Recognized as a leading educational institution in Syangja District, serving over 1,000 students across multiple programs.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Infrastructure Development</h3>
              <p className="text-gray-700">Continuous improvement of facilities including modern science labs, computer labs, and multimedia classrooms.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Faculty Excellence</h3>
              <p className="text-gray-700">Experienced and qualified teaching staff with ongoing professional development programs.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Alumni Success</h3>
              <p className="text-gray-700">Graduates serving in various professional fields including education, engineering, medicine, and government service.</p>
            </div>
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Student Success Stories</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <h3 className="font-semibold text-lg text-apex-midnight mb-2">Higher Education</h3>
              <p className="text-gray-700">Our students have gained admission to prestigious universities in Nepal including Tribhuvan University, Kathmandu University, and Pokhara University, pursuing degrees in engineering, medicine, education, and management.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <h3 className="font-semibold text-lg text-apex-midnight mb-2">Technical Careers</h3>
              <p className="text-gray-700">CTEVT graduates have secured employment in electrical companies, construction firms, and industrial sectors, with some pursuing further technical education abroad.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <h3 className="font-semibold text-lg text-apex-midnight mb-2">Government Service</h3>
              <p className="text-gray-700">Alumni serving in various government departments including education, administration, and technical services.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-6 py-2">
              <h3 className="font-semibold text-lg text-apex-midnight mb-2">Entrepreneurship</h3>
              <p className="text-gray-700">Former students successfully running businesses and contributing to local economic development.</p>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Looking Forward</h2>
          <p className="leading-relaxed">
            While we are proud of our achievements, we remain committed to continuous improvement. Our goals include 
            further enhancing academic performance, expanding co-curricular opportunities, upgrading infrastructure, 
            and strengthening industry partnerships to provide even better educational experiences for our students.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
