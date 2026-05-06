"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, HardHat, Loader2 } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  buttons?: QuickButton[];
}

interface QuickButton {
  label: string;
  value: string;
  action?: string;
}

const PHONE = "+918319213539";

const defaultQuickButtons: QuickButton[] = [
  { label: "🏗️ Our Services", value: "What services do you offer?" },
  { label: "💰 Pricing Info", value: "What are your pricing details?" },
  { label: "📞 Contact Details", value: "How can I contact you?" },
  { label: "👷 About Us", value: "Tell me about your company" },
];

const postResponseButtons: QuickButton[] = [
  { label: "📞 Call Now", value: "call", action: "call" },
  { label: "📱 WhatsApp", value: "whatsapp", action: "whatsapp" },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Namaste! 🙏 Welcome to Maa Bhawani Construction. How can I help you today?",
      sender: "bot",
      buttons: defaultQuickButtons,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleAction = useCallback((action: string) => {
    if (action === "call") {
      window.open(`tel:${PHONE}`, "_self");
    } else if (action === "whatsapp") {
      window.open(
        `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Maa Bhawani Construction! I am interested in your services.")}`,
        "_blank"
      );
    }
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      const userMsg: Message = { id: Date.now(), text, sender: "user" };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsLoading(true);

      // Build conversation history for API
      const history = messages
        .filter((m) => m.id !== 1) // skip initial greeting
        .map((m) => ({
          role: m.sender === "user" ? ("user" as const) : ("assistant" as const),
          content: m.text,
        }));
      history.push({ role: "user", content: text });

      const botMsgId = Date.now() + 1;

      try {
        abortRef.current = new AbortController();

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: abortRef.current.signal,
        });

        if (!res.ok) throw new Error("API error");

        const contentType = res.headers.get("content-type") || "";

        if (contentType.includes("text/event-stream") && res.body) {
          // Streaming response
          setMessages((prev) => [
            ...prev,
            { id: botMsgId, text: "", sender: "bot" },
          ]);

          const reader = res.body.getReader();
          const decoder = new TextDecoder();
          let fullText = "";

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split("\n").filter((l) => l.trim() !== "");

            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6);
                if (data === "[DONE]") continue;
                try {
                  const parsed = JSON.parse(data);
                  if (parsed.content) {
                    fullText += parsed.content;
                    setMessages((prev) =>
                      prev.map((m) =>
                        m.id === botMsgId ? { ...m, text: fullText } : m
                      )
                    );
                  }
                } catch { /* skip */ }
              }
            }
          }

          // Add action buttons after streaming completes
          setMessages((prev) =>
            prev.map((m) =>
              m.id === botMsgId
                ? { ...m, text: fullText, buttons: postResponseButtons }
                : m
            )
          );
        } else {
          // Non-streaming fallback (JSON response)
          const data = await res.json();
          setMessages((prev) => [
            ...prev,
            {
              id: botMsgId,
              text: data.message || "Sorry, something went wrong.",
              sender: "bot",
              buttons: postResponseButtons,
            },
          ]);
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setMessages((prev) => [
            ...prev,
            {
              id: botMsgId,
              text: "Sorry, I couldn't connect right now. Please call us at +91 8319213539 for assistance! 📞",
              sender: "bot",
              buttons: postResponseButtons,
            },
          ]);
        }
      } finally {
        setIsLoading(false);
        abortRef.current = null;
      }
    },
    [messages, isLoading]
  );

  const handleButtonClick = (button: QuickButton) => {
    if (button.action) {
      handleAction(button.action);
      return;
    }
    sendMessage(button.value);
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
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-brand-gold animate-pulse opacity-30" />
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
            className="fixed bottom-20 sm:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-[450px] max-h-[85vh] sm:max-h-[650px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-brand-black px-4 py-3 flex items-center gap-3">
              <div className="p-1.5 bg-brand-gold rounded-lg">
                <HardHat className="w-5 h-5 text-brand-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-poppins font-semibold text-sm">
                  Maa Bhawani AI Assistant
                </h3>
                <p className="text-white/50 text-xs">
                  {isLoading ? "Typing..." : "Powered by AI"}
                </p>
              </div>
              <a
                href={`tel:${PHONE}`}
                className="p-2 bg-brand-gold/20 rounded-full hover:bg-brand-gold/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
              </a>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50 max-h-[480px]">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-brand-gold text-brand-black rounded-br-md"
                          : "bg-white text-brand-gray border border-gray-100 rounded-bl-md shadow-sm"
                      }`}
                    >
                      {msg.text}
                      {/* Streaming cursor */}
                      {msg.sender === "bot" && isLoading && msg.id === messages[messages.length - 1]?.id && (
                        <span className="inline-block w-1.5 h-4 bg-brand-gold/60 ml-0.5 animate-pulse rounded-sm" />
                      )}
                    </div>
                  </div>
                  {/* Quick buttons */}
                  {msg.sender === "bot" && msg.buttons && !isLoading && (
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
              {/* Loading indicator */}
              {isLoading && messages[messages.length - 1]?.sender === "user" && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md shadow-sm px-4 py-3">
                    <Loader2 className="w-4 h-4 text-brand-gold animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-100 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 text-brand-black placeholder:text-gray-400 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
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
