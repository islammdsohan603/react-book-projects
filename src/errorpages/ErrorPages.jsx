import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPages = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 text-center shadow-2xl max-w-lg w-full">
        {/* Animated 404 */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Lost in Space 🚀
        </h2>

        <p className="text-gray-300 mt-3">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition transform shadow-lg"
          >
            🏠 Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition"
          >
            ⬅ Go Back
          </button>
        </div>

        {/* Extra subtle effect */}
        <p className="text-xs text-gray-400 mt-6">
          Error Code: 404 | Page Not Found
        </p>
      </div>
    </div>
  );
};

export default ErrorPages;
