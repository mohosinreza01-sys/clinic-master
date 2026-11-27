"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MessageCircle,
  X,
  ArrowUpRight,
  Send,
  Phone,
  Minus,
} from "lucide-react";

const WHATSAPP_NUMBER = "8801712345678"; // Replace with your number

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const text =
      message.trim() ||
      "Hello Clinic Master, I would like to know more about your services.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  const quickMessages = [
    "I want to book an appointment.",
    "I need help finding a doctor.",
    "I have a question about your services.",
  ];

  return (
    <div className="fixed bottom-6 right-5 z-[999] sm:bottom-8 sm:right-8">
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-[340px] max-w-[calc(100vw-40px)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-[#075E54] px-5 py-5 text-white">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <MessageCircle size={24} />

                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#075E54] bg-green-400" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold">Clinic Master</h3>
                    <p className="mt-1 text-xs text-green-100">
                      Typically replies shortly
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat body */}
            <div className="bg-[#F4F7F6] p-5">
              <div className="rounded-2xl rounded-tl-sm bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-800">
                  Hello! 👋 Welcome to Clinic Master.
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  How can we help you today? Feel free to send us a message.
                </p>

                <span className="mt-2 block text-right text-[10px] text-slate-400">
                  Clinic Master
                </span>
              </div>

              {/* Quick replies */}
              <div className="mt-4 space-y-2">
                <p className="mb-2 text-xs font-medium text-slate-500">
                  QUICK MESSAGE
                </p>

                {quickMessages.map((item) => (
                  <button
                    key={item}
                    onClick={() => setMessage(item)}
                    className="block w-full rounded-xl border border-[#DCEAE5] bg-white px-3.5 py-3 text-left text-xs font-medium text-[#075E54] transition hover:border-green-400 hover:bg-green-50"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-slate-100 bg-white p-4">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
                  }}
                  placeholder="Type your message..."
                  className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-slate-400"
                />

                <button
                  onClick={sendMessage}
                  aria-label="Send WhatsApp message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white transition hover:bg-[#20BA59]"
                >
                  <Send size={17} />
                </button>
              </div>

              <p className="mt-3 text-center text-[10px] text-slate-400">
                Powered by WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative flex justify-end">
        {!open && (
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-[#25D366]/20"
          />
        )}

        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/25 transition hover:bg-[#20BA59]"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={27} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <MessageCircle size={29} fill="white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}