import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">

      {/* 🔥 Animated Background Blobs */}
      <div className="absolute w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-40 right-10"></div>
      <div className="absolute w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 bottom-10 left-1/2"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 text-center max-w-lg w-full"
      >

        {/* 404 TEXT */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-7xl font-extrabold text-white mb-4 tracking-widest"
        >
          404
        </motion.h1>

        <h2 className="text-2xl font-semibold text-white mb-3">
          Oops! Page Not Found
        </h2>

        <p className="text-blue-100 mb-8">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap">

          <Link
            to="/"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition hover:scale-105"
          >
            Go Home
          </Link>

          <Link
            to="/contact-us"
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
          >
            Contact Us
          </Link>

        </div>

      </motion.div>
    </div>
  );
}