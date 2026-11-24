
"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  CalendarDays,
  Headset,
  CreditCard,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Plus,
} from "lucide-react";

const navItems = [
  {
    name: "Pages",
    links: [
      { name: "About Us", href: "#about", description: "Discover our clinic" },
      { name: "Appointment", href: "#appointment", description: "Book your visit" },
      { name: "FAQ", href: "#faq", description: "Common questions" },
    ],
  },
  {
    name: "Team",
    links: [
      { name: "Our Doctors", href: "#doctors", description: "Meet our specialists" },
      { name: "Our Team", href: "#team", description: "Healthcare professionals" },
    ],
  },
  {
    name: "Services",
    links: [
      { name: "All Services", href: "#services", description: "Explore our services" },
      { name: "Cardiology", href: "#cardiology", description: "Heart care specialists" },
      { name: "Dental Care", href: "#dental", description: "Complete dental care" },
    ],
  },
  {
    name: "Blogs",
    links: [
      { name: "Latest Blogs", href: "#blogs", description: "Health and wellness" },
      { name: "Health News", href: "#news", description: "Latest health updates" },
    ],
  },
];

const contactItems = [
  { label: "Contact Us", value: "+1 123 456 7890", href: "tel:+11234567890", Icon: PhoneCall },
  { label: "Email Supports", value: "email@domain.com", href: "mailto:email@domain.com", Icon: Mail },
  { label: "Online Appointment", value: "Book Now", href: "#appointment", Icon: CalendarDays },
  { label: "Supports", value: "24x7 Supports", href: "tel:+11234567890", Icon: Headset },
  { label: "Payment", value: "Pay Online", href: "#payment", Icon: CreditCard },
  { label: "My Cart", value: "2 Items", href: "#cart", Icon: ShoppingCart },
];

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.97,
    transition: { duration: 0.15 },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const mobileVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: "easeInOut" as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25 },
  },
};

