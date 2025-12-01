import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, UserPlus, Megaphone } from "lucide-react";

const Ourservices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "For Investors",
      desc: "Explore influencer-backed startups and invest in emerging innovations.",
      icon: <Briefcase size={40} className="text-lime-600 mb-3" />,
      path: "/investors-form",
    },
    {
      title: "Publish as Influencer",
      desc: "Showcase your social presence and attract top brands for collaboration.",
      icon: <UserPlus size={40} className="text-lime-600 mb-3" />,
      path: "/publish-form",
    },
    {
      title: "PR Team",
      desc: "Gain analytics access and connect with influencers aligned with your brand.",
      icon: <Megaphone size={40} className="text-lime-600 mb-3" />,
      path: "/pr-team-form",
    },
  ];

  return (
    <section className="bg-black text-lime-300 px-8 md:px-16 py-16 mt-10 rounded-2xl shadow-lg">
      
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-3">
          Our <span className="text-lime-400">Services</span>
        </h2>
        <p className="text-lime-200 text-lg max-w-2xl mx-auto">
          We offer dedicated platforms for investors, influencers, and PR teams to grow together.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.path)}
            className="flex flex-col items-center justify-center bg-lime-300 p-6 rounded-xl hover:scale-105 transition-transform duration-200 shadow-md cursor-pointer"
          >
            {service.icon}
            <h3 className="text-black font-bold text-xl mb-2">{service.title}</h3>
            <p className="text-black text-sm text-center mb-4 px-2">{service.desc}</p>

            <button className="bg-black text-lime-300 px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition">
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourservices;
