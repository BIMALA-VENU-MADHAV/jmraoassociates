import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState({
    services: false,
    gst: false,
    tax: false,
    fssai: false,
    registration: false,
  });

  const [desktopOpen, setDesktopOpen] = useState(false);

  const dropdownRef = useRef(null);

  const location = useLocation();

  const servicesData = [
    {
      key: "gst",
      title: "GST",
      path: "/gst",
      subServices: [
        {
          name: "GST Registration",
          path: "/gst-registration",
        },
        {
          name: "GST Return Filing",
          path: "/gst-return-filing",
        },
        {
          name: "GST Modification",
          path: "/gst-modifications",
        },
      ],
    },

    {
      key: "tax",
      title: "Income Tax",
      path: "/tax",
      subServices: [
        {
          name: "Income Tax Filing",
          path: "/income-tax-filing",
        },
        {
          name: "Tax Audit",
          path: "/income-tax-audit",
        },
        {
          name: "TDS Returns",
          path: "/tds-returns",
        },
        {
          name: "Professional Tax",
          path: "/professional-tax-registration",
        },
      ],
    },

    {
      key: "fssai",
      title: "FSSAI / Food License",
      path: "/fssai",
      subServices: [
        {
          name: "FSSAI Registration",
          path: "/fssai-registration",
        },
        {
          name: "State License",
          path: "/fssai-state-license",
        },
        {
          name: "Central License",
          path: "/fssai-central-license",
        },
      ],
    },

    {
      key: "registration",
      title: "Registration Services",
      path: "/registration",
      subServices: [
        {
          name: "PAN Registration",
          path: "/pan-registration",
        },
        {
          name: "TAN Registration",
          path: "/tan-registration",
        },
        {
          name: "MSME Registration",
          path: "/msme-registration",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDesktopOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);

    setMobileOpen({
      services: false,
      gst: false,
      tax: false,
      fssai: false,
      registration: false,
    });
  };

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

    "/privacy-policy",
  ];

  if (!validRoutes.includes(location.pathname)) return null;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">

            <div className="flex items-center space-x-2">
              <FaPhone className="text-yellow-300 text-xs" />

              <a href="tel:+919491468423">
                +91 94914 68423
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-300 text-xs" />

              <a href="https://wa.me/918801221088">
                +91 8801221088
              </a>
            </div>

          </div>

          <div className="text-xs opacity-90 text-center sm:text-right">
            Serving Andhra Pradesh | Est. 2017
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-3 items-center py-4">

          <Link
            to="/"
            className="flex items-center gap-2 justify-self-start min-w-0"
            onClick={closeMobileMenu}
          >
            <img
              src="/logo1.svg"
              alt="JM Rao Associates"
              className="h-9 sm:h-12 w-auto object-contain"
            />

            <div className="text-sm sm:text-lg lg:text-xl font-bold whitespace-nowrap">
              <span className="text-blue-700">
                J M RAO
              </span>{" "}

              <span className="text-gray-800">
                ASSOCIATES
              </span>
            </div>

          </Link>

          <ul className="hidden lg:flex items-center justify-center space-x-8 font-medium text-gray-700">

            <Link
              to="/"
              className="hover:text-blue-700 hover:bg-blue-50 rounded-lg px-3 py-2 font-semibold transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              to="/about-us"
              className="hover:text-blue-700 hover:bg-blue-50 rounded-lg px-3 py-2 font-semibold transition-colors duration-200"
            >
              About Us
            </Link>

            <div className="relative" ref={dropdownRef}>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDesktopOpen((prev) => !prev);
                }}
                className="hover:text-blue-700 hover:bg-blue-50 rounded-lg px-3 py-2 font-semibold flex items-center gap-2 transition-colors duration-200"
              >
                <span>Services</span>

                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    desktopOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full mt-3 bg-white shadow-2xl rounded-2xl w-80 p-4 border border-gray-100 transition-all duration-300 origin-top ${
                  desktopOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >

                <div className="space-y-4">

                  {servicesData.map((service, index) => (

                    <div
                      key={index}
                      className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                    >

                      <div className="bg-gray-50 hover:bg-blue-50 transition-all duration-200">

                        <div className="flex items-center justify-between px-4 py-3">

                          <Link
                            to={service.path}
                            className="flex items-center gap-3 text-gray-800 font-semibold hover:text-blue-700 transition-colors duration-200"
                            onClick={() => setDesktopOpen(false)}
                          >
                            <span className="text-xl">
                              {service.icon}
                            </span>

                            <span>
                              {service.title}
                            </span>
                          </Link>

                          <FaChevronDown className="text-xs text-gray-500 group-hover:rotate-180 transition-transform duration-300" />

                        </div>

                      </div>

                      <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 bg-white">

                        <div className="px-4 pb-4 pt-1 space-y-2">

                          {service.subServices.map((sub, subIndex) => (

                            <Link
                              key={subIndex}
                              to={sub.path}
                              onClick={() => setDesktopOpen(false)}
                              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
                            >
                              <span className="text-blue-500">
                                •
                              </span>

                              <span>
                                {sub.name}
                              </span>
                            </Link>

                          ))}

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </ul>

          <div className="hidden lg:flex justify-self-end">

            <Link
              to="/contact-us"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>

          </div>

          <button
            className="lg:hidden justify-self-end text-2xl text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {menuOpen && (

        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[90vh] overflow-y-auto">

          <div className="px-4 py-6 space-y-4 text-gray-700 font-medium">

            <Link
              to="/"
              className="block hover:text-blue-700 transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-blue-50"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <div className="border-t border-gray-200" />

            <Link
              to="/about-us"
              className="block hover:text-blue-700 transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-blue-50"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>

            <div className="border-t border-gray-200 pt-4">

              <button
                className="w-full text-left hover:text-blue-700 transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-blue-50 flex items-center justify-between font-semibold"
                onClick={() =>
                  setMobileOpen({
                    ...mobileOpen,
                    services: !mobileOpen.services,
                  })
                }
              >
                <span>Services</span>

                <FaChevronDown
                  className={`text-sm transition-transform duration-200 ${
                    mobileOpen.services ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileOpen.services && (

                <div className="mt-4 space-y-4">

                  {servicesData.map((service, index) => (

                    <div
                      key={index}
                      className="border border-gray-100 rounded-xl overflow-hidden"
                    >

                      <button
                        className="w-full flex items-center justify-between px-4 py-4 bg-gray-50 hover:bg-blue-50 transition-all duration-200"
                        onClick={() =>
                          setMobileOpen({
                            ...mobileOpen,
                            [service.key]:
                              !mobileOpen[service.key],
                          })
                        }
                      >

                        <div className="flex items-center gap-3">

                          <span className="text-xl">
                            {service.icon}
                          </span>

                          <span className="font-semibold text-gray-800">
                            {service.title}
                          </span>

                        </div>

                        <FaChevronDown
                          className={`text-xs transition-transform duration-300 ${
                            mobileOpen[service.key]
                              ? "rotate-180"
                              : ""
                          }`}
                        />

                      </button>

                      {mobileOpen[service.key] && (

                        <div className="bg-white px-4 py-3 space-y-2 border-t border-gray-100">

                          <Link
                            to={service.path}
                            className="block text-sm font-semibold text-blue-600 py-2"
                            onClick={closeMobileMenu}
                          >
                            View All {service.title}
                          </Link>

                          {service.subServices.map(
                            (sub, subIndex) => (

                              <Link
                                key={subIndex}
                                to={sub.path}
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
                                onClick={closeMobileMenu}
                              >
                                <span className="text-blue-500">
                                  •
                                </span>

                                <span>
                                  {sub.name}
                                </span>
                              </Link>

                            )
                          )}

                        </div>

                      )}

                    </div>

                  ))}

                </div>

              )}

            </div>

            <div className="border-t pt-4">

              <Link
                to="/contact-us"
                onClick={closeMobileMenu}
                className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-full font-semibold transition-all duration-200"
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