import { PageLayout } from "@/components/layout/page-layout";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms of Service"
      description="Terms and conditions for using our website and services."
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Terms of Service</h2>
          </div>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>Last updated: January 2025</p>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">Acceptance of Terms</h3>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.</p>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">Use of Website</h3>
            <p>This website is provided for informational purposes about Ranabir Janahit Secondary School. You agree to use the website only for lawful purposes.</p>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">Intellectual Property</h3>
            <p>All content on this website, including text, graphics, logos, and images, is the property of Ranabir Janahit Secondary School and protected by applicable laws.</p>
            
            <h3 className="font-semibold text-lg text-apex-midnight mt-6">Contact</h3>
            <p>For questions about these Terms of Service, contact us at ranabirjanahit@gmail.com</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
