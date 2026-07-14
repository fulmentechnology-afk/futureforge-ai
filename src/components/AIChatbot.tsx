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
    title: "🏢 Business Automation",
  },
  {
    title: "🤖 AI Solutions",
  },
  {
    title: "📅 Strategy Consultation",
  },
];

const AIChatbot = () => {
  const [open, setOpen] = useState(false);

  const [typing, setTyping] = useState(false);

  const [input, setInput] = useState("");

  /*
      Conversation starts empty.
      Lucy responds only
      after the visitor speaks.
  */

  const [messages, setMessages] = useState<Message[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);

 
/*
useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);
*/

  /*
      Open Lucy from anywhere
      on the website.
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

          text:
            "I'm sorry, I'm unable to connect at the moment. Please try again shortly.",

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
      {/* Floating Chat Button */}

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
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.92,
            }}
            transition={{
              duration: 0.35,
            }}
            className="ff-chat-window"
          >
                      {/* =========================
                HEADER
            ========================== */}

<div className="ff-header">

<div className="ff-header-left">

  <div className="ff-avatar">
    <Bot size={24} />
  </div>

  <div className="ff-header-info">
  <h3>Lucy Business Consulting AI</h3>
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

{/* Messages */}

{messages.map((message) => (

  <div
    key={message.id}
    className={`message ${message.sender}`}
  >

    <div className="bubble">
      {message.text}
    </div>

    <span>{message.time}</span>

  </div>

))}

{/* Typing */}

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
  INPUT AREA
========================== */}

<div className="ff-input">

<button className="icon-btn">
  <Paperclip size={18} />
</button>

<input
  type="text"
  placeholder="Describe your business challenge..."
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