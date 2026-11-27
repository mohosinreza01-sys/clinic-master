
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Heart,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
  Activity,
  Clock3,
  CheckCircle2,
  Target,
  Eye,
} from "lucide-react";

const stats = [
  { number: "15+", label: "Years of Experience", icon: Clock3 },
  { number: "25+", label: "Medical Specialists", icon: Stethoscope },
  { number: "10k+", label: "Happy Patients", icon: Users },
  { number: "98%", label: "Patient Satisfaction", icon: HeartPulse },
];

const values = [
  {
    icon: Heart,
    title: "Patient First",
    desc: "We put our patients' health, comfort and well-being at the center of every decision we make.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Integrity",
    desc: "We build meaningful relationships through honesty, transparency and responsible medical care.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    desc: "We continuously improve our standards, knowledge and services to deliver quality healthcare.",
  },
  {
    icon: Users,
    title: "Compassionate Care",
    desc: "Every patient deserves respect, empathy and personalized attention throughout their journey.",
  },
];

const milestones = [
  {
    year: "2010",
    title: "Our Beginning",
    desc: "Clinic Master began its journey with a vision to make quality healthcare accessible and patient-centered.",
  },
  {
    year: "2015",
    title: "Growing Our Team",
    desc: "We expanded our medical team and introduced new specialties to serve more patients.",
  },
  {
    year: "2020",
    title: "Modern Healthcare",
    desc: "We strengthened our facilities and embraced modern healthcare practices and patient services.",
  },
  {
    year: "2025",
    title: "A New Chapter",
    desc: "We continue to grow with a commitment to better healthcare, innovation and community wellness.",
  },
];

