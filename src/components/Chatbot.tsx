"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, HardHat } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  buttons?: QuickButton[];
}

interface QuickButton {
  label: string;
  value: string;
}

const PHONE = "+918319213539";

const quickButtons: QuickButton[] = [
  { label: "🏗️ Our Services", value: "services" },
  { label: "💰 Pricing Info", value: "pricing" },
  { label: "📞 Contact Details", value: "contact" },
  { label: "👷 About Us", value: "about" },
];

function getBotResponse(input: string): { text: string; buttons?: QuickButton[] } {
  const lower = input.toLowerCase();

  if (lower.includes("service") || lower.includes("what do you") || lower.includes("offer")) {
    return {
      text: "We offer a wide range of construction services:\n\n🏠 Residential & Commercial Construction\n🔨 Home Renovation\n✨ Kota Stone & Marble Polishing\n🏗️ Tile Installation & Flooring\n🧱 Wall, Column, Slab & Brick Work\n🎨 Plastering & Finishing\n\nWould you like to know more about any specific service?",
      buttons: [
        { label: "💰 Get Pricing", value: "pricing" },
        { label: "📱 WhatsApp Us", value: "whatsapp" },
      ],
    };
  }

  if (lower.includes("price") || lower.includes("cost") || lower.includes("rate") || lower.includes("pricing") || lower.includes("quote")) {
    return {
      text: "Pricing depends on the scope & type of work. We offer:\n\n✅ Free site visit & consultation\n✅ Transparent & competitive pricing\n✅ No hidden charges\n\nFor an accurate quote, please share your requirements with us directly!",
      buttons: [
        { label: "📱 WhatsApp for Quote", value: "whatsapp_quote" },
        { label: "📞 Call Now", value: "call" },
      ],
    };
  }

  if (lower.includes("contact") || lower.includes("phone") || lower.includes("number") || lower.includes("reach")) {
    return {
      text: `📞 Phone: +91 8319213539\n👷 Proprietor: Chainsingh Surawat\n👷 Co-Owner: Kuldeep Singh Surawat\n\n⏰ Mon-Sat: 8:00 AM - 7:00 PM\n\nFeel free to call or WhatsApp us anytime!`,
      buttons: [
        { label: "📞 Call Now", value: "call" },
        { label: "📱 WhatsApp", value: "whatsapp" },
      ],
    };
  }

  if (lower.includes("about") || lower.includes("who") || lower.includes("company")) {
    return {
      text: "🏗️ Maa Bhawani Construction & Contractor is a trusted construction company specializing in residential, commercial, and renovation projects.\n\n👷 Proprietor: Chainsingh Surawat\n👷 Co-Owner: Kuldeep Singh Surawat\n\nWe are committed to quality materials, expert craftsmanship, and on-time delivery.",
      buttons: [
        { label: "🏗️ View Services", value: "services" },
        { label: "📞 Contact Us", value: "contact" },
      ],
    };
  }

  if (lower.includes("whatsapp") && lower.includes("quote")) {
    return {
      text: "I'll open WhatsApp with a pre-filled message for a quote request. Click below!",
      buttons: [{ label: "📱 Open WhatsApp", value: "open_whatsapp_quote" }],
    };
  }

  if (lower.includes("whatsapp")) {
    return {
      text: "I'll connect you to our WhatsApp. Click below to start chatting!",
      buttons: [{ label: "📱 Open WhatsApp", value: "open_whatsapp" }],
    };
  }

  if (lower.includes("call")) {
    return {
      text: "You can call us directly at +91 8319213539. Click below to dial!",
      buttons: [{ label: "📞 Call Now", value: "dial" }],
    };
  }

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey") || lower.includes("namaste")) {
    return {
      text: "Namaste! 🙏 Welcome to Maa Bhawani Construction & Contractor. How can I help you today?",
      buttons: quickButtons,
    };
  }

  if (lower.includes("renovation") || lower.includes("renovate")) {
    return {
      text: "We provide complete home renovation services including:\n\n🏠 Interior & Exterior Renovation\n🪟 Modern Design Updates\n🎨 Painting & Finishing\n✨ Flooring Upgrades\n\nWant a free consultation?",
      buttons: [
        { label: "📱 WhatsApp for Consultation", value: "whatsapp_quote" },
        { label: "📞 Call Us", value: "call" },
      ],
    };
  }

  if (lower.includes("floor") || lower.includes("tile") || lower.includes("marble") || lower.includes("kota")) {
    return {
      text: "Our flooring & polishing services include:\n\n✨ Kota Stone Polishing\n✨ Marble Polishing\n🔲 Tile Installation\n🏗️ Complete Flooring Solutions\n\nWe use premium materials for a lasting finish!",
      buttons: [
        { label: "💰 Get Quote", value: "pricing" },
        { label: "📱 WhatsApp", value: "whatsapp" },
      ],
    };
  }

  return {
    text: "I'd be happy to help! You can ask me about:\n\n• Our construction services\n• Pricing information\n• Contact details\n• Company information\n\nOr connect with us directly:",
    buttons: quickButtons,
  };
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Namaste! 🙏 Welcome to Maa Bhawani Construction. How can I help you today?",
      sender: "bot",
      buttons: quickButtons,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMsg: Message = {
      id: Date.now(),
      text: messageText,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Handle special actions
    if (messageText === "open_whatsapp" || messageText === "whatsapp") {
      setTimeout(() => {
        window.open(
          `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Maa Bhawani Construction! I am interested in your services.")}`,
          "_blank"
        );
      }, 300);
    }

    if (messageText === "open_whatsapp_quote" || messageText === "whatsapp_quote") {
      setTimeout(() => {
        window.open(
          `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Maa Bhawani Construction! I would like to get a quote for my project. Here are the details:\n\nProject Type: \nLocation: \nBudget Range: ")}`,
          "_blank"
        );
      }, 300);
    }

    if (messageText === "dial" || messageText === "call") {
      setTimeout(() => {
        window.open(`tel:+${PHONE}`, "_self");
      }, 300);
    }

    // Bot response
    setTimeout(() => {
      const response = getBotResponse(messageText);
      const botMsg: Message = {
        id: Date.now() + 1,
        text: response.text,
        sender: "bot",
        buttons: response.buttons,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const handleButtonClick = (button: QuickButton) => {
    handleSend(button.value);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-brand-gold rounded-full shadow-lg hover:bg-brand-gold-dark transition-colors flex items-center justify-center group"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6 text-brand-black" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6 text-brand-black" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-brand-gold animate-ping opacity-20" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 sm:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-[380px] max-h-[70vh] sm:max-h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-brand-black px-4 py-3 flex items-center gap-3">
              <div className="p-1.5 bg-brand-gold rounded-lg">
                <HardHat className="w-5 h-5 text-brand-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-poppins font-semibold text-sm">
                  Maa Bhawani Support
                </h3>
                <p className="text-white/50 text-xs">
                  Typically replies instantly
                </p>
              </div>
              <a
                href={`tel:+${PHONE}`}
                className="p-2 bg-brand-gold/20 rounded-full hover:bg-brand-gold/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
              </a>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50 max-h-[320px]">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-brand-gold text-brand-black rounded-br-md"
                          : "bg-white text-brand-gray border border-gray-100 rounded-bl-md shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  {/* Quick buttons */}
                  {msg.sender === "bot" && msg.buttons && (
                    <div className="flex flex-wrap gap-1.5 mt-2 ml-1">
                      {msg.buttons.map((btn) => (
                        <button
                          key={btn.value}
                          onClick={() => handleButtonClick(btn)}
                          className="px-3 py-1.5 bg-white border border-brand-gold/30 text-brand-black rounded-full text-xs font-medium hover:bg-brand-gold/10 hover:border-brand-gold transition-colors"
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-100 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 text-brand-black placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2.5 bg-brand-gold rounded-xl text-brand-black hover:bg-brand-gold-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
