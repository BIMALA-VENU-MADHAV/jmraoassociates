import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Privacy Policy
        </h1>
        <p className="mt-3 text-blue-100">
          JM Rao Associates – Protecting Your Financial & Personal Data
        </p>
      </section>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <Helmet>
          <title>Privacy Policy | JM Rao Associates</title>
        </Helmet>

        {/* INTRO */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-10">
          <p className="text-gray-600 leading-relaxed">
            At JM Rao Associates, we understand the importance of confidentiality 
            when handling financial and personal information. As a professional 
            tax consultancy firm serving clients across Andhra Pradesh, we are 
            committed to safeguarding all client data with the highest level of 
            security and integrity.
          </p>
        </div>

        <div className="space-y-8">

          {/* SECTION */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-600">
              We collect information necessary to provide our services, including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
              <li>Personal details (Name, phone number, email)</li>
              <li>PAN, TAN, Aadhaar, and GST information</li>
              <li>Financial documents and business records</li>
              <li>Bank details required for compliance</li>
            </ul>
          </div>

          {/* SECTION */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              2. Purpose of Data Usage
            </h2>
            <p className="text-gray-600">
              Your information is used strictly for:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
              <li>GST registration, filing, and amendments</li>
              <li>Income tax returns and audits</li>
              <li>TDS compliance and accounting services</li>
              <li>Communication and updates related to your services</li>
            </ul>
          </div>

          {/* SECTION */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              3. Confidentiality Commitment
            </h2>
            <p className="text-gray-600">
              We maintain strict confidentiality of all client data. Your information 
              is never shared with unauthorized parties and is handled only by 
              trained professionals within our firm.
            </p>
          </div>

          {/* SECTION */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              4. Data Security Measures
            </h2>
            <p className="text-gray-600">
              We implement technical and organizational safeguards to protect your 
              data, including secure storage, restricted access, and regular monitoring 
              of systems to prevent unauthorized use.
            </p>
          </div>

          {/* SECTION */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              5. Data Sharing Policy
            </h2>
            <p className="text-gray-600">
              Your data may only be shared:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
              <li>With government authorities for compliance</li>
              <li>When required by law</li>
              <li>With your explicit consent</li>
            </ul>
          </div>

          {/* SECTION */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              6. Data Retention
            </h2>
            <p className="text-gray-600">
              We retain your data only for as long as required to meet legal, regulatory, 
              and business obligations.
            </p>
          </div>

          {/* SECTION */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              7. Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, correct, or request deletion of your data 
              by contacting us at any time.
            </p>
          </div>

          {/* SECTION */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              8. Updates to Policy
            </h2>
            <p className="text-gray-600">
              This policy may be updated periodically to reflect changes in legal 
              or business requirements.
            </p>
          </div>

          {/* CONTACT */}
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">
              Contact Information
            </h2>
            <p>
              JM Rao Associates<br />
              Andhra Pradesh<br />
              📞 +91 8801221088<br />
              📧 jmraoassociates@gmail.com
            </p>
          </div>

        </div>

        <p className="text-sm text-gray-500 mt-10 text-center">
          Last updated: {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
}