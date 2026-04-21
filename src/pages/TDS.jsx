import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaMoneyBillWave, FaCheckCircle, FaUsers, FaClipboardList, FaShieldAlt, FaClock, FaCalculator, FaFileUpload, FaFileSignature } from "react-icons/fa";

export default function TDS() {
  return (
    <div className="min-h-screen">
      <br />

      <Helmet>
  <title>TDS Return Filing Services in Andhra Pradesh | JM Rao Associates</title>
  <meta name="description" content="Complete TDS return filing services in Andhra Pradesh. Quarterly returns, compliance assistance, penalty avoidance. Expert consultants, accurate filing. Serving Narasapuram, Palakolu & across AP." />
  <meta name="keywords" content="TDS return filing Andhra Pradesh, TDS returns, TDS compliance, tax deducted at source, TDS filing Narasapuram, TDS filing Palakolu, quarterly TDS returns" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="JM Rao Associates" />
  <link rel="canonical" href="https://jmraoassociates.com/tds" />
</Helmet>

<Helmet>
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JM Rao Associates",
      "description": "Professional TDS return filing services in Andhra Pradesh",
      "url": "https://jmraoassociates.com/tds",
      "telephone": "+91-8801221088",
      "email": "jmraoassociates@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Narasapuram",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Andhra Pradesh"
        },
        {
          "@type": "Place",
          "name": "Narasapuram"
        },
        {
          "@type": "Place",
          "name": "Palakolu"
        }
      ],
      "serviceType": ["TDS Return Filing Services", "Tax Consultancy"],
      "priceRange": "$$"
    }
    `}
  </script>
</Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl overflow-hidden mb-16 mx-4 sm:mx-6 lg:mx-auto max-w-7xl">
        <div className="relative z-10 py-16 px-6 sm:py-24 sm:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                TDS Return <span className="text-yellow-300">Filing</span> Services
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                Accurate and timely TDS compliance for your business
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">⚡ On-Time Filing</span>
                <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">✔ Zero Errors</span>
                <span className="bg-blue-400 text-white px-3 py-1 rounded-full font-semibold">📋 Complete Compliance</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaMoneyBillWave className="text-9xl text-yellow-300 opacity-80" /> 
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* What is TDS Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaMoneyBillWave className="mr-3 text-blue-600" />
            What is TDS?
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              TDS (Tax Deducted at Source) is a system where tax is deducted at the time of making payments such as salary, rent, commission, or professional fees. The deducted tax is then deposited with the government and reported through TDS returns.
            </p>
            <p className="text-lg leading-relaxed">
              Filing TDS returns on time is crucial for compliance and helps deductees claim tax credits. Our experts ensure accurate deductions and timely filings to keep your business compliant and penalty-free.
            </p>
          </div>
        </section>

        {/* Why TDS is Important Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Why TDS Return Filing is <span className="text-blue-600">Essential</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Legal Compliance",
                desc: "Mandatory requirement under Income Tax Act" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Avoid Penalties",
                desc: "Prevent heavy fines and interest charges" },
              { icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Tax Credit Benefits",
                desc: "Helps deductees claim proper tax credits" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Accurate Records",
                desc: "Maintains proper financial documentation" },
              { icon: <FaClipboardList className="text-3xl text-blue-600" />,
                title: "Legal Protection",
                desc: "Prevents legal complications and disputes" },
              { icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Timely Compliance",
                desc: "Ensures all deadlines are met" }
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

        {/* Types of TDS Returns Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Types of <span className="text-blue-600">TDS Returns</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Different forms for different types of payments and transactions:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                form: "Form 24Q",
                title: "Salary TDS",
                desc: "For TDS deducted on salary payments",
                details: ["Monthly filing required", "Employee salary details", "Quarterly statements", "Annual reconciliation"],
                color: "from-purple-500 to-purple-600"
              },
              {
                form: "Form 26Q",
                title: "Non-Salary TDS",
                desc: "For TDS on payments other than salary",
                details: ["Quarterly filing", "Contract payments", "Professional fees", "Rent payments"],
                color: "from-blue-500 to-blue-600"
              },
              {
                form: "Form 27Q",
                title: "Non-Resident TDS",
                desc: "For payments to non-residents",
                details: ["Foreign payments", "Technical services", "Royalty payments", "Interest payments"],
                color: "from-green-500 to-green-600"
              },
              {
                form: "Form 27EQ",
                title: "TCS Returns",
                desc: "Tax Collected at Source",
                details: ["Sale of goods", "Scrap sales", "Tender participation", "Forest produce"],
                color: "from-orange-500 to-orange-600"
              }
            ].map(({ form, title, desc, details, color }, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className={`bg-gradient-to-r ${color} py-4 px-6 text-white`}>
                  <h3 className="text-xl font-bold">{form}</h3>
                  <p className="text-sm opacity-90">{title}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{desc}</p>
                  <ul className="space-y-2">
                    {details.map((detail, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="inline-block w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
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

        {/* Filing Frequency Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            TDS <span className="text-blue-600">Filing Frequency</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                { icon: <FaClock className="text-2xl" />,
                  title: "Monthly Filing",
                  desc: "Form 24Q (Salary TDS) - Due by 31st of next month" },
                { icon: <FaFileUpload className="text-2xl" />,
                  title: "Quarterly Filing",
                  desc: "Forms 26Q, 27Q, 27EQ - Due within 31 days of quarter end" },
                { icon: <FaCalculator className="text-2xl" />,
                  title: "Annual Statements",
                  desc: "Form 16A/27D for deductees - Due by 31st March" },
                { icon: <FaFileSignature className="text-2xl" />,
                  title: "Correction Statements",
                  desc: "For any errors or omissions - Within 3 years" },
                { icon: <FaCheckCircle className="text-2xl" />,
                  title: "Late Filing",
                  desc: "Penalty of ₹200-₹10,000 per day (max ₹1 lakh)" }
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
            Our TDS Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">TDS Return Filing</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  All forms (24Q, 26Q, 27Q, 27EQ)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Monthly and quarterly filings
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Correction statements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Annual reconciliation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">TDS Compliance Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  TDS calculation assistance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Challan generation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Form 16/16A preparation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Advisory and consultation
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
                title: "Timely Filing",
                desc: "All returns filed before deadlines" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Expert Team",
                desc: "Certified tax professionals" },
              { icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Accurate Calculations",
                desc: "Precise TDS computations" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Penalty Protection",
                desc: "Avoid fines and legal issues" },
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Complete Support",
                desc: "End-to-end TDS management" },
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
            Need Help with TDS Compliance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our experts handle your TDS returns while you focus on growing your business.
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