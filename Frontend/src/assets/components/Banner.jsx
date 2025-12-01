import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-lime-300 mt-28 flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-12 rounded-2xl shadow-lg">
      
      {/* Left Side: Photos */}
      <div className="grid grid-cols-2 gap-4 md:w-1/2 ">
        {[
          "https://i.pinimg.com/736x/27/f7/c3/27f7c3750d25b7b25c685692e13a031a.jpg",
          "https://i.pinimg.com/736x/bb/1f/c0/bb1fc0411b225bfcbcd258349f23f76c.jpg",
          "https://i.pinimg.com/736x/3b/f9/5a/3bf95a527b3984cfb4c37a493feb8824.jpg",
          "https://i.pinimg.com/1200x/5b/f4/d3/5bf4d3da49d8d5664a65d04df17a9a12.jpg",
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Influencer ${i + 1}`}
            className="rounded-xl w-full h-56 md:h-64 object-contain bg-black"
          />
        ))}
      </div>

      {/* Right Side: Description */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome to <span className="text-lime-400">StartItUp</span>
        </h1>
        <p className="text-lg mb-6 text-white">
          A platform where <span className="font-semibold text-lime-400">big brands</span> connect
          with the right <span className="font-semibold text-lime-400">influencers</span> to grow
          their audience. Influencers can publish their stats, reach, and content — making it easy
          for brands to find their perfect match.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="bg-lime-300 cursor-pointer text-black px-6 py-3 rounded-xl font-semibold hover:bg-lime-400 transition-all duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
