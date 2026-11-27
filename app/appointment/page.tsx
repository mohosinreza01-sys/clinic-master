
"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  User,
  Mail,
  Phone,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
  "Dental Care",
  "Eye Care",
  "Medicine",
  "Gynecology",
  "Surgery",
];

const doctors = [
  "Dr. Nashid Martines",
  "Dr. Sarah Ahmed",
  "Dr. John Smith",
  "Dr. Michael Brown",
  "Dr. Ayesha Rahman",
];

export default function AppointmentPage() {
  const [today, setToday] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const localDate = new Date();
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, "0");
    const day = String(localDate.getDate()).padStart(2, "0");

    setToday(`${year}-${month}-${day}`);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    });

    setSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#063b38]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#063b38] via-[#073f3b] to-[#0b6257]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-emerald-100">
              <CalendarDays size={16} />
              <span>Online Appointment Booking</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Book Your
              <span className="block text-emerald-300">
                Appointment
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Schedule your consultation with our experienced doctors.
              Your health deserves the best care, and we are here to
              help you every step of the way.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-300" size={18} />
                <span>Expert Doctors</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-300" size={18} />
                <span>Easy Booking</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-300" size={18} />
                <span>Quality Healthcare</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_360px]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold md:text-3xl">
                Appointment Information
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill out the form below to request an appointment.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle2
                      size={32}
                      className="text-emerald-600"
                    />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-emerald-900">
                    Appointment Request Submitted!
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-emerald-800">
                    Your appointment request has been prepared.
                    Connect this form to your backend to save and
                    confirm appointments.
                  </p>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#063b38] px-6 py-3 font-semibold text-white transition hover:bg-[#0b6257]"
                  >
                    Book Another Appointment
                    <ArrowRight size={18} />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  {/* Personal Information */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold">
                      Personal Information
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Full Name *
                        </label>

                        <div className="relative">
                          <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Email Address *
                        </label>

                        <div className="relative">
                          <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="example@email.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Phone Number *
                        </label>

                        <div className="relative">
                          <Phone
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+880 1XXXXXXXXX"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="mb-4 text-lg font-semibold">
                      Medical Information
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="department"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Department *
                        </label>

                        <div className="relative">
                          <Building2
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                          >
                            <option value="">
                              Select Department
                            </option>

                            {departments.map((department) => (
                              <option
                                key={department}
                                value={department}
                              >
                                {department}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="doctor"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Preferred Doctor *
                        </label>

                        <div className="relative">
                          <Stethoscope
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <select
                            id="doctor"
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                            required
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                          >
                            <option value="">
                              Select Doctor
                            </option>

                            {doctors.map((doctor) => (
                              <option
                                key={doctor}
                                value={doctor}
                              >
                                {doctor}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="date"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Appointment Date *
                        </label>

                        <div className="relative">
                          <CalendarDays
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            id="date"
                            name="date"
                            type="date"
                            min={today || undefined}
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="time"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Appointment Time *
                        </label>

                        <div className="relative">
                          <Clock
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                          >
                            <option value="">
                              Select Time
                            </option>

                            <option value="09:00 AM">
                              09:00 AM
                            </option>

                            <option value="10:00 AM">
                              10:00 AM
                            </option>

                            <option value="11:00 AM">
                              11:00 AM
                            </option>

                            <option value="12:00 PM">
                              12:00 PM
                            </option>

                            <option value="02:00 PM">
                              02:00 PM
                            </option>

                            <option value="03:00 PM">
                              03:00 PM
                            </option>

                            <option value="04:00 PM">
                              04:00 PM
                            </option>

                            <option value="05:00 PM">
                              05:00 PM
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="border-t border-slate-100 pt-6">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Message / Symptoms
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your concern or symptoms..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#063b38] px-6 py-4 font-semibold text-white transition duration-300 hover:bg-[#0b6257]"
                  >
                    Book Appointment

                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-xs leading-6 text-slate-500">
                    By submitting this form, you request an
                    appointment. Actual confirmation requires
                    hospital verification.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Information */}
            <div className="rounded-3xl bg-[#063b38] p-7 text-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <CalendarDays
                  size={26}
                  className="text-emerald-300"
                />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Need an Appointment?
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Our team is ready to assist you. Choose your
                preferred doctor and schedule a visit.
              </p>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                <div className="flex gap-3">
                  <Clock
                    size={20}
                    className="mt-1 shrink-0 text-emerald-300"
                  />

                  <div>
                    <p className="font-medium">
                      Working Hours
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      Saturday - Thursday
                    </p>

                    <p className="text-sm text-white/60">
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone
                    size={20}
                    className="mt-1 shrink-0 text-emerald-300"
                  />

                  <div>
                    <p className="font-medium">
                      Contact Support
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      +880 1234-567890
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-bold">
                How It Works
              </h3>

              <div className="mt-6 space-y-6">
                {[
                  {
                    number: "01",
                    title: "Fill the Form",
                    text: "Enter your personal and medical information.",
                  },
                  {
                    number: "02",
                    title: "Choose a Doctor",
                    text: "Select your department and preferred doctor.",
                  },
                  {
                    number: "03",
                    title: "Get Confirmation",
                    text: "Our team will contact you for confirmation.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-bold text-emerald-700">
                      {step.number}
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {step.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}
