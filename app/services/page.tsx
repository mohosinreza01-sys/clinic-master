
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  HeartPulse,
  Stethoscope,
  Microscope,
  ShieldCheck,
  Ambulance,
  Brain,
  Eye,
  Bone,
  Baby,
  Pill,
  ScanLine,
  Clock3,
  Users,
  CheckCircle2,
  Phone,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Emergency Care",
    description:
      "Our emergency team provides immediate medical attention for urgent medical conditions with professional care and advanced facilities.",
    icon: Ambulance,
    color: "bg-[#EAF8FB]",
    iconColor: "text-[#00BCD4]",
    tags: ["24/7 Support", "Expert Team"],
  },
  {
    id: "02",
    title: "Cardiology",
    description:
      "Comprehensive cardiovascular care, advanced heart diagnostics, preventive treatment and personalized cardiac care.",
    icon: HeartPulse,
    color: "bg-[#FFF1F2]",
    iconColor: "text-[#F15B70]",
    tags: ["Heart Care", "Diagnostics"],
  },
  {
    id: "03",
    title: "Neurology",
    description:
      "Specialized neurological care focused on diagnosis, treatment and management of disorders affecting the nervous system.",
    icon: Brain,
    color: "bg-[#F0EDFF]",
    iconColor: "text-[#8267DE]",
    tags: ["Brain Health", "Specialist"],
  },
  {
    id: "04",
    title: "Diagnostic Center",
    description:
      "Reliable diagnostic services using modern equipment and advanced technology for accurate medical assessment.",
    icon: Microscope,
    color: "bg-[#EAF7EF]",
    iconColor: "text-[#45A878]",
    tags: ["Advanced Tests", "Accurate Results"],
  },
  {
    id: "05",
    title: "Orthopedics",
    description:
      "Expert treatment for bone, joint, muscle and mobility problems through comprehensive orthopedic care.",
    icon: Bone,
    color: "bg-[#FFF5E9]",
    iconColor: "text-[#E69A44]",
    tags: ["Bone Health", "Rehabilitation"],
  },
  {
    id: "06",
    title: "Eye Care",
    description:
      "Professional eye examinations, vision care and treatment for a wide range of eye-related conditions.",
    icon: Eye,
    color: "bg-[#E9F5FF]",
    iconColor: "text-[#428BCE]",
    tags: ["Vision Care", "Eye Specialist"],
  },
  {
    id: "07",
    title: "Women's Health",
    description:
      "Compassionate healthcare for women including routine checkups, reproductive health and wellness.",
    icon: ShieldCheck,
    color: "bg-[#FCEEFF]",
    iconColor: "text-[#C45BD7]",
    tags: ["Women's Care", "Wellness"],
  },
  {
    id: "08",
    title: "Pediatrics",
    description:
      "Dedicated healthcare services for infants, children and adolescents to support their growth and wellbeing.",
    icon: Baby,
    color: "bg-[#FFF8E7]",
    iconColor: "text-[#D8A53E]",
    tags: ["Child Care", "Family"],
  },
  {
    id: "09",
    title: "Medical Checkup",
    description:
      "Regular health assessments and preventive screenings designed to help you maintain a healthy lifestyle.",
    icon: Stethoscope,
    color: "bg-[#EAF8FB]",
    iconColor: "text-[#00BCD4]",
    tags: ["Preventive Care", "Health Screening"],
  },
  {
    id: "10",
    title: "Pharmacy",
    description:
      "Convenient access to prescribed medications and professional guidance to support your treatment.",
    icon: Pill,
    color: "bg-[#F0F8EB]",
    iconColor: "text-[#68A94D]",
    tags: ["Medication", "Professional Advice"],
  },
  {
    id: "11",
    title: "Advanced Imaging",
    description:
      "Modern imaging services including ultrasound and other diagnostic imaging for medical evaluation.",
    icon: ScanLine,
    color: "bg-[#EEF2FF]",
    iconColor: "text-[#6174D7]",
    tags: ["Imaging", "Technology"],
  },
  {
    id: "12",
    title: "General Medicine",
    description:
      "Primary healthcare for common illnesses, routine consultations, prevention and ongoing health management.",
    icon: Activity,
    color: "bg-[#F1F9F5]",
    iconColor: "text-[#3E9C79]",
    tags: ["Primary Care", "Consultation"],
  },
];

