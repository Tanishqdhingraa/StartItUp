import React from "react";

const Topclients = () => {
  const clients = [
    {
      name: "Zepto",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zepto_logo.png",
    },
    {
      name: "Boat",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Boat_Logo.png",
    },
    {
      name: "Mamaearth",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/Mamaearth_logo.png",
    },
    {
      name: "Lenskart",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Lenskart_logo.png",
    },
    {
      name: "Zomato",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    },
    {
      name: "Beardo",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/19/Beardo_logo.png",
    },
  ];

  return (
    <section className="bg-black text-lime-300 px-8 md:px-16 py-16 mt-10 rounded-2xl shadow-lg">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-3">
          Our <span className="text-lime-400">Recent Clients</span>
        </h2>
        <p className="text-lime-200 text-lg max-w-2xl mx-auto">
          We’re proud to collaborate with some of the fastest-growing startups and brands
          making waves in the digital space.
        </p>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-lime-300 p-4 rounded-xl hover:scale-105 transition-transform duration-200 shadow-md"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-24 h-24 object-contain mb-3"
            />
            <p className="text-black font-semibold">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topclients;
