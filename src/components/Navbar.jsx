import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";
import { FaBars, FaTimes, FaChevronDown, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState({
    gst: false,
    tax: false,
    food: false,
    reg: false,
  });

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileOpen({
      gst: false,
      tax: false,
      food: false,
      reg: false,
    });
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">

      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-yellow-300 text-xs" />
              <span>+91 8801221088</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <FaWhatsapp className="text-green-300 text-xs" />
              <span>WhatsApp: +91 8801221088</span>
            </div>
          </div>
          <div className="hidden md:block text-xs opacity-90">
            Serving Narasapuram & Palakolu | Est. 2017
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <img src={logo} alt="JM Rao Associates" className="h-12 w-auto object-contain" />
            <div className="text-xl font-bold">
              <span className="text-blue-700">JM RAO</span>{" "}
              <span className="text-gray-800">ASSOCIATES</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium text-gray-700">

            <Link to="/" className="hover:text-blue-600 transition-colors duration-200 font-semibold">
              Home
            </Link>

            <Link to="/about-us" className="hover:text-blue-600 transition-colors duration-200 font-semibold">
              About Us
            </Link>

            {/* GST Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition-colors duration-200 font-semibold flex items-center space-x-1">
                <span>GST</span>
                <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg w-64 p-4 space-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <h3 className="font-semibold text-blue-700 text-sm uppercase tracking-wide">GST Services</h3>
                </div>
                <Link to="/gst-registration" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  GST Registration
                </Link>
                <Link to="/gst-return-filing" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  GST Returns Filing
                </Link>
                <Link to="/gst-modifications" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  GST Modifications
                </Link>
              </div>
            </div>

            {/* Tax Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition-colors duration-200 font-semibold flex items-center space-x-1">
                <span>Tax</span>
                <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg w-64 p-4 space-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <h3 className="font-semibold text-blue-700 text-sm uppercase tracking-wide">Tax Services</h3>
                </div>
                <Link to="/income-tax-filing" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  Income Tax Filing
                </Link>
                <Link to="/income-tax-audit" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  Tax Audit
                </Link>
                <Link to="/tds-returns" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  TDS Returns
                </Link>
                <Link to="/professional-tax-registration" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  Professional Tax
                </Link>
              </div>
            </div>

            {/* Food License Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition-colors duration-200 font-semibold flex items-center space-x-1">
                <span>Food License</span>
                <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg w-64 p-4 space-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <h3 className="font-semibold text-blue-700 text-sm uppercase tracking-wide">FSSAI Services</h3>
                </div>
                <Link to="/fssai-registration" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  FSSAI Registration
                </Link>
                <Link to="/fssai-state-license" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  State License
                </Link>
                <Link to="/fssai-central-license" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  Central License
                </Link>
              </div>
            </div>

            {/* Registration Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition-colors duration-200 font-semibold flex items-center space-x-1">
                <span>Registration</span>
                <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg w-64 p-4 space-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <h3 className="font-semibold text-blue-700 text-sm uppercase tracking-wide">Business Registration</h3>
                </div>
                <Link to="/pan-registration" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  PAN Registration
                </Link>
                <Link to="/tan-registration" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  TAN Registration
                </Link>
                <Link to="/msme-registration" className="block hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded">
                  MSME Registration
                </Link>
              </div>
            </div>

            <Link to="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
              Contact Us
            </Link>

          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-blue-700 focus:outline-none p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4 text-gray-700 font-medium max-h-screen overflow-y-auto">

            <Link to="/" className="block hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50" onClick={closeMobileMenu}>
              Home
            </Link>

            <Link to="/about-us" className="block hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50" onClick={closeMobileMenu}>
              About Us
            </Link>

            {/* GST Mobile */}
            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={() => setMobileOpen({...mobileOpen, gst: !mobileOpen.gst})}
                className="w-full text-left hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50 flex items-center justify-between font-semibold"
              >
                <span>GST Services</span>
                <FaChevronDown className={`text-sm transition-transform duration-200 ${mobileOpen.gst ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpen.gst && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                  <Link to="/gst-registration" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    GST Registration
                  </Link>
                  <Link to="/gst-return-filing" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    GST Returns Filing
                  </Link>
                  <Link to="/gst-modifications" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    GST Modifications
                  </Link>
                </div>
              )}
            </div>

            {/* Tax Mobile */}
            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={() => setMobileOpen({...mobileOpen, tax: !mobileOpen.tax})}
                className="w-full text-left hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50 flex items-center justify-between font-semibold"
              >
                <span>Tax Services</span>
                <FaChevronDown className={`text-sm transition-transform duration-200 ${mobileOpen.tax ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpen.tax && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                  <Link to="/income-tax-filing" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    Income Tax Filing
                  </Link>
                  <Link to="/income-tax-audit" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    Tax Audit
                  </Link>
                  <Link to="/tds-returns" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    TDS Returns
                  </Link>
                  <Link to="/professional-tax-registration" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    Professional Tax
                  </Link>
                </div>
              )}
            </div>

            {/* Food License Mobile */}
            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={() => setMobileOpen({...mobileOpen, food: !mobileOpen.food})}
                className="w-full text-left hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50 flex items-center justify-between font-semibold"
              >
                <span>Food License</span>
                <FaChevronDown className={`text-sm transition-transform duration-200 ${mobileOpen.food ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpen.food && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                  <Link to="/fssai-registration" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    FSSAI Registration
                  </Link>
                  <Link to="/fssai-state-license" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    State License
                  </Link>
                  <Link to="/fssai-central-license" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    Central License
                  </Link>
                </div>
              )}
            </div>

            {/* Registration Mobile */}
            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={() => setMobileOpen({...mobileOpen, reg: !mobileOpen.reg})}
                className="w-full text-left hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50 flex items-center justify-between font-semibold"
              >
                <span>Registration</span>
                <FaChevronDown className={`text-sm transition-transform duration-200 ${mobileOpen.reg ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpen.reg && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                  <Link to="/pan-registration" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    PAN Registration
                  </Link>
                  <Link to="/tan-registration" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    TAN Registration
                  </Link>
                  <Link to="/msme-registration" className="block hover:text-blue-600 transition-colors duration-200 py-1" onClick={closeMobileMenu}>
                    MSME Registration
                  </Link>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <Link
                to="/contact-us"
                className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                onClick={closeMobileMenu}
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