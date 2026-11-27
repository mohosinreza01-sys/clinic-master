"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Plus,
  MoveUpRight,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const contactItems = [
  {
    icon: Phone,
    label: "PHONE",
    title: "+880 1712-345678",
    desc: "Speak directly with our support team.",
    href: "tel:+8801712345678",
  },
  {
    icon: Mail,
    label: "EMAIL",
    title: "support@clinicmaster.com",
    desc: "Send us your questions and inquiries.",
    href: "mailto:support@clinicmaster.com",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    title: "Dhaka, Bangladesh",
    desc: "Find us and visit our healthcare center.",
    href: "#location",
  },
  {
    icon: Clock3,
    label: "WORKING HOURS",
    title: "9:00 AM — 8:00 PM",
    desc: "Monday to Saturday.",
    href: "#location",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="overflow-hidden bg-white text-[#10243A]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#F1F6FC]">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[8%] top-[-150px] h-[400px] w-[400px] rounded-full bg-blue-200/40 blur-[100px]" />
          <div className="absolute bottom-[-150px] left-[5%] h-[350px] w-[350px] rounded-full bg-sky-200/30 blur-[100px]" />

          <div className="absolute right-0 top-0 h-full w-[35%] opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(#2563eb 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Hero text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[1.5px] text-blue-600 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  Get in touch
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-7 max-w-3xl text-[42px] font-semibold leading-[1.08] tracking-[-2px] text-[#10243A] sm:text-6xl lg:text-[76px]"
              >
                Let's talk about
                <span className="mt-1 block text-[#2563EB]">
                  your health.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-6 max-w-xl text-[15px] leading-8 text-slate-600 md:text-[17px]"
              >
                Your questions matter to us. Whether you need assistance,
                information or an appointment, our team is always ready to help.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/appointment"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#2563EB] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
                >
                  Book an appointment
                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <a
                  href="tel:+8801712345678"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 px-6 py-4 text-sm font-semibold text-[#10243A] transition hover:border-blue-300 hover:bg-white"
                >
                  <Phone size={17} className="text-blue-600" />
                  Call our team
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-10 flex items-center gap-4"
              >
                <div className="flex -space-x-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#F1F6FC] bg-blue-100 text-blue-700">
                    <HeartPulse size={20} />
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#F1F6FC] bg-sky-100 text-sky-700">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#F1F6FC] bg-indigo-100 text-indigo-700">
                    <MessageCircle size={20} />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#10243A]">
                    Patient-first support
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Here for your healthcare journey
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-[500px]"
            >
              <div className="relative overflow-hidden rounded-[32px] bg-[#153A67] p-7 text-white sm:p-10">
                <div className="absolute right-[-70px] top-[-70px] h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute right-[-40px] top-[-40px] h-48 w-48 rounded-full border border-white/10" />
                <div className="absolute bottom-[-100px] left-[-60px] h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                      <HeartPulse size={28} />
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                      <span className="text-xs font-medium text-blue-100">
                        Support available
                      </span>
                    </div>
                  </div>

                  <h2 className="mt-12 text-3xl font-semibold leading-tight sm:text-4xl">
                    Healthcare
                    <br />
                    <span className="text-blue-300">starts here.</span>
                  </h2>

                  <p className="mt-5 max-w-xs text-sm leading-7 text-blue-100/80">
                    A simple conversation can be the first step toward better
                    healthcare.
                  </p>

                  <div className="mt-10 border-t border-white/10 pt-7">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[1.5px] text-blue-200">
                          Need assistance?
                        </p>
                        <p className="mt-2 text-lg font-semibold">
                          Talk to our team
                        </p>
                      </div>

                      <Link
                        href="/appointment"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-700 transition hover:bg-blue-100"
                      >
                        <ArrowUpRight size={22} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating box */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/5 sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-blue-600">
                    <Clock3 size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Working hours</p>
                    <p className="mt-1 text-sm font-semibold text-[#10243A]">
                      9 AM — 8 PM
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT DETAILS ================= */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[2px] text-blue-600">
              Contact information
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#10243A] md:text-5xl">
              Find the right way
              <br className="hidden md:block" />
              to reach us.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500 md:text-base">
            Get in touch through your preferred channel. Our team is here to
            make your experience as smooth as possible.
          </p>
        </div>

        <div className="mt-12 grid gap-0 border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-7 transition duration-300 hover:bg-[#F5F9FF] md:p-8 ${
                  index !== 0
                    ? "border-t border-slate-200 sm:border-l sm:border-t-0"
                    : ""
                } ${index === 2 ? "lg:border-l" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <MoveUpRight
                    size={18}
                    className="text-slate-300 transition group-hover:text-blue-600"
                  />
                </div>

                <p className="mt-7 text-[11px] font-semibold tracking-[1.8px] text-slate-400">
                  {item.label}
                </p>

                <h3 className="mt-3 break-words text-base font-semibold text-[#10243A] md:text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="relative bg-[#F4F7FB] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                <span className="h-px w-8 bg-blue-600" />
                GET IN TOUCH
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#10243A] md:text-5xl">
                Have something
                <span className="block text-blue-600">on your mind?</span>
              </h2>

              <p className="mt-6 max-w-lg text-[15px] leading-8 text-slate-600">
                We believe great healthcare begins with communication. Tell us
                what you need and our team will get back to you as soon as
                possible.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#10243A]">
                      Your information matters
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      We handle inquiries with care and professionalism.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <MessageCircle size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#10243A]">
                      Friendly support
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      Our team is ready to help with your questions and requests.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-slate-200 pt-8">
                <p className="text-sm text-slate-500">
                  Prefer talking directly?
                </p>

                <a
                  href="tel:+8801712345678"
                  className="mt-3 inline-flex items-center gap-3 text-lg font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  <Phone size={19} />
                  +880 1712-345678
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:p-10 md:p-12"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#10243A]">
                  Send us a message
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Fill in the details below and we will reach out to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2.5 block text-sm font-medium text-[#10243A]"
                    >
                      Full name <span className="text-blue-600">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-[#FBFCFE] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2.5 block text-sm font-medium text-[#10243A]"
                    >
                      Email address <span className="text-blue-600">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-[#FBFCFE] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2.5 block text-sm font-medium text-[#10243A]"
                    >
                      Phone number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full rounded-xl border border-slate-200 bg-[#FBFCFE] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2.5 block text-sm font-medium text-[#10243A]"
                    >
                      Inquiry type <span className="text-blue-600">*</span>
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-[#FBFCFE] px-4 py-3.5 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    >
                      <option value="">Choose an option</option>
                      <option value="appointment">Appointment</option>
                      <option value="doctor">Doctor inquiry</option>
                      <option value="service">Medical services</option>
                      <option value="support">General support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2.5 block text-sm font-medium text-[#10243A]"
                  >
                    Your message <span className="text-blue-600">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-[#FBFCFE] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#2563EB] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Send your message
                  <Send
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-6 text-slate-400">
                  We respect your privacy and will only use your information to
                  respond to your inquiry.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section
        id="location"
        className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[2px] text-blue-600">
              Our location
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#10243A] md:text-5xl">
              Find us.
              <span className="text-blue-600"> We're nearby.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-8 text-slate-500 md:text-base">
              Visit our healthcare center or contact our team to get directions
              and assistance before your visit.
            </p>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EFF6FF] text-blue-600">
                <MapPin size={24} />
              </div>

              <div>
                <p className="font-semibold text-[#10243A]">
                  Clinic Master Healthcare
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EFF6FF] text-blue-600">
                <Clock3 size={24} />
              </div>

              <div>
                <p className="font-semibold text-[#10243A]">
                  Opening hours
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Monday – Saturday
                  <br />
                  9:00 AM – 8:00 PM
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Dhaka+Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
            >
              Open in Google Maps
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#EFF6FF] p-3"
          >
            <div className="overflow-hidden rounded-[22px]">
              <iframe
                title="Clinic Master Location"
                src="https://maps.google.com/maps?q=Dhaka%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                className="border-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-[#102F57] px-7 py-14 md:px-14 md:py-20"
        >
          {/* Decorative circles */}
          <div className="absolute right-[-100px] top-[-150px] h-[400px] w-[400px] rounded-full border border-white/10" />
          <div className="absolute right-[-50px] top-[-100px] h-[300px] w-[300px] rounded-full border border-white/10" />
          <div className="absolute bottom-[-100px] left-[-100px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[2px] text-blue-300">
                <Plus size={16} />
                Your health, our priority
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
                Ready to take the
                <br className="hidden md:block" />
                next step?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100/70 md:text-base">
                Connect with our healthcare team and take the next step toward
                the care and support you need.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/appointment"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-[#102F57] transition hover:bg-blue-50"
              >
                Book an appointment
                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}