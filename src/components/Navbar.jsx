import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

import logo from "../assets/images/logo-new.png";
import boyImg from "../assets/images/Navbar-new.png";
import RegisterSchoolPopup from "./RegisterSchoolPopup";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Program", path: "/program" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const sideMenuWords = [
  "Business & Impact Initiatives",
  "Financial-Literacy Publications",
  "Fin-Edu Quest",
  "Money-Mastery Program",
  "Awareness & Outreach",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen || isRegisterOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isRegisterOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed left-0 top-0 z-[9997] w-full border-t-[4px] border-[#20343B] bg-white transition-all duration-300">
        <nav
          className={`flex items-center justify-between px-5 transition-all duration-300 sm:px-10 md:px-16 lg:px-[78px] ${
            scrolled
              ? "h-[75px] sm:h-[82px] md:h-[90px] lg:h-[95px]"
              : "h-[95px] sm:h-[105px] md:h-[120px] lg:h-[135px]"
          }`}
        >
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="Logo"
              className={`h-auto p-5 object-contain transition-all duration-300 ${
                scrolled
                  ? "w-[95px] sm:w-[115px] md:w-[135px] lg:w-[145px]"
                  : "w-[125px] sm:w-[150px] md:w-[170px] lg:w-[185px]"
              }`}
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className={`flex items-center justify-center rounded-full bg-[#F5BC18] text-[#26383F] shadow-[0_4px_0_#20343B] transition-all duration-300 hover:scale-105 hover:shadow-[0_2px_0_#20343B] ${
              scrolled
                ? "h-[38px] w-[38px] sm:h-[42px] sm:w-[42px]"
                : "h-[42px] w-[42px] sm:h-[46px] sm:w-[46px]"
            }`}
          >
            <HiMenuAlt3
              className={`transition-all duration-300 ${
                scrolled
                  ? "text-[25px] sm:text-[28px]"
                  : "text-[28px] sm:text-[31px]"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Header Spacer */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "h-[75px] sm:h-[82px] md:h-[90px] lg:h-[95px]"
            : "h-[95px] sm:h-[105px] md:h-[120px] lg:h-[135px]"
        }`}
      />

      {/* Fullscreen Menu */}
      <div
        className={`fixed left-0 top-0 z-[9998] h-[100dvh] w-full overflow-y-auto overflow-x-hidden border-t-[4px] border-[#20343B] bg-[#2D2D2D] transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] md:h-screen md:overflow-hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <style>
          {`
            @keyframes verticalMenuMarquee {
              from {
                transform: translateY(-50%);
              }
              to {
                transform: translateY(0);
              }
            }

            .side-menu-marquee-track {
              animation: verticalMenuMarquee 18s linear infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .side-menu-marquee-track {
                animation: none;
              }
            }
          `}
        </style>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="absolute right-5 top-7 z-[9999] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F5BC18] text-black transition-all duration-300 hover:rotate-90 hover:scale-105 sm:right-9 md:right-[78px]"
        >
          <IoClose className="text-[38px]" />
        </button>

        <div className="relative flex min-h-full w-full items-center py-24 md:h-full md:py-0">
          {/* Left Menu Content */}
          <div className="relative z-30 w-full px-6 sm:px-10 md:w-auto md:px-0 md:pl-20 lg:pl-[78px]">
            <ul className="space-y-4 sm:space-y-6 md:space-y-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block break-words font-heading text-[34px] font-black leading-[0.98] tracking-[0] transition-all duration-300 min-[380px]:text-[38px] sm:text-[46px] md:text-[50px] md:leading-[0.95] md:tracking-[-1.5px] lg:text-[54px] xl:text-[58px] ${
                        isActive
                          ? "text-[#F5BC18]"
                          : "text-white hover:translate-x-2 hover:text-[#F5BC18]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsRegisterOpen(true);
                }}
                className="group relative flex h-[44px] items-center justify-center overflow-hidden rounded-full bg-[#67E8F2] px-6 text-[#1f1f1f] shadow-[0_5px_0_#101010] transition-all duration-300 hover:translate-y-[2px] hover:shadow-[0_3px_0_#101010] sm:px-7"
              >
                <span className="absolute inset-0 -translate-y-full bg-black transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 text-[17px] font-medium transition-colors duration-300 group-hover:text-[#67E8F2] sm:text-[18px]">
                  Register School
                </span>
              </button>

              <Link
                to="/student-login"
                onClick={() => setIsOpen(false)}
                className="group relative flex h-[44px] items-center justify-center overflow-hidden rounded-full bg-[#F5BC18] px-6 text-[#1f1f1f] shadow-[0_5px_0_#101010] transition-all duration-300 hover:translate-y-[2px] hover:shadow-[0_3px_0_#101010] sm:px-7"
              >
                <span className="absolute inset-0 -translate-y-full bg-black transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 text-[17px] font-medium transition-colors duration-300 group-hover:text-[#F5BC18] sm:text-[18px]">
                  Student Login
                </span>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5BC18]"
              >
                <FaInstagram className="text-[20px]" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5BC18]"
              >
                <FaFacebookF className="text-[19px]" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5BC18]"
              >
                <FaYoutube className="text-[20px]" />
              </a>
            </div>
          </div>

          {/* Vertical Text Marquee Behind Boy */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[30px] top-1/2 z-10 hidden h-[102vh] w-[82px] -translate-y-1/2 overflow-hidden rounded-[10px] bg-black/15 select-none md:block lg:right-[66px] xl:right-[82px] 2xl:right-[180px]"
          >
            <div className="side-menu-marquee-track flex min-h-[200%] flex-col justify-around py-6">
              {[...sideMenuWords, ...sideMenuWords].map((word, index) => (
                <div
                  key={`${word}-${index}`}
                  className="flex min-h-[220px] items-center justify-center gap-5"
                >
                  
                  <span className="normal [writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[24px] font-semibold tracking-[0.03em] text-white/28">
                    {word}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mascot Image */}
          <img
            src={boyImg}
            alt="Student mascot"
            className="pointer-events-none absolute bottom-[118px] right-7 z-20 hidden w-[185px] select-none md:block lg:right-[70px] lg:w-[240px] xl:bottom-[150px] xl:right-[95px] xl:w-[255px] 2xl:w-[285px]"
          />

          {/* Soft Background Decoration */}
          <div className="pointer-events-none absolute -bottom-24 -right-24 z-0 h-[320px] w-[320px] rounded-full bg-[#F5BC18]/5 blur-3xl" />
          <div className="pointer-events-none absolute -left-28 top-20 z-0 h-[300px] w-[300px] rounded-full bg-[#67E8F2]/5 blur-3xl" />
        </div>
      </div>

      <RegisterSchoolPopup
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </>
  );
};

export default Navbar;
