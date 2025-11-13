import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      {/* Main Section */}
      <div className="pt-24 min-h-screen mt-32 rounded-3xl bg-black text-lime-300 flex flex-col items-center px-6 md:px-20">
        
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-lime-400 mb-6 text-center">
          About <span className="text-white">StatItUp</span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl text-center text-lg leading-relaxed text-lime-200 mb-10">
          <span className="text-lime-400 font-semibold">StatItUp</span> is a next-generation 
          influencer marketing platform where <span className="font-semibold text-lime-400">
          brands</span> and <span className="font-semibold text-lime-400">influencers</span> 
          meet to collaborate and grow together.  
          <br /><br />
          Our mission is to bridge the gap between top brands and creative influencers — making 
          marketing transparent, data-driven, and truly impactful.  
          <br /><br />
          Whether you’re a rising influencer looking to showcase your reach, or a brand 
          searching for the perfect ambassador, <span className="font-semibold text-lime-400">
          StatItUp</span> helps you connect, collaborate, and thrive.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mt-10">
          <div className="bg-black border border-lime-400 rounded-2xl p-6 shadow-lg hover:shadow-lime-400/30 transition">
            <h3 className="text-2xl font-semibold mb-3 text-lime-400">
              🤝 Brand Partnerships
            </h3>
            <p className="text-lime-200">
              Connect with top-tier influencers that align perfectly with your 
              brand’s audience and values.
            </p>
          </div>

          <div className="bg-black border border-lime-400 rounded-2xl p-6 shadow-lg hover:shadow-lime-400/30 transition">
            <h3 className="text-2xl font-semibold mb-3 text-lime-400">
              📊 Data-Driven Insights
            </h3>
            <p className="text-lime-200">
              Analyze influencer performance with transparent engagement metrics 
              and real-time analytics.
            </p>
          </div>

          <div className="bg-black border border-lime-400 rounded-2xl p-6 shadow-lg hover:shadow-lime-400/30 transition">
            <h3 className="text-2xl font-semibold mb-3 text-lime-400">
              🚀 Empowering Creators
            </h3>
            <p className="text-lime-200">
              Give influencers the platform they deserve to grow their audience 
              and showcase their true potential.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 mb-10 text-center">
          <h2 className="text-3xl font-bold text-lime-400 mb-4">
            Ready to grow with us?
          </h2>
          <button
            onClick={() => (window.location.href = "/signup")}
            className="bg-lime-300 text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition duration-300"
          >
            Join StatItUp Now
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
