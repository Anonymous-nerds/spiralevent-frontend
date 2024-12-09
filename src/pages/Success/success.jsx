import React from "react";
import image from "../../assets/Resume-rafiki.png";

const Success = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-100 flex flex-col justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-pink-900">
            You`re on the Waitlist!
          </h2>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src={image}
            alt="Waitlist Illustration"
            className="h-64 w-64 object-contain"
          />
        </div>

        <div className="mb-6">
          <p className="text-gray-800 text-lg">
            We`ve received your waitlist application
          </p>
          <p className="text-pink-900 font-semibold">barbex.jy@gmail.com</p>
          <p className="text-gray-700 mt-2 text-sm">
            We`ll notify you when a spot becomes available
          </p>
        </div>

        <div>
          <button
            className="w-full py-3 bg-pink-900 text-white rounded-lg 
            hover:bg-pink-700 transition-colors duration-300 
            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            <a href="/"> Return to Home</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
