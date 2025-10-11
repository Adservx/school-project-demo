import { PageLayout } from "@/components/layout/page-layout";
import { MapPin, Phone, Mail, Clock, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact Us"
      description="Get in touch with Ranabir Janahit Secondary School. We're here to help with your inquiries."
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-apex-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-apex-gold" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Address</h3>
            <p className="text-gray-700 text-sm">
              Khahare, Waling Municipality Ward 1<br />
              Syangja District<br />
              Gandaki Province, Nepal
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-apex-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-apex-gold" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Phone</h3>
            <p className="text-gray-700 text-sm">
              +977 9856029222<br />
              +977 9846113663
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-apex-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-apex-gold" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Email</h3>
            <p className="text-gray-700 text-sm">
              ranabirjanahit@gmail.com
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-apex-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-apex-gold" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Office Hours</h3>
            <p className="text-gray-700 text-sm">
              Sunday - Friday<br />
              10:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-display text-2xl font-bold text-apex-midnight mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent"
                  placeholder="+977 98XXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="general">General Information</option>
                  <option value="academic">Academic Programs</option>
                  <option value="technical">Technical Education</option>
                  <option value="visit">Campus Visit</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apex-gold focus:border-transparent resize-none"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <Button type="submit" variant="gold" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-display text-2xl font-bold text-apex-midnight mb-4">Find Us</h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm">Map integration coming soon</p>
                  <p className="text-xs mt-2">Khahare, Waling Municipality Ward 1, Syangja</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-display text-2xl font-bold text-apex-midnight mb-4">Connect With Us</h2>
              <div className="space-y-4">
                <a
                  href="https://www.facebook.com/ranabirjanahit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-apex-platinum/10 rounded-lg hover:bg-apex-gold/20 transition-colors"
                >
                  <Facebook className="h-6 w-6 text-apex-gold" />
                  <div>
                    <div className="font-semibold text-apex-midnight">Main School Page</div>
                    <div className="text-sm text-gray-600">@ranabirjanahit</div>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61561336004241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-apex-platinum/10 rounded-lg hover:bg-apex-gold/20 transition-colors"
                >
                  <Facebook className="h-6 w-6 text-apex-gold" />
                  <div>
                    <div className="font-semibold text-apex-midnight">CTEVT Programs</div>
                    <div className="text-sm text-gray-600">Technical Education Updates</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Department Contacts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Admissions Office</h3>
              <p className="text-sm text-gray-700 mb-2">For admission inquiries and application support</p>
              <p className="text-sm text-apex-gold">+977 9856029222</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Principal&apos;s Office</h3>
              <p className="text-sm text-gray-700 mb-2">Principal: Laxmi Regmi</p>
              <p className="text-sm text-apex-gold">ranabirjanahit@gmail.com</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Accounts Office</h3>
              <p className="text-sm text-gray-700 mb-2">For fee and financial inquiries</p>
              <p className="text-sm text-apex-gold">+977 9846113663</p>
            </div>
          </div>
        </div>

        {/* Visit Us */}
        <div className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Visit Our Campus</h2>
          <p className="mb-4 leading-relaxed">
            We welcome prospective students and parents to visit our campus and experience our facilities firsthand. 
            Please call ahead to schedule a campus tour or meeting with our admissions team.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gold">Schedule a Visit</Button>
            <Button variant="outline" className="border-apex-gold text-apex-gold hover:bg-apex-gold hover:text-apex-midnight">
              Download Prospectus
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
