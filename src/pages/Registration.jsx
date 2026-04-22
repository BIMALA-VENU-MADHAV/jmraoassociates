import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaIdCard,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Registration() {
  const services = [
    {
      title: "PAN Registration",
      desc: "Apply for PAN card for individuals and businesses.",
      icon: <FaIdCard />,
      link: "/pan-registration",
      badge: "Essential",
    },
    {
      title: "TAN Registration",
      desc: "Mandatory TAN registration for TDS compliance.",
      icon: <FaCheckCircle />,
      link: "/tan-registration",
      badge: "Important",
    },
    {
      title: "MSME Registration",
      desc: "Get benefits for small and medium enterprises.",
      icon: <FaBuilding />,
      link: "/msme-registration",
      badge: "Popular",
    },
  ];

  return (
    <div className="min-h-screen">
      <br />

      <Helmet>
        <title>Business Registration Services | JM Rao Associates</title>
      </Helmet>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl mb-16 mx-4 max-w-7xl lg:mx-auto">
        <div className="py-16 px-6 flex flex-col md:flex-row items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:w-1/2 text-white mb-8 md:mb-0"
          >
            <h1 className="text-4xl font-bold mb-4">
              Business <span className="text-yellow-300">Registrations</span>
            </h1>

            <p className="text-lg mb-6">
              Start and grow your business legally
            </p>

            {/* BADGES */}
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
            <FaBuilding className="text-9xl text-yellow-300 opacity-80" />
          </motion.div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* SERVICES */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow border relative hover:shadow-xl transition"
            >
              <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {service.badge}
              </span>

              <div className="text-3xl text-blue-600 mb-3">
                {service.icon}
              </div>

              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-gray-600 mt-2 mb-4">{service.desc}</p>

              <Link
                to={service.link}
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition w-full shadow-md hover:shadow-lg"
              >
                Click Here
              </Link>
            </motion.div>
          ))}
        </div>

        {/* INFO */}
        <section className="bg-white p-8 rounded-xl shadow mb-16 border">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Why Business Registration?
          </h2>
          <p className="text-gray-700">
            Proper registration helps your business operate legally,
            gain trust, and access government benefits.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            Start Your Business Today
          </h2>
          <Link
            to="/contact-us"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold"
          >
            Contact Us
          </Link>
        </div>

        <br />
      </div>
    </div>
  );
}