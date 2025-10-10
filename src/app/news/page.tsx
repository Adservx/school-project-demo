import { PageLayout } from "@/components/layout/page-layout";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "Admission Open for Academic Year 2082 B.S.",
    date: "2025-01-15",
    category: "Admissions",
    excerpt: "Applications are now open for all programs including Grade 1-12, 10+2 Education & Management, and CTEVT Electrical Engineering courses.",
    image: "admission"
  },
  {
    id: 2,
    title: "Excellent SEE Results 2081",
    date: "2024-12-20",
    category: "Academic",
    excerpt: "Our students achieved outstanding results in SEE examinations with multiple distinction holders and high pass rates.",
    image: "results"
  },
  {
    id: 3,
    title: "New Science Laboratory Inaugurated",
    date: "2024-11-10",
    category: "Infrastructure",
    excerpt: "State-of-the-art science laboratory equipped with modern equipment inaugurated to enhance practical learning.",
    image: "lab"
  },
  {
    id: 4,
    title: "Annual Sports Day 2081",
    date: "2024-10-25",
    category: "Events",
    excerpt: "Students showcased their athletic talents in various sports competitions during the annual sports day celebration.",
    image: "sports"
  },
  {
    id: 5,
    title: "CTEVT Program Expansion",
    date: "2024-09-15",
    category: "Technical Education",
    excerpt: "Expanding our CTEVT-affiliated programs with new equipment and industry partnerships for better practical training.",
    image: "technical"
  },
  {
    id: 6,
    title: "Parent-Teacher Meeting Success",
    date: "2024-08-30",
    category: "Community",
    excerpt: "Productive discussions between parents and teachers focused on student progress and collaborative support.",
    image: "meeting"
  }
];

export default function NewsPage() {
  return (
    <PageLayout
      title="News & Updates"
      description="Stay informed about the latest news, events, and announcements from Ranabir Janahit Secondary School."
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Featured News */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-apex-gold/20 flex items-center justify-center p-12">
              <div className="text-center">
                <Calendar className="h-24 w-24 text-apex-gold mx-auto mb-4" />
                <p className="text-apex-midnight font-semibold">Featured News</p>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center space-x-2 mb-3">
                <Tag className="h-4 w-4 text-apex-gold" />
                <span className="text-sm font-semibold text-apex-gold">{newsItems[0].category}</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-apex-midnight mb-4">
                {newsItems[0].title}
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                <Calendar className="h-4 w-4" />
                <span>{new Date(newsItems[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {newsItems[0].excerpt}
              </p>
              <Button variant="gold">
                Read More <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section>
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-8">Recent News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.slice(1).map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-apex-gold/20 h-48 flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-apex-gold" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="h-4 w-4 text-apex-gold" />
                    <span className="text-sm font-semibold text-apex-gold">{item.category}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-apex-midnight mb-3">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Button variant="outline" size="sm" className="border-apex-gold text-apex-gold hover:bg-apex-gold hover:text-white">
                    Read More <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold text-apex-midnight mb-6">News Categories</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {["All News", "Admissions", "Academic", "Events", "Infrastructure", "Technical Education", "Community", "Achievements"].map((category) => (
              <button
                key={category}
                className="px-4 py-2 border border-apex-gold/30 rounded-lg text-apex-midnight hover:bg-apex-gold hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Announcements */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold text-apex-midnight mb-6">Important Announcements</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-apex-gold pl-4 py-2 bg-apex-platinum/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg text-apex-midnight">Admission Deadline Extended</h3>
                <span className="text-sm text-gray-600">Jan 20, 2025</span>
              </div>
              <p className="text-gray-700 text-sm">Last date for admission applications extended to Magh 15, 2081 B.S.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2 bg-apex-platinum/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg text-apex-midnight">Examination Schedule Released</h3>
                <span className="text-sm text-gray-600">Jan 10, 2025</span>
              </div>
              <p className="text-gray-700 text-sm">Annual examination schedule for all classes has been published. Check notice board for details.</p>
            </div>
            <div className="border-l-4 border-apex-gold pl-4 py-2 bg-apex-platinum/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg text-apex-midnight">Parent Meeting Scheduled</h3>
                <span className="text-sm text-gray-600">Jan 5, 2025</span>
              </div>
              <p className="text-gray-700 text-sm">Parent-teacher meeting scheduled for Poush 25, 2081 B.S. All parents are requested to attend.</p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">Subscribe to our newsletter to receive the latest news and updates directly to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-apex-midnight focus:ring-2 focus:ring-apex-gold focus:outline-none"
              />
              <Button variant="gold" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
