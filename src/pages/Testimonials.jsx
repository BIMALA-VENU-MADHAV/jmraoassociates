import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Kumar",
      text: "Excellent GST and tax service. Very professional and quick support.",
    },
    {
      name: "Suresh Reddy",
      text: "Very reliable service. They handled my GST filing smoothly.",
    },
    {
      name: "Lakshmi Devi",
      text: "Highly recommended for income tax and GST services.",
    },
    {
      name: "Praveen Kumar",
      text: "Best consultancy in our area. Clear guidance and fast processing.",
    },
    {
      name: "Anitha Rao",
      text: "They helped me with FSSAI registration quickly. Great support.",
    },
    {
      name: "Venkatesh Naidu",
      text: "Professional team with good knowledge in tax and compliance.",
    },
    {
      name: "Kavya Sri",
      text: "Very friendly staff and transparent pricing. Highly satisfied.",
    },
    {
      name: "Rajesh Babu",
      text: "Quick response and excellent service. Will recommend.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-4xl font-bold mb-10 text-blue-800">
        What Our Clients Say
      </h2>

      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border"
          >

            {/* Stars */}
            <div className="flex justify-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 italic mb-4 text-lg leading-relaxed">
              "{reviews[index].text}"
            </p>

            {/* Name */}
            <h4 className="font-semibold text-lg text-gray-800">
              {reviews[index].name}
            </h4>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}