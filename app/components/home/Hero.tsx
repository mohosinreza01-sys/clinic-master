
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  Phone,
  Activity,
} from "lucide-react";

const doctorImage =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&auto=format&fit=crop&q=85";

const patients = [
  "https://i.pravatar.cc/100?img=47",
  "https://i.pravatar.cc/100?img=44",
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=33",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="hero-background relative min-h-[668px] w-full overflow-hidden">
      <div className="relative mx-auto min-h-[668px] w-full max-w-[1400px] px-5 lg:px-0">

        {/* EMERGENCY TEXT */}
        <motion.a
          href="tel:+11234567890"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 -rotate-180 text-[11px] font-bold tracking-[2px] text-[#061D50] [writing-mode:vertical-rl] xl:block"
        >
          24/7 EMERGENCY SERVICE
        </motion.a>

        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full pt-[85px] lg:absolute lg:left-[100px] lg:top-[100px] lg:w-[490px] lg:pt-0 xl:left-[170px] xl:top-[145px]"
        >
          <motion.div variants={itemVariants}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#BCEEF3] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#00BCD4] shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#00BCD4]" />
              Welcome to Clinic Master
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[43px] font-extrabold leading-[1.16] tracking-[-1.8px] text-[#061D50] sm:text-[52px] lg:text-[58px]"
          >
            Medical &
            <br />
            Health Care
            <br />

            <span className="text-[#00BCD4]">Services</span>

            {/* HEARTBEAT LINE */}
            <svg
              className="ml-2 inline-block h-[34px] w-[110px] sm:w-[145px]"
              viewBox="0 0 155 38"
              fill="none"
            >
              <motion.path
                d="M2 27L17 32L27 18L46 23L60 5L77 16L87 29L98 20L115 20L153 20"
                stroke="#FF7C83"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: 0.8,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </svg>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-[350px] text-[13px] leading-[25px] text-[#7183AE] sm:text-[14px]"
          >
            Your health is our top priority. Schedule an appointment with us
            today and experience quality healthcare from our expert team.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#appointment"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex h-[48px] items-center gap-3 rounded-[11px] bg-[#00BCD4] py-[6px] pl-5 pr-[7px] text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(0,188,212,0.2)] transition-colors hover:bg-[#061D50]"
            >
              Appointment

              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-white text-[#061D50]">
                <ArrowRight size={17} />
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex h-[48px] items-center gap-3 rounded-[11px] bg-[#061D50] py-[6px] pl-5 pr-[7px] text-[13px] font-semibold text-white transition-colors hover:bg-[#00BCD4]"
            >
              Contact Us

              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-white text-[#061D50]">
                <ArrowRight size={17} />
              </span>
            </motion.a>
          </motion.div>

          {/* SMALL TRUST TEXT */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {patients.slice(0, 3).map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Patient ${index + 1}`}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <p className="text-[11px] text-[#7183AE]">
              Trusted by{" "}
              <span className="font-semibold text-[#061D50]">
                thousands of patients
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT DOCTOR AREA */}
        <div className="relative mx-auto mt-10 h-[450px] w-full max-w-[600px] sm:h-[530px] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-[668px] lg:max-w-none lg:w-[790px]">

          {/* BACKGROUND CIRCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute bottom-[-45px] right-0 h-[340px] w-[340px] rounded-full bg-white/60 shadow-[0_0_0_25px_rgba(255,255,255,0.2)] sm:bottom-[-55px] sm:right-5 sm:h-[470px] sm:w-[470px] lg:bottom-[-60px] lg:right-[115px] lg:h-[550px] lg:w-[550px]"
          />

          {/* DOCTOR IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-0 right-0 z-[2] h-[430px] w-[340px] overflow-hidden rounded-t-full bg-[#DCEFF5] sm:right-5 sm:h-[510px] sm:w-[410px] lg:right-[100px] lg:h-[630px] lg:w-[510px]"
          >
            <img
              src={doctorImage}
              alt="Doctor at Clinic Master"
              className="h-full w-full object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061D50]/10 via-transparent to-transparent" />
          </motion.div>

          {/* DIAGNOSIS CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.8 },
              x: { duration: 0.7, delay: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute left-0 top-[45px] z-10 w-[155px] rounded-[20px] bg-white p-4 shadow-[0_15px_45px_rgba(6,29,80,0.08)] sm:left-2 sm:top-[100px] sm:w-[165px] lg:left-0 lg:top-[151px]"
          >
            <div className="relative mx-auto flex h-[115px] w-[134px] items-center justify-center">
              <svg
                viewBox="0 0 134 115"
                className="absolute inset-0 h-full w-full -rotate-[45deg]"
              >
                <path
                  d="M15 108 A65 65 0 1 1 119 108"
                  fill="none"
                  stroke="#D9F2F6"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <motion.path
                  d="M15 108 A65 65 0 1 1 119 108"
                  fill="none"
                  stroke="#00BCD4"
                  strokeWidth="5"
                  strokeLinecap="round"
                  pathLength={1}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.82 }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </svg>

              <span className="text-[36px] font-semibold text-[#00BCD4]">
                82%
              </span>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-[11px] font-semibold leading-[16px] text-[#061D50]">
                Successfully
                <br />
                diagnosis
              </p>

              <a
                href="#diagnosis"
                aria-label="View diagnosis information"
                className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#B9F0F6] text-[#00BCD4] transition-colors hover:bg-[#00BCD4] hover:text-white"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* HEART CARD */}
          <motion.div
            animate={{ y: [0, -9, 0], rotate: [0, 5, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-[170px] z-10 flex h-[65px] w-[65px] items-center justify-center rounded-[19px] bg-white text-[#EF4050] shadow-[0_15px_40px_rgba(6,29,80,0.08)] sm:right-2 sm:top-[220px] lg:right-[-15px] lg:top-[262px]"
          >
            <HeartPulse size={39} fill="#EF4050" stroke="white" />
          </motion.div>

          {/* PATIENT RECOVERY CARD */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0, y: [0, -7, 0] }}
            transition={{
              opacity: { delay: 1.1, duration: 0.7 },
              x: { delay: 1.1, duration: 0.7 },
              y: { delay: 1.5, duration: 4.5, repeat: Infinity },
            }}
            className="absolute bottom-[40px] left-0 z-20 flex h-[53px] items-center gap-3 rounded-full bg-white px-4 shadow-[0_12px_35px_rgba(6,29,80,0.08)] sm:bottom-[65px] sm:left-2 lg:bottom-[110px] lg:left-[-100px]"
          >
            <div className="flex -space-x-[9px]">
              {patients.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Patient ${index + 1}`}
                  className="h-[30px] w-[30px] rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <div className="leading-[16px]">
              <h4 className="text-[13px] font-semibold text-[#00BCD4]">
                150k
              </h4>

              <p className="whitespace-nowrap text-[10px] text-[#7183AE]">
                Patient recovers
              </p>
            </div>
          </motion.div>

          {/* SMALL ACTIVITY INDICATOR */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-[145px] right-[5px] z-10 hidden items-center gap-2 rounded-full bg-white px-4 py-3 shadow-lg sm:flex lg:bottom-[80px] lg:right-[35px]"
          >
            <Activity size={19} className="text-[#00BCD4]" />
            <span className="text-[10px] font-semibold text-[#061D50]">
              Healthcare 24/7
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
