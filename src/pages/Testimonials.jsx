import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Kumar",
      text: "Excellent GST and tax service. Very professional.",
    },
    {
      name: "Suresh Reddy",
      text: "Quick response and reliable service.",
    },
    {
      name: "Lakshmi Devi",
      text: "Highly recommended for income tax and GST.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-4xl font-bold mb-10">
        What Our Clients Say
      </h2>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        {/* Stars */}
        <div className="flex justify-center text-yellow-400 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Review */}
        <p className="text-gray-600 italic mb-4">
          "{reviews[index].text}"
        </p>

        <h4 className="font-semibold text-lg">
          {reviews[index].name}
        </h4>

      </div>
    </section>
  );
}