import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Prform = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/Prteam", formData);
      navigate("/publish"); // redirect after submission
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-lime-300 flex items-center justify-center px-4 py-10">
        <div className="bg-black bg-opacity-60 backdrop-blur-xl border border-lime-300 p-8 rounded-2xl shadow-lg max-w-lg w-full">

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

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Company Name */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter your company name"
                className="w-full px-4 py-2 rounded-lg bg-black text-lime-300 border border-lime-300 
                focus:outline-none focus:ring-2 focus:ring-lime-300"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Service / Field */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                What Does Your Team Handle?
              </label>
              <select
                name="serviceType"
                className="w-full px-4 py-2 rounded-lg bg-black text-lime-300 border border-lime-300 
                focus:outline-none focus:ring-2 focus:ring-lime-300"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Select your field</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="PR Handling">PR Handling</option>
                <option value="Brand Marketing">Brand Marketing</option>
                <option value="Campaign Management">Campaign Management</option>
                <option value="Advertising Services">Advertising Services</option>
                <option value="Celebrity Management">Celebrity Management</option>
                <option value="Content Creation">Content Creation & Editing</option>
                <option value="Public Relations">Public Relations</option>
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
          
        </div>
      </div>
    </>
  );
};

export default Prform;
