import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaShieldAlt,
  FaUserLock,
  FaDatabase,
  FaFileAlt,
} from "react-icons/fa";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: <FaDatabase />,
      content: [
        "Personal details (Name, phone number, email)",
        "PAN, TAN, Aadhaar, and GST information",
        "Financial documents and business records",
        "Bank details required for compliance",
      ],
    },
    {
      title: "2. Purpose of Data Usage",
      icon: <FaFileAlt />,
      content: [
        "GST registration, filing, and amendments",
        "Income tax returns and audits",
        "TDS compliance and accounting services",
        "Communication and updates",
      ],
    },
    {
      title: "3. Confidentiality Commitment",
      icon: <FaUserLock />,
      text: "We maintain strict confidentiality of all client data. Your information is never shared with unauthorized parties.",
    },
    {
      title: "4. Data Security Measures",
      icon: <FaShieldAlt />,
      text: "We use secure storage, restricted access, and monitoring systems to protect your data.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      <Helmet>
        <title>Privacy Policy | J M Rao Associates</title>
      </Helmet>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl overflow-hidden mb-16 mx-4 sm:mx-6 lg:mx-auto max-w-7xl">
        <div className="py-16 px-6 sm:py-24 sm:px-12 text-center text-white">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Privacy <span className="text-yellow-300">Policy</span>
            </h1>

            <p className="text-lg md:text-xl mb-6">
              Protecting Your Financial & Personal Data
            </p>

            {/* BADGES */}
            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">
                🔒 Secure Data
              </span>
              <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">
                ✔ 100% Confidential
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 pb-16">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-lg mb-10 border"
        >
          <p className="text-gray-600 leading-relaxed text-lg">
            At J M Rao Associates, we understand the importance of confidentiality 
            when handling financial and personal information. We are committed 
            to safeguarding all client data with the highest level of security 
            and integrity.
          </p>
        </motion.div>

        {/* SECTIONS */}
        <div className="space-y-8">
          {sections.map((sec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-100 rounded-full mr-3 text-blue-600">
                  {sec.icon}
                </div>
                <h2 className="text-lg font-semibold text-blue-700">
                  {sec.title}
                </h2>
              </div>

              {sec.content && (
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  {sec.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {sec.text && (
                <p className="text-gray-600">{sec.text}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-xl shadow-lg mt-12 text-center"
        >
          <h2 className="text-xl font-semibold mb-2">
            Contact Information
          </h2>
          <p>
            J M Rao Associates <br />
            Andhra Pradesh <br />
            📞 +91 8801221088 <br />
            📧 jmraoassociates@gmail.com
          </p>
        </motion.div>

        {/* FOOTER TEXT */}
        <p className="text-sm text-gray-500 mt-10 text-center">
          Last updated: {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
}