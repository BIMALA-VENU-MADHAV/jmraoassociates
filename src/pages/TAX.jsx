import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaCalculator,
  FaClipboardList,
  FaFileSignature,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TAX() {
  const services = [
    {
      title: "Income Tax Filing",
      desc: "Accurate and timely income tax filing for individuals and businesses.",
      icon: <FaCalculator />,
      link: "/income-tax-filing",
      badge: "Popular",
    },
    {
      title: "Tax Audit",
      desc: "Comprehensive tax audit services to ensure compliance.",
      icon: <FaClipboardList />,
      link: "/income-tax-audit",
      badge: "Important",
    },
    {
      title: "TDS Returns",
      desc: "Efficient TDS return filing with complete compliance.",
      icon: <FaFileSignature />,
      link: "/tds-returns",
      badge: "Recommended",
    },
    {
      title: "Professional Tax",
      desc: "Professional tax registration and filing services.",
      icon: <FaFileInvoiceDollar />,
      link: "/professional-tax-registration",
      badge: "Fast",
    },
  ];

  return (
    <div className="min-h-screen">
      <br />

      <Helmet>
        <title>Tax Services in Andhra Pradesh | JM Rao Associates</title>
        <meta
          name="description"
          content="Expert income tax services including income tax filing, audits, TDS returns, and professional tax."
        />
      </Helmet>

      {/* HERO */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl overflow-hidden mb-16 mx-4 max-w-7xl lg:mx-auto">
        <div className="py-16 px-6 sm:py-24 sm:px-12 flex flex-col md:flex-row items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:w-1/2 text-white mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Income Tax <span className="text-yellow-300">Services</span>
            </h1>
            <p className="text-xl mb-6">
              Complete income tax solutions for individuals & businesses
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                ⚡ Fast Filing
              </span>
              <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                ✔ Expert Guidance
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <FaCalculator className="text-9xl text-yellow-300 opacity-80" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* SERVICES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
            Our Tax Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white rounded-xl shadow-md hover:shadow-xl border p-6 transition-all"
              >
                {/* Badge */}
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {service.badge}
                </span>

                {/* Icon */}
                <div className="text-3xl text-blue-600 mb-3">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-2 mb-4 text-sm">
                  {service.desc}
                </p>

                {/* CTA */}
                <Link
                  to={service.link}
                 className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition w-full shadow-md hover:shadow-lg"
              >
                Click Here
                </Link>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ABOUT TAX */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            What are Tax Services?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Tax services help individuals and businesses comply with government
            regulations, file returns, and manage their tax liabilities efficiently.
            Proper tax planning ensures savings, compliance, and smooth operations.
          </p>
        </section>

        {/* WHY TAX SERVICES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
            Why Tax Services are Important
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Avoid Penalties",
              "Ensure Compliance",
              "Save Taxes",
              "Accurate Filing",
              "Financial Planning",
              "Business Growth",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-5 bg-white rounded-lg shadow border text-center"
              >
                <FaCheckCircle className="text-blue-600 mx-auto mb-2" />
                <p className="font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-10 rounded-xl text-center mb-16 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Need Help with Taxes?
          </h2>
          <p className="mb-6">
            Get expert tax assistance today
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact-us"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-6 py-3 rounded-full font-bold"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/918801221088"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              WhatsApp
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}