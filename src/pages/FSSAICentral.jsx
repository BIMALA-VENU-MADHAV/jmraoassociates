import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaFileSignature,
  FaUsers,
  FaShoppingCart,
  FaChartLine,
  FaSearch,
  FaFileUpload,
  FaCreditCard,
  FaClipboardCheck,
} from "react-icons/fa";

export default function FSSAICentral() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl overflow-hidden mb-16 mx-4 sm:mx-6 lg:mx-auto max-w-7xl">
        <div className="relative z-10 py-16 px-6 sm:py-24 sm:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                FSSAI Central License <span className="text-yellow-300"></span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                Expert assistance for large-scale food businesses
              </p>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* What is FSSAI Central License Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaShieldAlt className="mr-3 text-blue-600" />
            What is FSSAI Central License?
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              The <strong>FSSAI Central License</strong> is mandatory for large-scale food businesses with turnover exceeding ₹20 crores. It is issued by the Central Government and covers operations across multiple states, import/export activities, and large manufacturing units.
            </p>
            <p className="text-lg leading-relaxed">
              This license demonstrates the highest level of compliance with national food safety standards and is essential for businesses operating at a national or international level.
            </p>
          </div>
        </section>

        {/* Importance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Why Central License is <span className="text-blue-600">Essential</span> for Your Business
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaFileSignature className="text-3xl text-blue-600" />,
                title: "National Compliance",
                desc: "Mandatory for large-scale operations" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Brand Credibility",
                desc: "Highest level of food safety certification" },
              { icon: <FaShoppingCart className="text-3xl text-blue-600" />,
                title: "Global Markets",
                desc: "Required for import/export activities" },
              { icon: <FaChartLine className="text-3xl text-blue-600" />,
                title: "Business Expansion",
                desc: "Enables multi-state and international operations" }
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

        {/* Who Needs Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Who Needs <span className="text-blue-600">Central License</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Businesses with turnover above ₹20 crores or specific operations require Central License:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Large Manufacturers",
                desc: "Major food production companies",
                features: ["Large-scale manufacturers", "Food processing plants", "Export-oriented units"],
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Multi-State Operators",
                desc: "Businesses operating across states",
                features: ["National distributors", "E-commerce platforms", "Chain restaurants"],
                color: "from-blue-500 to-blue-600"
              }
            ].map(({ title, desc, features, color }, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className={`bg-gradient-to-r ${color} py-4 px-6 text-white`}>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm opacity-90">{desc}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Comprehensive <span className="text-blue-600">6-Step</span> Central License Process
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                { icon: <FaSearch className="text-2xl" />,
                  title: "Business Evaluation",
                  desc: "Detailed assessment of your operations and Central License requirement" },
                { icon: <FaFileUpload className="text-2xl" />,
                  title: "Comprehensive Documentation",
                  desc: "Assistance in preparing extensive documentation for Central Authority" },
                { icon: <FaFileSignature className="text-2xl" />,
                  title: "Application Submission",
                  desc: "Filing Form-B with FSSAI Central Licensing Authority" },
                { icon: <FaCreditCard className="text-2xl" />,
                  title: "Fee Processing",
                  desc: "Guidance through Central Government fee payment procedures" },
                { icon: <FaClipboardCheck className="text-2xl" />,
                  title: "Inspection & Verification",
                  desc: "Support during facility inspection by Central Authority" },
                { icon: <FaShieldAlt className="text-2xl" />,
                  title: "License Issuance",
                  desc: "Receive your Central License with ongoing compliance monitoring" }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 shadow-lg">
                    {item.icon}
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

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 text-center text-white shadow-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your FSSAI Central License?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our Hyderabad-based experts make the process simple, fast, and hassle-free.
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