
"use client";

import { motion } from "framer-motion";
import {
  Check,
  Award,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const skills = [
  "Radiant Skin Dermatology",
  "Laser Resurfacing",
  "Flawless Dermatology",
  "Refined Skin Dermatology",
  "Luminous Dermatology",
  "Anti Aging",
];

const awards = [
  {
    id: 1,
    title: "ClinicMaster 2024",
    subtitle: "Quality and Accreditation Institute",
    highlight: "Best Dermatologists",
    badge: "WHO",
  },
  {
    id: 2,
    title: "ClinicMaster 2024",
    subtitle: "Quality and Accreditation Institute",
    highlight: "Best Dermatologists",
    badge: "MED",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function AwardBadge({ type }: { type: string }) {
  return (
    <div className="relative flex h-[105px] w-[105px] shrink-0 items-center justify-center">
      {/* Decorative seal */}
      <div className="absolute inset-[8px] rotate-45 border border-[#061D50]/25" />

      <div className="absolute inset-2 rounded-full border border-[#061D50]/20" />

      <div className="absolute inset-[15px] rounded-full border border-dashed border-[#061D50]/30" />

      <div className="relative z-10 flex flex-col items-center text-[#061D50]">
        <Award size={19} className="mb-1" />

        <span className="text-[16px] font-bold tracking-wide">
          {type === "WHO" ? "WHO" : "MED"}
        </span>

        <span className="text-[8px] tracking-wide">MEDIZONE</span>

        <span className="mt-1 text-[7px] tracking-[2px]">
          2024
        </span>
      </div>

      <div className="absolute left-0 top-1/2 h-[5px] w-[5px] rounded-full bg-[#00BCD4]" />
      <div className="absolute right-0 top-1/2 h-[5px] w-[5px] rounded-full bg-[#00BCD4]" />
    </div>
  );
}

export default function DoctorProfile() {
  return (
    <section
      id="doctor-profile"
      className="relative w-full overflow-hidden bg-[#EEF7FC]"
    >
      {/* Background image and overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="h-full w-full object-cover opacity-[0.09]"
        />

        <div className="absolute inset-0 bg-[#EEF7FC]/90" />
      </div>

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full border border-[#061D50]/[0.04]" />

      <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full border border-[#061D50]/[0.04]" />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 lg:min-h-[660px] lg:grid-cols-2 lg:gap-12 lg:px-0 lg:py-0">
        {/* LEFT IMAGE */}
        <div className="relative mx-auto h-[440px] w-full max-w-[600px] sm:h-[540px] lg:h-[660px]">
          {/* Background decorative circle */}
          <div className="absolute bottom-[5%] left-[5%] h-[80%] w-[80%] rounded-full bg-[#00BCD4]/[0.06]" />

          <div className="absolute bottom-[8%] left-[8%] h-[72%] w-[72%] rounded-full border border-[#00BCD4]/20" />

          {/* Doctor */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=90"
              alt="Doctor"
              className="h-full w-full object-cover object-top"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 94%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 94%, transparent 100%)",
              }}
            />
          </motion.div>

          {/* Years experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="absolute left-0 top-[58%] z-10 flex items-center gap-4 rounded-[18px] bg-white px-5 py-4 shadow-[0_10px_40px_rgba(6,29,80,0.08)] sm:left-[4%] sm:px-6 sm:py-5"
          >
            <span className="text-[45px] font-bold leading-none text-[#00BCD4] sm:text-[55px]">
              20+
            </span>

            <div className="border-l border-[#DCE7F1] pl-4">
              <p className="text-[14px] font-semibold leading-[22px] text-[#061D50] sm:text-[16px]">
                Years
                <br />
                Experienced
              </p>
            </div>
          </motion.div>

          {/* Floating decorative dot */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[10%] top-[15%] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#00BCD4] shadow-lg"
          >
            <Sparkles size={20} />
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 w-full py-5 lg:py-10"
        >
          {/* Heading */}
          <motion.div variants={fadeUp}>
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[2px] text-[#00BCD4]">
              <span className="h-[2px] w-7 bg-[#00BCD4]" />
              Meet Our Specialist
            </span>

            <h2 className="text-[30px] font-bold leading-[1.3] tracking-[-0.8px] text-[#061D50] sm:text-[40px] lg:text-[44px]">
              Meet Dr. Natali Jackson
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[650px] text-[13px] leading-[25px] text-[#7183AE] sm:text-[15px] sm:leading-[28px]"
          >
            <span className="font-semibold text-[#061D50]">
              Dr. Natali Jackson
            </span>{" "}
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.
          </motion.p>

          {/* Skills */}
          <motion.div variants={fadeUp} className="mt-8">
            <h3 className="mb-4 text-[17px] font-semibold text-[#00BCD4]">
              About Skills
            </h3>

            <div className="border-t border-dashed border-[#B8C9DD]" />

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#00BCD4] shadow-sm">
                    <Check size={18} strokeWidth={2.5} />
                  </span>

                  <span className="text-[12px] font-medium text-[#061D50] sm:text-[13px]">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            variants={containerVariants}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {awards.map((award) => (
              <motion.div
                key={award.id}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 rounded-[18px] bg-white px-4 py-4 shadow-[0_8px_30px_rgba(6,29,80,0.04)] sm:gap-4 sm:px-4 sm:py-5"
              >
                <AwardBadge type={award.badge} />

                <div className="min-w-0">
                  <h4 className="text-[14px] font-semibold text-[#061D50] sm:text-[15px]">
                    {award.title}
                  </h4>

                  <p className="mt-2 text-[11px] leading-[19px] text-[#7183AE] sm:text-[12px]">
                    {award.subtitle}
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-[#00BCD4] sm:text-[12px]">
                    {award.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-7">
            <motion.a
              href="#appointment"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-[12px] bg-[#061D50] px-5 py-3 text-[12px] font-medium text-white transition-colors hover:bg-[#00BCD4]"
            >
              Book Appointment

              <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white text-[#061D50]">
                <ArrowUpRight size={17} />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
