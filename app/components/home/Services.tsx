
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  Smile,
  Activity,
  Eye,
  Brain,
  Bone,
  ScanLine,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    id: "angioplasty",
    title: "Angioplasty",
    doctors: "25+ Doctor",
    description:
      "Advanced cardiovascular care using modern techniques and personalized treatment.",
    icon: Stethoscope,
  },
  {
    id: "cardiology",
    title: "Cardiology",
    doctors: "25+ Doctor",
    description:
      "Expert heart care with comprehensive diagnosis and treatment solutions.",
    icon: HeartPulse,
  },
  {
    id: "dental",
    title: "Dental",
    doctors: "25+ Doctor",
    description:
      "Complete dental care focused on healthy smiles and comfortable treatment.",
    icon: Smile,
  },
  {
    id: "endocrinology",
    title: "Endocrinology",
    doctors: "25+ Doctor",
    description:
      "Specialized treatment for hormonal conditions and metabolic health.",
    icon: Activity,
  },
  {
    id: "eye-care",
    title: "Eye Care",
    doctors: "25+ Doctor",
    description:
      "Professional eye examinations and modern vision care services.",
    icon: Eye,
  },
  {
    id: "neurology",
    title: "Neurology",
    doctors: "25+ Doctor",
    description:
      "Expert neurological care for brain, nerve and related conditions.",
    icon: Brain,
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    doctors: "25+ Doctor",
    description:
      "Advanced bone, joint and mobility care with expert specialists.",
    icon: Bone,
  },
  {
    id: "rmi",
    title: "RMI",
    doctors: "25+ Doctor",
    description:
      "Advanced diagnostic imaging to support accurate medical assessments.",
    icon: ScanLine,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services() {
  const [activeId, setActiveId] = useState("rmi");

  return (
    <section
      id="services"
      className="w-full bg-[#EEF7FC] py-[75px] pb-[35px]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 lg:px-0">

        {/* HEADER */}
        <div className="mb-[26px] flex items-end justify-between gap-5 max-sm:flex-col max-sm:items-start">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] font-bold leading-[1.38] tracking-[-0.7px] text-[#061D50] max-sm:text-[24px]"
          >
            Start Feeling Your Best
            <br />
            Explore Our Wellness Services
          </motion.h2>

          <motion.a
            href="#all-services"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="flex h-[39px] shrink-0 items-center gap-[10px] rounded-[11px] bg-[#061D50] py-[5px] pl-[20px] pr-[5px] text-[11px] font-medium text-white transition-colors duration-300 hover:bg-[#00BCD4]"
          >
            View All
            <span className="flex h-[29px] w-[29px] items-center justify-center rounded-[8px] bg-white text-[#061D50]">
              <ArrowRight size={17} strokeWidth={1.8} />
            </span>
          </motion.a>
        </div>

        {/* GRID */}
        <motion.div
          id="all-services"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-4 gap-x-[15px] gap-y-[22px] max-[1100px]:grid-cols-3 max-md:grid-cols-2 max-[500px]:grid-cols-1"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const active = activeId === service.id;

            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                onClick={() => setActiveId(service.id)}
                whileHover={{ y: -5 }}
                className={`group relative flex h-[240px] cursor-pointer flex-col rounded-[21px] p-[21px_23px] transition-all duration-300 max-sm:h-[230px] ${
                  active
                    ? "bg-[#00BCD4] shadow-[0_14px_30px_rgba(0,188,212,0.15)]"
                    : "bg-white hover:bg-[#00BCD4] hover:shadow-[0_14px_30px_rgba(0,188,212,0.15)]"
                }`}
              >
                {/* WATERMARK */}
                <Icon
                  className={`pointer-events-none absolute right-[8px] top-[4px] h-[110px] w-[110px] stroke-[1.3] transition-all duration-300 ${
                    active
                      ? "rotate-[-8deg] scale-110 text-white opacity-[0.12]"
                      : "text-[#061D50] opacity-[0.025] group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:text-white group-hover:opacity-[0.12]"
                  }`}
                />

                {/* MAIN ICON */}
                <div
                  className={`relative mb-[23px] h-[48px] w-[48px] transition-colors duration-300 ${
                    active
                      ? "text-white"
                      : "text-[#061D50] group-hover:text-white"
                  }`}
                >
                  <Icon
                    className="h-full w-full"
                    strokeWidth={1.5}
                  />
                  <span
                    className={`absolute -right-1 top-0 h-[8px] w-[8px] rounded-full ${
                      active
                        ? "bg-[#061D50]"
                        : "bg-[#00BCD4] group-hover:bg-[#061D50]"
                    }`}
                  />
                </div>

                {/* TITLE */}
                <h3
                  className={`mb-[8px] text-[14px] font-bold transition-colors duration-300 ${
                    active
                      ? "text-white"
                      : "text-[#061D50] group-hover:text-white"
                  }`}
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`text-[11px] leading-[18px] transition-colors duration-300 ${
                    active
                      ? "text-white/90"
                      : "text-[#7183AE] group-hover:text-white"
                  }`}
                >
                  {service.description}
                </p>

                {/* FOOTER */}
                <div
                  className={`mt-auto flex items-center gap-[6px] border-t border-dashed pt-[10px] text-[10px] font-medium transition-colors duration-300 ${
                    active
                      ? "border-white/45 text-white"
                      : "border-[#D0D9E8] text-[#061D50] group-hover:border-white/45 group-hover:text-white"
                  }`}
                >
                  <span
                    className={`h-[8px] w-[8px] rounded-full ${
                      active
                        ? "bg-[#061D50]"
                        : "bg-[#00BCD4] group-hover:bg-[#061D50]"
                    }`}
                  />
                  {service.doctors}
                </div>

                {/* ARROW CUTOUT */}
                <div className="absolute bottom-0 right-0 flex h-[52px] w-[52px] items-center justify-center rounded-tl-[25px] bg-[#EEF7FC]">
                  <a
                    href={`#${service.id}`}
                    aria-label={`Explore ${service.title}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#00BCD4] text-white transition-colors duration-300 hover:bg-[#061D50]"
                  >
                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
