import { PageLayout } from "@/components/layout/page-layout";
import { Info } from "lucide-react";

export default function InfoPage() {
  return (
    <PageLayout title="Request Information" description="Request detailed information about our programs and admissions.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Info className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Request Information</h2>
          </div>
          <p className="text-gray-700 mb-6">Fill out the form below to receive detailed information about our programs, admissions, and facilities.</p>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label><input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label><input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent" /></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label><input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Program of Interest</label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent"><option>Select program</option><option>Grades 1-10</option><option>10+2 Education</option><option>10+2 Management</option><option>CTEVT Programs</option></select></div>
            </div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Message</label><textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent resize-none"></textarea></div>
            <button type="submit" className="w-full md:w-auto px-6 py-3 bg-apex-gold text-apex-midnight rounded-lg font-semibold hover:bg-apex-gold/90 transition-colors">Submit Request</button>
          </form>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
