import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaFileInvoiceDollar, FaCheckCircle, FaUsers, FaClipboardList, FaClock, FaShieldAlt, FaSearch, FaFileUpload, FaFileSignature, FaCalculator } from "react-icons/fa";

export default function GSTReturns() {
  return (
    <div className="min-h-screen">
      <br />

      <Helmet>
        <title>GST Return Filing Services in Andhra Pradesh | J M Rao Associates</title>
        <meta name="description" content="Professional GST return filing services in Andhra Pradesh. Accurate, timely, and compliant GST returns for businesses of all sizes. Expert consultants. Serving Narasapuram, Palakolu & across AP." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl overflow-hidden mb-16 mx-4 sm:mx-6 lg:mx-auto max-w-7xl">
        <div className="relative z-10 py-16 px-6 sm:py-24 sm:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                GST Return <span className="text-yellow-300">Filing</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                Accurate and timely GST return filing services
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">⚡ Monthly & Quarterly</span>
                <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">✔ Error-Free Filing</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaCalculator className="text-9xl text-yellow-300 opacity-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* What is GST Return Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaFileInvoiceDollar className="mr-3 text-blue-600" />
            What is GST Return Filing?
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              GST returns are periodic statements that registered businesses must file with the GST authorities. These returns contain details of sales, purchases, tax collected, and tax paid, ensuring transparency in the GST system.
            </p>
            <p className="text-lg leading-relaxed">
              Filing GST returns on time is crucial for compliance, claiming Input Tax Credit, and avoiding penalties. Our experts handle all types of GST returns with precision and ensure your business stays compliant with all regulatory requirements.
            </p>
          </div>
        </section>

        {/* Importance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Why GST Return Filing is <span className="text-blue-600">Critical</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Legal Compliance",
                desc: "Mandatory requirement for all GST registered businesses" },
              { icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Timely Submission",
                desc: "Avoid late fees and penalty charges" },
              { icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Input Tax Credit",
                desc: "Claim ITC for reducing tax liability" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Financial Records",
                desc: "Maintain accurate business documentation" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Stakeholder Trust",
                desc: "Build credibility with customers and authorities" },
              { icon: <FaFileInvoiceDollar className="text-3xl text-blue-600" />,
                title: "Business Operations",
                desc: "Ensure smooth day-to-day business activities" }
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

        {/* Types of Returns Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Types of <span className="text-blue-600">GST Returns</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Different types of GST returns based on business activities and frequency:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Regular Returns",
                desc: "For regular taxpayers with monthly/quarterly filing",
                returns: ["GSTR-1 (Sales details)", "GSTR-3B (Summary return)", "GSTR-9 (Annual return)"],
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Special Returns",
                desc: "For specific business categories and scenarios",
                returns: ["GSTR-4 (Composition scheme)", "GSTR-5 (Non-resident)", "GSTR-8 (E-commerce operator)"],
                color: "from-blue-500 to-blue-600"
              }
            ].map(({ title, desc, returns, color }, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className={`bg-gradient-to-r ${color} py-4 px-6 text-white`}>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm opacity-90">{desc}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {returns.map((ret, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {ret}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filing Frequency Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            GST Return <span className="text-blue-600">Filing Frequency</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Monthly Filing",
                desc: "GSTR-1, GSTR-3B for regular taxpayers",
                period: "By 11th of next month"
              },
              {
                icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Quarterly Filing",
                desc: "GSTR-1 for quarterly filers",
                period: "By 13th of next quarter"
              },
              {
                icon: <FaFileSignature className="text-3xl text-blue-600" />,
                title: "Annual Filing",
                desc: "GSTR-9, GSTR-9C reconciliation",
                period: "By 31st December"
              },
              {
                icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Composition Scheme",
                desc: "GSTR-4 quarterly returns",
                period: "By 18th of next quarter"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.desc}</p>
                <p className="text-sm text-blue-600 font-medium">{item.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our <span className="text-blue-600">5-Step</span> GST Return Filing Process
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                { icon: <FaSearch className="text-2xl" />,
                  title: "Data Collection",
                  desc: "Gather all sales, purchase, and tax-related data from your business records" },
                { icon: <FaCalculator className="text-2xl" />,
                  title: "Return Preparation",
                  desc: "Calculate tax liability and prepare accurate return forms" },
                { icon: <FaFileUpload className="text-2xl" />,
                  title: "Document Verification",
                  desc: "Review all documents and ensure compliance with GST rules" },
                { icon: <FaFileSignature className="text-2xl" />,
                  title: "Online Filing",
                  desc: "Submit returns through GST portal with digital signature" },
                { icon: <FaCheckCircle className="text-2xl" />,
                  title: "Confirmation & Follow-up",
                  desc: "Receive filing confirmation and handle any queries from authorities" }
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

        {/* Why Choose Us Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaShieldAlt className="mr-3 text-blue-600" />
            Why Choose J M Rao Associates for GST Returns
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Error-Free Filing",
                desc: "100% accurate returns with thorough verification" },
              { icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Timely Submission",
                desc: "Never miss deadlines with our reminder system" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Expert Team",
                desc: "Certified GST professionals with deep knowledge" },
              { icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Tax Optimization",
                desc: "Maximize Input Tax Credit and minimize liability" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Compliance Support",
                desc: "Complete assistance with notices and audits" },
              { icon: <FaFileInvoiceDollar className="text-3xl text-blue-600" />,
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
            Need Help with GST Return Filing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our experts handle your GST returns while you focus on growing your business.
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