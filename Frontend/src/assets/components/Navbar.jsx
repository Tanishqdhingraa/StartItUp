
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-black  text-lime-300 px-8 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div
        className="text-2xl font-bold tracking-wide cursor-pointer"
        onClick={() => navigate("/")}
      >
        Start<span className="text-white">ItUp</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-lg">
        <button
          onClick={() => navigate("/")}
          className="hover:text-white cursor-pointer transition duration-300"
        >
          Home
        </button>
        
        <button
          onClick={() => navigate("/investors")}
          className="hover:text-white cursor-pointer transition duration-300"
        >
          Investors
        </button>
        <button
          onClick={() => navigate("/pr-team")}
          className="hover:text-white cursor-pointer transition duration-300"
        >
          Publish
        </button>
        <button
          onClick={() => navigate("/about")}
          className="hover:text-white cursor-pointer transition duration-300"
        >
          PR Team
        </button>
        <button
          onClick={() => navigate("/publish")}
          className="hover:text-white cursor-pointer transition duration-300"
        >
          
          About
        </button>
      </div>

      {/* Login Button */}
      <button
        onClick={() => navigate("/login")}
        className="bg-lime-300 text-black cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-white transition duration-300"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
