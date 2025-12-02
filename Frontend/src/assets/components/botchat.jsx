import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Animated floating chatbot — black + lime theme
export default function BotChat() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm StartItUp's chatbot — ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const faqs = [
    {
      triggers: ["what is startitup", "what is statitup", "about startitup"],
      answer:
        "StatItUp is a next-generation influencer marketing platform helping brands and influencers collaborate and grow.",
    },
    {
      triggers: ["mission", "your mission"],
      answer:
        "Our mission is to bridge the gap between brands and influencers with transparent, data-driven marketing.",
    },
    {
      triggers: ["influencer", "join as influencer", "creator"],
      answer:
        "Influencers can sign up, showcase their profile, and apply to brand campaigns.",
    },
    {
      triggers: ["brand", "for brands", "as a brand"],
      answer:
        "Brands can discover influencers, run campaigns, and track performance using our analytics.",
    },
    {
      triggers: ["pricing", "cost", "plans"],
      answer:
        "Pricing varies based on campaign size and services. Contact our team for exact pricing.",
    },
  ];

  function matchFAQ(text) {
    const query = text.toLowerCase();
    for (const faq of faqs) {
      for (const t of faq.triggers) {
        if (query.includes(t)) return faq.answer;
      }
    }
    return null;
  }

  function sendMessage(e) {
    e?.preventDefault?.();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");

    const response = matchFAQ(userText);

    if (response) {
      setMessages((prev) => [...prev, { from: "bot", text: response }]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "I'm not sure about that yet — try asking about pricing, influencers, brands, or our mission.",
        },
      ]);
    }
  }

  return (
    <motion.div
      className="w-72 fixed bottom-10 right-10 z-50"
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
    >
      <div className="w-full bg-black shadow-2xl rounded-xl border border-lime-400 overflow-hidden">
        <div className="bg-black text-lime-400 p-3 font-semibold text-center text-sm border-b border-lime-500">
          StartItUp Bot
        </div>

        <div className="h-64 overflow-y-auto p-3 space-y-2 bg-neutral-900">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-3 py-2 rounded-lg max-w-[80%] text-xs whitespace-pre-wrap shadow-md ${
                  m.from === "user"
                    ? "bg-lime-400 text-black"
                    : "bg-neutral-800 text-lime-300"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={sendMessage} className="p-2 border-t border-lime-500 flex gap-2 bg-black">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask StartItUp..."
            className="flex-1 px-2 py-1 text-xs bg-neutral-800 text-lime-300 border border-lime-500 rounded focus:ring-1 focus:ring-lime-300 outline-none"
          />
          <button
            type="submit"
            className="px-3 py-1 bg-lime-400 text-black text-xs rounded"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
}