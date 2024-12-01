import React, { useState } from "react";
import heroimg from "../assets/rb_68859.png";

const WaitlistPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      {/* Form Section - Full width on mobile, half width on large screens */}
      <div className="w-full lg:w-1/2 p-6 md:p-12 bg-neutral-100 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Spiral<span className="text-pink-900">Event</span>
            </h3>
            <p className="text-gray-600 text-sm mb-4">coming soon...</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Get early access!
            </h2>
            <p className="text-gray-600 mb-6">
              Be the first to join our Waitlist by creating a profile and
              claiming a premium username.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-900 text-white py-3 rounded-md hover:bg-pink-800 transition-colors duration-300 ease-in-out"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>

      {/* Image Section - Hidden on mobile, full height on large screens */}
      <div className="hidden lg:block lg:w-1/2 h-screen">
        <img src={heroimg} alt="Event" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default WaitlistPage;
