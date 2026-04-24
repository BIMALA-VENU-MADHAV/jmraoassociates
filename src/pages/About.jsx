import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaUsers, FaClock, FaMapMarkerAlt, FaCheckCircle, FaHandshake, FaAward, FaLightbulb, FaRocket, FaFileAlt, FaCog, FaTrophy, FaShieldAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <div className="min-h-screen">
      <br />
      <Helmet>
        <title>About J M Rao Associates - Tax Consultancy in Andhra Pradesh</title>
        <meta name="description" content="Learn about J M Rao Associates, a trusted tax consultancy firm in Andhra Pradesh offering expert tax services for businesses and individuals in Narasapuram and Palakolu." />
        <meta name="keywords" content="tax consultancy, Andhra Pradesh, GST registration, income tax returns, TDS, professional tax, tax audit, PAN registration, TAN, FSSAI, MSME, Narasapuram, Palakolu" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="J M Rao Associates" />
        <link rel="canonical" href="https://jmraoassociates.com/about" />
      </Helmet>

      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "J M Rao Associates",
            "description": "Trusted tax consultancy firm in Andhra Pradesh",
            "url": "https://jmraoassociates.com/about",
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
            "serviceType": ["Tax Consultancy", "GST Services", "Business Registration"],
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
                More Than Tax <span className="text-yellow-300">Consultants</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                We Build Financial Confidence for Businesses & Individuals
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">⚡ Expert Guidance</span>
                <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">✔ 100% Compliance</span>
                <span className="bg-blue-400 text-white px-3 py-1 rounded-full font-semibold">📈 Trusted Partner</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaHandshake className="text-9xl text-yellow-300 opacity-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Company Introduction Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaAward className="mr-3 text-blue-600" />
            About J M Rao Associates
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              Established in 2017, J M Rao Associates is a trusted tax consultancy firm serving businesses and individuals in Narasapuram and Palakollu. We are more than just tax consultants – we are your financial partners dedicated to building confidence and ensuring compliance.
            </p>
            <p className="text-lg leading-relaxed">
              Our focus extends beyond mere compliance. We provide clarity, accuracy, and long-term support to help you navigate the complex world of taxation with confidence. Whether you're a business owner, professional, or individual, we offer practical solutions tailored to your specific needs.
            </p>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our <span className="text-blue-600">Approach</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaLightbulb className="text-3xl text-blue-600" />,
                title: "Clarity First",
                desc: "We simplify complex tax processes and provide complete transparency" },
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Accuracy Guaranteed",
                desc: "Precise calculations and error-free compliance services" },
              { icon: <FaHandshake className="text-3xl text-blue-600" />,
                title: "Trust Built",
                desc: "Long-term relationships based on reliability and integrity" },
              { icon: <FaRocket className="text-3xl text-blue-600" />,
                title: "Growth Focused",
                desc: "Supporting your business expansion and financial goals" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Risk Management",
                desc: "Proactive identification and mitigation of compliance risks" },
              { icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Personalized Service",
                desc: "Tailored solutions for your unique business requirements" }
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

        {/* Impact in Numbers Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Our <span className="text-blue-600">Impact in Numbers</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Numbers that reflect our commitment to excellence and client satisfaction
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl text-blue-600" />,
                number: 150,
                suffix: "+",
                title: "Clients Served",
                desc: "Businesses and individuals trust us",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <FaClock className="text-4xl text-blue-600" />,
                number: 8,
                suffix: "+",
                title: "Years Experience",
                desc: "Proven track record of excellence",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <FaMapMarkerAlt className="text-4xl text-blue-600" />,
                number: 2,
                suffix: "",
                title: "Locations",
                desc: "Narasapuram & Palakolu coverage",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <FaTrophy className="text-4xl text-blue-600" />,
                number: 100,
                suffix: "%",
                title: "Compliance Rate",
                desc: "Zero compromise on accuracy",
                color: "from-orange-500 to-orange-600"
              }
            ].map(({ icon, number, suffix, title, desc, color }, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className={`bg-gradient-to-r ${color} py-6 px-6 text-white text-center`}>
                  <div className="flex justify-center mb-3">
                    {icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-1">
                    <Counter end={number} suffix={suffix} />
                  </h3>
                  <p className="text-sm opacity-90">{title}</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            How We <span className="text-blue-600">Work</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                { icon: <FaFileAlt className="text-2xl" />,
                  title: "Initial Consultation",
                  desc: "We understand your requirements and provide expert guidance tailored to your needs" },
                { icon: <FaCog className="text-2xl" />,
                  title: "Document Collection",
                  desc: "We collect and verify all necessary documents with complete accuracy" },
                { icon: <FaCheckCircle className="text-2xl" />,
                  title: "Processing & Compliance",
                  desc: "Our experts handle all filings with precision and ensure full regulatory compliance" },
                { icon: <FaTrophy className="text-2xl" />,
                  title: "Final Delivery",
                  desc: "We ensure timely completion and provide all final documents with ongoing support" }
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

        {/* Services Overview Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <FaCog className="mr-3 text-blue-600" />
            Our Comprehensive Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tax Compliance Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Income Tax Return Filing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  GST Registration & Returns
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  TDS Return Filing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Professional Tax Registration
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Support Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Tax Audit Services
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  PAN & TAN Registration
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  FSSAI Registration
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  MSME Registration
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
              { icon: <FaAward className="text-3xl text-blue-600" />,
                title: "Certified Experts",
                desc: "Qualified professionals with deep tax knowledge" },
              { icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Timely Service",
                desc: "All services delivered within stipulated deadlines" },
              { icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Zero Errors",
                desc: "100% accuracy in all compliance filings" },
              { icon: <FaHandshake className="text-3xl text-blue-600" />,
                title: "Personal Touch",
                desc: "Individual attention to each client's needs" },
              { icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                title: "Confidentiality",
                desc: "Complete privacy and data protection" },
              { icon: <FaRocket className="text-3xl text-blue-600" />,
                title: "Future Ready",
                desc: "Staying updated with latest tax regulations" }
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
            Ready to Simplify Your Taxes?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let J M Rao Associates handle your compliance while you focus on growing your business.
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