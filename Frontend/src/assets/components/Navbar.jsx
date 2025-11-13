import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path
      ? "text-lime-400 border-b-2 border-lime-400 pb-1"
      : "hover:text-white transition duration-300";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-lime-300 px-8 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div
        className="flex items-center space-x-2 text-2xl font-bold tracking-wide cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
          alt="StatItUp Logo"
          className="w-10 h-10"
        />
        <span>
          Start<span className="text-white">ItUp</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-lg font-semibold">
        <button onClick={() => navigate("/")} className={isActive("/")}>
          Home
        </button>
        <button onClick={() => navigate("/investors")} className={isActive("/investors")}>
          Investors
        </button>
        <button onClick={() => navigate("/publish")} className={isActive("/publish")}>
          Publish
        </button>
        <button onClick={() => navigate("/pr-team")} className={isActive("/pr-team")}>
          PR Team
        </button>
        <button onClick={() => navigate("/about")} className={isActive("/about")}>
          About
        </button>
      </div>

      {/* Desktop Login */}
      <button
        onClick={() => navigate("/login")}
        className="hidden md:block bg-lime-300 text-black cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-white transition duration-300"
      >
        Login
      </button>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-lime-300"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-black border-t border-gray-700 flex flex-col items-start px-8 py-4 space-y-4 text-lg font-semibold md:hidden">
          <button onClick={() => { navigate("/"); setOpen(false); }} className={isActive("/")}>
            Home
          </button>
          <button onClick={() => { navigate("/investors"); setOpen(false); }} className={isActive("/investors")}>
            Investors
          </button>
          <button onClick={() => { navigate("/publish"); setOpen(false); }} className={isActive("/publish")}>
            Publish
          </button>
          <button onClick={() => { navigate("/pr-team"); setOpen(false); }} className={isActive("/pr-team")}>
            PR Team
          </button>
          <button onClick={() => { navigate("/about"); setOpen(false); }} className={isActive("/about")}>
            About
          </button>
          <button
            onClick={() => { navigate("/login"); setOpen(false); }}
            className="bg-lime-300 text-black cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-white transition duration-300"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
