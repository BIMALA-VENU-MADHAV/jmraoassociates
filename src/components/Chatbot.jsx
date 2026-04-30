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


    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
                top: messagesContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages, typing]);

    const [menu, setMenu] = useState("main");
    const [step, setStep] = useState("menu"); // menu | name | phone
    const [selectedService, setSelectedService] = useState("");
    const [userName, setUserName] = useState("");

    // ✅ VALIDATION
    const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone);

    // ✅ SAVE LEAD
    const saveToSheet = async (serviceName, name, phone) => {
        try {
            await fetch("https://toji7.app.n8n.cloud/webhook/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: userName,
                    phone: phone,
                    message: selectedService,
                }),
            });
        } catch (e) {
            console.log("Save failed");
        }
    };

    // ✅ AI FALLBACK
    const askAI = async (message) => {
        try {
            const res = await fetch("https://toji7.app.n8n.cloud/webhook/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: message,
                }),
            });

            const data = await res.json();
            return data.output;
        } catch {
            return "⚠️ Please contact us on WhatsApp: https://wa.me/918801221088";
        }
    };

    const sendMessage = async (msg) => {
        const messageToSend = msg || input;
        if (!messageToSend) return;

        const cleanMsg = messageToSend.trim();

        setMessages((prev) => [...prev, { text: cleanMsg, sender: "user" }]);
        setInput("");
        setTyping(true);

        let reply = "";

        // 🟢 STEP: NAME
        if (step === "name") {
            setUserName(cleanMsg);
            setStep("phone");
            reply = "📱 Please enter your phone number";
        }

        // 🟢 STEP: PHONE
        else if (step === "phone") {
            if (!isValidPhone(cleanMsg)) {
                reply = "❌ Enter valid 10-digit phone number";
            } else {
                await saveToSheet(selectedService, userName, cleanMsg);

                reply = `✅ Thank you ${userName}!

We will contact you shortly regarding *${selectedService}*`;

                setStep("menu");
                setMenu("main");
                setSelectedService("");
                setUserName("");
            }
        }

        // 🔥 MAIN MENU
        else if (menu === "main") {
            if (cleanMsg === "1") {
                setMenu("gst");
                reply = `📊 *GST Services*

1. GST Registration  
2. GST Returns Filing  
3. GST Modifications  

👉 Reply 1–3 or 0`;
            } else if (cleanMsg === "2") {
                setMenu("tax");
                reply = `💰 *Tax Services*

1. Income Tax Filing  
2. Tax Audit  
3. TDS Returns  
4. Professional Tax  

👉 Reply 1–4 or 0`;
            } else if (cleanMsg === "3") {
                setMenu("fssai");
                reply = `🍽 *FSSAI*

1. Registration  
2. State License  
3. Central License  

👉 Reply 1–3 or 0`;
            } else if (cleanMsg === "4") {
                setMenu("registration");
                reply = `📄 *Registration*

1. PAN  
2. TAN  
3. MSME  

👉 Reply 1–3 or 0`;
            } else {
                // 👉 AI fallback here
                reply = await askAI(cleanMsg);
            }
        }

        // 🔥 GST MENU
        else if (menu === "gst") {
            if (cleanMsg === "0") {
                setMenu("main");
                reply = "🔙 Back to main menu";
            } else if (cleanMsg === "1") {
                setSelectedService("GST Registration");
                setStep("name");
                reply = "👤 Please enter your name";
            } else if (cleanMsg === "2") {
                setSelectedService("GST Returns Filing");
                setStep("name");
                reply = "👤 Please enter your name";
            } else if (cleanMsg === "3") {
                setSelectedService("GST Modifications");
                setStep("name");
                reply = "👤 Please enter your name";
            } else {
                reply = "❌ Choose 1–3 or 0";
            }
        }

        // 🔥 TAX MENU
        else if (menu === "tax") {
            if (cleanMsg === "0") {
                setMenu("main");
                reply = "🔙 Back";
            } else if (cleanMsg === "1") {
                setSelectedService("Income Tax Filing");
                setStep("name");
                reply = "👤 Enter your name";
            } else if (cleanMsg === "2") {
                setSelectedService("Tax Audit");
                setStep("name");
                reply = "👤 Enter your name";
            } else if (cleanMsg === "3") {
                setSelectedService("TDS Returns");
                setStep("name");
                reply = "👤 Enter your name";
            } else if (cleanMsg === "4") {
                setSelectedService("Professional Tax");
                setStep("name");
                reply = "👤 Enter your name";
            } else {
                reply = "❌ Choose 1–4";
            }
        }

        // 🔥 FSSAI MENU
        else if (menu === "fssai") {
            if (cleanMsg === "0") {
                setMenu("main");
                reply = "🔙 Back";
            } else if (cleanMsg === "1") {
                setSelectedService("FSSAI Registration");
                setStep("name");
                reply = "👤 Enter your name";
            } else if (cleanMsg === "2") {
                setSelectedService("FSSAI State License");
                setStep("name");
                reply = "👤 Enter your name";
            } else if (cleanMsg === "3") {
                setSelectedService("FSSAI Central License");
                setStep("name");
                reply = "👤 Enter your name";
            } else {
                reply = "❌ Choose 1–3";
            }
        }

        // 🔥 REGISTRATION MENU
        else if (menu === "registration") {
            if (cleanMsg === "0") {
                setMenu("main");
                reply = "🔙 Back";
            } else if (cleanMsg === "1") {
                setSelectedService("PAN Registration");
                setStep("name");
                reply = "👤 Enter your name";
            } else if (cleanMsg === "2") {
                setSelectedService("TAN Registration");
                setStep("name");
                reply = "👤 Enter your name";
            } else if (cleanMsg === "3") {
                setSelectedService("MSME Registration");
                setStep("name");
                reply = "👤 Enter your name";
            } else {
                reply = "❌ Choose 1–3";
            }
        }

        setTyping(false);
        setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
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