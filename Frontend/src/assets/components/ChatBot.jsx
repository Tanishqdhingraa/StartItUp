import React from "react";
import { useNavigate } from "react-router-dom";


const ChatBot = () => {
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/bot")} className="fixed z-50 animate-floating ">
      <div className="bg-lime-300 text-black p-4 rounded-full shadow-xl cursor-pointer hover:scale-110 transition">
        Hello👋 How can we help you ?? 
      </div>
    </div>
  );
};

export default ChatBot;
