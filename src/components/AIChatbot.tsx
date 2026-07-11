import { useState, useEffect, useRef } from "react";

import {
  Send,
  Bot,
  User,
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
    reply: string;
  }
const quickOptions: QuickOption[] = [
    {
      title: "🏢 Real Estate Automation",
      reply:
        "FutureForge AI can automate your complete real estate workflow including website lead capture, CRM updates, WhatsApp follow-ups, site visit scheduling, customer support, sales dashboards, and analytics."
    },
    {
      title: "🏗 Construction AI",
      reply:
        "We build AI solutions for project management, contractor coordination, document automation, project tracking, reporting, procurement workflows, and predictive analytics."
    },
    {
      title: "🤖 Enterprise AI Chatbots",
      reply:
        "We create AI assistants trained on your company's knowledge base to answer customer queries, qualify leads, assist employees, and work 24/7."
    },
    {
      title: "⚙ Business Automation",
      reply:
        "Automate repetitive work across Email, WhatsApp, CRM, ERP, HR, Finance, Google Workspace, Microsoft 365, and customer support using AI."
    },
    {
      title: "📅 Schedule Strategy Meeting",
      reply:
        "Excellent choice. Our AI consultants can analyze your business processes and recommend automation opportunities with estimated ROI."
    }
  ];

const AIChatbot = () => {
    console.log("AIChatbot Loaded");

const [open,setOpen]=useState(false);

const [typing,setTyping]=useState(false);

const [input,setInput]=useState("");

const [messages,setMessages]=useState<Message[]>([
    {
    id:1,
    sender:"bot",
    text: `👋 Welcome to FutureForge AI Business Consultant.

Your Future Growth. Our Success.

I help organizations identify AI automation opportunities that reduce manual work, improve customer experience, and accelerate business growth.

Choose an industry below or tell me about your business.`,

    time:new Date().toLocaleTimeString([],{
    hour:"2-digit",
    minute:"2-digit"
    })
    }
    ]);

const bottomRef=useRef<HTMLDivElement>(null);

useEffect(()=>{

bottomRef.current?.scrollIntoView({
behavior:"smooth"
});

},[messages]);

const sendMessage = async (text: string) => {

if(!text.trim()) return;

const userMessage:Message={
id:Date.now(),
sender:"user",
text,
time:new Date().toLocaleTimeString([],{
hour:"2-digit",
minute:"2-digit"
})
};

setMessages(prev=>[...prev,userMessage]);

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
    throw new Error("Failed to connect to AI server");
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
      text: "Sorry, I couldn't connect to the AI server.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
}

setTyping(false);
};return (
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
    
    initial={{ opacity:0, y:30, scale:0.9 }}
    
    animate={{ opacity:1, y:0, scale:1 }}
    
    exit={{ opacity:0, y:30, scale:0.9 }}
    
    transition={{ duration:0.35 }}
    
    className="ff-chat-window"
    
    >
    
    {/* HEADER */}
    
    <div className="ff-header">
    
    <div className="ff-header-left">
    
    <div className="ff-avatar">
    
    <Bot size={24} />
    
    </div>
    
    <div>
    
    <h3>FutureForge AI</h3>
<p>Business Consultant</p>
<span className="ff-status">🟢 Online</span>
    
    </div>
    
    </div>
    
    <div className="ff-header-actions">
    
    <button>
    
    <Minimize2 size={18}/>
    
    </button>
    
    <button onClick={()=>setOpen(false)}>
    
    <X size={18}/>
    
    </button>
    
    </div>
    
    </div>
    
    {/* BODY */}
    
    <div className="ff-body">
    
    {messages.map((message)=>(
    
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
    
    <div ref={bottomRef}/>
    
    </div>
    {/* Quick Actions */}

<div className="ff-quick-actions">

{quickOptions.map((option) => (

  <button
    key={option.title}
    className="quick-btn"
    onClick={() => sendMessage(option.title)}
  >
    <Sparkles size={16} />
    {option.title}
  </button>

))}

</div>

{/* Input */}

<div className="ff-input">

<button className="icon-btn">
  <Paperclip size={18}/>
</button>

<input
  type="text"
  placeholder="Ask FutureForge AI anything..."
  value={input}
  onChange={(e)=>setInput(e.target.value)}
  onKeyDown={(e)=>{
    if(e.key==="Enter"){
      sendMessage(input);
    }
  }}
/>

<button className="icon-btn">
  <Smile size={18}/>
</button>

<button className="icon-btn">
  <Mic size={18}/>
</button>

<button
  className="send-btn"
  onClick={()=>sendMessage(input)}
>
  <Send size={18}/>
</button>

</div>

</motion.div>

)}

</AnimatePresence>

</>

);

};

export default AIChatbot;