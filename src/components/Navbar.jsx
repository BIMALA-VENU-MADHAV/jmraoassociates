import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { FaBars, FaTimes, FaChevronDown, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState({
    services: false,
  });

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileOpen({ services: false });
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

  // if route not in list → hide navbar
  if (!validRoutes.includes(location.pathname)) return null;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">

      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">

          {/* Left Side */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">

            {/* Phone */}
            <div className="flex items-center space-x-2">
              <FaPhone className="text-yellow-300 text-xs" />
              <a href="tel:+919491468423">+91 94914 68423</a>
            </div>

            {/* WhatsApp (NOW VISIBLE ON MOBILE) */}
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-300 text-xs" />
              <a href="https://wa.me/918801221088">+91 8801221088</a>
            </div>

          </div>

          {/* Right Side */}
          <div className="text-xs opacity-90 text-center sm:text-right">
            Serving Andhra Pradesh | Est. 2017
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1" onClick={closeMobileMenu}>
            <img src="/logo1.svg" alt="JM Rao Associates" className="h-12 w-auto object-contain" />
            <div className="text-xl font-bold">
              <span className="text-blue-700">J M RAO</span>{" "}
              <span className="text-gray-800">ASSOCIATES</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium text-gray-700">

            <Link to="/" className="hover:text-blue-600 font-semibold">
              Home
            </Link>

            <Link to="/about-us" className="hover:text-blue-600 font-semibold">
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 font-semibold flex items-center space-x-1">
                <span>Services</span>
                <FaChevronDown className="text-xs" />
              </button>

              <div className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg w-56 p-3 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <h3 className="font-semibold text-blue-700 text-sm uppercase tracking-wide">Services</h3>
                </div>
                <Link to="/gst" className="block hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">
                  GST
                </Link>

                <Link to="/tax" className="block hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">
                  Income Tax
                </Link>

                <Link to="/fssai" className="block hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">
                  FSSAI
                </Link>

                <Link to="/registration" className="block hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">
                  Registration
                </Link>

              </div>
            </div>

            <Link
              to="/contact-us"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>

          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-blue-700 p-2 hover:bg-blue-50 rounded-lg"
            onClick={toggleMobileMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4 text-gray-700 font-medium">

            <Link to="/" className="block hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50" onClick={closeMobileMenu}>
              Home
            </Link>
            <div className="border-t border-gray-200" />
            <Link to="/about-us" className="block  transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50" onClick={closeMobileMenu}>
              About Us
            </Link>

            {/* Services Mobile */}
            <div className="border-t border-gray-200 pt-4">
              <button className="w-full text-left hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50 flex items-center justify-between font-semibold"
                onClick={() =>
                  setMobileOpen({
                    ...mobileOpen,
                    services: !mobileOpen.services,
                  })
                }>
                Services
                <FaChevronDown
                  className={`text-sm transition-transform duration-200 ${mobileOpen.services ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileOpen.services && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">

                  <Link to="/gst" className="block hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50" onClick={closeMobileMenu}>
                    GST
                  </Link>

                  <Link to="/tax" className="block hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50" onClick={closeMobileMenu}>
                    Income Tax
                  </Link>

                  <Link to="/fssai" className="block hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50" onClick={closeMobileMenu}>
                    FSSAI
                  </Link>

                  <Link to="/registration" className="block hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50" onClick={closeMobileMenu}>
                    Registration
                  </Link>

                </div>
              )}
            </div>

            <div className="border-t pt-4">
              <Link
                to="/contact-us"
                onClick={closeMobileMenu}
                className="block bg-blue-600 text-white text-center py-3 rounded-full"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}