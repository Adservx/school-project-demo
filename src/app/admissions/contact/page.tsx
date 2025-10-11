import { PageLayout } from "@/components/layout/page-layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function AdmissionsContactPage() {
  return (
    <PageLayout title="Contact Admissions" description="Get in touch with our admissions office for assistance.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold text-apex-midnight mb-6">Admissions Office</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div><h3 className="font-semibold text-apex-midnight mb-1">Phone</h3><p className="text-gray-700">+977 9856029222<br />+977 9846113663</p></div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div><h3 className="font-semibold text-apex-midnight mb-1">Email</h3><p className="text-gray-700">ranabirjanahit@gmail.com</p></div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div><h3 className="font-semibold text-apex-midnight mb-1">Address</h3><p className="text-gray-700">Khahare, Waling Municipality Ward 1<br />Syangja District, Gandaki Province, Nepal</p></div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-apex-gold mt-1 flex-shrink-0" />
              <div><h3 className="font-semibold text-apex-midnight mb-1">Office Hours</h3><p className="text-gray-700">Sunday - Friday: 10:00 AM - 5:00 PM</p></div>
            </div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-xl font-bold mb-4">We&apos;re Here to Help</h2>
          <p>Our admissions team is ready to answer your questions and guide you through the application process.</p>
        </section>
      </div>
    </PageLayout>
  );
}
