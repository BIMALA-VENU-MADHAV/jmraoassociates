import { useState, useRef, useEffect } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            text: `👋 Welcome to JM Rao Associates!

Please choose a service:

1️⃣ GST Services  
2️⃣ Tax Services  
3️⃣ FSSAI / Food License  
4️⃣ Business Registration  

👉 Reply with a number (1–4)`,
            sender: "bot",
        },
    ]);

    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(false);

    const messagesContainerRef = useRef(null);

    // Auto-scroll (inside chat only)
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
                top: messagesContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages, typing]);

    const [menu, setMenu] = useState("main");

const sendMessage = async (msg) => {
  const messageToSend = msg || input;
  if (!messageToSend) return;

  const userMsg = { text: messageToSend, sender: "user" };
  setMessages((prev) => [...prev, userMsg]);
  setInput("");
  setTyping(true);

  let reply = "";

  // 🔥 MAIN MENU
  if (menu === "main") {
    switch (messageToSend.trim()) {
      case "1":
        setMenu("gst");
        reply = `📊 *GST Services*

1. GST Registration  
2. GST Returns Filing  
3. GST Modifications  

👉 Reply with option number`;
        break;

      case "2":
        setMenu("tax");
        reply = `💰 *Tax Services*

1. Income Tax Filing  
2. Tax Audit  
3. TDS Returns  
4. Professional Tax  

👉 Reply with option number`;
        break;

      case "3":
        setMenu("fssai");
        reply = `🍽 *FSSAI / Food License*

1. FSSAI Registration  
2. State License  
3. Central License  

👉 Reply with option number`;
        break;

      case "4":
        setMenu("registration");
        reply = `📄 *Registration Services*

1. PAN Registration  
2. TAN Registration  
3. MSME Registration  

👉 Reply with option number`;
        break;

      default:
        reply = "Please choose a valid option (1–4)";
    }
  }

  // 🔥 GST MENU
  else if (menu === "gst") {
    switch (messageToSend.trim()) {
      case "1":
        reply = "GST Registration service available.\n👉 WhatsApp: https://wa.me/918801221088";
        break;
      case "2":
        reply = "GST Returns Filing service available.\n👉 Contact us.";
        break;
      case "3":
        reply = "GST Modifications service available.\n👉 Contact us.";
        break;
      default:
        reply = "Please choose 1–3";
    }
  }

  // 🔥 TAX MENU
  else if (menu === "tax") {
    switch (messageToSend.trim()) {
      case "1":
        reply = "Income Tax Filing service available.";
        break;
      case "2":
        reply = "Tax Audit service available.";
        break;
      case "3":
        reply = "TDS Returns service available.";
        break;
      case "4":
        reply = "Professional Tax service available.";
        break;
      default:
        reply = "Please choose 1–4";
    }
  }

  // 🔥 FSSAI MENU
  else if (menu === "fssai") {
    switch (messageToSend.trim()) {
      case "1":
        reply = "FSSAI Registration service available.";
        break;
      case "2":
        reply = "FSSAI State License service available.";
        break;
      case "3":
        reply = "FSSAI Central License service available.";
        break;
      default:
        reply = "Please choose 1–3";
    }
  }

  // 🔥 REGISTRATION MENU
  else if (menu === "registration") {
    switch (messageToSend.trim()) {
      case "1":
        reply = "PAN Registration service available.";
        break;
      case "2":
        reply = "TAN Registration service available.";
        break;
      case "3":
        reply = "MSME Registration service available.";
        break;
      default:
        reply = "Please choose 1–3";
    }
  }

  // ✅ SEND RESPONSE
  if (reply) {
    setTyping(false);
    setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
    return;
  }

  // 🌐 FALLBACK AI (optional)
  try {
    const res = await fetch("https://toji7.app.n8n.cloud/webhook/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: messageToSend }),
    });

    const data = await res.json();

    setTyping(false);

    setMessages((prev) => [
      ...prev,
      { text: data.output || "Please contact us.", sender: "bot" },
    ]);

  } catch {
    setTyping(false);

    setMessages((prev) => [
      ...prev,
      { text: "⚠️ Please contact us on WhatsApp.", sender: "bot" },
    ]);
  }
};

    const toggleChat = () => {
        setOpen((prev) => {
            const next = !prev;
            if (next) setHasNewMessage(false);
            return next;
        });
    };

    return (
        <>
            {/* CHATBOX WITH ANIMATION */}
            <div
                className={`fixed bottom-20 right-4 sm:right-6 w-[90vw] max-w-sm h-[70vh] max-h-[500px]
        bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50
        transform transition-all duration-300 ease-in-out
        ${open
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 translate-y-6 scale-95 pointer-events-none"
                    }`}
            >
                {/* HEADER */}
                <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                    <div>
                        <p className="font-semibold">JM Rao Assistant</p>
                        <p className="text-xs opacity-80">We usually reply instantly</p>
                    </div>
                    <button onClick={toggleChat}>
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* MESSAGES */}
                <div
                    ref={messagesContainerRef}
                    className="flex-1 p-4 overflow-y-auto space-y-2 text-sm"
                >
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`p-3 rounded-xl max-w-[75%] whitespace-pre-line shadow-sm ${msg.sender === "user"
                                    ? "bg-blue-600 text-white ml-auto"
                                    : "bg-white border border-gray-200 text-gray-800"
                                }`}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: msg.text
                                        .replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                                        .replace(/\n/g, "<br/>"),
                                }}
                            />
                        </div>
                    ))}

                    {/* TYPING */}
                    {typing && (
                        <div className="bg-gray-100 p-2 rounded-lg w-fit">
                            <span className="flex gap-1">
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
                            </span>
                        </div>
                    )}
                </div>

                {/* QUICK BUTTONS */}
                <div className="px-3 pb-2 flex gap-2 flex-wrap">
                    {[
                        "GST Registration",
                        "Income Tax Filing",
                        "FSSAI License",
                        "MSME Registration",
                    ].map((item) => (
                        <button
                            key={item}
                            onClick={() => sendMessage(item)}
                            className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* WHATSAPP */}
                <div className="px-3 pb-2">
                    <a
                        href="https://wa.me/918801221088"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-green-500 hover:bg-green-600 text-white text-sm py-2 rounded-lg"
                    >
                        💬 Chat on WhatsApp
                    </a>
                </div>

                {/* INPUT */}
                <div className="flex border-t">
                    <input
                        className="flex-1 p-2 outline-none text-sm"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <button
                        onClick={() => sendMessage()}
                        className="bg-blue-600 text-white px-4"
                    >
                        Send
                    </button>
                </div>
            </div>

            {/* FLOATING BUTTON */}
            <div className="fixed bottom-6 right-6 z-50 relative">
                <div className="fixed bottom-6 right-6 z-50">
                    <button
                        onClick={toggleChat}
                        className="bg-blue-600 p-4 rounded-full shadow-lg flex items-center justify-center"
                    >
                        {open ? (
                            <FaTimes size={24} color="#fff" />
                        ) : (
                            <FaCommentDots size={24} color="#fff" />
                        )}
                    </button>
                </div>

                {/* 🔴 NOTIFICATION */}
                {hasNewMessage && !open && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                        1
                    </span>
                )}
            </div>
        </>
    );
}