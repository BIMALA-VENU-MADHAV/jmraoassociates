import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaPaperPlane, FaWhatsapp, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    const formElement = e.target;
    const formDataToSend = new FormData(formElement);

    try {
      // Send form data to FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/jmraoassociates@gmail.com", {
        method: "POST",
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatusMessage({
          type: "success",
          text: "Message sent successfully! We'll get back to you within 24 hours."
        });
        // Reset form
        formElement.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please try again or contact us directly at +91 88012 21088"
      });
    } finally {
      setLoading(false);
      // Clear message after 5 seconds
      setTimeout(() => setStatusMessage({ type: "", text: "" }), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      <br />

      <Helmet>
        <title>Contact Us | JM Rao Associates</title>
        <meta name="description" content="Get in touch with JM Rao Associates for expert tax and compliance services in Andhra Pradesh. Contact us via phone, email, or visit our offices in Narasapuram and Palakolu." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl overflow-hidden mb-16 mx-4 sm:mx-6 lg:mx-auto max-w-7xl">
        <div className="relative z-10 py-16 px-6 sm:py-24 sm:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Get In <span className="text-yellow-300">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6">
                Expert tax & compliance guidance at your fingertips
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold">⚡ Quick Response</span>
                <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full font-semibold">✔ Expert Support</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaPaperPlane className="text-9xl text-yellow-300 opacity-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Information Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Contact <span className="text-blue-600">Information</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaEnvelope className="text-3xl text-blue-600" />,
                title: "Email Us",
                content: "jmraoassociates@gmail.com",
                action: "mailto:jmraoassociates@gmail.com"
              },
              {
                icon: <FaPhoneAlt className="text-3xl text-blue-600" />,
                title: "Call Us",
                content: "+91 88012 21088\n+91 94914 68423",
                action: "tel:+918801221088"
              },
              {
                icon: <FaMapMarkerAlt className="text-3xl text-blue-600" />,
                title: "Our Locations",
                content: "Narasapuram & Palakolu,\nAndhra Pradesh",
                action: "#"
              },
              {
                icon: <FaClock className="text-3xl text-blue-600" />,
                title: "Business Hours",
                content: "Mon - Sat: 10:00 AM - 6:00 PM\nSunday: Closed",
                action: "#"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 whitespace-pre-line mb-4">{item.content}</p>
                {item.action.startsWith('mailto:') || item.action.startsWith('tel:') ? (
                  <a
                    href={item.action}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Contact
                  </a>
                ) : null}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form & Quick Actions */}
        <section className="mb-16 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
              <FaUser className="mr-3 text-blue-600" />
              Send a Message
            </h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Status Message */}
              {statusMessage.text && (
                <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                  statusMessage.type === "success"
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}>
                  {statusMessage.type === "success" ? (
                    <FaCheckCircle className="text-green-600 text-xl flex-shrink-0" />
                  ) : (
                    <FaExclamationCircle className="text-red-600 text-xl flex-shrink-0" />
                  )}
                  <p className={statusMessage.type === "success" ? "text-green-700" : "text-red-700"}>
                    {statusMessage.text}
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                <select
                  name="service"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="gst">GST Registration/Returns</option>
                  <option value="income-tax">Income Tax Filing</option>
                  <option value="pan">PAN Card Services</option>
                  <option value="tan">TAN Registration</option>
                  <option value="msme">MSME Registration</option>
                  <option value="fssai">FSSAI License</option>
                  <option value="audit">Tax Audit</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your requirements..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                  required
                ></textarea>
              </div>

              {/* Honey pot field for spam protection */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                <FaPaperPlane className="text-sm" />
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>

          {/* Quick Actions & Services */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <a
                  href="tel:+918801221088"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 group"
                >
                  <div className="p-3 bg-green-100 rounded-full mr-4 group-hover:bg-green-200 transition-colors">
                    <FaPhoneAlt className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Call for Immediate Help</h4>
                    <p className="text-gray-600 text-sm">+91 88012 21088</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918801221088"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 group"
                >
                  <div className="p-3 bg-green-100 rounded-full mr-4 group-hover:bg-green-200 transition-colors">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp Us</h4>
                    <p className="text-gray-600 text-sm">Quick response guaranteed</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Services</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "GST Services",
                  "Income Tax",
                  "PAN/TAN",
                  "MSME Registration",
                  "FSSAI License",
                  "Tax Audit",
                  "Professional Tax",
                  "TDS Returns"
                ].map((service, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Visit Our <span className="text-blue-600">Offices</span>
          </h2>
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Narasapuram Office</h3>
                <div className="space-y-2 text-gray-600">
                  <p>📍 Main Road, Narasapuram</p>
                  <p>📞 +91 88012 21088</p>
                  <p>🕒 Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Palakolu Office</h3>
                <div className="space-y-2 text-gray-600">
                  <p>📍 Business Center, Palakolu</p>
                  <p>📞 +91 94914 68423</p>
                  <p>🕒 Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Located in West Godavari District, Andhra Pradesh, serving clients across the region.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="tel:+918801221088"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Call Narasapuram
                </a>
                <a
                  href="tel:+919491468423"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Call Palakolu
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 text-center text-white shadow-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our experts are ready to help you with all your tax and compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+918801221088"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <FaPhoneAlt className="text-sm" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/918801221088"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition flex items-center justify-center space-x-2"
            >
              <FaWhatsapp className="text-sm" />
              <span>WhatsApp</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}