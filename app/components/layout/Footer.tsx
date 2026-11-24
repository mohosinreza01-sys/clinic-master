
"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  Headphones,
  ShoppingCart,
  ArrowUp,
  Plus,
} from "lucide-react";

const services = [
  ["Emergency Care", "#emergency"],
  ["Operation Theater", "#operation"],
  ["Medical Checkup", "#checkup"],
  ["Diagnostic Center", "#diagnostic"],
  ["Outdoor Checkup", "#outdoor"],
];

const usefulLinks = [
  ["Privacy Policy", "#privacy"],
  ["Terms & Conditions", "#terms"],
  ["Contact Us", "#contact"],
  ["Latest News", "#news"],
  ["Our Sitemap", "#sitemap"],
];

const stores = [
  ["New York", "#new-york"],
  ["London SF", "#london"],
  ["Edinburgh", "#edinburgh"],
  ["Los Angeles", "#los-angeles"],
  ["Las Vegas", "#las-vegas"],
];

const quickLinks = [
  ["About Us", "#about"],
  ["Our Services", "#services"],
  ["Our Team", "#team"],
  ["Appointments", "#appointments"],
  ["Contact Us", "#contact"],
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

function MedicalLogo() {
  return (
    <a href="/" className="mb-5 inline-flex items-center">
      <svg
        viewBox="0 0 64 64"
        className="h-16 w-16 shrink-0"
        fill="none"
        aria-label="Clinic Master"
      >
        <path
          d="M32 7C32 0 43 0 43 10V24C43 29 47 33 52 33H56C65 33 65 44 55 44H43C36 44 32 40 32 32V7Z"
          stroke="#00BCD4"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M32 57C32 64 21 64 21 54V40C21 35 17 31 12 31H8C-1 31-1 20 9 20H21C28 20 32 25 32 33V57Z"
          stroke="#061D50"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M10 32H54"
          stroke="#061D50"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <div className="ml-1 leading-[0.88]">
        <h2 className="text-[43px] font-extrabold tracking-[-2px] text-[#061D50]">
          Clinic
        </h2>

        <p className="text-[25px] font-medium tracking-wide text-[#00BCD4]">
          Master
        </p>
      </div>
    </a>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: string[][];
}) {
  return (
    <div>
      <h3 className="mb-5 whitespace-nowrap text-[15px] font-semibold text-[#061D50]">
        {title}
      </h3>

      <ul className="space-y-[11px]">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="group inline-flex items-center gap-1 whitespace-nowrap text-[11px] text-[#61739F] transition-colors duration-300 hover:text-[#00BCD4]"
            >
              {label}

              <Plus
                size={11}
                className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    setSubscribed(true);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="footer-background relative w-full overflow-hidden">

        {/* 1400PX MAIN CONTAINER */}
        <div className="mx-auto w-full max-w-[1400px] px-5 lg:px-0">

          {/* TOP CONTACT INFORMATION */}
          <div className="border-b border-[#DCE3E8]">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid min-h-[142px] w-full grid-cols-1 items-center gap-7 py-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:py-0"
            >
              {/* INTRO */}
              <div>
                <h3 className="mb-1 text-[18px] font-semibold text-[#061D50]">
                  Get in Touch with us
                </h3>

                <p className="text-[12px] text-[#61739F]">
                  Lorem Ipsum is simply dummy
                </p>
              </div>

              {/* PHONE */}
              <a
                href="tel:+11234567890"
                className="group flex items-center gap-3"
              >
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#061D50] text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#00BCD4]">
                  <Phone size={21} />
                </div>

                <div>
                  <h4 className="text-[13px] font-medium text-[#061D50]">
                    Call Us
                  </h4>

                  <p className="mt-1 text-[11px] text-[#61739F]">
                    +1 123 456 7890
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@example.com"
                className="group flex items-center gap-3"
              >
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#061D50] text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#00BCD4]">
                  <Mail size={21} />
                </div>

                <div>
                  <h4 className="text-[13px] font-medium text-[#061D50]">
                    Send us a Mail
                  </h4>

                  <p className="mt-1 text-[11px] text-[#61739F]">
                    info@example.com
                  </p>
                </div>
              </a>

              {/* OPENING TIME */}
              <div className="flex items-center gap-3">
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#061D50] text-white">
                  <Clock size={21} />
                </div>

                <div>
                  <h4 className="text-[13px] font-medium text-[#061D50]">
                    Opening Time
                  </h4>

                  <p className="mt-1 whitespace-nowrap text-[11px] text-[#61739F]">
                    Mon - Sat: 7:00 - 17:00
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FOOTER CONTENT */}
          <div className="border-b border-[#DCE3E8]">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid w-full grid-cols-2 gap-8 py-[60px] sm:grid-cols-3 lg:grid-cols-[1.45fr_1.1fr_1fr_1fr_1fr] lg:gap-7"
            >
              {/* BRAND COLUMN */}
              <div className="col-span-2 sm:col-span-3 lg:col-span-1">
                <MedicalLogo />

                <p className="max-w-[280px] text-[13px] leading-[20px] text-[#61739F]">
                  <span className="text-[#00BCD4]">ClinicMaster</span>{" "}
                  Ipsum Dolor Sit Amet, Consecteter Adipiscing Elit, Sed Diam
                  Nonummy Nibh Euismod Tincidunt Ut Laoreet Dolore Agna
                  Aliquam Erat. Wisi Enim Ad Minim Veniam, Quis Tation. Sit
                  Amet, Consec Tetuer. Ipsum Dolor.
                </p>
              </div>

              {/* SERVICES */}
              <FooterLinks title="Our Services" links={services} />

              {/* USEFUL LINKS */}
              <FooterLinks title="Useful Links" links={usefulLinks} />

              {/* STORES */}
              <FooterLinks title="Our Stores" links={stores} />

              {/* QUICK LINKS */}
              <FooterLinks title="Quick Links" links={quickLinks} />
            </motion.div>
          </div>

          {/* NEWSLETTER */}
          <div className="border-b border-[#DCE3E8]">
            <div className="flex min-h-[107px] w-full flex-col items-start justify-between gap-5 py-6 lg:flex-row lg:items-center lg:py-0">

              <div>
                <h3 className="text-[18px] font-medium text-[#061D50]">
                  Important Updates Waiting for you
                </h3>

                <p className="mt-1 text-[11px] text-[#61739F]">
                  Get our latest and best contents right into your inbox
                </p>
              </div>

              <form
                onSubmit={handleSubscribe}
                className="flex h-[45px] w-full items-center rounded-[15px] border border-[#D7E0ED] bg-white p-[2px] shadow-sm lg:w-[474px]"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSubscribed(false);
                  }}
                  placeholder="Your Email Address"
                  className="h-full min-w-0 flex-1 bg-transparent px-5 text-[12px] text-[#061D50] outline-none placeholder:text-[#61739F]"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="h-[39px] whitespace-nowrap rounded-[12px] bg-[#00BCD4] px-5 text-[11px] font-semibold text-white transition-colors duration-300 hover:bg-[#061D50] sm:px-6"
                >
                  {subscribed ? "Subscribed!" : "Subscribe Now"}
                </motion.button>
              </form>
            </div>

            <AnimatePresence>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="pb-4 text-[12px] text-[#00A78B]"
                >
                  Thank you! Your subscription has been received.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* COPYRIGHT */}
          <div className="flex min-h-[60px] w-full flex-col items-center justify-between gap-4 py-4 sm:flex-row">
            <p className="text-center text-[11px] text-[#61739F] sm:text-left">
              © 2026{" "}
              <a href="/" className="text-[#00BCD4]">
                DesignZone
              </a>{" "}
              Theme. All Rights Reserved.
            </p>

            {/* GOOGLE RATING */}
            <a
              href="#reviews"
              className="flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-[17px] font-bold text-[#4285F4]">
                G
              </span>

              <span className="text-[15px] tracking-[-2px] text-[#FBBC05]">
                ★★★★★
              </span>

              <span className="ml-1 text-[9px] font-semibold text-[#061D50]">
                (4.8)
              </span>

              <span className="whitespace-nowrap text-[9px] text-[#061D50]">
                12k+ ratings on google
              </span>
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING CHAT WIDGET */}
      <div className="fixed bottom-[30px] right-5 z-40 hidden sm:block sm:right-[50px] sm:bottom-[150px]">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setChatOpen((prev) => !prev)}
          aria-label="Toggle support chat"
          aria-expanded={chatOpen}
          className="relative z-10 mb-0 ml-[-45px] h-[45px] w-[45px] rounded-[13px] bg-white p-[5px] shadow-lg"
        >
          <img
            src="https://i.pravatar.cc/100?img=47"
            alt="Support agent"
            className="h-full w-full rounded-[9px] object-cover"
          />
        </motion.button>

        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="absolute right-0 top-[45px] w-[180px] rounded-[13px] bg-white p-3 shadow-[0_12px_40px_rgba(6,29,80,0.12)]"
            >
              <p className="mb-1 text-[10px] text-[#61739F]">
                Have a Question?
              </p>

              <a
                href="mailto:info@example.com"
                className="whitespace-nowrap text-[12px] font-medium text-[#00BCD4]"
              >
                info@example.com
              </a>

              <p className="mt-2">
                <span className="inline-block rounded-t-md bg-[#061D50] px-3 py-1 text-[10px] font-semibold text-white">
                  John Cane
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FLOATING LEFT BUTTONS */}
      <div className="fixed bottom-2 left-2 z-40 flex flex-col gap-[7px]">
        <motion.a
          href="mailto:info@example.com"
          aria-label="Support"
          whileHover={{ scale: 1.12, x: 3 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#25C6CF] text-white shadow-md"
        >
          <Headphones size={22} strokeWidth={1.8} />
        </motion.a>

        <motion.a
          href="#cart"
          aria-label="Shopping cart"
          whileHover={{ scale: 1.12, x: 3 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#91C95B] text-white shadow-md"
        >
          <ShoppingCart size={21} strokeWidth={1.8} />
        </motion.a>
      </div>

      {/* BACK TO TOP */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Back to top"
        whileHover={{ scale: 1.1, backgroundColor: "#00BCD4" }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-[22px] right-[20px] z-40 flex h-[39px] w-[39px] items-center justify-center rounded-full bg-[#061D50] text-white shadow-lg sm:right-[35px]"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </motion.button>
    </>
  );
}
