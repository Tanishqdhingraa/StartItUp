import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, UserPlus, Megaphone, Handshake } from "lucide-react";

const Ourservices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "For Investors",
      desc: "Explore promising influencer-backed startups and invest in the next wave of marketing innovation.",
      icon: <Briefcase size={40} className="text-lime-400 mb-3" />,
      path: "/investors-form",
    },
    {
      title: "Publish as Influencer",
      desc: "Showcase your social media presence and attract leading brands looking for collaboration.",
      icon: <UserPlus size={40} className="text-lime-400 mb-3" />,
      path: "/publish-form",
    },
    {
      title: "PR Team",
      desc: "Access powerful analytics tools and connect with influencers who align with your brand’s story.",
      icon: <Megaphone size={40} className="text-lime-400 mb-3" />,
      path: "/pr-team-form",
    },
    // {
    //   title: "Brand Collaboration",
    //   desc: "Partner with authentic creators to reach audiences that truly matter to your business.",
    //   icon: <Handshake size={40} className="text-lime-400 mb-3" />,
    //   path: "/brands",
    // },
  ];

  return (
    <div className="bg-black mt-10 rounded-3xl text-lime-300 min-h-screen flex flex-col items-center px-6 md:px-20 py-20">
      <h2 className="text-5xl font-extrabold text-lime-400 mb-12 text-center">
        Our <span className="text-white">Services</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.path)}
            className="bg-black border border-lime-400 rounded-2xl p-8 text-center shadow-lg cursor-pointer hover:scale-105 hover:shadow-lime-400/30 transition-all duration-300"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold text-lime-400 mb-3">
              {service.title}
            </h3>
            <p className="text-lime-200 text-sm mb-5">{service.desc}</p>
            <button className="bg-lime-300 text-black font-semibold px-5 py-2 rounded-full hover:bg-white transition duration-300">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;
