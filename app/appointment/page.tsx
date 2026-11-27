
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Mail,
  Phone,
  ShieldCheck,
  UserRound,
  Stethoscope,
} from "lucide-react";

const doctors = [
  { name: "Dr. Nashid Martines", specialty: "Cardiology" },
  { name: "Dr. Sarah Ahmed", specialty: "Neurology" },
  { name: "Dr. Michael Hasan", specialty: "Orthopedics" },
  { name: "Dr. Emily Rahman", specialty: "Dermatology" },
  { name: "Dr. Arif Hossain", specialty: "Dental Care" },
  { name: "Dr. Nusrat Jahan", specialty: "General Medicine" },
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
];

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Dermatology",
  "Dental Care",
  "General Medicine",
  "Pediatrics",
  "Other",
];

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <main className="overflow-hidden bg-[#F5F8FC] text-[#071D49]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061D50]">
        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <CalendarDays size={16} />
              Online Appointment Booking
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Your Health,
              <br />
              <span className="text-[#00BCD4]">Our Priority.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 md:text-lg">
              Schedule your appointment with our experienced medical
              professionals. We're here to provide personalized care
              and support for your well-being.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="font-semibold text-white">Trusted Care</p>
                  <p className="text-sm text-blue-100/60">
                    Professional doctors
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                  <Clock3 size={22} />
                </div>
                <div>
                  <p className="font-semibold text-white">Easy Booking</p>
                  <p className="text-sm text-blue-100/60">
                    Flexible scheduling
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* APPOINTMENT SECTION */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_380px] xl:gap-16">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <div className="mb-8">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-[#00BCD4]">
                Book Appointment
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#061D50] md:text-4xl">
                Schedule a Visit
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Fill in your information below to request an appointment
                with one of our specialists.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-7 flex gap-4 rounded-2xl border border-green-200 bg-green-50 p-5"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-green-600"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-green-800">
                      Appointment Request Submitted!
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-green-700">
                      Your form has been completed successfully.
                      This demo does not send or store your booking.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* PERSONAL INFORMATION */}
              <div>
                <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#061D50]">
                  <UserRound className="text-[#00BCD4]" size={20} />
                  Personal Information
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 outline-none transition focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      placeholder="+880 1XXXXXXXXX"
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 outline-none transition focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="example@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 outline-none transition focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100"
                    />
                  </div>
                </div>
              </div>

              {/* APPOINTMENT DETAILS */}
              <div className="border-t border-slate-100 pt-7">
                <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#061D50]">
                  <CalendarDays className="text-[#00BCD4]" size={20} />
                  Appointment Details
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 outline-none transition focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100"
                    >
                      <option value="">Select department</option>
                      {departments.map((department) => (
                        <option key={department} value={department}>
                          {department}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Select Doctor
                    </label>
                    <select
                      name="doctor"
                      value={form.doctor}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 outline-none transition focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100"
                    >
                      <option value="">Choose a doctor</option>
                      {doctors.map((doctor) => (
                        <option key={doctor.name} value={doctor.name}>
                          {doctor.name} - {doctor.specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Preferred Date *
                    </label>
                    <input
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      type="date"
                      min={today}
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 outline-none transition focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 outline-none transition focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="border-t border-slate-100 pt-7">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us anything you'd like us to know..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 outline-none transition focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#061D50] px-6 py-4 font-semibold text-white transition hover:bg-[#00BCD4] hover:text-[#061D50]"
              >
                Confirm Appointment Request
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-6 text-slate-400">
                By submitting this form, you agree to be contacted
                regarding your appointment request.
              </p>
            </form>
          </motion.div>

          {/* RIGHT SIDEBAR */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* CARD */}
            <div className="overflow-hidden rounded-3xl bg-[#061D50] p-7 text-white md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00BCD4] text-[#061D50]">
                <Stethoscope size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Quality Healthcare
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100/70">
                Experience exceptional healthcare with our dedicated
                medical professionals and patient-first approach.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Experienced specialists",
                  "Modern medical facilities",
                  "Personalized treatment",
                  "Patient-focused care",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#00BCD4]"
                    />
                    <span className="text-sm text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT CARD */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-8">
              <h3 className="text-xl font-bold text-[#061D50]">
                Need Assistance?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Contact our team if you need help scheduling your
                appointment.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+8801234567890"
                  className="flex items-center gap-4 rounded-2xl bg-[#F5F8FC] p-4 transition hover:bg-cyan-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#00BCD4] shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Call Us</p>
                    <p className="mt-1 font-semibold text-[#061D50]">
                      +880 1234-567890
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@clinicmaster.com"
                  className="flex items-center gap-4 rounded-2xl bg-[#F5F8FC] p-4 transition hover:bg-cyan-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#00BCD4] shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email Us</p>
                    <p className="mt-1 break-all font-semibold text-[#061D50]">
                      info@clinicmaster.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* HOURS */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-[#00BCD4]">
                  <Clock3 size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#061D50]">
                  Visiting Hours
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  ["Saturday - Thursday", "09:00 AM - 05:00 PM"],
                  ["Friday", "Closed"],
                ].map(([day, time]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-slate-500">{day}</span>
                    <span className="text-right text-sm font-semibold text-[#061D50]">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TRUST */}
            <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-6">
              <div className="flex gap-4">
                <ShieldCheck
                  size={30}
                  className="shrink-0 text-[#00BCD4]"
                />
                <div>
                  <h4 className="font-bold text-[#061D50]">
                    Your Privacy Matters
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    We are committed to respecting your privacy and
                    handling your information responsibly.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10">
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-[#EAF8FB] p-8 md:flex-row md:items-center md:p-12">
            <div>
              <p className="font-semibold text-[#00BCD4]">
                CLINIC MASTER
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#061D50] md:text-3xl">
                Taking care of your health starts here.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Schedule your visit and take the next step toward better health.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#061D50] px-7 py-4 font-semibold text-white transition hover:bg-[#00BCD4] hover:text-[#061D50]"
            >
              Contact Us
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
