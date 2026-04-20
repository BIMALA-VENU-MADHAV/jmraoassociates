import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle, FaUsers, FaClipboardList, FaShieldAlt, FaClock, FaCalculator, FaFileUpload, FaFileSignature } from "react-icons/fa";

export default function ProfessionalTax() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl overflow-hidden mb-16 mx-4 sm:mx-6 lg:mx-auto max-w-7xl">
        <div className="relative z-10 py-16 px-6 sm:py-24 sm:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Professional Tax <span className="text-yellow-300">Registration</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                Quick and compliant professional tax registration services
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">⚡ Quick Registration</span>
                <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">✔ Full Compliance</span>
                <span className="bg-blue-400 text-white px-3 py-1 rounded-full font-semibold">📋 Hassle-Free Process</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaBriefcase className="text-9xl text-yellow-300 opacity-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* What is Professional Tax Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaBriefcase className="mr-3 text-blue-600" />
            What is Professional Tax?
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              Professional Tax is a state-level tax imposed on individuals earning income through employment, profession, or business. Employers are required to deduct and pay this tax on behalf of employees, while self-employed individuals must register and pay it directly.
            </p>
            <p className="text-lg leading-relaxed">
              Registration is mandatory for businesses and professionals to ensure compliance with state tax laws. Our experts handle the entire registration process efficiently, ensuring you stay compliant with all state regulations.
            </p>
          </div>
        </section>

        {/* Why Professional Tax is Important Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Why Professional Tax Registration is <span className="text-blue-600">Essential</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Legal Compliance",
                desc: "Mandatory under state tax laws" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Avoid Penalties",
                desc: "Prevent fines and legal complications" },
              { icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Business License",
                desc: "Required for obtaining business licenses" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Employee Management",
                desc: "Essential for employers with staff" },
              { icon: <FaClipboardList className="text-3xl text-blue-600" />,
                title: "Compliance Records",
                desc: "Maintains proper documentation" },
              { icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Smooth Operations",
                desc: "Ensures uninterrupted business activities" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-3 bg-blue-50 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 pl-16">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Needs Professional Tax Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Who Needs <span className="text-blue-600">Professional Tax Registration</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Professional tax registration is mandatory for various categories of individuals and businesses:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Employers & Businesses",
                desc: "Companies with employees and business establishments",
                details: ["Private companies", "Partnership firms", "LLPs and corporations", "Manufacturing units"],
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Self-Employed Professionals",
                desc: "Independent professionals and freelancers",
                details: ["Doctors and medical practitioners", "Lawyers and consultants", "Chartered accountants", "Architects and engineers"],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Trade & Commerce",
                desc: "Individuals engaged in trade activities",
                details: ["Retail traders", "Wholesalers", "Commission agents", "Dealers and distributors"],
                color: "from-green-500 to-green-600"
              },
              {
                title: "Service Providers",
                desc: "Various service-based professionals",
                details: ["IT professionals", "Tutors and trainers", "Event managers", "Real estate agents"],
                color: "from-orange-500 to-orange-600"
              }
            ].map(({ title, desc, details, color }, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className={`bg-gradient-to-r ${color} py-4 px-6 text-white`}>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm opacity-90">{desc}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our <span className="text-blue-600">Registration Process</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                { icon: <FaFileUpload className="text-2xl" />,
                  title: "Document Collection",
                  desc: "Gather all required documents and business details" },
                { icon: <FaClipboardList className="text-2xl" />,
                  title: "Application Preparation",
                  desc: "Prepare and submit application to state authorities" },
                { icon: <FaCalculator className="text-2xl" />,
                  title: "Verification Process",
                  desc: "State authority verification and processing" },
                { icon: <FaFileSignature className="text-2xl" />,
                  title: "Certificate Issuance",
                  desc: "Professional tax registration certificate delivery" },
                { icon: <FaCheckCircle className="text-2xl" />,
                  title: "Compliance Setup",
                  desc: "Set up ongoing compliance and payment schedules" }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 shadow-lg">
                    {index + 1}
                  </div>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} text-center md:text-left`}>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaClipboardList className="mr-3 text-blue-600" />
            Our Professional Tax Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Registration Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  New registration applications
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  State-wise registration
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Document preparation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Certificate tracking
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Compliance Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Tax calculation assistance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Payment scheduling
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Return filing support
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Renewal reminders
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Why Choose <span className="text-blue-600">JM Rao Associates</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Quick Registration",
                desc: "Fast and efficient registration process" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Expert Guidance",
                desc: "Professional tax compliance experts" },
              { icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Accurate Processing",
                desc: "Precise documentation and filing" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "State Compliance",
                desc: "Knowledge of all state regulations" },
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Complete Support",
                desc: "End-to-end registration assistance" },
              { icon: <FaClipboardList className="text-3xl text-blue-600" />,
                title: "Transparent Pricing",
                desc: "Clear pricing with no hidden charges" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 text-center text-white shadow-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Tax Registration?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get your professional tax registration done quickly and stay compliant with state regulations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact-us"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Contact Us</span>
            </a>
            <a
              href="https://wa.me/918801221088"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              WhatsApp Now
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}