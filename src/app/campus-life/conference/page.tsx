import { PageLayout } from "@/components/layout/page-layout";
import { Users, Mic, Projector, Wifi, Clock, Calendar, Award, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Hall - Ranabir Janahit Secondary School",
  description: "Modern conference hall facility for events, seminars, meetings, and school programs at Ranabir Janahit Secondary School.",
};

export default function ConferenceHallPage() {
  return (
    <PageLayout
      title="Conference Hall"
      description="A versatile venue for academic events, seminars, meetings, and school programs."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Modern Event Space</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our conference hall serves as the central hub for school-wide gatherings, academic events,
            parent-teacher meetings, seminars, workshops, and cultural programs. Designed to accommodate
            various types of events, the hall combines functionality with modern amenities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The spacious venue is equipped with audio-visual systems, comfortable seating, and
            climate control to ensure successful events and programs throughout the year.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Facilities & Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Seating Capacity</h3>
              </div>
              <p className="text-gray-700">
                Comfortable seating arrangements for large gatherings, with flexible
                configurations for different event types and audience sizes.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Projector className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Audio-Visual Equipment</h3>
              </div>
              <p className="text-gray-700">
                High-quality projectors, screens, and display systems for presentations,
                videos, and multimedia content delivery.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Mic className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Sound System</h3>
              </div>
              <p className="text-gray-700">
                Professional audio system with microphones, speakers, and mixing equipment
                for clear sound throughout the hall.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Wifi className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Internet Access</h3>
              </div>
              <p className="text-gray-700">
                High-speed Wi-Fi connectivity for online presentations, live streaming,
                and digital event management.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Climate Control</h3>
              </div>
              <p className="text-gray-700">
                Air conditioning and ventilation systems ensuring comfortable environment
                for all seasons and extended events.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-apex-gold transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-apex-gold" />
                <h3 className="font-semibold text-xl text-apex-midnight">Stage Area</h3>
              </div>
              <p className="text-gray-700">
                Elevated stage platform for performances, presentations, guest speakers,
                and award ceremonies.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Event Types</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Academic Events</h3>
                <p className="text-gray-700">Seminars, workshops, guest lectures, academic competitions, and educational programs</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">School Programs</h3>
                <p className="text-gray-700">Annual functions, prize distributions, cultural programs, and celebration events</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Parent Meetings</h3>
                <p className="text-gray-700">Parent-teacher meetings, orientation sessions, and community gatherings</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Training Sessions</h3>
                <p className="text-gray-700">Teacher training, skill development workshops, and professional development programs</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Student Activities</h3>
                <p className="text-gray-700">Debate competitions, drama performances, music concerts, and talent shows</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-apex-midnight mb-1">Community Events</h3>
                <p className="text-gray-700">Public meetings, awareness programs, and community development initiatives</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Venue Highlights</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-apex-gold/10 to-transparent rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-apex-gold mb-2">200+</div>
              <div className="text-sm text-gray-700">Seating Capacity</div>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/10 to-transparent rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-apex-gold mb-2">Modern</div>
              <div className="text-sm text-gray-700">AV Equipment</div>
            </div>
            <div className="bg-gradient-to-br from-apex-gold/10 to-transparent rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-apex-gold mb-2">Year-Round</div>
              <div className="text-sm text-gray-700">Availability</div>
            </div>
          </div>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Book the Conference Hall</h2>
          <p className="mb-4">
            The conference hall is available for school events and approved educational activities.
            For booking inquiries and availability, please contact the school administration.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
