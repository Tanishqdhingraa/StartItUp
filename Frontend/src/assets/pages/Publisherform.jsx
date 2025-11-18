import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Publisherform() {
  // ---------------- Form States ----------------
  const [name, setName] = useState("");
  const [handles, setHandles] = useState("");
  const [contentType, setContentType] = useState("");

  // ---------------- Event Listener ----------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      handles,
      contentType,
    };

    console.log("FORM SUBMITTED:", formData);

    alert("Form submitted successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-lime-300 flex items-center justify-center px-4 py-10">
        <div className="bg-black bg-opacity-60 backdrop-blur-xl border border-lime-300 p-8 rounded-2xl shadow-lg max-w-lg w-full">

          {/* Logo + Heading */}
          <div className="flex items-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="StatItUp Logo"
              className="w-12 h-12 mr-3"
            />
            <h1 className="text-3xl font-extrabold text-lime-400">StartItUp</h1>
          </div>

          <h2 className="text-3xl font-bold text-center mb-6">
            Influencer Publisher Form ⭐
          </h2>

          {/* --------------- FORM START --------------- */}
          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Influencer Name */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                Influencer Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black text-lime-300 border border-lime-300
                focus:outline-none focus:ring-2 focus:ring-lime-300"
                required
              />
            </div>

            {/* Social Media Handles */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                Social Media Handles
              </label>
              <input
                type="text"
                placeholder="Instagram / YouTube / TikTok / X etc."
                value={handles}
                onChange={(e) => setHandles(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black text-lime-300 border border-lime-300
                focus:outline-none focus:ring-2 focus:ring-lime-300"
                required
              />
            </div>

            {/* Type of Content */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                Type of Content You Create
              </label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black text-lime-300 border border-lime-300
                focus:outline-none focus:ring-2 focus:ring-lime-300"
                required
              >
                <option value="">Select content type</option>
                <option value="tech">Tech Reviews & Unboxing</option>
                <option value="fashion">Fashion & Lifestyle</option>
                <option value="gaming">Gaming & Streaming</option>
                <option value="fitness">Fitness & Gym Videos</option>
                <option value="travel">Travel Blogging</option>
                <option value="cooking">Cooking & Food Vlogs</option>
                <option value="education">Education Content</option>
                <option value="entertainment">Comedy / Entertainment</option>
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
          {/* --------------- FORM END --------------- */}
        </div>
      </div>
    </>
  );
}

export default Publisherform;
