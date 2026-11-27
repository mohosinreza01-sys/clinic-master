
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  Search,
  Stethoscope,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#f4faf9] px-5 py-20">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#00BCD4]/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#061D50]/5 blur-[120px]" />

        <div className="absolute left-[10%] top-[15%] h-3 w-3 rounded-full bg-[#00BCD4]/30" />
        <div className="absolute right-[15%] top-[25%] h-4 w-4 rounded-full bg-[#061D50]/10" />
        <div className="absolute bottom-[20%] left-[20%] h-5 w-5 rounded-full bg-[#00BCD4]/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-[1000px]"
      >
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* LEFT VISUAL */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[400px] sm:w-[400px]"
            >
              {/* CIRCLE */}
              <div className="absolute inset-0 rounded-full border border-[#d9e9e7]" />

              <div className="absolute inset-8 rounded-full border border-dashed border-[#b7dcd6]" />

              <div className="absolute inset-16 rounded-full bg-white shadow-[0_20px_80px_rgba(6,29,80,0.08)]" />

              {/* 404 */}
              <div className="relative z-10 flex items-center gap-1">
                <span className="text-[100px] font-black tracking-tighter text-[#061D50] sm:text-[130px]">
                  4
                </span>

                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#00BCD4] shadow-[0_10px_40px_rgba(0,188,212,0.25)] sm:h-[130px] sm:w-[130px]"
                >
                  <Stethoscope
                    size={58}
                    strokeWidth={1.8}
                    className="text-white sm:h-[70px] sm:w-[70px]"
                  />
                </motion.div>

                <span className="text-[100px] font-black tracking-tighter text-[#061D50] sm:text-[130px]">
                  4
                </span>
              </div>

              {/* FLOATING ICON */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-5 top-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#e7eeee] bg-white shadow-xl"
              >
                <Search size={25} className="text-[#00BCD4]" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061D50] shadow-xl"
              >
                <Home size={23} className="text-white" />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cde8e3] bg-white px-4 py-2 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#00BCD4]" />

              <span className="text-xs font-bold tracking-[2px] text-[#138b78]">
                CLINIC MASTER
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl font-extrabold tracking-tight text-[#061D50] sm:text-6xl"
            >
              Oops!
              <span className="mt-2 block text-[#00BCD4]">
                Page Not Found
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mx-auto mt-6 max-w-md text-base leading-8 text-[#71838a] md:mx-0"
            >
              The page you&apos;re looking for might have been removed,
              renamed, or is temporarily unavailable. Let&apos;s get you back
              on track.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <Link
                href="/"
                className="group flex items-center gap-3 rounded-xl bg-[#061D50] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#061D50]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#00BCD4]"
              >
                <Home size={18} />

                Back to Home

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-xl border border-[#dce9e7] bg-white px-6 py-4 text-sm font-bold text-[#061D50] transition-all duration-300 hover:-translate-y-1 hover:border-[#00BCD4] hover:text-[#00BCD4]"
              >
                <ArrowLeft size={18} />
                Contact Support
              </Link>
            </motion.div>

            {/* QUICK LINKS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 border-t border-[#e2ecea] pt-6"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#9aabad]">
                Explore our website
              </p>

              <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 md:justify-start">
                {[
                  { name: "Services", href: "/services" },
                  { name: "Our Team", href: "/team" },
                  { name: "Appointment", href: "/appointment" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-[#71838a] transition hover:text-[#00BCD4]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
