import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-lime-300 px-8 md:px-16 py-10 mt-10 border-t border-lime-400">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        
        {/* Logo and About */}
        <div>
          <div className="flex items-center mb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="StatItUp Logo"
              className="w-10 h-10 mr-3"
            />
            <h2 className="text-2xl font-extrabold text-lime-400">StartItUp</h2>
          </div>
          <p className="text-lime-200 text-sm max-w-xs">
            Empowering brands and influencers to collaborate, grow, and create authentic digital connections together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-lime-400">Quick Links</h3>
          <ul className="space-y-2 text-lime-200">
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-lime-400 transition-colors duration-200"
            >
              Home
            </li>
            <li
              onClick={() => navigate("/investors")}
              className="cursor-pointer hover:text-lime-400 transition-colors duration-200"
            >
              Investors
            </li>
            {/* <li
              onClick={() => navigate("/our-aim")}
              className="cursor-pointer hover:text-lime-400 transition-colors duration-200"
            >
              Our Aim
            </li> */}
            <li
              onClick={() => navigate("/pr-team")}
              className="cursor-pointer hover:text-lime-400 transition-colors duration-200"
            >
              Pr-team
            </li>
            
            <li
              onClick={() => navigate("/signup")}
              className="cursor-pointer hover:text-lime-400 transition-colors duration-200"
            >
              Signup
            </li>
            <li
              onClick={() => navigate("/about")}
              className="cursor-pointer hover:text-lime-400 transition-colors duration-200"
            >
              About
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-lime-400">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition-all duration-200"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition-all duration-200"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition-all duration-200"
            >
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-lime-200 text-sm mt-10 border-t border-lime-700 pt-4">
        © {new Date().getFullYear()} <span className="text-lime-400 font-semibold">StatItUp</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
