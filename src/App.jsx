import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// GST
import GSTRegistration from "./pages/GSTRegistration";
import GSTReturns from "./pages/GSTReturns";
import GSTModifications from "./pages/GSTModifications";

// TAX
import IncomeTax from "./pages/IncomeTax";
import TaxAudit from "./pages/TaxAudit";
import TDS from "./pages/TDS";
import ProfessionalTax from "./pages/ProfessionalTax";

// FOOD LICENSE
import FSSAIRegistration from "./pages/FSSAIRegistration";
import FSSAIState from "./pages/FSSAIState";
import FSSAICentral from "./pages/FSSAICentral";

// REGISTRATION
import PAN from "./pages/PAN";
import TAN from "./pages/TAN";
import MSME from "./pages/MSME";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen">

        <Routes>

          {/* MAIN */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />

          {/* GST */}
          <Route path="/gst-registration" element={<GSTRegistration />} />
          <Route path="/gst-return-filing" element={<GSTReturns />} />
          <Route path="/gst-modifications" element={<GSTModifications />} />

          {/* TAX */}
          <Route path="/income-tax-filing" element={<IncomeTax />} />
          <Route path="/income-tax-audit" element={<TaxAudit />} />
          <Route path="/tds-returns" element={<TDS />} />
          <Route path="/professional-tax-registration" element={<ProfessionalTax />} />

          {/* FOOD LICENSE */}
          <Route path="/fssai-registration" element={<FSSAIRegistration />} />
          <Route path="/fssai-state-license" element={<FSSAIState />} />
          <Route path="/fssai-central-license" element={<FSSAICentral />} />

          {/* REGISTRATION */}
          <Route path="/pan-registration" element={<PAN />} />
          <Route path="/tan-registration" element={<TAN />} />
          <Route path="/msme-registration" element={<MSME />} />

        </Routes>

      </div>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;