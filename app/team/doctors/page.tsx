
"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Star,
  HeartPulse,
  Stethoscope,
  X,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Nashid Martines",
    specialty: "Cardiology",
    degree: "MBBS, MD (Cardiology)",
    experience: "12 Years Experience",
    rating: 4.9,
    reviews: 124,
    location: "Dhaka Medical Center",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600",
    available: "Available Today",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialty: "Neurology",
    degree: "MBBS, FCPS (Neurology)",
    experience: "10 Years Experience",
    rating: 4.8,
    reviews: 98,
    location: "City Health Hospital",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600",
    available: "Available Today",
  },
  {
    id: 3,
    name: "Dr. Michael Roberts",
    specialty: "Orthopedics",
    degree: "MBBS, MS (Orthopedics)",
    experience: "15 Years Experience",
    rating: 4.9,
    reviews: 156,
    location: "Central Medical Center",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600",
    available: "Available Tomorrow",
  },
  {
    id: 4,
    name: "Dr. Emily Carter",
    specialty: "Dental Care",
    degree: "BDS, FCPS (Dental)",
    experience: "8 Years Experience",
    rating: 4.7,
    reviews: 87,
    location: "Smile Dental Clinic",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600",
    available: "Available Today",
  },
  {
    id: 5,
    name: "Dr. David Wilson",
    specialty: "Dermatology",
    degree: "MBBS, DDV",
    experience: "9 Years Experience",
    rating: 4.8,
    reviews: 110,
    location: "LifeCare Hospital",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600",
    available: "Available Tomorrow",
  },
  {
    id: 6,
    name: "Dr. Olivia Smith",
    specialty: "Pediatrics",
    degree: "MBBS, MD (Pediatrics)",
    experience: "11 Years Experience",
    rating: 4.9,
    reviews: 143,
    location: "Children's Medical Center",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600",
    available: "Available Today",
  },
  {
    id: 7,
    name: "Dr. James Anderson",
    specialty: "General Medicine",
    degree: "MBBS, FCPS",
    experience: "7 Years Experience",
    rating: 4.6,
    reviews: 76,
    location: "Metro Health Clinic",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600",
    available: "Available Today",
  },
  {
    id: 8,
    name: "Dr. Sophia Williams",
    specialty: "Gynecology",
    degree: "MBBS, FCPS (Gynecology)",
    experience: "14 Years Experience",
    rating: 4.9,
    reviews: 167,
    location: "Women's Care Center",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600",
    available: "Available Tomorrow",
  },
];

