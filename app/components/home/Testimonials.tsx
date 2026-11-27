
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Quote,
  Plus,
} from "lucide-react";

const testimonials = [
  {
    name: "Kenneth Fong",
    role: "Patient",
    title: "Best Treatment",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here, content here, making it look like readable.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Michael Carter",
    role: "Patient",
    title: "Excellent Medical Care",
    description:
      "Our team provided excellent care and attention throughout the treatment. The staff was friendly, professional and made the entire experience comfortable.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Sarah Williams",
    role: "Patient",
    title: "Friendly Professionals",
    description:
      "The doctors are highly professional and the entire medical team is supportive. I really appreciate the quality of service and attention.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "David Martin",
    role: "Patient",
    title: "Trusted Healthcare",
    description:
      "From consultation to treatment, the experience was smooth and reassuring. The clinic offers a welcoming atmosphere and caring professionals.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85",
  },
];

const doctorImage =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=90";

const avatarImages = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonial = testimonials[activeIndex];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="achievements"
      className="relative w-full overflow-hidden bg-[#06285C] text-white"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[200px] -top-[200px] h-[600px] w-[600px] rounded-full bg-[#00BCD4]/5 blur-[100px]" />

        <div className="absolute -bottom-[200px] -left-[100px] h-[500px] w-[500px] rounded-full bg-[#00BCD4]/5 blur-[100px]" />

        <div className="absolute right-[10%] top-[10%] opacity-[0.025]">
          <Plus size={350} strokeWidth={1} />
        </div>
      </div>

      <div className="relative mx-auto grid min-h-[650px] w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-0 lg:py-12">
        {/* LEFT - DOCTOR */}
        <div className="relative mx-auto flex h-[480px] w-full max-w-[620px] items-end justify-center sm:h-[570px] lg:h-[640px] lg:max-w-none">
          {/* Circle rings */}
          <div className="pointer-events-none absolute left-1/2 top-[48%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] sm:h-[430px] sm:w-[430px] lg:h-[510px] lg:w-[510px]">
            <div className="absolute inset-[35px] rounded-full border border-white/[0.07]" />

            <div className="absolute inset-[75px] rounded-full border border-white/[0.06]" />

            <div className="absolute -left-[5px] top-[45%] h-[10px] w-[10px] rounded-full bg-[#00BCD4]" />

            <div className="absolute -right-[5px] top-[55%] h-[10px] w-[10px] rounded-full bg-[#00BCD4]" />

            <div className="absolute bottom-[10%] left-[20%] h-[9px] w-[9px] rounded-full bg-[#00BCD4]" />
          </div>

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-[2] flex h-full w-full items-end justify-center"
          >
            <img
              src={doctorImage}
              alt="Healthcare professional"
              className="relative z-[2] h-full max-h-[640px] w-full object-cover object-top sm:w-[85%] lg:w-[88%]"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 90%, transparent 100%)",
              }}
            />
          </motion.div>

          {/* Floating review card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={{ y: [0, -8, 0] }}
            className="absolute right-0 top-[28%] z-[5] w-[235px] rounded-[22px] bg-white p-4 text-[#061D50] shadow-2xl sm:right-[3%] sm:w-[280px] sm:p-5 lg:right-[-1%]"
          >
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                alt="Reviewer"
                className="h-10 w-10 rounded-full object-cover"
              />

              <div>
                <p className="text-[12px] font-semibold sm:text-[13px]">
                  Dr. Natali Jackson
                </p>

                <div className="mt-1 flex gap-1 text-[#FF9D26]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[15px]">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4 text-[10px] leading-[17px] text-[#7183AE] sm:text-[11px] sm:leading-[19px]">
              "It is a long established fact that a reader will be distracted by
              the readable content."
            </p>
          </motion.div>

          {/* Patient counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-[8%] left-0 z-[5] flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-xl sm:bottom-[6%] sm:px-5 sm:py-4"
          >
            <div className="flex -space-x-3">
              {avatarImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Patient"
                  className="h-9 w-9 rounded-full border-[3px] border-white object-cover sm:h-10 sm:w-10"
                />
              ))}
            </div>

            <div>
              <p className="text-[18px] font-bold leading-none text-[#00BCD4] sm:text-[21px]">
                150k
              </p>

              <p className="mt-1 text-[10px] text-[#7183AE] sm:text-[12px]">
                Patient recovers
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT - TESTIMONIAL */}
        <div className="relative z-[2] w-full pb-5 lg:pb-10">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[3px] text-[#00BCD4]">
              <span className="h-[2px] w-8 bg-[#00BCD4]" />
              Patient Stories
            </span>

            <h2 className="max-w-[650px] text-[28px] font-bold leading-[1.35] tracking-[-0.6px] sm:text-[36px] lg:text-[43px] lg:leading-[1.3]">
              Real Patients, Real Stories.
              <br />
              And Our{" "}
              <span className="text-[#00BCD4]">Achievements</span>
            </h2>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative mt-8 overflow-hidden rounded-[24px] bg-white text-[#061D50] sm:mt-10 sm:rounded-[30px]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-[210px_1fr]">
              {/* Patient profile */}
              <div className="relative flex flex-col bg-[#EEF7FC]">
                <div className="relative h-[250px] overflow-hidden sm:h-[270px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={testimonial.image}
                      src={testimonial.image}
                      alt={testimonial.name}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="h-full w-full object-cover object-center"
                    />
                  </AnimatePresence>

                  {/* Watch video button */}
                  <button
                    type="button"
                    className="absolute bottom-3 left-2 right-2 flex items-center justify-center gap-2 rounded-[13px] bg-white px-3 py-3 text-[11px] font-medium shadow-lg transition hover:bg-[#00BCD4] hover:text-white sm:text-[12px]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00BCD4] text-white">
                      <Play size={14} fill="currentColor" />
                    </span>
                    Watch The Video
                  </button>
                </div>

                <div className="px-4 py-4 text-center">
                  <h3 className="text-[16px] font-semibold">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-[12px] text-[#00BCD4]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Testimonial content */}
              <div className="relative flex min-h-[320px] flex-col justify-center px-5 py-7 sm:px-7 sm:py-8 lg:px-8">
                <Quote
                  className="absolute bottom-4 right-4 text-[#061D50]/[0.06]"
                  size={100}
                  strokeWidth={1}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="relative z-[1]"
                  >
                    <h3 className="text-[18px] font-semibold sm:text-[20px]">
                      {testimonial.title}
                    </h3>

                    <p className="mt-4 text-[12px] leading-[23px] text-[#061D50] sm:text-[13px] sm:leading-[26px]">
                      {testimonial.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="mt-7 flex items-center justify-between sm:mt-8">
            <div className="flex gap-3">
              <motion.button
                type="button"
                onClick={previous}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-[#00BCD4] hover:border-[#00BCD4]"
              >
                <ArrowLeft size={18} />
              </motion.button>

              <motion.button
                type="button"
                onClick={next}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-[#00BCD4] hover:border-[#00BCD4]"
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-[9px] rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-[#00BCD4]"
                      : "w-[9px] bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
