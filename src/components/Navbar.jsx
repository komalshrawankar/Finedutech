import React, { useEffect, useState } from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

import logo from "../assets/logo.png";
import boyImg from "../assets/boy.png";
import RegisterSchoolPopup from "./RegisterSchoolPopup";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Program", path: "/program" },
  { name: "Schools", path: "/schools" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen || isRegisterOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isRegisterOpen]);

  return (
    <>
      {/* MAIN NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white border-t-[4px] border-[#20343b] z-[9997]">
        <nav className="h-[70px] sm:h-[70px] md:h-[105px] flex items-center justify-between px-6 sm:px-12 md:px-20 lg:px-24">
          {/* Logo */}
          <a href="/" className="inline-block">
            <img
              src={logo}
              alt="Logo"
              className="w-[58px] sm:w-[68px] md:w-[78px] h-auto object-contain"
            />
          </a>

          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#F5BC18] flex items-center justify-center text-[#26383F] hover:scale-105 transition-transform duration-300"
            aria-label="Open menu"
          >
            <HiMenuAlt3 className="text-[26px] sm:text-[29px]" />
          </button>
        </nav>
      </header>

      {/* SPACE FOR FIXED NAVBAR */}
      <div className="h-[72px] sm:h-[80px] md:h-[86px]" />

      {/* MENU OVERLAY */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#2D2D2D] border-t-[4px] border-[#20343b] z-[9998] overflow-hidden transform transition-transform duration-[850ms] ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-6 sm:right-10 md:right-16 w-[38px] h-[38px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#F5BC18] text-black flex items-center justify-center z-[9999] hover:rotate-90 transition-transform duration-300"
          aria-label="Close menu"
        >
          <IoClose className="text-[34px]" />
        </button>

        <div className="relative w-full h-full flex items-center">
          {/* LEFT MENU */}
          <div className="pl-8 sm:pl-14 md:pl-20 lg:pl-[78px] pt-8 sm:pt-0">
            <ul className="space-y-6 sm:space-y-7 md:space-y-8">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block font-heading font-extrabold text-[34px] sm:text-[40px] md:text-[42px] lg:text-[44px] leading-none tracking-[-1px] transition-colors duration-300 ${
                      index === 0
                        ? "text-[#F5BC18]"
                        : "text-white hover:text-[#F5BC18]"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 mt-9 sm:mt-10">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsRegisterOpen(true);
                }}
                className="group relative h-[40px] px-6 sm:px-7 rounded-full overflow-hidden bg-[#67E8F2] text-[#1f1f1f] shadow-[0_4px_0_#111] flex items-center justify-center transition-all duration-300 hover:translate-y-[2px] hover:shadow-[0_2px_0_#111]"
              >
                <span className="absolute inset-0 bg-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 text-[17px] sm:text-[18px] font-medium transition-colors duration-300 group-hover:text-[#67E8F2]">
                  Register School
                </span>
              </button>

              <a
                href="/student-login"
                onClick={() => setIsOpen(false)}
                className="group relative h-[40px] px-6 sm:px-7 rounded-full overflow-hidden bg-[#F5BC18] text-[#1f1f1f] shadow-[0_4px_0_#111] flex items-center justify-center transition-all duration-300 hover:translate-y-[2px] hover:shadow-[0_2px_0_#111]"
              >
                <span className="absolute inset-0 bg-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 text-[17px] sm:text-[18px] font-medium transition-colors duration-300 group-hover:text-[#F5BC18]">
                  Student Login
                </span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-10">
              <a
                href="#"
                className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-white text-black flex items-center justify-center hover:bg-[#F5BC18] transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-[19px]" />
              </a>

              <a
                href="#"
                className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-white text-black flex items-center justify-center hover:bg-[#F5BC18] transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-[18px]" />
              </a>

              <a
                href="#"
                className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-white text-black flex items-center justify-center hover:bg-[#F5BC18] transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="text-[19px]" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src={boyImg}
            alt="Student mascot"
            className="hidden md:block absolute right-10 lg:right-20 xl:right-[78px] top-1/2 -translate-y-1/2 w-[210px] lg:w-[245px] xl:w-[270px] object-contain pointer-events-none"
          />
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