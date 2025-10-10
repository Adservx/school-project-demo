import { PageLayout } from "@/components/layout/page-layout";
import { LucideIcon } from "lucide-react";

interface SimplePageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  content: {
    sections: Array<{
      title: string;
      items: string[];
    }>;
  };
}

export function SimplePage({ title, description, icon: Icon, content }: SimplePageProps) {
  return (
    <PageLayout title={title} description={description}>
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Icon className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Overview</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </section>

        {content.sections.map((section, idx) => (
          <section key={idx} className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-display text-2xl font-bold text-apex-midnight mb-6">{section.title}</h2>
            <div className="space-y-3">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-apex-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">For more information, please contact our office.</p>
          <p className="text-sm">
            <strong>Phone:</strong> +977 9856029222, +977 9846113663<br />
            <strong>Email:</strong> ranabirjanahit@gmail.com
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