const stats = [
  { number: "25+", label: "Medical Services", icon: Stethoscope },
  { number: "40+", label: "Expert Doctors", icon: Users },
  { number: "24/7", label: "Emergency Support", icon: Clock3 },
  { number: "10k+", label: "Happy Patients", icon: HeartPulse },
];

const benefits = [
  "Experienced healthcare professionals",
  "Modern medical technology",
  "Patient-focused treatment",
  "Comprehensive healthcare services",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#061D50]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061D50]">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-[#00BCD4]/10 blur-[100px]" />
          <div className="absolute bottom-[-150px] left-[20%] h-[350px] w-[350px] rounded-full bg-[#00BCD4]/10 blur-[100px]" />

          <div className="absolute right-[10%] top-[15%] hidden opacity-[0.08] lg:block">
            <HeartPulse size={300} strokeWidth={0.7} />
          </div>
        </div>

        <div className="relative mx-auto grid min-h-[480px] w-full max-w-[1400px] items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-0 lg:py-[110px]">
          {/* HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#00BCD4]" />
              <span className="text-[13px] font-medium tracking-wide text-[#B9EAF1]">
                OUR HEALTHCARE SERVICES
              </span>
            </div>

            <h1 className="max-w-[650px] text-[42px] font-bold leading-[1.13] tracking-[-1.5px] text-white sm:text-[56px] lg:text-[64px]">
              Care That Matters.
              <span className="mt-2 block text-[#00BCD4]">
                Services That Heal.
              </span>
            </h1>

            <p className="mt-7 max-w-[550px] text-[16px] leading-8 text-[#C0CEE8]">
              Discover comprehensive healthcare services designed
              around your needs. From preventive care to advanced
              treatments, we are here to support your health
              at every stage of life.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="group inline-flex h-[54px] items-center gap-3 rounded-xl bg-[#00BCD4] px-7 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#061D50]"
              >
                Book Appointment
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-[54px] items-center justify-center rounded-xl border border-white/25 px-7 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[550px]"
          >
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=85"
                alt="Healthcare professionals"
                className="h-[350px] w-full rounded-[23px] object-cover sm:h-[430px]"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#E8F9FB] text-[#00BCD4]">
                    <HeartPulse size={28} />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#061D50]">
                      Complete Healthcare
                    </h3>
                    <p className="mt-1 text-[13px] text-[#61739F]">
                      Care for your whole family
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING DECORATION */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-5 top-10 hidden h-[65px] w-[65px] items-center justify-center rounded-2xl bg-[#00BCD4] text-white shadow-xl sm:flex"
            >
              <Activity size={30} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -right-4 top-[35%] hidden h-[65px] w-[65px] items-center justify-center rounded-2xl bg-white text-[#061D50] shadow-xl sm:flex"
            >
              <ShieldCheck size={30} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-[#E9EFF5] bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-5 px-5 py-12 lg:grid-cols-4 lg:px-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-2xl bg-[#E9F8FA] text-[#00BCD4]">
                  <Icon size={26} />
                </div>

                <div>
                  <h3 className="text-[30px] font-bold leading-none text-[#061D50]">
                    {stat.number}
                  </h3>

                  <p className="mt-2 text-[14px] font-medium text-[#61739F]">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative bg-[#F7FAFC] py-[100px]">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-0">
          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-[65px] max-w-[700px] text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E7F8FA] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#00BCD4]" />
              <span className="text-[13px] font-semibold uppercase tracking-[1px] text-[#00A7C0]">
                Explore Our Services
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-tight tracking-[-1px] text-[#061D50] sm:text-[48px]">
              Comprehensive Care,
              <span className="text-[#00BCD4]"> All in One Place</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-[16px] leading-8 text-[#61739F]">
              Our multidisciplinary healthcare team provides
              personalized medical services using modern technology
              and patient-centered care.
            </p>
          </motion.div>

          {/* CARD GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col overflow-hidden rounded-[22px] border border-[#E8EEF5] bg-white p-7 transition-all duration-300 hover:border-[#00BCD4]/30 hover:shadow-[0_20px_50px_rgba(6,29,80,0.08)] sm:p-8"
                >
                  {/* TOP */}
                  <div className="mb-7 flex items-center justify-between">
                    <div
                      className={`flex h-[68px] w-[68px] items-center justify-center rounded-[20px] ${service.color} transition-transform duration-500 group-hover:scale-110`}
                    >
                      <Icon
                        size={32}
                        strokeWidth={1.8}
                        className={service.iconColor}
                      />
                    </div>

                    <span className="text-[38px] font-bold text-[#061D50]/[0.06]">
                      {service.id}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <h3 className="text-[23px] font-bold text-[#061D50] transition-colors duration-300 group-hover:text-[#00BCD4]">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[100px] text-[15px] leading-7 text-[#61739F]">
                    {service.description}
                  </p>

                  {/* TAGS */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[#F2F7FA] px-3 py-2 text-[12px] font-medium text-[#61739F]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LINK */}
                  <Link
                    href="/appointment"
                    className="mt-7 inline-flex items-center gap-2 border-t border-[#EDF1F5] pt-5 text-[14px] font-semibold text-[#061D50] transition-colors duration-300 group-hover:text-[#00BCD4]"
                  >
                    Book a Consultation
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>

                  {/* HOVER LINE */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#00BCD4] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-white py-[100px]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 lg:grid-cols-2 lg:px-0">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
                alt="Medical professionals providing healthcare"
                className="h-[400px] w-full object-cover sm:h-[520px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061D50]/40 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-7 right-5 rounded-2xl bg-[#061D50] p-6 text-white shadow-2xl sm:-right-7 sm:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-[#00BCD4]">
                  <HeartPulse size={28} />
                </div>

                <div>
                  <h3 className="text-[24px] font-bold">Patient First</h3>
                  <p className="mt-1 text-[13px] text-[#C0CEE8]">
                    Every day, every patient
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E7F8FA] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#00BCD4]" />
              <span className="text-[13px] font-semibold uppercase tracking-[1px] text-[#00A7C0]">
                Why Choose Clinic Master
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-tight tracking-[-1px] text-[#061D50] sm:text-[48px]">
              Your Health Is Our
              <span className="text-[#00BCD4]"> Priority</span>
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-[#61739F]">
              We combine medical expertise, innovative technology
              and compassionate service to create a healthcare
              experience you can trust.
            </p>

            <div className="mt-8 space-y-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-[#E9F8FA] text-[#00BCD4]">
                    <CheckCircle2 size={22} />
                  </div>

                  <p className="text-[16px] font-medium text-[#061D50]">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-9 inline-flex h-[54px] items-center gap-3 rounded-xl bg-[#061D50] px-7 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#00BCD4]"
            >
              Learn More About Us
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#061D50] py-[90px]">
        <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#00BCD4]/10 blur-[100px]" />
        <div className="absolute bottom-[-100px] left-[-100px] h-[300px] w-[300px] rounded-full bg-[#00BCD4]/10 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-[1100px] px-5 text-center"
        >
          <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#00BCD4] text-white">
            <HeartPulse size={35} />
          </div>

          <h2 className="text-[36px] font-bold leading-tight text-white sm:text-[50px]">
            Ready to Take Care of
            <span className="text-[#00BCD4]"> Your Health?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-[16px] leading-8 text-[#C0CEE8]">
            Schedule your appointment today and experience
            healthcare designed around you. Our team is ready
            to provide the care you deserve.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="group inline-flex h-[55px] items-center gap-3 rounded-xl bg-[#00BCD4] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#061D50]"
            >
              Book Your Appointment
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:+11234567890"
              className="inline-flex h-[55px] items-center gap-3 rounded-xl border border-white/20 px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              <Phone size={18} />
              Call Us Today
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
