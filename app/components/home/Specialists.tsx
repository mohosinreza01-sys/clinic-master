
"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

/* ----------------------------------
   DOCTOR DATA
---------------------------------- */

const doctors = [
  {
    id: 1,
    name: "Nashid Martines",
    specialty: "Cardiac Surgery",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
    fallback: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Danial Frankie",
    specialty: "Pediatric Clinic",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
    fallback: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Rihana Roy",
    specialty: "Gynecology",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964f8b3?auto=format&fit=crop&w=900&q=85",
    fallback: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Kenneth Fong",
    specialty: "Neurology",
    image:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=900&q=85",
    fallback: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 5,
    name: "Robert Wilson",
    specialty: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85",
    fallback: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 6,
    name: "Sarah Mitchell",
    specialty: "Dental Specialist",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=85",
    fallback: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 7,
    name: "James Anderson",
    specialty: "Orthopedics",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=85",
    fallback: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 8,
    name: "Emily Carter",
    specialty: "Eye Specialist",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=900&q=85",
    fallback: "https://randomuser.me/api/portraits/women/79.jpg",
  },
];

/* ----------------------------------
   SOCIAL LINKS
---------------------------------- */

const socialLinks = [
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#linkedin",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "#instagram",
  },
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "#facebook",
  },
  {
    label: "X",
    icon: FaXTwitter,
    href: "#x",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    href: "#youtube",
  },
];

/* ----------------------------------
   ANIMATION VARIANTS
---------------------------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

/* ----------------------------------
   DOCTOR CARD
---------------------------------- */

type Doctor = (typeof doctors)[number];

function DoctorCard({
  doctor,
  isActive,
  onActivate,
}: {
  doctor: Doctor;
  isActive: boolean;
  onActivate: () => void;
}) {
  const [imageSrc, setImageSrc] = useState(doctor.image);
  const [imageFailed, setImageFailed] = useState(false);

  const handleImageError = () => {
    if (imageSrc !== doctor.fallback) {
      setImageSrc(doctor.fallback);
    } else {
      setImageFailed(true);
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group relative min-w-0 overflow-hidden rounded-[25px] transition-colors duration-300 ${
        isActive ? "bg-[#061D50]" : "bg-[#EAF4FB]"
      }`}
    >
      {/* IMAGE */}

      <div className="relative h-[330px] overflow-hidden rounded-[23px] bg-[#EAF4FB] sm:h-[350px] lg:h-[340px]">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center bg-[#EAF4FB] text-5xl font-bold text-[#061D50]">
            {doctor.name.charAt(0)}
          </div>
        ) : (
          <motion.div
            animate={{
              scale: isActive ? 1.04 : 1,
            }}
            transition={{ duration: 0.6 }}
            className="relative h-full w-full"
          >
            <Image
              src={imageSrc}
              alt={doctor.name}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={handleImageError}
              className="object-cover object-top"
            />
          </motion.div>
        )}

        {/* APPOINTMENT BUTTON */}

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-[10px] left-[10px] right-[10px] z-10"
            >
              <a
                href="#appointment"
                className="flex h-[50px] items-center justify-center gap-2 rounded-[14px] bg-[#00BCD4] text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#061D50]"
              >
                <CalendarDays size={17} />
                Appointment Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* DOCTOR INFORMATION */}

      <div
        className={`relative flex min-h-[80px] items-center justify-between gap-2 px-[19px] py-[15px] transition-colors duration-300 ${
          isActive ? "bg-[#061D50]" : "bg-[#EAF4FB]"
        }`}
      >
        <div className="min-w-0">
          <h3
            className={`truncate text-[16px] font-semibold leading-tight ${
              isActive ? "text-white" : "text-[#061D50]"
            }`}
          >
            {doctor.name}
          </h3>

          <p className="mt-[5px] text-[12px] font-medium text-[#00BCD4]">
            {doctor.specialty}
          </p>
        </div>

        <motion.a
          href={`#doctor-${doctor.id}`}
          aria-label={`View ${doctor.name}`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[12px] transition-colors ${
            isActive
              ? "bg-white text-[#061D50]"
              : "bg-[#061D50] text-white"
          }`}
        >
          <ArrowRight size={20} strokeWidth={1.8} />
        </motion.a>
      </div>

      {/* SOCIAL LINKS */}

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 49,
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-[19px] overflow-hidden bg-[#EAF4FB]"
          >
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-[#061D50] transition-all duration-300 hover:-translate-y-1 hover:text-[#00BCD4]"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

/* ----------------------------------
   MAIN SPECIALISTS SECTION
---------------------------------- */

export default function Specialists() {
  const [activeDoctor, setActiveDoctor] = useState(4);
  const [showAll, setShowAll] = useState(false);

  const visibleDoctors = showAll
    ? doctors
    : doctors.slice(0, 4);

  return (
    <section
      id="specialists"
      className="relative w-full overflow-hidden bg-white px-5 py-[65px] sm:px-6 lg:px-5"
    >
      <div className="mx-auto w-full max-w-[1400px]">

        {/* HEADER */}

        <div className="mb-[38px] flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-[500px] text-[27px] font-bold leading-[1.35] tracking-[-0.7px] text-[#061D50] sm:text-[32px] sm:leading-[1.4]"
          >
            We Employ Only
            <br />
            Specialists
          </motion.h2>

          <motion.button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex h-[50px] shrink-0 items-center gap-3 rounded-[15px] bg-[#00BCD4] py-[5px] pl-[25px] pr-[5px] text-[13px] font-semibold text-white transition-colors hover:bg-[#061D50]"
          >
            {showAll ? "Show Less" : "View All"}

            <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[11px] bg-white text-[#061D50]">
              <ArrowRight
                size={19}
                strokeWidth={1.8}
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </span>
          </motion.button>
        </div>

        {/* DOCTORS GRID */}

        <AnimatePresence mode="wait">
          <motion.div
            key={showAll ? "all" : "featured"}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          >
            {visibleDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                isActive={activeDoctor === doctor.id}
                onActivate={() => setActiveDoctor(doctor.id)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
