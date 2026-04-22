import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaFileInvoiceDollar, FaCheckCircle, FaUsers, FaClipboardList, FaCalculator, FaShieldAlt, FaClock, FaSearch, FaFileUpload, FaFileSignature } from "react-icons/fa";

export default function IncomeTax() {
  return (
    <div className="min-h-screen">
      <br />
      <Helmet>
        <title>Income Tax Filing Services in Andhra Pradesh | J M Rao Associates</title>
        <meta name="description" content="Professional income tax filing services in Andhra Pradesh. Individual and business tax returns, tax planning, compliance assistance. Expert consultants, timely filing. Serving Narasapuram, Palakolu & across AP." />
        <meta name="keywords" content="income tax filing Andhra Pradesh, income tax returns, tax consultants, tax planning, income tax filing Narasapuram, income tax filing Palakolu, tax compliance" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="J M Rao Associates" />
        <link rel="canonical" href="https://jmraoassociates.com/income-tax" />
      </Helmet>

      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "JM Rao Associates",
            "description": "Professional income tax filing services in Andhra Pradesh",
            "url": "https://jmraoassociates.com/income-tax",
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
            "serviceType": ["Income Tax Filing Services", "Tax Consultancy"],
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
                Income Tax <span className="text-yellow-300">Filing</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                Accurate and hassle-free income tax return filing services
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">⚡ Maximize Savings</span>
                <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">✔ Avoid Penalties</span>
                <span className="bg-blue-400 text-white px-3 py-1 rounded-full font-semibold">📋 100% Compliance</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaFileInvoiceDollar className="text-9xl text-yellow-300 opacity-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* What is Income Tax Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaFileInvoiceDollar className="mr-3 text-blue-600" />
            What is Income Tax Return (ITR)?
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              An Income Tax Return (ITR) is a form used to report your income, expenses, tax deductions, and tax payments to the government. Filing ITR is mandatory for individuals and businesses whose income exceeds the prescribed limits.
            </p>
            <p className="text-lg leading-relaxed">
              Proper tax filing ensures compliance, helps claim deductions, and can lead to refunds. Our experts guide you through the entire process for maximum benefits and complete peace of mind.
            </p>
          </div>
        </section>

        {/* Importance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Why Income Tax Filing is <span className="text-blue-600">Essential</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Legal Compliance",
                desc: "Mandatory as per Income Tax Act requirements" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Avoid Penalties",
                desc: "Prevent fines and legal notices for non-compliance" },
              { icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Claim Refunds",
                desc: "Get back excess tax paid through proper filing" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Financial Proof",
                desc: "Required for loans, visas, and business credibility" },
              { icon: <FaClipboardList className="text-3xl text-blue-600" />,
                title: "Record Keeping",
                desc: "Maintain proper financial records and transparency" },
              { icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Future Planning",
                desc: "Build foundation for tax planning and optimization" }
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

        {/* Who Should File Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Who Should File <span className="text-blue-600">ITR</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Income Tax Return filing is mandatory for individuals and businesses meeting certain income criteria:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Individual Taxpayers",
                desc: "Annual income above ₹2.5 lakhs",
                details: ["Salaried individuals", "Freelancers and consultants", "Property owners", "Investors with capital gains"],
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Business Entities",
                desc: "Regardless of turnover",
                details: ["Proprietorship firms", "Partnership firms", "Companies and LLPs", "Trusts and institutions"],
                color: "from-blue-500 to-blue-600"
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

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our <span className="text-blue-600">Income Tax Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaFileUpload className="text-3xl text-blue-600" />,
                title: "ITR Filing for Individuals",
                desc: "Complete filing for salaried, business, and freelance income" },
              { icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Business Tax Returns",
                desc: "Comprehensive tax filing for proprietorship and partnerships" },
              { icon: <FaSearch className="text-3xl text-blue-600" />,
                title: "Tax Planning & Advisory",
                desc: "Strategic planning to minimize tax liability legally" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Tax Refund Claims",
                desc: "Maximize and claim all eligible tax refunds" },
              { icon: <FaClipboardList className="text-3xl text-blue-600" />,
                title: "Audit Support",
                desc: "Assistance with tax audit requirements and compliance" },
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Compliance Assistance",
                desc: "Ongoing support for tax compliance and updates" }
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

        {/* Process Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaClipboardList className="mr-3 text-blue-600" />
            Our Income Tax Filing Process
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Individuals</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Document collection and verification
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Income and deduction calculation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  ITR form selection and filing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Tax payment and refund processing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Businesses</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Financial statement analysis
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Tax computation and planning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Compliance with tax laws
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Audit assistance and support
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Why Choose <span className="text-blue-600">J M Rao Associates</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Timely Filing",
                desc: "File before deadlines to avoid penalties" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Expert Professionals",
                desc: "Certified tax experts with years of experience" },
              { icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Maximum Savings",
                desc: "Optimize deductions and minimize tax liability" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Error-Free Filing",
                desc: "Thorough verification to prevent mistakes" },
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Complete Support",
                desc: "End-to-end assistance from start to finish" },
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
            Ready to File Your Income Tax Return?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Maximize your tax savings and ensure compliance with our expert assistance.
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