const team = [
  {
    name: "Dr. Nashid Martines",
    role: "Chief Medical Officer",
    specialty: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Dr. Sarah Ahmed",
    role: "Senior Consultant",
    specialty: "Neurology",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Dr. Michael Hasan",
    role: "Senior Consultant",
    specialty: "Orthopedics",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#061D50]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061D50]">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <HeartPulse size={16} />
              About Clinic Master
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Healthcare with
              <span className="block text-[#00BCD4]">
                Heart & Purpose.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100/75 md:text-lg">
              At Clinic Master, we believe healthcare is more than
              treatment. It is about trust, compassion, innovation
              and helping people live healthier, happier lives.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/appointment"
                className="group flex items-center gap-3 rounded-xl bg-[#00BCD4] px-6 py-4 font-semibold text-[#061D50] transition hover:bg-white"
              >
                Book Appointment
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/services"
                className="rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px]">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=90"
                alt="Healthcare professionals"
                className="h-[380px] w-full object-cover md:h-[520px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061D50]/70 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-5 shadow-xl md:-left-8 md:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-[#00BCD4]">
                  <HeartPulse size={28} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#061D50]">
                    15+ Years
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Healthcare Excellence
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-3xl border border-cyan-400/30 md:-right-5 md:-top-5 md:h-32 md:w-32" />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto -mt-1 max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white py-10 md:grid-cols-4 md:gap-8 md:py-14">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-[#00BCD4]">
                <stat.icon size={26} />
              </div>

              <h3 className="mt-4 text-3xl font-bold text-[#061D50] md:text-4xl">
                {stat.number}
              </h3>

              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-[#F5F8FC]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-20 md:px-10 md:py-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90"
              alt="Medical team caring for a patient"
              className="h-[400px] w-full rounded-3xl object-cover md:h-[500px]"
            />

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#00BCD4] p-6 text-[#061D50] shadow-xl md:-right-7 md:p-8">
              <p className="text-3xl font-bold">Care</p>
              <p className="mt-1 text-sm font-medium">Beyond Treatment</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#00BCD4]">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#061D50] md:text-5xl">
              A Better Approach
              <br />
              to Healthcare
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Clinic Master is a modern healthcare institution
              dedicated to delivering comprehensive medical services
              with compassion, expertise and integrity.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Our team of experienced professionals works together
              to ensure that every patient receives thoughtful,
              personalized care in a welcoming and comfortable
              environment. We combine medical expertise with
              a human-centered approach to create a better
              healthcare experience.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Experienced and dedicated medical professionals",
                "Patient-centered healthcare approach",
                "Modern healthcare facilities",
                "Commitment to quality and safety",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#00BCD4]"
                  />
                  <span className="text-sm font-medium text-[#061D50]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
        <div className="mb-14 text-center">
          <span className="text-sm font-bold uppercase tracking-[3px] text-[#00BCD4]">
            Our Purpose
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#061D50] md:text-5xl">
            Mission & Vision
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
            Our purpose is to improve lives through exceptional care
            and a commitment to a healthier future.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#061D50] p-8 text-white md:p-10"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00BCD4] text-[#061D50]">
              <Target size={30} />
            </div>

            <h3 className="mt-7 text-2xl font-bold md:text-3xl">
              Our Mission
            </h3>

            <p className="mt-5 text-base leading-8 text-blue-100/75">
              To provide accessible, compassionate and high-quality
              healthcare services through medical excellence,
              innovative practices and a patient-first philosophy.
              We aim to empower individuals and families to take
              control of their health and well-being.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl border border-slate-200 bg-[#F5F8FC] p-8 md:p-10"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-[#00BCD4]">
              <Eye size={30} />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-[#061D50] md:text-3xl">
              Our Vision
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              To become a trusted healthcare destination recognized
              for excellence, innovation and compassionate care,
              where every individual has the opportunity to
              experience a healthier and more fulfilling life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#F5F8FC]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
          <div className="mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#00BCD4]">
              What Matters to Us
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#061D50] md:text-5xl">
              Our Core Values
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
              The principles that guide every interaction, every
              decision and every aspect of our healthcare services.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-[#00BCD4]">
                  <value.icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#061D50]">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
        <div className="mb-14 text-center">
          <span className="text-sm font-bold uppercase tracking-[3px] text-[#00BCD4]">
            Our Journey
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#061D50] md:text-5xl">
            Growing Through the Years
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
            Every milestone represents our commitment to better
            healthcare and a stronger community.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-cyan-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative grid gap-6 pl-14 md:grid-cols-2 md:gap-14 md:pl-0 ${
                  index % 2 === 0
                    ? ""
                    : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className="absolute left-[11px] top-1 h-5 w-5 rounded-full border-4 border-white bg-[#00BCD4] shadow md:left-1/2 md:-translate-x-1/2" />

                <div
                  className={`${
                    index % 2 === 0
                      ? "md:text-right"
                      : "md:text-left"
                  }`}
                >
                  <span className="inline-flex rounded-xl bg-cyan-50 px-4 py-2 font-bold text-[#00BCD4]">
                    {milestone.year}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-[#061D50]">
                    {milestone.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {milestone.desc}
                  </p>
                </div>

                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#F5F8FC]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[3px] text-[#00BCD4]">
                Our Medical Team
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[#061D50] md:text-5xl">
                Meet Our Experts
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
                Our experienced medical professionals are dedicated
                to providing trusted and compassionate care.
              </p>
            </div>

            <a
              href="/team/doctors"
              className="group inline-flex items-center gap-3 font-semibold text-[#061D50] transition hover:text-[#00BCD4]"
            >
              View All Doctors
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-shadow hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-[350px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-2 text-sm font-semibold text-[#00BCD4] backdrop-blur-sm">
                    {doctor.specialty}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#061D50]">
                    {doctor.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {doctor.role}
                  </p>

                  <a
                    href="/appointment"
                    className="group mt-6 flex items-center gap-2 text-sm font-semibold text-[#061D50] transition hover:text-[#00BCD4]"
                  >
                    Book Appointment
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#061D50]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-8 md:flex-row md:items-center"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[#00BCD4]">
                <Activity size={20} />
                <span className="font-semibold">Clinic Master</span>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                Your Health Deserves
                <br />
                the Best Care.
              </h2>

              <p className="mt-5 text-base leading-8 text-blue-100/70">
                Take the first step toward a healthier life.
                Our team is here to support you every step of the way.
              </p>
            </div>

            <a
              href="/appointment"
              className="group flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#00BCD4] px-7 py-4 font-semibold text-[#061D50] transition hover:bg-white"
            >
              Book Your Visit
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
