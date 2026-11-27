
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock3,
  PhoneCall,
  Image as ImageIcon,
  Lightbulb,
  Phone,
  Mic,
  Video,
} from "lucide-react";

const services = [
  "Comprehensive Specialties",
  "Research and Development",
  "Emergency Services",
  "Advanced Imaging Services",
  "Intensive Care Units (ICUs)",
  "Rehabilitation Services",
  "Telemedicine Facilities",
  "Patient-Centric Approach",
  "Multidisciplinary Team",
  "Health Information Technology",
];

const hours = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Facilities() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-[65px] lg:min-h-[633px] lg:px-0 lg:py-[70px]">

      {/* Background Decoration */}
      <svg
        className="pointer-events-none absolute -right-[85px] -bottom-[160px] h-[340px] w-[340px] opacity-[0.17]"
        viewBox="0 0 300 300"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#00BCD4" strokeWidth="2" strokeDasharray="3 5">
          <path d="M0 250C80 180 90 100 180 70S280 30 300 0" />
          <path d="M20 290C100 220 110 140 200 110S290 70 310 40" />
          <path d="M-20 210C60 140 70 60 160 30S260 -10 280 -40" />
        </g>
      </svg>

      {/* Main Container */}
      <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-[55px] lg:grid-cols-[540px_1fr] lg:gap-[65px]">

        {/* LEFT IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto h-[400px] w-full max-w-[540px] sm:h-[490px] lg:mx-0"
        >

          {/* Main Doctor Image */}
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=90"
            alt="Professional male doctor"
            className="absolute right-0 top-0 z-[1] h-[360px] w-[75%] rounded-[22px] object-cover object-center sm:right-2 sm:h-[488px] sm:w-[413px]"
          />

          {/* Video Call Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-5px] top-[30px] z-[5] origin-top-left scale-[0.78] sm:left-[-85px] sm:top-[40px] sm:scale-100"
          >
            <div className="relative h-[245px] w-[215px] rounded-r-[35px] bg-white py-[23px] pl-[37px] pr-[23px] shadow-[0_12px_35px_rgba(6,29,80,0.04)]">

              {/* Vertical Label */}
              <div className="absolute left-0 top-[23px] flex h-[200px] w-[50px] items-center justify-center rounded-l-[18px] bg-[#061D50]">
                <span className="rotate-180 text-[10px] font-bold tracking-[0.5px] text-white [writing-mode:vertical-rl]">
                  VIDEO CALL SUPPORT
                </span>
              </div>

              {/* Video Screen */}
              <div className="relative z-[2] h-[198px] w-[153px] overflow-hidden rounded-[17px] bg-[#e9eef2]">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=85"
                  alt="Female doctor"
                  className="h-full w-full object-cover object-top"
                />

                {/* Video Controls */}
                <div className="absolute bottom-2 left-1/2 flex h-[28px] w-[125px] -translate-x-1/2 items-center justify-around rounded-full bg-white/85 px-2 backdrop-blur-md">
                  <ImageIcon size={12} className="text-[#7183AE]" />
                  <Lightbulb size={12} className="text-[#7183AE]" />

                  <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#ff4c52] text-white">
                    <Phone size={12} fill="currentColor" />
                  </span>

                  <Mic size={12} className="text-[#7183AE]" />
                  <Video size={12} className="text-[#7183AE]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Open Hours Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-[5px] right-[-5px] z-[6] min-h-[205px] w-[180px] rounded-[20px] bg-[#00BCD4] px-4 py-4 text-white shadow-[0_15px_35px_rgba(0,188,212,0.12)] sm:bottom-[27px] sm:right-[-40px] sm:min-h-[226px] sm:w-[203px] sm:px-[22px] sm:py-5"
          >

            {/* Clock */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(0,188,212,0.18)",
                  "0 0 0 9px rgba(0,188,212,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -right-5 -top-5 flex h-[56px] w-[56px] items-center justify-center rounded-full border-4 border-white bg-[#061D50]"
            >
              <Clock3 size={32} strokeWidth={1.6} />
            </motion.div>

            <h3 className="mb-[15px] text-[14px] font-semibold">
              Open Hours
            </h3>

            <div className="space-y-[9px]">
              {hours.map((day) => (
                <div
                  key={day}
                  className="flex items-center justify-between gap-2 whitespace-nowrap text-[9px] font-medium sm:text-[10px]"
                >
                  <span>{day}</span>
                  <strong className="text-[9px] font-bold sm:text-[10px]">
                    09:30 - 07:30
                  </strong>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="w-full max-w-[500px]">

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-[9px] text-[25px] font-bold leading-[1.35] tracking-[-0.6px] text-[#061D50] sm:text-[30px] lg:text-[32px]"
          >
            World Class Patient
            <br />
            Facilities Designed For You
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-[26px] max-w-[500px] text-[12px] leading-[21.5px] text-[#7183AE] sm:text-[13px]"
          >
            Experience the future of healthcare. Our state-of-the-art
            facilities are equipped with the latest technology, ensuring you
            receive the world&apos;s best quality treatment. Here, cutting-edge
            tools meet unparalleled expertise, providing a comfortable and
            effective path to optimal health.
          </motion.p>

          {/* Services */}
          <div className="mb-[26px] grid grid-cols-1 gap-x-[22px] gap-y-[9px] sm:grid-cols-2">

            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: (index % 2) * 0.08,
                }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-[11px] whitespace-nowrap text-[11px] font-medium text-[#061D50] transition-colors hover:text-[#00BCD4]"
              >
                <Check
                  size={13}
                  strokeWidth={2.5}
                  className="shrink-0 text-[#00BCD4]"
                />
                {service}
              </motion.div>
            ))}

          </div>

          {/* Bottom Actions */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-[18px] sm:gap-6"
          >

            {/* Appointment */}
            <Link
              href="#appointment"
              className="group inline-flex h-[46px] items-center gap-3 rounded-[11px] bg-[#061D50] py-0 pl-5 pr-[7px] text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00BCD4]"
            >
              Appointment

              <span className="flex h-[33px] w-[33px] items-center justify-center rounded-lg bg-white text-[#061D50] transition-transform group-hover:translate-x-1">
                <ArrowRight size={17} />
              </span>
            </Link>

            {/* Contact */}
            <a
              href="tel:+11234567890"
              className="group flex items-center gap-3"
            >
              <PhoneCall
                size={27}
                strokeWidth={1.7}
                className="text-[#00BCD4] transition-transform group-hover:scale-110"
              />

              <div>
                <small className="mb-[1px] block text-[10px] text-[#7183AE]">
                  Contact us
                </small>

                <strong className="block text-[12px] font-semibold text-[#061D50]">
                  +1 123 456 7890
                </strong>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
