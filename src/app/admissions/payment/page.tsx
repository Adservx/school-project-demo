import { PageLayout } from "@/components/layout/page-layout";
import { CreditCard } from "lucide-react";

export default function PaymentPage() {
  return (
    <PageLayout title="Payment Options" description="Flexible payment plans for school fees.">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <CreditCard className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-2xl font-bold text-apex-midnight">Payment Options</h2>
          </div>
          <div className="space-y-3">
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Annual Payment</h3><p className="text-gray-700 text-sm">Pay full year fees with discount</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Semester Payment</h3><p className="text-gray-700 text-sm">Pay twice per year</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Monthly Installments</h3><p className="text-gray-700 text-sm">Monthly payment plans available</p></div>
            <div className="border-l-4 border-apex-gold pl-4 py-2"><h3 className="font-semibold text-apex-midnight">Payment Methods</h3><p className="text-gray-700 text-sm">Cash, bank transfer accepted</p></div>
          </div>
        </section>
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <p className="text-sm"><strong>Contact:</strong> +977 9856029222 | ranabirjanahit@gmail.com</p>
        </section>
      </div>
    </PageLayout>
  );
}
