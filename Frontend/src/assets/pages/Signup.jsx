import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    // Here you can connect your backend API for signup
    navigate("/login");
  };

  return ( <>
  <Navbar/>
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-lime-300 px-4">
      {/* Logo */}
      <div className="flex items-center mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
          alt="StatItUp Logo"
          className="w-12 h-12 mr-3"
        />
        <h1 className="text-3xl font-extrabold text-lime-400">StatItUp</h1>
      </div>

      {/* Signup Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-lime-300 text-black rounded-2xl shadow-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-lime-300 font-semibold py-2 rounded-lg hover:bg-lime-400 hover:text-black transition-all duration-200"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-4 text-black">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-lime-700 font-semibold cursor-pointer hover:underline"
          >
            Log In
          </span>
        </p>
      </form>
    </div>
    </>
  );
};

export default Signup;
