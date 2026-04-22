import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaSearch, FaCheckCircle, FaUsers, FaClipboardList, FaShieldAlt, FaClock, FaCalculator, FaFileUpload, FaFileSignature } from "react-icons/fa";

export default function TaxAudit() {
  return (
    <div className="min-h-screen">
      <br />

      <Helmet>
  <title>Tax Audit Services in Andhra Pradesh | J M Rao Associates</title>
  <meta name="description" content="Comprehensive tax audit services in Andhra Pradesh. Statutory audits, internal audits, compliance reviews. Expert auditors, detailed reporting. Serving Narasapuram, Palakolu & across AP." />
  <meta name="keywords" content="tax audit Andhra Pradesh, tax audit services, statutory audit, internal audit, tax compliance audit, tax audit Narasapuram, tax audit Palakolu" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="J M Rao Associates" />
  <link rel="canonical" href="https://jmraoassociates.com/tax-audit" />
</Helmet>

<Helmet>
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "J M Rao Associates",
      "description": "Professional tax audit services in Andhra Pradesh",
      "url": "https://jmraoassociates.com/tax-audit",
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
      "serviceType": ["Tax Audit Services", "Tax Consultancy"],
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
                Tax <span className="text-yellow-300">Audit</span> Services
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                Ensure full compliance with expert tax audit services
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">⚡ Accurate Audit</span>
                <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">✔ Compliance Assurance</span>
                <span className="bg-blue-400 text-white px-3 py-1 rounded-full font-semibold">📋 Zero Errors</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaSearch className="text-9xl text-yellow-300 opacity-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* What is Tax Audit Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaSearch className="mr-3 text-blue-600" />
            What is a Tax Audit?
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              A Tax Audit is the examination of financial records and accounts of a business to ensure accuracy and compliance with the Income Tax Act. It verifies whether income, expenses, and deductions are properly reported.
            </p>
            <p className="text-lg leading-relaxed">
              Regular tax audits help maintain transparency, prevent discrepancies, and ensure your business stays compliant with all tax regulations. Our certified auditors provide comprehensive audit services tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Who Requires Tax Audit Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Who Requires <span className="text-blue-600">Tax Audit</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Tax audit is mandatory for businesses and individuals meeting specific turnover and income criteria:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Businesses with High Turnover",
                desc: "Annual turnover above ₹1 crore",
                details: ["Manufacturing companies", "Trading businesses", "Service providers", "E-commerce operators"],
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "High-Income Professionals",
                desc: "Annual income above ₹50 lakhs",
                details: ["Doctors and medical professionals", "Lawyers and legal consultants", "Chartered accountants", "Architects and engineers"],
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

        {/* Importance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Why Tax Audit is <span className="text-blue-600">Essential</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Legal Compliance",
                desc: "Mandatory requirement under Income Tax Act" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Avoid Penalties",
                desc: "Prevent fines for non-compliance" },
              { icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Financial Accuracy",
                desc: "Ensure accurate financial reporting" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Business Credibility",
                desc: "Build trust with stakeholders and authorities" },
              { icon: <FaClipboardList className="text-3xl text-blue-600" />,
                title: "Better Planning",
                desc: "Foundation for future tax planning" },
              { icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Dispute Prevention",
                desc: "Avoid future tax disputes and litigation" }
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

        {/* Audit Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our <span className="text-blue-600">Tax Audit Process</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                { icon: <FaFileUpload className="text-2xl" />,
                  title: "Document Collection",
                  desc: "Gather all financial records, books of accounts, and supporting documents" },
                { icon: <FaSearch className="text-2xl" />,
                  title: "Record Analysis",
                  desc: "Thorough examination of financial statements and tax compliance" },
                { icon: <FaCalculator className="text-2xl" />,
                  title: "Audit Verification",
                  desc: "Verify accuracy of income, expenses, and tax calculations" },
                { icon: <FaFileSignature className="text-2xl" />,
                  title: "Report Preparation",
                  desc: "Prepare comprehensive audit report with findings and recommendations" },
                { icon: <FaCheckCircle className="text-2xl" />,
                  title: "Filing & Compliance",
                  desc: "File audit report and ensure complete regulatory compliance" }
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
            Our Tax Audit Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Statutory Audit</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Mandatory audit under Companies Act
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Financial statement verification
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Compliance with accounting standards
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Internal control assessment
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tax Audit</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Income tax audit requirements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  GST audit compliance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Transfer pricing documentation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Tax planning and advisory
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
                title: "Timely Completion",
                desc: "Complete audits within stipulated deadlines" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Expert Auditors",
                desc: "Certified professionals with deep expertise" },
              { icon: <FaCalculator className="text-3xl text-blue-600" />,
                title: "Accurate Reporting",
                desc: "Precise and compliant audit reports" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Regulatory Compliance",
                desc: "Full compliance with all tax laws" },
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Complete Support",
                desc: "End-to-end audit assistance" },
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
            Need a Tax Audit for Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ensure compliance and accuracy with our professional tax audit services.
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