"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, HeartHandshake, Award, Stethoscope } from "lucide-react";

const features = [
  {
    title: "More Experience",
    description: "We offer a wide range of health services to meet all your needs.",
    icon: ShieldCheck,
  },
  {
    title: "Seamless care",
    description: "We offer a wide range of health services to meet all your needs.",
    icon: HeartHandshake,
  },
  {
    title: "The right answers?",
    description: "We offer a wide range of health services to meet all your needs.",
    icon: Stethoscope,
  },
  {
    title: "Unparalleled expertise",
    description: "We offer a wide range of health services to meet all your needs.",
    icon: Award,
  },
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
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#061D50] py-[75px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1920&q=85')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#061D50]/95" />

      {/* Decorative overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-white" />
        <div className="absolute left-[25%] top-0 h-full w-px bg-white" />
        <div className="absolute right-[20%] top-0 h-full w-px bg-white" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white" />
      </div>

      {/* Main container */}
      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-[65px] px-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-[75px] lg:px-0">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[590px]"
        >
          {/* Main image */}
          <div className="relative h-[520px] w-full overflow-hidden rounded-[30px] sm:h-[590px]">
            <motion.img
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=90"
              alt="Doctor providing professional healthcare"
              className="h-full w-full object-cover object-center"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061D50]/15 to-transparent" />
          </div>

          {/* Experience badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-0 -right-1 z-10 flex h-[190px] w-[190px] flex-col items-center justify-center rounded-[28px] bg-[#00BCD4] text-center text-white shadow-[0_15px_40px_rgba(0,188,212,0.18)] sm:-right-1"
          >
            <span className="text-[55px] font-bold leading-none tracking-tight">
              20+
            </span>

            <span className="mt-3 text-[20px] font-semibold leading-[27px]">
              Years
              <br />
              Experienced
            </span>
          </motion.div>

          {/* Decorative circle */}
          <div className="absolute -left-5 -top-5 h-[80px] w-[80px] rounded-full border border-[#00BCD4]/20" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="w-full">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-[35px] text-[32px] font-bold leading-[1.4] tracking-[-0.6px] text-white sm:text-[40px] lg:text-[43px]"
          >
            Why Choose Us For Your
            <br className="hidden sm:block" />
            Health Care Needs
          </motion.h2>

          {/* Feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-[20px] sm:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group flex min-h-[182px] flex-col items-center justify-center rounded-[22px] border border-white/[0.03] bg-white/[0.055] px-[25px] py-[24px] text-center transition-colors duration-300 hover:bg-white/[0.09]"
              >
                {/* Check icon */}
                <div className="mb-[14px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#00BCD4] text-white transition-transform duration-300 group-hover:scale-110">
                  <Check size={24} strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className="mb-[9px] text-[16px] font-semibold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="max-w-[260px] text-[13px] leading-[24px] text-[#A4B3D1]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}