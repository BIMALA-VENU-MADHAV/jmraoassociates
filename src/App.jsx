import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
 


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// GST
import GST from "./pages/GST";
import GSTRegistration from "./pages/GSTRegistration";
import GSTReturns from "./pages/GSTReturns";
import GSTModifications from "./pages/GSTModifications";

// TAX
import TAX from "./pages/TAX";
import IncomeTax from "./pages/IncomeTax";
import TaxAudit from "./pages/TaxAudit";
import TDS from "./pages/TDS";
import ProfessionalTax from "./pages/ProfessionalTax";

// FOOD LICENSE
import FSSAI from "./pages/FSSAI";
import FSSAIRegistration from "./pages/FSSAIRegistration";
import FSSAIState from "./pages/FSSAIState";
import FSSAICentral from "./pages/FSSAICentral";

// REGISTRATION
import Registration from "./pages/Registration"; 
import PAN from "./pages/PAN";
import TAN from "./pages/TAN";
import MSME from "./pages/MSME";
import { i } from "framer-motion/client";

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
        <AnimatedRoutes />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;