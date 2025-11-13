import React from "react";

const Ouraim = () => {
  return (
    <section className="bg-black text-lime-300 px-8 md:px-16 py-16 mt-10 rounded-2xl shadow-lg">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-3">
          Our <span className="text-lime-400">Aim</span>
        </h2>
        <p className="text-lime-200 text-lg max-w-2xl mx-auto">
          Building a bridge between brands and influencers — empowering both to grow, collaborate, 
          and create authentic digital impact together.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-lime-300 text-black rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-200">
          <h3 className="text-2xl font-semibold mb-3">Empower Influencers</h3>
          <p className="text-base">
            Help influencers showcase their creativity, audience reach, and engagement stats — 
            giving them better visibility to top brands.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-lime-300 text-black rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-200">
          <h3 className="text-2xl font-semibold mb-3">Connect Brands</h3>
          <p className="text-base">
            Enable brands to find the perfect influencers for their campaigns with data-driven insights 
            and seamless communication tools.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-lime-300 text-black rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-200">
          <h3 className="text-2xl font-semibold mb-3">Create Impact</h3>
          <p className="text-base">
            Foster meaningful collaborations that not only drive sales but also build authentic 
            brand-influencer relationships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ouraim;
