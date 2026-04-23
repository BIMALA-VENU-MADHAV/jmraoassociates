import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaClock,
  FaWhatsapp,
  FaArrowUp,
  FaCheckCircle,
  FaUsers,
  FaAward,
  FaShieldAlt
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "GST Services",
      icon: <FaCheckCircle className="text-blue-400" />,
      items: [
        { name: "GST Registration", path: "/gst-registration" },
        { name: "GST Returns Filing", path: "/gst-return-filing" },
        { name: "GST Modifications", path: "/gst-modifications" },
      ],
    },
    {
      title: "Tax Services",
      icon: <FaShieldAlt className="text-green-400" />,
      items: [
        { name: "Income Tax Filing", path: "/income-tax-filing" },
        { name: "Tax Audit", path: "/income-tax-audit" },
        { name: "TDS Returns", path: "/tds-returns" },
        { name: "Professional Tax", path: "/professional-tax-registration" },
      ],
    },
    {
      title: "Food License",
      icon: <FaAward className="text-orange-400" />,
      items: [
        { name: "FSSAI Registration", path: "/fssai-registration" },
        { name: "State License", path: "/fssai-state-license" },
        { name: "Central License", path: "/fssai-central-license" },
      ],
    },
    {
      title: "Registrations",
      icon: <FaUsers className="text-purple-400" />,
      items: [
        { name: "PAN Registration", path: "/pan-registration" },
        { name: "TAN Registration", path: "/tan-registration" },
        { name: "MSME Registration", path: "/msme-registration" },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const location = useLocation();

  const validRoutes = [
    "/",
    "/about-us",
    "/contact-us",
    "/gst",
    "/gst-registration",
    "/gst-return-filing",
    "/gst-modifications",
    "/tax",
    "/income-tax-filing",
    "/income-tax-audit",
    "/tds-returns",
    "/professional-tax-registration",
    "/fssai",
    "/fssai-registration",
    "/fssai-state-license",
    "/fssai-central-license",
    "/registration",
    "/pan-registration",
    "/tan-registration",
    "/msme-registration",
    "/privacy-policy"
  ];

  if (!validRoutes.includes(location.pathname)) return null;

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-blue-900 to-blue-800 text-white relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,white,transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-16">

          {/* Company Info Section */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Company Details */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                    J M Rao Associates
                  </h2>
                  <p className="text-blue-200 text-sm mb-1">
                    Proprietor: <span className="text-white font-semibold">J. Manikyalarao</span>
                  </p>
                  <p className="text-blue-300 text-xs mb-4">
                    GST | Income Tax | TDS Specialist
                  </p>
                </div>

                <p className="text-blue-100 mb-6 leading-relaxed">
                  Trusted tax consultants in Narasapuram & Palakolu providing comprehensive GST,
                  Income Tax, TDS, and accounting services with professionalism and accuracy since 2017.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">150+</div>
                    <div className="text-xs text-blue-200">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-300">8+</div>
                    <div className="text-xs text-blue-200">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300">100%</div>
                    <div className="text-xs text-blue-200">Compliance</div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <FaPhone className="mr-2 text-blue-400" />
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaPhone className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Primary</div>
                      <a href="tel:+918801221088" className="text-blue-200 hover:text-white transition-colors">
                        +91 88012 21088
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FaPhone className="text-blue-400 mt-1 flex-shrink-0 opacity-75" />
                    <div>
                      <div className="font-medium">Secondary</div>
                      <a href="tel:+919491468423" className="text-blue-200 hover:text-white transition-colors">
                        +91 94914 68423
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FaRegEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:jmraoassociates@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                        jmraoassociates@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-blue-200">
                        Flat No. 101, Sainadh Residency, Steamer Road<br />Narasapuram, Andhra Pradesh
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Branches</div>
                      <div className="text-blue-200">
                        Narasapuram | Palakollu
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FaClock className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Office Hours</div>
                      <div className="text-blue-200 text-sm">
                        Mon - Sat: 10:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-blue-400" />
                  Our Location
                </h3>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d239.16930675793472!2d81.70593332822388!3d16.439603733365317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d9d8cd0a1639%3A0x472fa46bbf948417!2sJ.M.RAO%20ASSOCIATES!5e0!3m2!1sen!2sin!4v1776800275869!5m2!1sen!2sin"
                    className="w-full h-48 rounded-lg border-0"
                    loading="lazy"
                  />
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-400 hover:to-orange-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Services Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-200">Our Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {footerLinks.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 bg-white/10 rounded-lg">
                      {section.icon}
                    </div>
                    <h4 className="text-lg font-semibold">{section.title}</h4>
                  </div>

                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.path}
                          className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                        >
                          <span className="mr-2 text-xs opacity-60 group-hover:opacity-100">→</span>
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-blue-200 text-sm">
                © {new Date().getFullYear()} JM Rao Associates. All rights reserved.
              </p>
              <p className="text-blue-300 text-xs mt-1">
                Trusted Tax & Compliance Solutions Since 2017
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-blue-200"> 
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact-us" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-white group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918801221088"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-400 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200 group"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-white text-lg group-hover:scale-110 transition-transform" />
        </a>

        {/* Call */}
        <a
          href="tel:+918801221088"
          className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200 group"
          aria-label="Call us"
        >
          <FaPhone className="text-white group-hover:animate-pulse" />
        </a>

      </div>

    </footer>
  );
};

export default Footer;