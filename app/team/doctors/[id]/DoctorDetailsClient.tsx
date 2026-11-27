
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock,
  GraduationCap,
  MapPin,
  Star,
  Stethoscope,
  Award,
  HeartPulse,
  CheckCircle2,
  Phone,
  Mail,
  BriefcaseMedical,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Nashid Martines",
    specialty: "Cardiac Surgery",
    degree: "MBBS, FCPS, MD",
    experience: "15+ Years",
    rating: "4.9",
    reviews: "128",
    location: "Dhaka, Bangladesh",
    address: "Central Medical Hospital, Dhaka",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
    availability: "Available Today",
    about:
      "Dr. Nashid Martines is an experienced cardiac specialist dedicated to providing comprehensive cardiovascular care. He focuses on patient-centered treatment and modern medical techniques.",
    education: [
      "MBBS - Dhaka Medical College",
      "FCPS - Cardiovascular Surgery",
      "MD - Cardiology",
    ],
    expertise: [
      "Heart Disease",
      "Cardiac Surgery",
      "Heart Failure",
      "Cardiovascular Consultation",
    ],
    schedule: [
      { day: "Monday", time: "09:00 AM - 01:00 PM" },
      { day: "Tuesday", time: "10:00 AM - 02:00 PM" },
      { day: "Wednesday", time: "09:00 AM - 01:00 PM" },
      { day: "Thursday", time: "10:00 AM - 02:00 PM" },
      { day: "Friday", time: "Unavailable" },
      { day: "Saturday", time: "09:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Unavailable" },
    ],
  },
  {
    id: 2,
    name: "Dr. Sarah Ahmed",
    specialty: "Neurology",
    degree: "MBBS, FCPS, MD",
    experience: "12+ Years",
    rating: "4.8",
    reviews: "96",
    location: "Dhaka, Bangladesh",
    address: "Central Medical Hospital, Dhaka",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
    availability: "Available Today",
    about:
      "Dr. Sarah Ahmed specializes in neurological care and helps patients with a wide range of neurological conditions through evidence-based treatment and compassionate care.",
    education: [
      "MBBS - Dhaka Medical College",
      "FCPS - Neurology",
      "MD - Neurology",
    ],
    expertise: [
      "Neurological Disorders",
      "Migraine",
      "Stroke Management",
      "Nerve Disorders",
    ],
    schedule: [
      { day: "Monday", time: "10:00 AM - 02:00 PM" },
      { day: "Tuesday", time: "09:00 AM - 01:00 PM" },
      { day: "Wednesday", time: "10:00 AM - 02:00 PM" },
      { day: "Thursday", time: "09:00 AM - 01:00 PM" },
      { day: "Friday", time: "Unavailable" },
      { day: "Saturday", time: "10:00 AM - 01:00 PM" },
      { day: "Sunday", time: "Unavailable" },
    ],
  },
  {
    id: 3,
    name: "Dr. Michael Hasan",
    specialty: "Orthopedics",
    degree: "MBBS, MS, D-Ortho",
    experience: "10+ Years",
    rating: "4.9",
    reviews: "115",
    location: "Dhaka, Bangladesh",
    address: "Central Medical Hospital, Dhaka",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85",
    availability: "Available Today",
    about:
      "Dr. Michael Hasan provides orthopedic consultation and treatment focusing on mobility, joint health, musculoskeletal disorders and patient recovery.",
    education: [
      "MBBS - Rajshahi Medical College",
      "MS - Orthopedics",
      "Diploma - Orthopedic Surgery",
    ],
    expertise: [
      "Joint Pain",
      "Bone Fractures",
      "Sports Injuries",
      "Orthopedic Surgery",
    ],
    schedule: [
      { day: "Monday", time: "09:00 AM - 12:00 PM" },
      { day: "Tuesday", time: "10:00 AM - 02:00 PM" },
      { day: "Wednesday", time: "09:00 AM - 12:00 PM" },
      { day: "Thursday", time: "10:00 AM - 02:00 PM" },
      { day: "Friday", time: "Unavailable" },
      { day: "Saturday", time: "09:00 AM - 01:00 PM" },
      { day: "Sunday", time: "Unavailable" },
    ],
  },
  {
    id: 4,
    name: "Dr. Emily Rahman",
    specialty: "Pediatrics",
    degree: "MBBS, FCPS",
    experience: "8+ Years",
    rating: "4.7",
    reviews: "82",
    location: "Dhaka, Bangladesh",
    address: "Central Medical Hospital, Dhaka",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85",
    availability: "Available Today",
    about:
      "Dr. Emily Rahman is committed to providing quality healthcare for children, offering preventive care, developmental guidance and pediatric consultation.",
    education: [
      "MBBS - Chittagong Medical College",
      "FCPS - Pediatrics",
      "Child Health Training",
    ],
    expertise: [
      "Child Health",
      "Vaccination",
      "Child Development",
      "Pediatric Consultation",
    ],
    schedule: [
      { day: "Monday", time: "10:00 AM - 01:00 PM" },
      { day: "Tuesday", time: "09:00 AM - 12:00 PM" },
      { day: "Wednesday", time: "10:00 AM - 01:00 PM" },
      { day: "Thursday", time: "09:00 AM - 12:00 PM" },
      { day: "Friday", time: "Unavailable" },
      { day: "Saturday", time: "10:00 AM - 01:00 PM" },
      { day: "Sunday", time: "Unavailable" },
    ],
  },
  {
    id: 5,
    name: "Dr. James Wilson",
    specialty: "Dermatology",
    degree: "MBBS, DDV, FCPS",
    experience: "11+ Years",
    rating: "4.8",
    reviews: "104",
    location: "Dhaka, Bangladesh",
    address: "Central Medical Hospital, Dhaka",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=85",
    availability: "Available Today",
    about:
      "Dr. James Wilson offers dermatology consultation for skin, hair and nail conditions. He aims to provide personalized treatment and professional skin care.",
    education: [
      "MBBS - Sylhet Medical College",
      "DDV - Dermatology",
      "FCPS - Dermatology",
    ],
    expertise: [
      "Skin Conditions",
      "Acne Treatment",
      "Hair Disorders",
      "Skin Consultation",
    ],
    schedule: [
      { day: "Monday", time: "09:00 AM - 02:00 PM" },
      { day: "Tuesday", time: "10:00 AM - 01:00 PM" },
      { day: "Wednesday", time: "09:00 AM - 02:00 PM" },
      { day: "Thursday", time: "10:00 AM - 01:00 PM" },
      { day: "Friday", time: "Unavailable" },
      { day: "Saturday", time: "09:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Unavailable" },
    ],
  },
  {
    id: 6,
    name: "Dr. Olivia Khan",
    specialty: "Gynecology",
    degree: "MBBS, FCPS, MS",
    experience: "14+ Years",
    rating: "4.9",
    reviews: "135",
    location: "Dhaka, Bangladesh",
    address: "Central Medical Hospital, Dhaka",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=85",
    availability: "Available Today",
    about:
      "Dr. Olivia Khan provides women's healthcare services with a focus on preventive care, reproductive health and personalized medical support.",
    education: [
      "MBBS - Dhaka Medical College",
      "FCPS - Gynecology",
      "MS - Obstetrics & Gynecology",
    ],
    expertise: [
      "Women's Health",
      "Pregnancy Care",
      "Gynecological Consultation",
      "Reproductive Health",
    ],
    schedule: [
      { day: "Monday", time: "10:00 AM - 02:00 PM" },
      { day: "Tuesday", time: "09:00 AM - 01:00 PM" },
      { day: "Wednesday", time: "10:00 AM - 02:00 PM" },
      { day: "Thursday", time: "09:00 AM - 01:00 PM" },
      { day: "Friday", time: "Unavailable" },
      { day: "Saturday", time: "10:00 AM - 01:00 PM" },
      { day: "Sunday", time: "Unavailable" },
    ],
  },
  {
    id: 7,
    name: "Dr. David Karim",
    specialty: "Medicine",
    degree: "MBBS, FCPS, MRCP",
    experience: "16+ Years",
    rating: "4.8",
    reviews: "121",
    location: "Dhaka, Bangladesh",
    address: "Central Medical Hospital, Dhaka",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=85",
    availability: "Available Today",
    about:
      "Dr. David Karim is an internal medicine specialist with experience in managing common and complex medical conditions through comprehensive patient care.",
    education: [
      "MBBS - Mymensingh Medical College",
      "FCPS - Medicine",
      "MRCP - Internal Medicine",
    ],
    expertise: [
      "Internal Medicine",
      "Diabetes",
      "Hypertension",
      "General Consultation",
    ],
    schedule: [
      { day: "Monday", time: "09:00 AM - 01:00 PM" },
      { day: "Tuesday", time: "10:00 AM - 02:00 PM" },
      { day: "Wednesday", time: "09:00 AM - 01:00 PM" },
      { day: "Thursday", time: "10:00 AM - 02:00 PM" },
      { day: "Friday", time: "Unavailable" },
      { day: "Saturday", time: "09:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Unavailable" },
    ],
  },
  {
    id: 8,
    name: "Dr. Sophia Islam",
    specialty: "Ophthalmology",
    degree: "MBBS, DO, FCPS",
    experience: "9+ Years",
    rating: "4.7",
    reviews: "89",
    location: "Dhaka, Bangladesh",
    address: "Central Medical Hospital, Dhaka",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66b?auto=format&fit=crop&w=900&q=85",
    availability: "Available Today",
    about:
      "Dr. Sophia Islam specializes in eye care and vision health, offering comprehensive consultation, eye examinations and personalized treatment plans.",
    education: [
      "MBBS - Barisal Medical College",
      "DO - Ophthalmology",
      "FCPS - Eye Diseases",
    ],
    expertise: [
      "Eye Examination",
      "Vision Problems",
      "Eye Diseases",
      "Eye Care",
    ],
    schedule: [
      { day: "Monday", time: "10:00 AM - 01:00 PM" },
      { day: "Tuesday", time: "09:00 AM - 12:00 PM" },
      { day: "Wednesday", time: "10:00 AM - 01:00 PM" },
      { day: "Thursday", time: "09:00 AM - 12:00 PM" },
      { day: "Friday", time: "Unavailable" },
      { day: "Saturday", time: "10:00 AM - 01:00 PM" },
      { day: "Sunday", time: "Unavailable" },
    ],
  },
];

