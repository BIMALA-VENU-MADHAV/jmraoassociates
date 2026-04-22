import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaUsers,
  FaCalculator,
  FaFileSignature,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function GST() {
  const services = [
    {
      title: "GST Registration",
      desc: "Quick and hassle-free GST registration for your business.",
      icon: <FaFileInvoiceDollar />,
      link: "/gst-registration",
      badge: "Popular",
    },
    {
      title: "GST Returns Filing",
      desc: "Accurate and timely GST return filing services.",
      icon: <FaCalculator />,
      link: "/gst-return-filing",
      badge: "Recommended",
    },
    {
      title: "GST Modifications",
      desc: "Update business details, address, and GST changes.",
      icon: <FaFileSignature />,
      link: "/gst-modifications",
      badge: "Fast",
    },
  ];

  return (
    <div className="min-h-screen">
      <br />

      <Helmet>
        <title>GST Services in Andhra Pradesh | JM Rao Associates</title>
        <meta
          name="description"
          content="Complete GST services including registration, returns filing, modifications & consultation."
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
              GST <span className="text-yellow-300">Services</span>
            </h1>
            <p className="text-xl mb-6">
              Complete GST solutions for your business
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                ⚡ Fast Processing
              </span>
              <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                ✔ Expert Support
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <FaFileInvoiceDollar className="text-9xl text-yellow-300 opacity-80" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* SERVICES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
            Our GST Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

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

                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="text-gray-600 mt-2 mb-4">
                  {service.desc}
                </p>

                {/* CTA Button */}
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

        {/* ABOUT GST */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8 border">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            What is GST?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            GST (Goods and Services Tax) is a unified indirect tax system in India.
            It replaces multiple taxes like VAT, Service Tax, and Excise Duty,
            making compliance easier and business operations smoother.
          </p>
        </section>

        {/* WHY GST */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
            Why GST is Important
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Legal Compliance",
              "Input Tax Credit",
              "Business Growth",
              "Tax Transparency",
              "Nationwide Operations",
              "Avoid Penalties",
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
            Need Help with GST?
          </h2>
          <p className="mb-6">
            Get expert GST support today
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