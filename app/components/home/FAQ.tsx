
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus,
  Minus,
  ArrowUpRight,
  MessageCircle,
  Headset,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How can I book an appointment with a doctor?",
    answer:
      "You can book an appointment through our website by selecting your preferred department, doctor, and available time slot. You can also contact our support team for assistance.",
  },
  {
    id: 2,
    question: "Can I choose a specific doctor for my treatment?",
    answer:
      "Yes. You can explore our specialist doctors, check their departments and profiles, and select the doctor you prefer when booking your appointment.",
  },
  {
    id: 3,
    question: "What medical services does Clinic Master provide?",
    answer:
      "Clinic Master provides a range of healthcare services, including cardiology, dental care, neurology, eye care, orthopedics, diagnostics, and other specialist services.",
  },
  {
    id: 4,
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes. Please contact our appointment support team with your booking details. They will help you with the available rescheduling or cancellation options.",
  },
  {
    id: 5,
    question: "Do I need to bring my previous medical reports?",
    answer:
      "If you have previous prescriptions, medical reports, or diagnostic results related to your condition, bringing them can help your doctor understand your medical history.",
  },
  {
    id: 6,
    question: "Is emergency medical support available?",
    answer:
      "For urgent medical concerns, please contact the clinic directly or visit the nearest emergency medical facility. Website appointment booking is not intended for emergencies.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-5 lg:py-[100px]"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#EEF7FC] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#E9FAFC] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-24"
        >
          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00BCD4]/20 bg-[#00BCD4]/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#00BCD4]" />
            <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#00A9C2]">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="max-w-[510px] text-[32px] font-bold leading-[1.25] tracking-[-1.2px] text-[#061D50] sm:text-[40px] lg:text-[46px]">
            Have Questions?
            <br />
            <span className="text-[#00BCD4]">We Have Answers.</span>
          </h2>

          <p className="mt-5 max-w-[470px] text-[13px] leading-[1.9] text-[#7183AE] sm:text-[14px]">
            Find answers to the most common questions about our medical
            services, appointments, specialist doctors, and patient care.
            We are here to make your healthcare journey easier.
          </p>

          {/* Support Card */}
          <div className="relative mt-9 overflow-hidden rounded-[22px] bg-[#061D50] p-6 sm:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[25px] border-white/[0.04]" />
            <div className="absolute -bottom-16 right-20 h-40 w-40 rounded-full border-[25px] border-white/[0.04]" />

            <div className="relative z-[1]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#00BCD4] text-white">
                <Headset size={24} strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 text-[19px] font-semibold text-white">
                Still have questions?
              </h3>

              <p className="mt-2 max-w-[340px] text-[12px] leading-[1.8] text-white/65">
                Our support team is ready to help you with your healthcare
                questions and appointment information.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex h-11 items-center gap-3 rounded-[10px] bg-[#00BCD4] px-5 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#061D50]"
              >
                Contact Our Team
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* Trust Points */}
          <div className="mt-7 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF7FC] text-[#00BCD4]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-[12px] font-semibold text-[#061D50]">
                  Trusted Care
                </h4>
                <p className="mt-1 text-[10px] text-[#7183AE]">
                  Patient focused
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF7FC] text-[#00BCD4]">
                <Clock3 size={20} />
              </div>
              <div>
                <h4 className="text-[12px] font-semibold text-[#061D50]">
                  Quick Support
                </h4>
                <p className="mt-1 text-[10px] text-[#7183AE]">
                  Here to assist
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FAQ ACCORDION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="w-full"
        >
          <div className="mb-6 flex items-center justify-between border-b border-[#E5EDF5] pb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[1.4px] text-[#00BCD4]">
                Need to know
              </p>
              <h3 className="mt-1 text-[20px] font-bold text-[#061D50] sm:text-[23px]">
                General Questions
              </h3>
            </div>

            <span className="rounded-lg bg-[#EEF7FC] px-3 py-2 text-[11px] font-semibold text-[#061D50]">
              {String(faqs.length).padStart(2, "0")} Questions
            </span>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  variants={itemVariants}
                  className={`overflow-hidden rounded-[16px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#00BCD4]/40 bg-[#F5FCFE] shadow-[0_8px_25px_rgba(6,29,80,0.055)]"
                      : "border-[#E7EEF6] bg-white hover:border-[#00BCD4]/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(isOpen ? null : faq.id)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="flex w-full items-center gap-4 px-5 py-[21px] text-left sm:px-6"
                  >
                    <span
                      className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-[12px] font-semibold sm:flex ${
                        isOpen
                          ? "bg-[#00BCD4] text-white"
                          : "bg-[#EEF7FC] text-[#7183AE]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 text-[12px] font-semibold leading-[1.7] sm:text-[14px] ${
                        isOpen ? "text-[#061D50]" : "text-[#253D68]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#00BCD4] text-white"
                          : "bg-[#EEF7FC] text-[#061D50]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-5 pr-14 sm:pl-[76px] sm:pr-16">
                          <div className="mb-3 h-px w-full bg-[#DCEAF2]" />
                          <p className="text-[11px] leading-[1.9] text-[#7183AE] sm:text-[12px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-6 flex items-start gap-3 rounded-[14px] border border-[#E5EDF5] bg-[#F8FBFD] p-4">
            <div className="mt-0.5 text-[#00BCD4]">
              <MessageCircle size={18} />
            </div>
            <p className="text-[10px] leading-[1.8] text-[#7183AE] sm:text-[11px]">
              Can't find the answer you're looking for? Our team can help
              you with additional information about appointments and
              available services.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
