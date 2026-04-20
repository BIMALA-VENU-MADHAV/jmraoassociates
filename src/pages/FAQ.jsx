import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "What services do you provide?",
      a: "We provide GST, Income Tax, TDS, and accounting services.",
    },
    {
      q: "Do you handle GST registration?",
      a: "Yes, we handle GST registration, filing, and amendments.",
    },
    {
      q: "Where are your offices located?",
      a: "We are located in Narasapuram and Palakolu.",
    },
    {
      q: "How can I contact you?",
      a: "You can contact us via phone, WhatsApp, or contact form.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">

        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 shadow-sm"
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <h3 className="font-semibold">{faq.q}</h3>
              <span>{open === i ? "-" : "+"}</span>
            </div>

            {open === i && (
              <p className="mt-2 text-gray-600">
                {faq.a}
              </p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}