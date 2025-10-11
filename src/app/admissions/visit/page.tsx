import { PageLayout } from "@/components/layout/page-layout";
import { MapPin, Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VisitPage() {
  return (
    <PageLayout
      title="Visit Our Campus"
      description="Schedule a campus tour and experience our facilities, meet our faculty, and learn about our programs."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Campus Tours</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We welcome prospective students and parents to visit our campus. Experience our facilities, 
            meet our faculty and staff, and get a feel for the vibrant learning environment at Ranabir 
            Janahit Secondary School.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">What You&apos;ll See</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Classrooms and learning spaces</li>
                <li>• Science and computer laboratories</li>
                <li>• Library and resource center</li>
                <li>• Sports facilities</li>
                <li>• Technical education workshops</li>
              </ul>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Who You&apos;ll Meet</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Principal and administrators</li>
                <li>• Faculty members</li>
                <li>• Current students</li>
                <li>• Admissions counselors</li>
                <li>• Program coordinators</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Visit Hours</h2>
          </div>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Office Hours</h3>
              <p className="text-gray-700">Sunday - Friday: 10:00 AM - 5:00 PM</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2">
              <h3 className="font-semibold text-apex-midnight">Scheduled Tours</h3>
              <p className="text-gray-700">Available by appointment during office hours</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Schedule Your Visit</h2>
          </div>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
              <input type="date" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Program of Interest</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent">
                <option>Select a program</option>
                <option>Primary (Grades 1-5)</option>
                <option>Lower Secondary (Grades 6-8)</option>
                <option>Secondary (Grades 9-10)</option>
                <option>10+2 Education</option>
                <option>10+2 Management</option>
                <option>CTEVT Electrical Engineering</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
              <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent resize-none"></textarea>
            </div>
            <Button type="submit" variant="gold" className="w-full">Schedule Visit</Button>
          </form>
        </section>

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-2">
            <p><strong>Address:</strong> Khahare, Waling Municipality Ward 1, Syangja District, Nepal</p>
            <p><strong>Phone:</strong> +977 9856029222, +977 9846113663</p>
            <p><strong>Email:</strong> ranabirjanahit@gmail.com</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
