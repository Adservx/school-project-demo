import { PageLayout } from "@/components/layout/page-layout";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  return (
    <PageLayout
      title="Events Calendar"
      description="Stay updated with upcoming events, programs, and activities at our school."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Upcoming Events</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Admission Open</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Ongoing</span>
                </div>
              </div>
              <p className="text-gray-700">Applications open for all programs for academic year 2082 B.S.</p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Parent-Teacher Meeting</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Upcoming</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>10:00 AM</span>
                </div>
              </div>
              <p className="text-gray-700">Quarterly meeting to discuss student progress and academic matters.</p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Annual Sports Day</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Coming Soon</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>School Campus</span>
                </div>
              </div>
              <p className="text-gray-700">Annual sports competition featuring various athletic events and games.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Annual Events</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-apex-midnight">Academic Events</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Admission periods</li>
                <li>• Examination schedules</li>
                <li>• Result publications</li>
                <li>• Parent-teacher meetings</li>
              </ul>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-apex-midnight">Cultural Events</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Annual day celebrations</li>
                <li>• Cultural programs</li>
                <li>• National festivals</li>
                <li>• Talent shows</li>
              </ul>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-apex-midnight">Sports Events</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Annual sports day</li>
                <li>• Inter-house competitions</li>
                <li>• District tournaments</li>
                <li>• Friendly matches</li>
              </ul>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-apex-midnight">Special Programs</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Educational tours</li>
                <li>• Science exhibitions</li>
                <li>• Career guidance sessions</li>
                <li>• Alumni reunions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-4">
            Follow us on social media and check our notice board regularly for the latest event updates and announcements.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
