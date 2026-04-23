import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));



// Pages
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// GST
const GST = lazy(() => import("./pages/GST"));
const GSTRegistration = lazy(() => import("./pages/GSTRegistration"));
const GSTReturns = lazy(() => import("./pages/GSTReturns"));
const GSTModifications = lazy(() => import("./pages/GSTModifications"));

// TAX
const TAX = lazy(() => import("./pages/TAX"));
const IncomeTax = lazy(() => import("./pages/IncomeTax"));
const TaxAudit = lazy(() => import("./pages/TaxAudit"));
const TDS = lazy(() => import("./pages/TDS"));
const ProfessionalTax = lazy(() => import("./pages/ProfessionalTax"));

// FOOD LICENSE
const FSSAI = lazy(() => import("./pages/FSSAI"));
const FSSAIRegistration = lazy(() => import("./pages/FSSAIRegistration"));
const FSSAIState = lazy(() => import("./pages/FSSAIState"));
const FSSAICentral = lazy(() => import("./pages/FSSAICentral"));

// REGISTRATION
const Registration = lazy(() => import("./pages/Registration"));
const PAN = lazy(() => import("./pages/PAN"));
const TAN = lazy(() => import("./pages/TAN"));
const MSME = lazy(() => import("./pages/MSME"));

import { i } from "framer-motion/client";

const NotFound = lazy(() => import("./pages/NotFound"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
      >
        <Routes location={location}>
          {/* MAIN */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />

          {/* GST */}
          <Route path="/gst" element={<GST />} />
          <Route path="/gst-registration" element={<GSTRegistration />} />
          <Route path="/gst-return-filing" element={<GSTReturns />} />
          <Route path="/gst-modifications" element={<GSTModifications />} />

          {/* TAX */}
          <Route path="/tax" element={<TAX />} />
          <Route path="/income-tax-filing" element={<IncomeTax />} />
          <Route path="/income-tax-audit" element={<TaxAudit />} />
          <Route path="/tds-returns" element={<TDS />} />
          <Route path="/professional-tax-registration" element={<ProfessionalTax />} />

          {/* FOOD LICENSE */}
          <Route path="/fssai" element={<FSSAI />} />
          <Route path="/fssai-registration" element={<FSSAIRegistration />} />
          <Route path="/fssai-state-license" element={<FSSAIState />} />
          <Route path="/fssai-central-license" element={<FSSAICentral />} />

          {/* REGISTRATION */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/pan-registration" element={<PAN />} />
          <Route path="/tan-registration" element={<TAN />} />
          <Route path="/msme-registration" element={<MSME />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <div className="min-h-screen">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="text-blue-600 text-lg font-semibold">
                Loading...
              </div>
            </div>
          }
        >
          <AnimatedRoutes />
        </Suspense>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;