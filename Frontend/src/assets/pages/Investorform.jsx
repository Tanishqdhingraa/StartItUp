import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Investorform = () => {
  const [brandName, setBrandName] = useState("");
  const [budget, setBudget] = useState(50000);
  const [companyType, setCompanyType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      brandName,
      budget,
      companyType,
    };

    try {
      await axios.post("http://localhost:5000/api/investors", formData);
      alert("Form submitted successfully!");

      // Clear inputs
      setBrandName("");
      setBudget(50000);
      setCompanyType("");

    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-lime-300 flex items-center justify-center px-4 py-10">
        <div className="bg-black bg-opacity-60 backdrop-blur-xl border border-lime-300 p-8 rounded-2xl shadow-lg max-w-lg w-full">

          {/* Logo */}
          <div className="flex items-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="StatItUp Logo"
              className="w-12 h-12 mr-3"
            />
            <h1 className="text-3xl font-extrabold text-lime-400">StartItUp</h1>
          </div>

          <h2 className="text-3xl font-bold text-center mb-6">
            Investor Brand Form 🚀
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Brand Name */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                Brand Name
              </label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Enter your brand name"
                className="w-full px-4 py-2 rounded-lg bg-black text-lime-300 border border-lime-300 
                focus:outline-none focus:ring-2 focus:ring-lime-300"
                required
              />
            </div>

            {/* Budget Meter */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                Budget (₹ {budget.toLocaleString()})
              </label>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-lime-300 cursor-pointer"
              />
            </div>

            {/* Company Type */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                Type of Company
              </label>
              <select
                value={companyType}
                onChange={(e) => setCompanyType(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black text-lime-300 border border-lime-300 
                focus:outline-none focus:ring-2 focus:ring-lime-300"
                required
              >
                <option value="">Select company type</option>
                <option value="startup">Startup</option>
                <option value="mid">Mid-Level Company</option>
                <option value="enterprise">Enterprise</option>
                <option value="agency">Marketing Agency</option>
              </select>
            </div>

            {/* Submit Button */}
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

export default Investorform;
