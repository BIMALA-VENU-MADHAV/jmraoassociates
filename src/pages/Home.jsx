import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Testimonials from "../pages/Testimonials";
import FAQ from "../pages/FAQ";
import { Helmet } from "react-helmet-async";
import {
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaBuilding,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaRocket,
  FaShieldAlt,
  FaHandshake,
  FaAward,
  FaCalculator,
  FaClipboardList,
  FaStar,
  FaPhone,
  FaWhatsapp
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen">
      <br />

      <Helmet>
        <title>Home - Tax & Compliance Services | J M Rao Associates</title>
        <meta
          name="description"
          content="Professional tax consultancy services in Andhra Pradesh. GST, Income Tax, TDS, PAN, TAN, MSME, FSSAI registration. Serving Narasapuram, Palakolu & across AP."
        />
        <meta
          name="keywords"
          content="tax consultant Andhra Pradesh, GST registration AP, income tax filing, TDS returns, PAN card, TAN registration, MSME registration, FSSAI license"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="JM Rao Associates" />
        <link rel="canonical" href="https://jmraoassociates.com/" />
      </Helmet>

      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "JM Rao Associates",
            "description": "Professional tax consultancy and business registration services",
            "url": "https://jmraoassociates.com",
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
                Simplifying Tax & <span className="text-yellow-300">Compliance</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                GST • Income Tax • TDS • Accounting Solutions
              </p>
              <div className="flex flex-wrap gap-2 text-sm mb-8">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">⚡ Expert Guidance</span>
                <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">✔ 100% Compliance</span>
                <span className="bg-blue-400 text-white px-3 py-1 rounded-full font-semibold">📈 Trusted Partner</span>
              </div>
              <Link
                to="/contact-us"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center space-x-2 shadow-lg"
              >
                <span>Get Free Consultation</span>
                <FaRocket className="text-sm" />
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaCalculator className="text-9xl text-yellow-300 opacity-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Trust Indicators Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Trusted by <span className="text-blue-600">150+ Clients</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Our track record speaks for itself - years of excellence in tax and compliance services
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl text-blue-600" />,
                number: "150+",
                title: "Happy Clients",
                desc: "Satisfied businesses and individuals",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <FaClock className="text-4xl text-blue-600" />,
                number: "8+",
                title: "Years Experience",
                desc: "Proven expertise in tax compliance",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <FaAward className="text-4xl text-blue-600" />,
                number: "4",
                title: "Expert Team",
                desc: "Certified tax professionals",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <FaCheckCircle className="text-4xl text-blue-600" />,
                number: "100%",
                title: "Compliance Rate",
                desc: "Zero compromise on accuracy",
                color: "from-orange-500 to-orange-600"
              }
            ].map(({ icon, number, title, desc, color }, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className={`bg-gradient-to-r ${color} py-6 px-6 text-white text-center`}>
                  <div className="flex justify-center mb-3">
                    {icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{number}</h3>
                  <p className="text-sm opacity-90">{title}</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
                <FaHandshake className="mr-3 text-blue-600" />
                About J M Rao Associates
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Established in 2017, J M Rao Associates is your trusted partner for GST, Income Tax, TDS, and comprehensive accounting services. We serve over 150 clients across Narasapuram and Palakollu with personalized, expert guidance.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our commitment goes beyond compliance – we build lasting relationships through clarity, accuracy, and unwavering trust. Whether you're a startup or an established business, we provide practical solutions tailored to your needs.
              </p>
              <Link
                to="/about-us"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Learn More About Us</span>
                <FaRocket className="text-sm" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <FaStar className="mr-2 text-yellow-300" />
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                  <span>Personalized Support for Every Client</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                  <span>Fast & Accurate Filings Guaranteed</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                  <span>Certified GST & Tax Experts</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                  <span>Transparent & Affordable Pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our <span className="text-blue-600">Core Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaFileInvoiceDollar className="text-4xl text-blue-600" />,
                title: "GST Services",
                desc: "Complete GST solutions including registration, returns, compliance, and amendments for all business types.",
                link: "/gst",
                features: ["Registration", "Monthly/Quarterly Returns", "Compliance Support", "Amendments"]
              },
              {
                icon: <FaBalanceScale className="text-4xl text-blue-600" />,
                title: "Tax Services",
                desc: "Comprehensive tax solutions covering income tax filing, audits, TDS, and professional tax services.",
                link: "/tax",
                features: ["Income Tax Filing", "Tax Audit", "TDS Returns", "Professional Tax"]
              },
              {
                icon: <FaBuilding className="text-4xl text-blue-600" />,
                title: "Business Registrations",
                desc: "Complete business registration services including PAN, TAN, MSME, FSSAI, and other essential registrations.",
                link: "/registration",
                features: ["PAN/TAN", "MSME Registration", "FSSAI License", "Company Registration"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <span>Explore Service</span>
                    <FaRocket className="text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comprehensive Services Section */}
        <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Our <span className="text-blue-600">Comprehensive Services</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            From basic registrations to complex compliance, we handle all your business needs under one roof
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "PAN Services",
                icon: <FaClipboardList className="text-2xl text-blue-600" />,
                items: ["New PAN Card", "PAN Correction", "PAN Reprint", "NRI PAN", "PAN Aadhaar Linking"],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Business Registration",
                icon: <FaBuilding className="text-2xl text-blue-600" />,
                items: ["Private Limited", "LLP Registration", "GST Registration", "MSME Registration", "Import Export Code"],
                color: "from-green-500 to-green-600"
              },
              {
                title: "Tax & Compliance",
                icon: <FaCalculator className="text-2xl text-blue-600" />,
                items: ["Income Tax Filing", "GST Returns", "TDS Returns", "Tax Audit", "ROC Compliance"],
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Other Services",
                icon: <FaShieldAlt className="text-2xl text-blue-600" />,
                items: ["Digital Signature", "TAN Registration", "ESI/PF Registration", "FSSAI Registration", "Trademark"],
                color: "from-orange-500 to-orange-600"
              },
              {
                title: "Documentation",
                icon: <FaFileInvoiceDollar className="text-2xl text-blue-600" />,
                items: ["Legal Agreements", "Legal Notices", "Property Deeds", "MOA/AOA Drafting", "Business Documents"],
                color: "from-red-500 to-red-600"
              },
              {
                title: "Consultation",
                icon: <FaHandshake className="text-2xl text-blue-600" />,
                items: ["Startup Consulting", "Tax Planning", "Financial Advisory", "Legal Consultation", "Business Planning"],
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className={`bg-gradient-to-r ${service.color} py-4 px-6 text-white flex items-center`}>
                  <div className="mr-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="inline-block w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Testimonials />
        <FAQ />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 text-center text-white shadow-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Expert Tax Assistance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact J M Rao Associates for reliable, professional tax and compliance services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact-us"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <FaPhone className="text-sm" />
              <span>Contact Us</span>
            </Link>
            <a
              href="https://wa.me/918801221088"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FaWhatsapp className="text-sm" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}