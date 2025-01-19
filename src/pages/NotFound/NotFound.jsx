import React from "react";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-100 flex flex-col justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-pink-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800">
            Page Not Found
          </h2>
        </div>

        <div className="flex justify-center mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 300"
            className="h-64 w-64 object-contain"
          >
            <circle cx="200" cy="150" r="100" fill="#F3E5F5" />
            <path
              d="M150,120 Q200,80 250,120"
              fill="none"
              stroke="#6A1B9A"
              strokeWidth="4"
            />
            <circle cx="170" cy="120" r="10" fill="#6A1B9A" />
            <circle cx="230" cy="120" r="10" fill="#6A1B9A" />
            <path
              d="M180,200 Q200,230 220,200"
              fill="none"
              stroke="#6A1B9A"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 text-lg mb-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-600 text-sm mb-4">
            It might have been moved or deleted.
          </p>
        </div>

        <div>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-1/2 py-3 bg-pink-900 text-white rounded-lg 
            hover:bg-pink-700 transition-colors duration-300 
            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
