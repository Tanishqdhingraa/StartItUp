import React from "react";
import Navbar from "../components/Navbar";
// import video from "./video.mp4";
import Footer from "../components/Footer"
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen flex items-center mt-28 rounded-4xl justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg"   // <-- Replace with your image URL or local image
          alt="Background"
          className="absolute w-full h-full object-cover"
        />

        {/* Background Video
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-50"
        >
          <source src={video} type="video/mp4" />
        </video> */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Login Card */}
        <div className="relative z-10 bg-black bg-opacity-60 backdrop-blur-md p-10 rounded-2xl shadow-lg w-[90%] max-w-md border border-lime-300">
          <h2 className="text-3xl font-bold text-lime-300 text-center mb-6">
            Welcome Back 🚀
          </h2>

          <form className="flex flex-col space-y-5">
            {/* Email */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-black text-lime-300 border border-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-lime-300 mb-2 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg bg-black text-lime-300 border border-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="mt-4 w-full bg-lime-300 text-black font-bold py-2 rounded-full hover:bg-white transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-lime-300 mt-6 text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="underline hover:text-white">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