export default function DoctorDetailsClient({ id }: { id: string }) {
  const doctor = doctors.find((item) => item.id === Number(id));

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7faf9] px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">404</h1>
          <p className="mt-4 text-gray-500">
            Doctor profile not found.
          </p>

          <Link
            href="/team/doctors"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0c8b73] px-6 py-3 text-white"
          >
            <ArrowLeft size={18} />
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#f7faf9] min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 pt-8">
        <Link
          href="/team/doctors"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#0c8b73] transition"
        >
          <ArrowLeft size={17} />
          Back to Doctors
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[28px] bg-white border border-gray-100 shadow-sm"
        >
          <div className="grid lg:grid-cols-[380px_1fr]">
            {/* Doctor image */}
            <div className="relative min-h-[360px] lg:min-h-[500px] bg-[#e3f1ed]">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute left-5 top-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#0c8b73] shadow-sm">
                  <CheckCircle2 size={15} />
                  {doctor.availability}
                </span>
              </div>
            </div>

            {/* Doctor info */}
            <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0c8b73]">
                {doctor.specialty}
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {doctor.name}
              </h1>

              <p className="mt-4 text-gray-500 text-lg">
                {doctor.degree}
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-xl bg-[#f7faf9] px-4 py-3">
                  <Star
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                  <span className="font-semibold text-gray-900">
                    {doctor.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({doctor.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-[#f7faf9] px-4 py-3">
                  <BriefcaseMedical
                    size={18}
                    className="text-[#0c8b73]"
                  />
                  <span className="font-semibold text-gray-900">
                    {doctor.experience}
                  </span>
                  <span className="text-sm text-gray-500">
                    Experience
                  </span>
                </div>
              </div>

              <div className="mt-7 space-y-3 text-gray-500">
                <div className="flex items-center gap-3">
                  <MapPin size={19} className="text-[#0c8b73]" />
                  <span>{doctor.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Stethoscope size={19} className="text-[#0c8b73]" />
                  <span>{doctor.specialty}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0c8b73] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#08745f]"
                >
                  Book Appointment
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-4 text-sm font-semibold text-gray-700 transition hover:border-[#0c8b73] hover:text-[#0c8b73]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-5 mt-10">
        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
          {/* Left */}
          <div className="space-y-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[24px] bg-white p-7 sm:p-9 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-xl bg-[#e8f5f1] flex items-center justify-center">
                  <HeartPulse className="text-[#0c8b73]" size={22} />
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  About Doctor
                </h2>
              </div>

              <p className="text-gray-600 leading-8">
                {doctor.about}
              </p>
            </motion.div>

            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[24px] bg-white p-7 sm:p-9 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="h-11 w-11 rounded-xl bg-[#e8f5f1] flex items-center justify-center">
                  <Award className="text-[#0c8b73]" size={22} />
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  Areas of Expertise
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {doctor.expertise.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl bg-[#f7faf9] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="text-[#0c8b73] shrink-0"
                    />
                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[24px] bg-white p-7 sm:p-9 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="h-11 w-11 rounded-xl bg-[#e8f5f1] flex items-center justify-center">
                  <GraduationCap
                    className="text-[#0c8b73]"
                    size={22}
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  Education & Qualifications
                </h2>
              </div>

              <div className="space-y-4">
                {doctor.education.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1 h-3 w-3 rounded-full bg-[#0c8b73] shrink-0" />

                    <p className="text-gray-600 leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[24px] bg-white p-7 sm:p-9 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="h-11 w-11 rounded-xl bg-[#e8f5f1] flex items-center justify-center">
                  <CalendarDays
                    className="text-[#0c8b73]"
                    size={22}
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  Weekly Schedule
                </h2>
              </div>

              <div className="space-y-3">
                {doctor.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl bg-[#f7faf9] px-5 py-4"
                  >
                    <span className="font-semibold text-gray-800">
                      {item.day}
                    </span>

                    <span
                      className={`text-sm ${
                        item.time === "Unavailable"
                          ? "text-red-500"
                          : "text-[#0c8b73]"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[24px] bg-white p-7 border border-gray-100 shadow-sm lg:sticky lg:top-8"
            >
              <h3 className="text-xl font-bold text-gray-900">
                Book an Appointment
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Schedule your consultation with our specialist.
                Our team will help you choose the right time.
              </p>

              <Link
                href="/appointment"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0c8b73] px-5 py-4 font-semibold text-white transition hover:bg-[#08745f]"
              >
                Book Appointment
                <ArrowUpRight size={18} />
              </Link>

              <div className="mt-7 space-y-5 border-t border-gray-100 pt-6">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#e8f5f1] flex items-center justify-center shrink-0">
                    <Clock size={19} className="text-[#0c8b73]" />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Consultation Hours
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Check the weekly schedule
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#e8f5f1] flex items-center justify-center shrink-0">
                    <MapPin size={19} className="text-[#0c8b73]" />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Hospital Location
                    </p>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {doctor.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#e8f5f1] flex items-center justify-center shrink-0">
                    <Phone size={19} className="text-[#0c8b73]" />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Call for Support
                    </p>
                    <Link
                      href="/contact"
                      className="mt-1 text-sm text-gray-500 hover:text-[#0c8b73]"
                    >
                      Contact Hospital
                    </Link>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#e8f5f1] flex items-center justify-center shrink-0">
                    <Mail size={19} className="text-[#0c8b73]" />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Patient Support
                    </p>
                    <Link
                      href="/contact"
                      className="mt-1 text-sm text-gray-500 hover:text-[#0c8b73]"
                    >
                      Send an Inquiry
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-5 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[28px] bg-[#0c8b73] p-8 sm:p-12 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Ready to schedule your visit?
            </h2>

            <p className="mt-3 text-white/80 leading-7">
              Book your consultation and receive professional care
              from our medical team.
            </p>
          </div>

          <Link
            href="/appointment"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-[#0c8b73] hover:bg-gray-100 transition"
          >
            Book Appointment
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
