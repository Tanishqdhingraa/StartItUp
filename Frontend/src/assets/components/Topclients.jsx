import React from "react";

const Topclients = () => {
  const clients = [
    {
      name: "Zepto",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMipINvmffNeR_AH0mg13L-q67va83NXi4ew&s",
    },
    {
      name: "Boat",
      logo: "data:image/png;base64,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",
    },
    {
      name: "Mamaearth",
      logo: "https://images.seeklogo.com/logo-png/48/2/mamaearth-logo-png_seeklogo-487672.png",
    },
    {
      name: "Lenskart",
      logo: "https://images.seeklogo.com/logo-png/43/1/lenskart-logo-png_seeklogo-437342.png",
    },
    {
      name: "Zomato",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    },
    {
      name: "Beardo",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbBCgCK1M4PmhEpRxkcYBx2TdnxzceAiGuHuyTY5PHe593ceO2vZAxZ8GES5iQsxwutg&usqp=CAU",
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
