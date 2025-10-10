import { PageLayout } from "@/components/layout/page-layout";
import { Users, Briefcase, Heart } from "lucide-react";

export default function StaffPage() {
  return (
    <PageLayout
      title="Administrative Staff"
      description="Our dedicated support staff ensuring smooth operations and a conducive learning environment."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Supporting Excellence</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Behind every successful educational institution is a dedicated team of administrative and support staff. 
            Our staff members work tirelessly to ensure smooth operations, maintain facilities, and create a safe, 
            welcoming environment for students, teachers, and visitors.
          </p>
        </section>

        {/* Staff Departments */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Briefcase className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Team</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Administrative Office</h3>
              <p className="text-gray-700">
                Our administrative team handles admissions, student records, examinations, correspondence, and 
                general office management. They are the first point of contact for parents, students, and visitors.
              </p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Accounts & Finance</h3>
              <p className="text-gray-700">
                The accounts department manages financial operations including fee collection, budgeting, salary 
                disbursement, and financial reporting, ensuring transparency and accountability.
              </p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Library Staff</h3>
              <p className="text-gray-700">
                Our librarians maintain the school library, assist students and teachers with resources, manage 
                book circulation, and create a conducive environment for reading and research.
              </p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Laboratory Assistants</h3>
              <p className="text-gray-700">
                Lab assistants support science and technical education by preparing experiments, maintaining 
                equipment, ensuring safety protocols, and assisting teachers during practical sessions.
              </p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">IT Support</h3>
              <p className="text-gray-700">
                Our IT team maintains computer labs, manages the school's technology infrastructure, provides 
                technical support, and assists with digital learning initiatives.
              </p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Maintenance & Security</h3>
              <p className="text-gray-700">
                Our maintenance staff ensures the campus is clean, well-maintained, and safe. Security personnel 
                monitor the premises and ensure the safety of students, staff, and property.
              </p>
            </div>

            <div className="border-l-4 border-apex-gold pl-6 py-4 bg-apex-platinum/10 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-apex-midnight">Support Services</h3>
              <p className="text-gray-700">
                Additional support staff including peons, cleaners, and helpers who contribute to the smooth 
                functioning of daily operations and maintain a clean, organized environment.
              </p>
            </div>
          </div>
        </section>

        {/* Roles & Responsibilities */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-display text-3xl font-bold text-apex-midnight mb-6">Key Responsibilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Student Services</h3>
              <p className="text-gray-700">Assisting with admissions, records, examinations, and student inquiries.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Facility Management</h3>
              <p className="text-gray-700">Maintaining buildings, classrooms, laboratories, and campus grounds.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Resource Management</h3>
              <p className="text-gray-700">Managing library resources, laboratory equipment, and learning materials.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Safety & Security</h3>
              <p className="text-gray-700">Ensuring a safe, secure environment for the entire school community.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Financial Operations</h3>
              <p className="text-gray-700">Managing accounts, budgets, and financial transactions with transparency.</p>
            </div>
            <div className="bg-apex-platinum/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-apex-midnight">Communication</h3>
              <p className="text-gray-700">Facilitating communication between school, parents, and external stakeholders.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-apex-gold" />
            <h2 className="font-display text-3xl font-bold text-apex-midnight">Our Commitment</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              Our staff members are committed to:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-apex-gold mr-3 mt-1">•</span>
                <span>Providing excellent service to students, teachers, and parents</span>
              </li>
              <li className="flex items-start">
                <span className="text-apex-gold mr-3 mt-1">•</span>
                <span>Maintaining high standards of professionalism and integrity</span>
              </li>
              <li className="flex items-start">
                <span className="text-apex-gold mr-3 mt-1">•</span>
                <span>Creating a welcoming, supportive environment for learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-apex-gold mr-3 mt-1">•</span>
                <span>Working collaboratively to achieve institutional goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-apex-gold mr-3 mt-1">•</span>
                <span>Continuously improving processes and services</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Employment */}
        <section className="bg-apex-midnight text-apex-platinum rounded-lg shadow-lg p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Career Opportunities</h2>
          <p className="mb-4 leading-relaxed">
            We occasionally have openings for administrative and support staff positions. If you are dedicated, 
            hardworking, and interested in contributing to educational excellence, we encourage you to inquire 
            about current opportunities.
          </p>
          <p className="text-sm">
            <strong>Contact:</strong> ranabirjanahit@gmail.com | +977 9856029222
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