export default function SiteHeader() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [quickMenu, setQuickMenu] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <header className="relative z-50 w-full bg-white">

      {/* TOP INFORMATION BAR */}
      <div className="border-t-2 border-[#25334D] bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-4 px-4 py-5 sm:grid-cols-3 xl:grid-cols-6 xl:gap-3 xl:px-0">

          {contactItems.map(({ label, value, href, Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="group flex min-w-0 items-center gap-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0FAFC] transition-all duration-300 group-hover:bg-[#00BCD4]">
                <Icon
                  size={23}
                  strokeWidth={1.7}
                  className="text-[#061D50] transition-colors group-hover:text-white"
                />
              </div>

              <div className="min-w-0 leading-tight">
                <p className="mb-1 text-[12px] font-medium text-[#00BCD4]">
                  {label}
                </p>
                <p className="truncate text-[14px] font-bold text-[#061D50]">
                  {value}
                  {(label === "Payment" || label === "Online Appointment") && (
                    <span className="ml-1">→</span>
                  )}
                </p>
              </div>
            </motion.a>
          ))}

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="relative bg-gradient-to-r from-[#041638] via-[#061D50] to-[#09275C] shadow-[0_8px_30px_rgba(6,29,80,0.12)]">

        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-32 h-64 w-64 rounded-full bg-[#00BCD4]/10 blur-[100px]" />
          <div className="absolute -bottom-32 left-1/3 h-48 w-48 rounded-full bg-blue-400/10 blur-[90px]" />
        </div>

        <div className="relative mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-4 xl:px-0">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMobile}
            className="group relative flex shrink-0 items-center gap-2"
          >
            <motion.div
              whileHover={{ rotate: 90, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="flex h-[48px] w-[48px] items-center justify-center"
            >
              <svg viewBox="0 0 52 52" className="h-full w-full" fill="none">
                <path
                  d="M26 5C26 0 34 0 34 7V19C34 23 37 26 41 26H45C52 26 52 34 45 34H34C29 34 26 30 26 25V5Z"
                  stroke="#00BCD4"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M26 47C26 52 18 52 18 45V33C18 29 15 26 11 26H7C0 26 0 18 7 18H18C23 18 26 22 26 27V47Z"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M8 26H44"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <div className="leading-[0.85]">
              <h1 className="text-[34px] font-extrabold tracking-[-1.5px] text-white">
                Clinic
              </h1>
              <p className="mt-1 text-[20px] font-medium tracking-[2px] text-[#00BCD4]">
                Master
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden h-full items-center gap-5 lg:flex xl:gap-7">

            {/* HOME */}
            <Link
              href="/"
              className="group relative flex h-full items-center gap-1.5 text-[16px] font-semibold text-[#00BCD4]"
            >
              Home
              <Plus size={14} />

              <motion.span
                layoutId="nav-indicator"
                className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#00BCD4]"
              />
            </Link>

            {/* DROPDOWN ITEMS */}
            {navItems.map((item) => {
              const isActive = activeDropdown === item.name;

              return (
                <div
                  key={item.name}
                  className="relative flex h-full items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(isActive ? null : item.name)
                    }
                    aria-expanded={isActive}
                    className={`group relative flex h-full items-center gap-2 whitespace-nowrap text-[16px] font-semibold transition-colors ${
                      isActive ? "text-[#00BCD4]" : "text-white hover:text-[#00BCD4]"
                    }`}
                  >
                    {item.name}

                    <ChevronDown
                      size={15}
                      className={`text-[#00BCD4] transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />

                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#00BCD4]"
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute left-0 top-[72px] w-[270px] overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                      >
                        <div className="mb-1 px-3 py-3">
                          <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#00BCD4]">
                            Explore {item.name}
                          </p>
                        </div>

                        {item.links.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group/link flex items-center justify-between rounded-xl px-3 py-3 transition-all duration-200 hover:bg-[#F0FAFC]"
                          >
                            <div>
                              <p className="text-[14px] font-bold text-[#061D50] transition-colors group-hover/link:text-[#00BCD4]">
                                {link.name}
                              </p>
                              <p className="mt-1 text-[11px] text-gray-500">
                                {link.description}
                              </p>
                            </div>

                            <ArrowUpRight
                              size={17}
                              className="text-gray-300 transition-all group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-[#00BCD4]"
                            />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* CONTACT */}
            <Link
              href="#contact"
              className="whitespace-nowrap text-[16px] font-semibold text-white transition-colors hover:text-[#00BCD4]"
            >
              Contact Us
            </Link>

            {/* APPOINTMENT BUTTON */}
            <Link href="#appointment" className="group relative ml-2">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex h-[48px] items-center gap-3 overflow-hidden rounded-xl bg-[#00BCD4] px-5 text-[15px] font-bold text-white shadow-[0_5px_20px_rgba(0,188,212,0.2)]"
              >
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-110%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 transition-colors group-hover:text-[#061D50]">
                  Appointment
                </span>
                <ArrowUpRight
                  size={18}
                  className="relative z-10 transition-colors group-hover:text-[#061D50]"
                />
              </motion.div>
            </Link>

            {/* QUICK MENU */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.93 }}
                type="button"
                onClick={() => setQuickMenu(!quickMenu)}
                aria-label="Toggle quick links"
                aria-expanded={quickMenu}
                className="flex h-[48px] w-[48px] items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#061D50]"
              >
                {quickMenu ? <X size={22} /> : <Menu size={22} />}
              </motion.button>

              <AnimatePresence>
                {quickMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-[62px] w-[290px] rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl"
                  >
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[2px] text-[#00BCD4]">
                      Quick Navigation
                    </p>
                    <h3 className="mb-4 text-xl font-extrabold text-[#061D50]">
                      Explore Clinic
                    </h3>

                    {[
                      ["About Clinic", "#about"],
                      ["Our Services", "#services"],
                      ["Find a Doctor", "#doctors"],
                      ["Contact Information", "#contact"],
                    ].map(([name, href]) => (
                      <Link
                        key={name}
                        href={href}
                        onClick={() => setQuickMenu(false)}
                        className="flex items-center justify-between border-b border-gray-100 py-3 text-sm font-medium text-gray-600 transition hover:pl-2 hover:text-[#00BCD4] last:border-0"
                      >
                        {name}
                        <ArrowUpRight size={16} />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#00BCD4] lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-0 z-[-1] bg-[#061D50]/40 backdrop-blur-sm lg:hidden"
                onClick={closeMobile}
              />

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-full w-full overflow-hidden border-t border-white/10 bg-[#061D50] shadow-2xl lg:hidden"
              >
                <div className="mx-auto max-w-[1400px] px-5 py-5">

                  <Link
                    href="/"
                    onClick={closeMobile}
                    className="flex items-center justify-between border-b border-white/10 py-4 font-semibold text-[#00BCD4]"
                  >
                    Home
                    <ArrowUpRight size={17} />
                  </Link>

                  {navItems.map((item, index) => {
                    const isOpen = mobileSubmenu === item.name;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className="border-b border-white/10"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setMobileSubmenu(isOpen ? null : item.name)
                          }
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between py-4 font-semibold text-white transition-colors hover:text-[#00BCD4]"
                        >
                          {item.name}

                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <ChevronDown size={18} className="text-[#00BCD4]" />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              variants={mobileVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="mb-3 space-y-1 rounded-xl bg-white/5 p-2">
                                {item.links.map((link) => (
                                  <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMobile}
                                    className="block rounded-lg px-3 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#00BCD4]"
                                  >
                                    {link.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}

                  <Link
                    href="#contact"
                    onClick={closeMobile}
                    className="block border-b border-white/10 py-4 font-semibold text-white hover:text-[#00BCD4]"
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="#appointment"
                    onClick={closeMobile}
                    className="mt-5 flex h-[50px] items-center justify-center gap-2 rounded-xl bg-[#00BCD4] font-bold text-white transition hover:bg-white hover:text-[#061D50]"
                  >
                    Book Appointment
                    <ArrowUpRight size={18} />
                  </Link>

                  <div className="mt-5 flex items-center gap-3 text-xs text-white/50">
                    <PhoneCall size={15} className="text-[#00BCD4]" />
                    +1 123 456 7890
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
