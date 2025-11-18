import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Prform = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // 🚀 Prevent page reload
    navigate("/publish"); // 🚀 Now redirect works every time
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-lime-300 flex items-center justify-center px-4 py-10">
        <div className="bg-black bg-opacity-60 backdrop-blur-xl border border-lime-300 p-8 rounded-2xl shadow-lg max-w-lg w-full">

          {/* Logo + Title */}
          <div className="flex items-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="StatItUp Logo"
              className="w-12 h-12 mr-3"
            />
            <h1 className="text-3xl font-extrabold text-lime-400">StartItUp</h1>
          </div>

          <h2 className="text-3xl font-bold text-center mb-6">
            PR Team Registration 📢
          </h2>

          {/* FORM START */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Company Name */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter your company name"
                className="w-full px-4 py-2 rounded-lg bg-black text-lime-300 border border-lime-300 
                focus:outline-none focus:ring-2 focus:ring-lime-300"
                required
              />
            </div>

            {/* Field */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                What Does Your Team Handle?
              </label>
              <select
                className="w-full px-4 py-2 rounded-lg bg-black text-lime-300 border border-lime-300 
                focus:outline-none focus:ring-2 focus:ring-lime-300"
                required
              >
                <option value="">Select your field</option>
                <option value="social-media">Social Media Management</option>
                <option value="pr-handling">PR Handling</option>
                <option value="brand-marketing">Brand Marketing</option>
                <option value="campaigns">Campaign Management</option>
                <option value="advertising">Advertising Services</option>
                <option value="celebrity-mgmt">Celebrity Management</option>
                <option value="content-creation">Content Creation & Editing</option>
                <option value="public-relations">Public Relations</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-lime-300 text-black font-bold py-2 rounded-full hover:bg-white transition duration-300"
            >
              Submit Form
            </button>
          </form>
          {/* FORM END */}
        </div>
      </div>
    </>
  );
};

export default Prform;
