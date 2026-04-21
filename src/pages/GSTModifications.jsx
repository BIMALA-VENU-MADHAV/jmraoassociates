import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaEdit, FaCheckCircle, FaUsers, FaClipboardList, FaClock, FaShieldAlt, FaSearch, FaFileUpload, FaFileSignature, FaSync } from "react-icons/fa";

export default function GSTModifications() {
  return (
    <div className="min-h-screen">
      <br />
      <Helmet>
        <title>
          GST Modification Services in Andhra Pradesh | JM Rao Associates
        </title>

        <meta
          name="description"
          content="Update or modify your GST registration details in Andhra Pradesh with JM Rao Associates. Fast GST amendments, corrections, and compliance support. Serving Narasapuram, Palakolu & across AP."
        />

        <meta
          name="keywords"
          content="GST modification Andhra Pradesh, GST amendment, GST correction, update GST details, GST services AP, GST Narasapuram, GST Palakolu"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="JM Rao Associates" />

        <link
          rel="canonical"
          href="https://jmraoassociates.com/gst-modifications"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JM Rao Associates",
      "description": "GST modification and amendment services in Andhra Pradesh",
      "url": "https://jmraoassociates.com/gst-modifications",
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
      "serviceType": ["GST Modification", "GST Amendment Services"],
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
                GST <span className="text-yellow-300">Modifications</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                Update and correct your GST registration details
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">⚡ Fast Updates</span>
                <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">✔ Minimal Hassle</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaSync className="text-9xl text-yellow-300 opacity-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* What is GST Modification Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaEdit className="mr-3 text-blue-600" />
            What is GST Modification?
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              GST modification refers to updating or correcting details in your existing GST registration. As your business evolves, certain information may need to be changed to reflect current operations and maintain accurate records with the GST authorities.
            </p>
            <p className="text-lg leading-relaxed">
              Keeping your GST details current is essential for compliance, smooth return filing, and avoiding penalties. Our experts handle all types of modifications efficiently, ensuring your business information remains accurate and up-to-date.
            </p>
          </div>
        </section>

        {/* Importance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Why GST Modification is <span className="text-blue-600">Essential</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Legal Compliance",
                desc: "Keep business details legally updated and accurate"
              },
              {
                icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Avoid Penalties",
                desc: "Prevent fines for outdated or incorrect information"
              },
              {
                icon: <FaClipboardList className="text-3xl text-blue-600" />,
                title: "Smooth Filing",
                desc: "Ensure hassle-free GST return submissions"
              },
              {
                icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Accurate Records",
                desc: "Maintain correct government database records"
              },
              {
                icon: <FaSync className="text-3xl text-blue-600" />,
                title: "Stakeholder Trust",
                desc: "Build credibility with customers and partners"
              },
              {
                icon: <FaEdit className="text-3xl text-blue-600" />,
                title: "Business Growth",
                desc: "Facilitate seamless business expansion and changes"
              }
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

        {/* Types of Modifications Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Types of <span className="text-blue-600">GST Modifications</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Common changes that require GST registration modification:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Business Information",
                desc: "Changes to core business details",
                modifications: ["Business name change", "Address modification", "Contact information update", "Business activity changes"],
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Financial & Banking",
                desc: "Banking and financial detail updates",
                modifications: ["Bank account changes", "Authorized signatory updates", "Additional trading places", "Business constitution changes"],
                color: "from-blue-500 to-blue-600"
              }
            ].map(({ title, desc, modifications, color }, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className={`bg-gradient-to-r ${color} py-4 px-6 text-white`}>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm opacity-90">{desc}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {modifications.map((mod, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {mod}
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
            Simple <span className="text-blue-600">4-Step</span> GST Modification Process
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                {
                  icon: <FaSearch className="text-2xl" />,
                  title: "Consultation & Assessment",
                  desc: "Discuss your modification requirements and gather necessary information"
                },
                {
                  icon: <FaFileUpload className="text-2xl" />,
                  title: "Document Preparation",
                  desc: "Prepare and organize all required documents for the modification"
                },
                {
                  icon: <FaFileSignature className="text-2xl" />,
                  title: "Application Submission",
                  desc: "Submit modification request through GST portal with digital signature"
                },
                {
                  icon: <FaCheckCircle className="text-2xl" />,
                  title: "Approval & Confirmation",
                  desc: "Receive approval confirmation and updated GST certificate"
                }
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
            <FaClipboardList className="mr-3 text-blue-600" />
            Documents Required for GST Modification
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Address Change</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  New address proof (electricity bill, rent agreement)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Board resolution (for companies)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Partnership resolution (for firms)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Authorized signatory ID proof
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Other Changes</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Updated PAN card (if name changed)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  New bank account details
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Board/partnership resolution
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Digital signature certificate
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
              {
                icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Quick Processing",
                desc: "Fast and accurate modification updates"
              },
              {
                icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Expert Consultants",
                desc: "Certified GST professionals with deep knowledge"
              },
              {
                icon: <FaClipboardList className="text-3xl text-blue-600" />,
                title: "Complete Documentation",
                desc: "Hassle-free document preparation and submission"
              },
              {
                icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Compliance Assurance",
                desc: "Ensure all modifications meet GST requirements"
              },
              {
                icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "End-to-End Support",
                desc: "Complete assistance from start to approval"
              },
              {
                icon: <FaSync className="text-3xl text-blue-600" />,
                title: "Trusted Service",
                desc: "150+ satisfied clients with successful modifications"
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

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 text-center text-white shadow-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need to Update Your GST Details?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact JM Rao Associates today for fast and reliable GST modification services.
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