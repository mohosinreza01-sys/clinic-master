
"use client";

import { use } from "react";
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
    specialty: "Cardiology",
    degree: "MBBS, MD (Cardiology)",
    experience: "12 Years",
    rating: 4.9,
    reviews: 124,
    location: "Dhaka Medical Center",
    address: "123 Medical Avenue, Dhaka",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=900",
    available: "Available Today",
    about:
      "Dr. Nashid Martines is a dedicated cardiologist focused on cardiovascular health, patient education, and personalized treatment approaches. He is committed to helping patients understand their health and make informed decisions about their care.",
    education: [
      "MBBS – Medical College",
      "MD in Cardiology – National Institute",
      "Advanced Cardiovascular Training",
    ],
    expertise: [
      "Cardiovascular Consultation",
      "Heart Health Assessment",
      "Blood Pressure Management",
      "Preventive Cardiology",
      "Cardiac Rehabilitation Guidance",
    ],
    schedule: [
      { day: "Monday", time: "09:00 AM – 02:00 PM" },
      { day: "Tuesday", time: "09:00 AM – 02:00 PM" },
      { day: "Wednesday", time: "10:00 AM – 04:00 PM" },
      { day: "Thursday", time: "09:00 AM – 02:00 PM" },
      { day: "Friday", time: "Closed" },
      { day: "Saturday", time: "10:00 AM – 04:00 PM" },
      { day: "Sunday", time: "09:00 AM – 01:00 PM" },
    ],
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialty: "Neurology",
    degree: "MBBS, FCPS (Neurology)",
    experience: "10 Years",
    rating: 4.8,
    reviews: 98,
    location: "City Health Hospital",
    address: "45 Wellness Road, Dhaka",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=900",
    available: "Available Today",
    about:
      "Dr. Sarah Johnson specializes in neurological assessment and patient-centered care. She focuses on helping individuals manage neurological conditions through comprehensive evaluation and appropriate treatment planning.",
    education: [
      "MBBS – Medical College",
      "FCPS in Neurology",
      "Neurological Clinical Training",
    ],
    expertise: [
      "Neurological Assessment",
      "Headache Consultation",
      "Neurological Rehabilitation",
      "Nerve Health",
      "Preventive Neurology",
    ],
    schedule: [
      { day: "Monday", time: "10:00 AM – 03:00 PM" },
      { day: "Tuesday", time: "10:00 AM – 03:00 PM" },
      { day: "Wednesday", time: "09:00 AM – 01:00 PM" },
      { day: "Thursday", time: "10:00 AM – 03:00 PM" },
      { day: "Friday", time: "Closed" },
      { day: "Saturday", time: "10:00 AM – 02:00 PM" },
      { day: "Sunday", time: "09:00 AM – 01:00 PM" },
    ],
  },
  {
    id: 3,
    name: "Dr. Michael Roberts",
    specialty: "Orthopedics",
    degree: "MBBS, MS (Orthopedics)",
    experience: "15 Years",
    rating: 4.9,
    reviews: 156,
    location: "Central Medical Center",
    address: "78 Health Street, Dhaka",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900",
    available: "Available Tomorrow",
    about:
      "Dr. Michael Roberts provides orthopedic consultation and musculoskeletal care. His approach emphasizes careful evaluation, patient education, and individualized recovery planning.",
    education: [
      "MBBS – Medical College",
      "MS in Orthopedics",
      "Advanced Orthopedic Training",
    ],
    expertise: [
      "Orthopedic Consultation",
      "Joint Health",
      "Musculoskeletal Assessment",
      "Mobility Rehabilitation",
      "Bone Health",
    ],
    schedule: [
      { day: "Monday", time: "09:00 AM – 03:00 PM" },
      { day: "Tuesday", time: "09:00 AM – 03:00 PM" },
      { day: "Wednesday", time: "10:00 AM – 04:00 PM" },
      { day: "Thursday", time: "09:00 AM – 03:00 PM" },
      { day: "Friday", time: "Closed" },
      { day: "Saturday", time: "10:00 AM – 02:00 PM" },
      { day: "Sunday", time: "09:00 AM – 01:00 PM" },
    ],
  },
  {
    id: 4,
    name: "Dr. Emily Carter",
    specialty: "Dental Care",
    degree: "BDS, FCPS (Dental)",
    experience: "8 Years",
    rating: 4.7,
    reviews: 87,
    location: "Smile Dental Clinic",
    address: "90 Smile Avenue, Dhaka",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=900",
    available: "Available Today",
    about:
      "Dr. Emily Carter is committed to providing comprehensive dental care and supporting patients in maintaining healthy smiles. She combines preventive dental education with personalized dental consultation.",
    education: [
      "BDS – Dental College",
      "FCPS in Dentistry",
      "Advanced Dental Training",
    ],
    expertise: [
      "Dental Consultation",
      "Preventive Dentistry",
      "Oral Hygiene",
      "Dental Restoration",
      "Smile Care",
    ],
    schedule: [
      { day: "Monday", time: "10:00 AM – 04:00 PM" },
      { day: "Tuesday", time: "10:00 AM – 04:00 PM" },
      { day: "Wednesday", time: "09:00 AM – 01:00 PM" },
      { day: "Thursday", time: "10:00 AM – 04:00 PM" },
      { day: "Friday", time: "Closed" },
      { day: "Saturday", time: "10:00 AM – 02:00 PM" },
      { day: "Sunday", time: "09:00 AM – 01:00 PM" },
    ],
  },
  {
    id: 5,
    name: "Dr. David Wilson",
    specialty: "Dermatology",
    degree: "MBBS, DDV",
    experience: "9 Years",
    rating: 4.8,
    reviews: 110,
    location: "LifeCare Hospital",
    address: "120 Care Road, Dhaka",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=900",
    available: "Available Tomorrow",
    about:
      "Dr. David Wilson focuses on dermatological consultation and skin health. He provides personalized assessment and patient education for a wide range of dermatological concerns.",
    education: [
      "MBBS – Medical College",
      "Diploma in Dermatology",
      "Dermatological Clinical Training",
    ],
    expertise: [
      "Skin Consultation",
      "Skin Health",
      "Dermatological Assessment",
      "Preventive Skin Care",
      "Skin Condition Management",
    ],
    schedule: [
      { day: "Monday", time: "09:00 AM – 02:00 PM" },
      { day: "Tuesday", time: "09:00 AM – 02:00 PM" },
      { day: "Wednesday", time: "10:00 AM – 04:00 PM" },
      { day: "Thursday", time: "09:00 AM – 02:00 PM" },
      { day: "Friday", time: "Closed" },
      { day: "Saturday", time: "10:00 AM – 04:00 PM" },
      { day: "Sunday", time: "09:00 AM – 01:00 PM" },
    ],
  },
  {
    id: 6,
    name: "Dr. Olivia Smith",
    specialty: "Pediatrics",
    degree: "MBBS, MD (Pediatrics)",
    experience: "11 Years",
    rating: 4.9,
    reviews: 143,
    location: "Children's Medical Center",
    address: "67 Children's Road, Dhaka",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=900",
    available: "Available Today",
    about:
      "Dr. Olivia Smith provides pediatric consultation with a focus on child development, preventive care, and supporting families through informed healthcare decisions.",
    education: [
      "MBBS – Medical College",
      "MD in Pediatrics",
      "Pediatric Clinical Training",
    ],
    expertise: [
      "Pediatric Consultation",
      "Child Development",
      "Preventive Pediatric Care",
      "Growth Assessment",
      "Family Health Education",
    ],
    schedule: [
      { day: "Monday", time: "09:00 AM – 02:00 PM" },
      { day: "Tuesday", time: "09:00 AM – 02:00 PM" },
      { day: "Wednesday", time: "10:00 AM – 04:00 PM" },
      { day: "Thursday", time: "09:00 AM – 02:00 PM" },
      { day: "Friday", time: "Closed" },
      { day: "Saturday", time: "10:00 AM – 04:00 PM" },
      { day: "Sunday", time: "09:00 AM – 01:00 PM" },
    ],
  },
  {
    id: 7,
    name: "Dr. James Anderson",
    specialty: "General Medicine",
    degree: "MBBS, FCPS",
    experience: "7 Years",
    rating: 4.6,
    reviews: 76,
    location: "Metro Health Clinic",
    address: "56 Metro Road, Dhaka",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=900",
    available: "Available Today",
    about:
      "Dr. James Anderson provides general medical consultations, preventive health guidance, and personalized assessment to support the overall wellbeing of patients.",
    education: [
      "MBBS – Medical College",
      "FCPS – Internal Medicine",
      "General Clinical Training",
    ],
    expertise: [
      "General Consultation",
      "Preventive Healthcare",
      "Health Assessment",
      "Lifestyle Guidance",
      "Primary Care",
    ],
    schedule: [
      { day: "Monday", time: "10:00 AM – 04:00 PM" },
      { day: "Tuesday", time: "10:00 AM – 04:00 PM" },
      { day: "Wednesday", time: "09:00 AM – 01:00 PM" },
      { day: "Thursday", time: "10:00 AM – 04:00 PM" },
      { day: "Friday", time: "Closed" },
      { day: "Saturday", time: "10:00 AM – 02:00 PM" },
      { day: "Sunday", time: "09:00 AM – 01:00 PM" },
    ],
  },
  {
    id: 8,
    name: "Dr. Sophia Williams",
    specialty: "Gynecology",
    degree: "MBBS, FCPS (Gynecology)",
    experience: "14 Years",
    rating: 4.9,
    reviews: 167,
    location: "Women's Care Center",
    address: "34 Women Care Road, Dhaka",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=900",
    available: "Available Tomorrow",
    about:
      "Dr. Sophia Williams provides women's health consultation with an emphasis on personalized care, patient education, and preventive healthcare.",
    education: [
      "MBBS – Medical College",
      "FCPS in Gynecology",
      "Women's Health Clinical Training",
    ],
    expertise: [
      "Women's Health Consultation",
      "Preventive Gynecological Care",
      "Health Assessment",
      "Reproductive Health Education",
      "Patient Counseling",
    ],
    schedule: [
      { day: "Monday", time: "09:00 AM – 02:00 PM" },
      { day: "Tuesday", time: "09:00 AM – 02:00 PM" },
      { day: "Wednesday", time: "10:00 AM – 04:00 PM" },
      { day: "Thursday", time: "09:00 AM – 02:00 PM" },
      { day: "Friday", time: "Closed" },
      { day: "Saturday", time: "10:00 AM – 04:00 PM" },
      { day: "Sunday", time: "09:00 AM – 01:00 PM" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function DoctorDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: routeId } = use(params);
  const id = Number(routeId);

  const doctor = doctors.find((item) => item.id === id);

  if (!doctor) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#F5F8FC] px-5">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00BCD4]/10">
            <Stethoscope size={30} className="text-[#00BCD4]" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-[#061D50]">
            Doctor Not Found
          </h1>

          <p className="mt-3 text-[15px] text-[#61739F]">
            This doctor profile is not available.
          </p>

          <a
            href="/team/doctors"
            className="mt-6 inline-flex rounded-xl bg-[#061D50] px-6 py-3 font-semibold text-white transition hover:bg-[#00BCD4]"
          >
            Back to Doctors
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F8FC] pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061D50]">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#00BCD4]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-14 lg:px-0 lg:py-20">
          <a
            href="/team/doctors"
            className="mb-10 inline-flex items-center gap-2 text-[14px] font-medium text-white/70 transition hover:text-[#00BCD4]"
          >
            <ArrowLeft size={18} />
            Back to Doctors
          </a>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid items-center gap-12 lg:grid-cols-[380px_1fr]"
          >
            {/* PROFILE IMAGE */}
            <motion.div variants={fadeUp}>
              <div className="relative mx-auto max-w-[380px] overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3">
                <div className="relative h-[430px] overflow-hidden rounded-[22px]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover object-top"
                  />

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[12px] font-semibold uppercase tracking-wide text-[#00BCD4]">
                          Doctor Rating
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                          <Star
                            size={19}
                            fill="#FBBF24"
                            className="text-[#FBBF24]"
                          />

                          <span className="text-[22px] font-bold text-[#061D50]">
                            {doctor.rating}
                          </span>

                          <span className="text-[13px] text-[#61739F]">
                            ({doctor.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00BCD4]/10">
                        <HeartPulse
                          size={23}
                          className="text-[#00BCD4]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* INFORMATION */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00BCD4]/30 bg-[#00BCD4]/10 px-4 py-2 text-[13px] font-semibold text-[#00BCD4]">
                <Stethoscope size={16} />
                {doctor.specialty}
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[60px]">
                {doctor.name}
              </h1>

              <p className="mt-4 text-[17px] text-white/65">
                {doctor.degree}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                  <BriefcaseMedical size={22} className="text-[#00BCD4]" />

                  <div>
                    <p className="text-[12px] text-white/50">
                      Experience
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-white">
                      {doctor.experience}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                  <Star
                    size={22}
                    fill="#FBBF24"
                    className="text-[#FBBF24]"
                  />

                  <div>
                    <p className="text-[12px] text-white/50">
                      Patient Rating
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-white">
                      {doctor.rating}/5.0
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                  <Award size={22} className="text-[#00BCD4]" />

                  <div>
                    <p className="text-[12px] text-white/50">
                      Reviews
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-white">
                      {doctor.reviews}+
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`/appointment?doctor=${doctor.id}`}
                  className="inline-flex items-center gap-3 rounded-xl bg-[#00BCD4] px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-white hover:text-[#061D50]"
                >
                  Book Appointment
                  <ArrowUpRight size={19} />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-[1400px] px-5 pt-16 lg:px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          {/* LEFT */}
          <div className="space-y-8">
            {/* ABOUT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[25px] border border-[#E5ECF4] bg-white p-7 sm:p-10"
            >
              <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[#00BCD4]">
                About Doctor
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#061D50] sm:text-3xl">
                Professional Profile
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#61739F]">
                {doctor.about}
              </p>
            </motion.div>

            {/* EXPERTISE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[25px] border border-[#E5ECF4] bg-white p-7 sm:p-10"
            >
              <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[#00BCD4]">
                Specialization
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#061D50] sm:text-3xl">
                Areas of Expertise
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {doctor.expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 rounded-xl border border-[#E5ECF4] bg-[#F8FAFD] p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00BCD4]/10">
                      <CheckCircle2
                        size={19}
                        className="text-[#00BCD4]"
                      />
                    </div>

                    <span className="text-[14px] font-medium text-[#061D50]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* EDUCATION */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[25px] border border-[#E5ECF4] bg-white p-7 sm:p-10"
            >
              <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[#00BCD4]">
                Academic Background
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#061D50] sm:text-3xl">
                Education & Qualifications
              </h2>

              <div className="mt-8 space-y-6">
                {doctor.education.map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00BCD4]/10">
                      <GraduationCap
                        size={22}
                        className="text-[#00BCD4]"
                      />
                    </div>

                    <div className="flex-1 border-b border-[#E5ECF4] pb-6">
                      <p className="text-[15px] font-semibold leading-7 text-[#061D50]">
                        {item}
                      </p>

                      <p className="mt-2 text-[13px] text-[#61739F]">
                        Qualification {index + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SCHEDULE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[25px] border border-[#E5ECF4] bg-white p-7 sm:p-10"
            >
              <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[#00BCD4]">
                Availability
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#061D50] sm:text-3xl">
                Weekly Schedule
              </h2>

              <div className="mt-7 overflow-hidden rounded-xl border border-[#E5ECF4]">
                {doctor.schedule.map((item, index) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between gap-4 px-5 py-4 ${
                      index % 2 === 0 ? "bg-[#F8FAFD]" : "bg-white"
                    }`}
                  >
                    <span className="text-[14px] font-semibold text-[#061D50]">
                      {item.day}
                    </span>

                    <span
                      className={`text-right text-[13px] font-medium ${
                        item.time === "Closed"
                          ? "text-red-400"
                          : "text-[#61739F]"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            {/* APPOINTMENT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-24 rounded-[25px] border border-[#E5ECF4] bg-white p-7 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00BCD4]/10">
                <CalendarDays size={25} className="text-[#00BCD4]" />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-[#061D50]">
                Book Your Visit
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-[#61739F]">
                Schedule your appointment with {doctor.name} and
                receive personalized medical care.
              </p>

              <a
                href={`/appointment?doctor=${doctor.id}`}
                className="mt-6 flex h-[52px] items-center justify-center gap-3 rounded-xl bg-[#061D50] text-[15px] font-semibold text-white transition hover:bg-[#00BCD4]"
              >
                Book Appointment
                <ArrowUpRight size={18} />
              </a>

              <div className="mt-7 space-y-5 border-t border-[#E5ECF4] pt-6">
                <div className="flex gap-3">
                  <Clock size={20} className="shrink-0 text-[#00BCD4]" />

                  <div>
                    <h4 className="text-[14px] font-semibold text-[#061D50]">
                      Consultation Hours
                    </h4>

                    <p className="mt-1 text-[13px] leading-6 text-[#61739F]">
                      Please check the weekly schedule above.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin size={20} className="shrink-0 text-[#00BCD4]" />

                  <div>
                    <h4 className="text-[14px] font-semibold text-[#061D50]">
                      Clinic Location
                    </h4>

                    <p className="mt-1 text-[13px] leading-6 text-[#61739F]">
                      {doctor.location}
                    </p>

                    <p className="text-[13px] leading-6 text-[#61739F]">
                      {doctor.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone size={20} className="shrink-0 text-[#00BCD4]" />

                  <div>
                    <h4 className="text-[14px] font-semibold text-[#061D50]">
                      Phone
                    </h4>

                    <a
                      href="tel:+8801234567890"
                      className="mt-1 block text-[13px] text-[#61739F] transition hover:text-[#00BCD4]"
                    >
                      +880 1234-567890
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail size={20} className="shrink-0 text-[#00BCD4]" />

                  <div>
                    <h4 className="text-[14px] font-semibold text-[#061D50]">
                      Email
                    </h4>

                    <a
                      href="mailto:info@example.com"
                      className="mt-1 block text-[13px] text-[#61739F] transition hover:text-[#00BCD4]"
                    >
                      info@example.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SUPPORT */}
            <div className="rounded-[25px] bg-[#061D50] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00BCD4]/15">
                <HeartPulse size={23} className="text-[#00BCD4]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Need Assistance?
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-white/60">
                Our support team can help you with appointments
                and general inquiries.
              </p>

              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#00BCD4] transition hover:text-white"
              >
                Contact Support
                <ArrowUpRight size={17} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto mt-20 max-w-[1400px] px-5 lg:px-0">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[30px] border border-[#E5ECF4] bg-white px-8 py-12 text-center sm:px-14"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00BCD4]/10">
            <HeartPulse size={28} className="text-[#00BCD4]" />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-[#061D50] sm:text-4xl">
            Take the Next Step Toward Better Health
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[15px] leading-7 text-[#61739F]">
            Schedule your consultation today and connect with our
            healthcare team for personalized care.
          </p>

          <a
            href={`/appointment?doctor=${doctor.id}`}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#00BCD4] px-8 py-4 text-[15px] font-semibold text-white transition hover:bg-[#061D50]"
          >
            Book Appointment
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
