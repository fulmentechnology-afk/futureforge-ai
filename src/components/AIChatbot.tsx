import { useState, useEffect, useRef } from "react";

import {
  Send,
  Bot,
  Mic,
  Paperclip,
  Smile,
  Sparkles,
  X,
  Minimize2,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import "./AIChatbot.css";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
  time: string;
}

interface QuickOption {
  title: string;
}

const quickOptions: QuickOption[] = [
  {
    title: "🏢 Automate My Business",
  },
  {
    title: "🏗 Construction AI",
  },
  {
    title: "🏥 Healthcare Automation",
  },
  {
    title: "🏡 Real Estate AI",
  },
  {
    title: "🤖 AI Solutions",
  },
  {
    title: "📅 Schedule Strategy Call",
  },
];

const AIChatbot = () => {
  const [open, setOpen] = useState(false);

  const [typing, setTyping] = useState(false);

  const [input, setInput] = useState("");

  /*
      Empty chat on startup.
      No welcome message.
  */

  const [messages, setMessages] = useState<Message[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  /*
      Open chatbot from anywhere.
      Hero button,
      AI Consultant button,
      Future buttons.
  */

  useEffect(() => {
    const openLucy = () => {
      setOpen(true);
    };

    window.addEventListener("open-lucy", openLucy);

    return () => {
      window.removeEventListener("open-lucy", openLucy);
    };
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),

      sender: "user",

      text,

      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: text,
        }),
      });

      if (!response.ok) {
        throw new Error("AI Server Error");
      }

      const data = await response.json();

      const botMessage: Message = {
        id: Date.now() + 1,

        sender: "bot",

        text: data.reply,

        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,

          sender: "bot",

          text: "Sorry, I couldn't reach the AI server. Please try again.",

          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }

    setTyping(false);
  };

  return (
    <>
      {/* Floating Button */}

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="ff-chat-button"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Bot size={28} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            transition={{
              duration: 0.35,
            }}
            className="ff-chat-window"
          >
            {/* Header */}

            <div className="ff-header">
              <div className="ff-header-left">
                <div className="ff-avatar">
                  <Bot size={24} />
                </div>

                <div className="ff-header-info">

  <h3>Lucy Business Consulting AI</h3>

  <p>Enterprise AI Consultant</p>

  <small className="ff-powered">
    Powered by FutureForge AI
  </small>

  <span className="ff-status">
    🟢 Online
  </span>

</div>
              </div>

              <div className="ff-header-actions">
                <button>
                  <Minimize2 size={18} />
                </button>

                <button onClick={() => setOpen(false)}>
                  <X size={18} />
                </button>
              </div>
            </div>
                        {/* =========================
                CHAT BODY
            ========================== */}

<div className="ff-body">

{/* Empty State */}

{messages.length === 0 && (
  <div className="ff-empty">
    <Bot size={46} />

    <h3>Lucy</h3>

    <p>AI Business Consultant</p>

    <small>
      Select one of the AI services below or ask me anything
      about your business.
    </small>
  </div>
)}

{/* Messages */}

{messages.map((message) => (
  <div
    key={message.id}
    className={`message ${message.sender}`}
  >
    <div className="bubble">
      {message.text}
    </div>

    <span>
      {message.time}
    </span>
  </div>
))}

{typing && (
  <div className="typing">
    <div></div>
    <div></div>
    <div></div>
  </div>
)}

<div ref={bottomRef} />

</div>

{/* =========================
  QUICK ACTIONS
========================== */}

<div className="ff-quick-actions">

{quickOptions.map((option) => (

  <button
    key={option.title}
    className="quick-btn"
    onClick={() => sendMessage(option.title)}
  >
    <Sparkles size={15} />

    {option.title}

  </button>

))}

</div>

{/* =========================
  INPUT
========================== */}

<div className="ff-input">

<button className="icon-btn">
  <Paperclip size={18} />
</button>

<input
  type="text"
  placeholder="Ask Lucy anything..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      sendMessage(input);
    }
  }}
/>

<button className="icon-btn">
  <Smile size={18} />
</button>

<button className="icon-btn">
  <Mic size={18} />
</button>

<button
  className="send-btn"
  onClick={() => sendMessage(input)}
>
  <Send size={18} />
</button>

</div>

</motion.div>
)}
</AnimatePresence>
</>
);
};

export default AIChatbot;