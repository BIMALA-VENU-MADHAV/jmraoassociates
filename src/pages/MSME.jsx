import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaBuilding, FaFileSignature, FaUsers, FaCheckCircle, FaCreditCard, FaClipboardCheck, FaSearch, FaFileUpload, FaChartLine } from "react-icons/fa";

export default function MSME() {
  return (
    <div className="min-h-screen">
      <br />
      <Helmet>
  <title>MSME Registration Services in Andhra Pradesh | J M Rao Associates</title>

  <meta
    name="description"
    content="Register your business under MSME (Udyam Registration) in Andhra Pradesh. Get government benefits, subsidies, and easy loans with J M Rao Associates. Serving Narasapuram, Palakolu & across AP."
  />

  <meta
    name="keywords"
    content="MSME registration Andhra Pradesh, Udyam registration AP, MSME benefits, small business registration AP, MSME Narasapuram, MSME Palakolu"
  />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="JM Rao Associates" />

  <link rel="canonical" href="https://jmraoassociates.com/msme-registration" />
</Helmet>

<Helmet>
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JM Rao Associates",
      "description": "MSME and Udyam registration services in Andhra Pradesh",
      "url": "https://jmraoassociates.com/msme-registration",
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
      "serviceType": ["MSME Registration", "Udyam Registration"],
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
                MSME <span className="text-yellow-300">Registration</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                Unlock government benefits and financial support for your business
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">⚡ Free Registration</span>
                <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">✔ Lifetime Benefits</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaBuilding className="text-9xl text-yellow-300 opacity-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* What is MSME Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaBuilding className="mr-3 text-blue-600" />
            What is MSME Registration?
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              MSME (Micro, Small, and Medium Enterprises) registration is a government initiative that provides formal recognition to small businesses. It categorizes businesses based on investment in plant and machinery and annual turnover, offering access to various government schemes and benefits.
            </p>
            <p className="text-lg leading-relaxed">
              MSME registration is completely free and provides lifetime benefits including financial support, subsidies, easier credit access, and protection under various government programs designed to promote small business growth.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Exclusive <span className="text-blue-600">MSME Benefits</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaCreditCard className="text-3xl text-blue-600" />,
                title: "Bank Loans",
                desc: "Lower interest rates and easier loan approvals" },
              { icon: <FaChartLine className="text-3xl text-blue-600" />,
                title: "Government Subsidies",
                desc: "Financial assistance and grant programs" },
              { icon: <FaFileSignature className="text-3xl text-blue-600" />,
                title: "Tender Eligibility",
                desc: "Priority in government procurement" },
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Legal Protection",
                desc: "Protection against delayed payments" }
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

        {/* MSME Categories Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            MSME <span className="text-blue-600">Categories</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Businesses are classified based on investment and turnover:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Micro Enterprise",
                criteria: "Investment < ₹1 crore\nTurnover < ₹5 crore",
                features: ["Small retail shops", "Tiny manufacturing units", "Service providers"],
                color: "from-green-500 to-green-600"
              },
              {
                title: "Small Enterprise",
                criteria: "Investment < ₹10 crore\nTurnover < ₹50 crore",
                features: ["Small manufacturing", "Retail businesses", "Professional services"],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Medium Enterprise",
                criteria: "Investment < ₹50 crore\nTurnover < ₹250 crore",
                features: ["Medium manufacturing", "Larger service firms", "Established businesses"],
                color: "from-purple-500 to-purple-600"
              }
            ].map(({ title, criteria, features, color }, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className={`bg-gradient-to-r ${color} py-4 px-6 text-white text-center`}>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm opacity-90 mt-2 whitespace-pre-line">{criteria}</p>
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

        {/* Who Should Register Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Who Should <span className="text-blue-600">Register as MSME</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaBuilding className="text-3xl text-blue-600" />,
                title: "Startups",
                desc: "New businesses seeking government support and funding"
              },
              {
                icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Small Businesses",
                desc: "Retail shops, service providers, and small manufacturers"
              },
              {
                icon: <FaChartLine className="text-3xl text-blue-600" />,
                title: "Growing Enterprises",
                desc: "Businesses expanding and needing financial assistance"
              }
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
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Simple <span className="text-blue-600">4-Step</span> MSME Registration Process
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                { icon: <FaSearch className="text-2xl" />,
                  title: "Business Assessment",
                  desc: "Evaluate your business size and MSME category eligibility" },
                { icon: <FaFileUpload className="text-2xl" />,
                  title: "Document Collection",
                  desc: "Gather Aadhaar, PAN, and business details" },
                { icon: <FaFileSignature className="text-2xl" />,
                  title: "Online Registration",
                  desc: "Submit application on Udyam Registration Portal" },
                { icon: <FaBuilding className="text-2xl" />,
                  title: "Certificate Issuance",
                  desc: "Receive MSME certificate with lifetime validity" }
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
            Documents Required for MSME Registration
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Documents</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Aadhaar Card of owner
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  PAN Card of business/owner
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Mobile number and email ID
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Business address proof
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Nature of business activity
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Number of employees
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Investment in plant & machinery
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Annual turnover details
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 text-center text-white shadow-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Register Your Business as MSME Today!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get free MSME registration and unlock lifetime government benefits and financial support.
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