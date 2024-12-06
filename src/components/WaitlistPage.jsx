import React, { useState } from "react";
import heroimg from "../assets/rb_68859.png";
import axios from "axios";
import { toast } from "react-hot-toast";

const WaitlistPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [borderColor, setBorderColor] = useState("border-gray-300");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    // Validate the form inputs
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error("Please enter all required fields.");
      setBorderColor("border-red-500"); // Highlight the border as red for invalid input
      setLoading(false); // Reset loading state
      return; // Stop execution if validation fails
    } else {
      setBorderColor("border-green-500"); // Highlight the border as green for valid input
    }

    try {
      // Send the formData as a POST request
      const response = await axios.post(
        "https://api-spiralevent.vercel.app/waitlist",
        formData // Directly pass formData without destructuring
      );

      // Handle response
      if (response.data.error) {
        toast.error(response.data.error); // Show error message from server
      } else {
        toast.success("Waitlisted successfully"); // Show success message
        setFormData({ firstName: "", lastName: "", email: "" }); // Reset form fields
        // Uncomment the next line to navigate to another page if necessary
        // navigate("/");
      }
    } catch (error) {
      // Handle errors appropriately
      if (error.response) {
        toast.error(error.response.data.message); // Server responded with an error
      } else if (error.request) {
        toast.error("No response received from the server."); // Request made but no response
      } else {
        toast.error("Error in setting up the request."); // General error
      }
      console.error(error);
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row">
      {/* Form Section - Full width on mobile, half width on large screens */}
      <div className="w-full h-screen lg:w-1/2 p-6 md:p-12 bg-neutral-100 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Spiral<span className="text-pink-900">Event</span>
            </h3>
            <p className="text-gray-900 mt-1 text-sm mb-4 font-semibold">
              Effortless Event Management, Powered by AI ...
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Get early access!
            </h2>
            <p className="text-gray-600 mb-6">
              Sign up today and be among the first to experience the power of
              AI-driven event planning.
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
                  className={`w-full px-4 py-2 border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900`}
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
                  className={`w-full px-4 py-2 border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900`}
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
                className={`w-full px-4 py-2 border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900`}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-900 text-white py-3 rounded-md hover:bg-pink-800 transition-colors duration-300 ease-in-out"
            >
              {loading ? "Waitlisting..." : "Join Waitlist"}
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
