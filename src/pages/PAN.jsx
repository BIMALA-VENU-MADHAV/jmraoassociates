import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaIdCard, FaFileSignature, FaUsers, FaCheckCircle, FaCreditCard, FaClipboardCheck, FaSearch, FaFileUpload } from "react-icons/fa";

export default function PAN() {
  return (
    <div className="min-h-screen">
      <br />
      <Helmet>
  <title>PAN Registration Services in Andhra Pradesh | J M Rao Associates</title>

  <meta
    name="description"
    content="Apply for PAN card registration in Andhra Pradesh with J M Rao Associates. Fast processing, expert assistance, and complete support. Serving Narasapuram, Palakolu & across AP."
  />

  <meta
    name="keywords"
    content="PAN registration Andhra Pradesh, PAN card apply, new PAN application, PAN services AP, PAN Narasapuram, PAN Palakolu"
  />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="JM Rao Associates" />

  <link rel="canonical" href="https://jmraoassociates.com/pan-registration" />
</Helmet>

<Helmet>
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JM Rao Associates",
      "description": "PAN card registration services in Andhra Pradesh",
      "url": "https://jmraoassociates.com/pan-registration",
      "telephone": "+91-8801221088",
      "email": "jmraoassociates@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Narasapuram",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "Place", "name": "Andhra Pradesh" },
        { "@type": "Place", "name": "Narasapuram" },
        { "@type": "Place", "name": "Palakolu" }
      ],
      "serviceType": ["PAN Registration", "Tax Consultancy"],
      "priceRange": "$$"
    }
    `}
  </script>
</Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl overflow-hidden mb-16 mx-4 sm:mx-6 lg:mx-auto max-w-7xl">
        <div className="relative z-10 py-16 px-6 sm:py-24 sm:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                PAN Card <span className="text-yellow-300">Registration</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                Quick and hassle-free PAN card application services
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">⚡ Quick Processing</span>
                <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">✔ Easy Documentation</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaIdCard className="text-9xl text-yellow-300 opacity-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* What is PAN Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaIdCard className="mr-3 text-blue-600" />
            What is a PAN Card?
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              PAN (Permanent Account Number) is a unique 10-digit alphanumeric number issued by the Income Tax Department of India. It serves as an essential identity document for financial transactions, tax filing, and various government services.
            </p>
            <p className="text-lg leading-relaxed">
              A PAN card is mandatory for individuals, businesses, and entities engaged in financial activities, making it a crucial document for compliance and smooth business operations.
            </p>
          </div>
        </section>

        {/* Importance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Why PAN Card is <span className="text-blue-600">Essential</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaFileSignature className="text-3xl text-blue-600" />,
                title: "Tax Compliance",
                desc: "Mandatory for income tax filing and returns" },
              { icon: <FaCreditCard className="text-3xl text-blue-600" />,
                title: "Banking Services",
                desc: "Required for opening bank accounts" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Identity Proof",
                desc: "Official government-issued ID document" },
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Business Registration",
                desc: "Essential for company and business setup" }
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
            Who Needs a <span className="text-blue-600">PAN Card</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            PAN card is required by various individuals and entities for different purposes:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Individuals",
                desc: "For tax filing and financial transactions",
                features: ["Salaried employees", "Business owners", "Property owners", "Investors"],
                color: "from-green-500 to-green-600"
              },
              {
                title: "Businesses & Firms",
                desc: "For company registration and compliance",
                features: ["Private limited companies", "Partnership firms", "LLPs", "Trusts & NGOs"],
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
            Simple <span className="text-blue-600">4-Step</span> PAN Application Process
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                { icon: <FaSearch className="text-2xl" />,
                  title: "Document Verification",
                  desc: "We verify your documents and eligibility for PAN card application" },
                { icon: <FaFileUpload className="text-2xl" />,
                  title: "Application Submission",
                  desc: "Online submission of PAN application with all required documents" },
                { icon: <FaClipboardCheck className="text-2xl" />,
                  title: "Processing & Approval",
                  desc: "Government processing and approval of your PAN application" },
                { icon: <FaIdCard className="text-2xl" />,
                  title: "Card Delivery",
                  desc: "Receive your PAN card at your registered address" }
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

        {/* Documents Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaFileSignature className="mr-3 text-blue-600" />
            Documents Required for PAN Application
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Individuals</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Aadhaar Card (mandatory)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Date of birth proof
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Address proof
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Passport size photograph
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Businesses</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Business registration certificate
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Partnership deed (for firms)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Authorized signatory details
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Registered office address proof
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 text-center text-white shadow-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your PAN Card Today!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Fast, reliable, and hassle-free PAN card registration services in Andhra Pradesh.
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