const specialties = [
  "All Specialties",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Dental Care",
  "Dermatology",
  "Pediatrics",
  "General Medicine",
  "Gynecology",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

export default function FindDoctorPage() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All Specialties");
  const [sort, setSort] = useState("recommended");
  const [showFilters, setShowFilters] = useState(false);

  const filteredDoctors = useMemo(() => {
    let result = doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase()) ||
        doctor.location.toLowerCase().includes(search.toLowerCase());

      const matchesSpecialty =
        specialty === "All Specialties" ||
        doctor.specialty === specialty;

      return matchesSearch && matchesSpecialty;
    });

    if (sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    if (sort === "experience") {
      result = [...result].sort(
        (a, b) =>
          parseInt(b.experience) - parseInt(a.experience)
      );
    }

    return result;
  }, [search, specialty, sort]);

  return (
    <main className="min-h-screen bg-[#F5F8FC] pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061D50]">
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-[#00BCD4]/10 blur-[100px]" />
        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-24 lg:px-0 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="max-w-[750px]"
          >
            <motion.div variants={fadeUp}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-medium text-[#00BCD4]">
                <HeartPulse size={16} />
                Trusted Medical Professionals
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[68px]"
            >
              Find the Right
              <span className="block text-[#00BCD4]">
                Doctor for You
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[620px] text-[16px] leading-8 text-white/65 sm:text-[18px]"
            >
              Connect with experienced healthcare professionals
              and discover personalized medical care for your
              health and wellbeing.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#doctors"
                className="flex items-center gap-2 rounded-xl bg-[#00BCD4] px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-white hover:text-[#061D50]"
              >
                Explore Doctors
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/appointment"
                className="rounded-xl border border-white/20 px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-white/10"
              >
                Book Appointment
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section
        id="doctors"
        className="mx-auto max-w-[1400px] px-5 pt-16 lg:px-0"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <span className="text-[14px] font-semibold uppercase tracking-[2px] text-[#00BCD4]">
                Medical Specialists
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#061D50] sm:text-4xl">
                Meet Our Doctors
              </h2>

              <p className="mt-3 text-[15px] leading-7 text-[#61739F]">
                Browse our experienced medical professionals.
              </p>
            </div>

            <div className="text-[14px] font-medium text-[#61739F]">
              <span className="text-[#061D50]">
                {filteredDoctors.length}
              </span>{" "}
              doctors found
            </div>
          </div>

          {/* SEARCH + FILTER */}
          <div className="mb-10 rounded-2xl border border-[#E5ECF4] bg-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#61739F]"
                  size={20}
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search doctor, specialty or location..."
                  className="h-[56px] w-full rounded-xl border border-[#E5ECF4] bg-[#F8FAFD] pl-14 pr-5 text-[14px] text-[#061D50] outline-none transition focus:border-[#00BCD4]"
                />
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex h-[56px] items-center justify-center gap-3 rounded-xl border border-[#E5ECF4] px-6 text-[14px] font-semibold text-[#061D50] transition hover:border-[#00BCD4] hover:text-[#00BCD4]"
              >
                <SlidersHorizontal size={19} />
                Filters

                {showFilters ? (
                  <X size={17} />
                ) : (
                  <span className="rounded-full bg-[#00BCD4]/10 px-2 py-1 text-[12px] text-[#00BCD4]">
                    {specialty === "All Specialties" ? "0" : "1"}
                  </span>
                )}
              </button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 grid gap-5 border-t border-[#E5ECF4] pt-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-3 block text-[14px] font-semibold text-[#061D50]">
                        Medical Specialty
                      </label>

                      <select
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        className="h-[52px] w-full rounded-xl border border-[#E5ECF4] bg-[#F8FAFD] px-4 text-[14px] outline-none focus:border-[#00BCD4]"
                      >
                        {specialties.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-3 block text-[14px] font-semibold text-[#061D50]">
                        Sort By
                      </label>

                      <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="h-[52px] w-full rounded-xl border border-[#E5ECF4] bg-[#F8FAFD] px-4 text-[14px] outline-none focus:border-[#00BCD4]"
                      >
                        <option value="recommended">
                          Recommended
                        </option>
                        <option value="rating">
                          Highest Rated
                        </option>
                        <option value="experience">
                          Most Experienced
                        </option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* DOCTOR GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                layout
                key={doctor.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group overflow-hidden rounded-[22px] border border-[#E5ECF4] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#00BCD4]/30 hover:shadow-[0_20px_50px_rgba(6,29,80,0.08)]"
              >
                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden bg-[#EAF3F8]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4">
                    <span
                      className={`rounded-full px-3 py-2 text-[12px] font-semibold ${
                        doctor.available === "Available Today"
                          ? "bg-[#DFF8EF] text-[#168B61]"
                          : "bg-[#FFF3D9] text-[#A97819]"
                      }`}
                    >
                      {doctor.available}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white px-3 py-2 shadow-sm">
                    <Star
                      size={15}
                      fill="#FBBF24"
                      className="text-[#FBBF24]"
                    />

                    <span className="text-[13px] font-bold text-[#061D50]">
                      {doctor.rating}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#00BCD4]">
                    <Stethoscope size={15} />
                    {doctor.specialty}
                  </span>

                  <h3 className="mt-3 text-[20px] font-bold text-[#061D50] transition-colors group-hover:text-[#00BCD4]">
                    {doctor.name}
                  </h3>

                  <p className="mt-2 text-[13px] text-[#61739F]">
                    {doctor.degree}
                  </p>

                  <div className="mt-5 space-y-3 border-t border-[#E5ECF4] pt-4">
                    <div className="flex items-center gap-2 text-[13px] text-[#61739F]">
                      <CalendarDays
                        size={17}
                        className="text-[#00BCD4]"
                      />
                      {doctor.experience}
                    </div>

                    <div className="flex items-center gap-2 text-[13px] text-[#61739F]">
                      <MapPin
                        size={17}
                        className="shrink-0 text-[#00BCD4]"
                      />
                      <span className="truncate">
                        {doctor.location}
                      </span>
                    </div>

                    <p className="text-[12px] text-[#61739F]">
                      {doctor.reviews} patient reviews
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <a
                      href={`/team/doctors/${doctor.id}`}
                      className="flex h-[46px] items-center justify-center rounded-xl border border-[#E5ECF4] text-[13px] font-semibold text-[#061D50] transition hover:border-[#00BCD4] hover:text-[#00BCD4]"
                    >
                      View Profile
                    </a>

                    <a
                      href={`/appointment?doctor=${doctor.id}`}
                      className="flex h-[46px] items-center justify-center gap-2 rounded-xl bg-[#061D50] text-[13px] font-semibold text-white transition hover:bg-[#00BCD4]"
                    >
                      Appointment
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY STATE */}
        {filteredDoctors.length === 0 && (
          <div className="py-20 text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#00BCD4]/10">
              <Search size={30} className="text-[#00BCD4]" />
            </div>

            <h3 className="text-2xl font-bold text-[#061D50]">
              No Doctors Found
            </h3>

            <p className="mt-3 text-[15px] text-[#61739F]">
              Try searching with another name or specialty.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSpecialty("All Specialties");
              }}
              className="mt-6 rounded-xl bg-[#061D50] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-[#00BCD4]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-[1400px] px-5 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[30px] bg-[#061D50] px-8 py-14 sm:px-14 lg:px-20"
        >
          <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#00BCD4]/10 blur-[80px]" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-[700px]">
              <span className="text-[14px] font-semibold uppercase tracking-[2px] text-[#00BCD4]">
                Your Health Matters
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Need Help Finding
                <br />
                the Right Specialist?
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-white/60">
                Our team can help you find the right medical
                professional and schedule your visit.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#00BCD4] px-8 py-4 text-[15px] font-semibold text-white transition hover:bg-white hover:text-[#061D50]"
            >
              Contact Us
              <ArrowUpRight size={19} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
