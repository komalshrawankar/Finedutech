import React from "react";

import cloudLogo from "../assets/images/cloud-logo.png";
import sunIcon from "../assets/images/sun.png";
import kidLeft from "../assets/images/pensil-boy.png";
import kidRight from "../assets/images/book-boy.png";
import waveLine from "../assets/images/wave-line.png";

const quickLinks = ["Home", "About Us", "Program", "School", "Blog", "Contact Us"];

const Footer = () => {
  return (
    <footer className="w-full bg-white   pt-5">
      <div className="relative mx-auto  overflow-hidden rounded-t-[34px] bg-[#2B2B2B] text-white">
        {/* Decorative Images */}
        <img
          src={sunIcon}
          alt="Sun"
          className="absolute top-7 left-1/2 z-0 w-[54px] -translate-x-1/2 sm:w-[66px] lg:w-[78px]"
        />

        <img
          src={cloudLogo}
          alt="Company Logo"
          className="absolute left-6 top-[72px] z-10 w-[86px] sm:left-10 sm:w-[105px] lg:left-[88px] lg:top-[82px] lg:w-[125px]"
        />

        <img
          src={kidLeft}
          alt="Student"
          className="absolute bottom-[78px] left-[48%] z-10 w-[58px] -translate-x-1/2 sm:bottom-[86px] sm:w-[70px] lg:left-[36%] lg:w-[82px]"
        />

        <img
          src={kidRight}
          alt="Student with books"
          className="absolute right-4 top-[78px] z-10 w-[58px] sm:right-8 sm:w-[72px] lg:right-[70px] lg:top-[86px] lg:w-[86px]"
        />

        {/* Main Footer Content */}
        <div className="relative z-20 px-6 pb-12 pt-[140px] sm:px-10 sm:pt-[150px] lg:px-[90px] lg:pb-10 lg:pt-[160px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_1fr] lg:gap-20">
            {/* About */}
            <div className="max-w-[290px]">
              <h3 className="mb-4 mt-5 text-[15px] font-semibold leading-none footer-heading">
                About Company.
              </h3>

              <p className="text-[11px] font-light leading-[1.45] text-[#E5E5E5] sm:text-[15px]">
                The only exam in India that incorporates financial literacy from
                Class 1 to Class 10 is Fin Edu Quest, which helps prepare the
                next generation for a safe and fulfilling future.
                EMPOWERING FINANCIAL LITERACY
              </p>

              {/* Social Icons */}
              <div className="mt-5 flex items-center gap-2">
                <a
                  href="#"
                  className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#1877F2] text-[15px] font-bold"
                >
                  f
                </a>
                <a
                  href="#"
                  className="flex  h-[25px] w-[25px] items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-[10px] font-bold"
                >
                  ◎
                </a>
                <a
                  href="#"
                  className="flex  h-[25px] w-[25px] items-center justify-center rounded-full bg-[#0A66C2] text-[10px] font-bold"
                >
                  in
                </a>
                <a
                  href="#"
                  className="flex  h-[25px] w-[25px] items-center justify-center rounded-full bg-black text-[10px] font-bold"
                >
                  X
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className=" footer-heading mb-5 text-[15px] font-bold leading-none">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[15px] font-light text-[#E5E5E5] transition hover:text-white sm:text-[15px]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="max-w-[310px]">
              <h3 className=" footer-heading mb-5 text-[13px] font-bold leading-none">
                Contact
              </h3>

              <div className="space-y-4 text-[11px] font-light leading-[1.45] text-[#E5E5E5] sm:text-[12px]">
                <div>
                  <h3 className=" footer-heading mb-2 font-bold text-white">
                    Operational Address:
                  </h3>
                  <p>
                    47, Kotwal Nagar, Khamla, Nagpur,
                    <br />
                    Maharashtra 440022, India
                  </p>
                </div>

                <div>
                  <h4 className= " footer-heading mb-2 font-bold text-white">Email Address</h4>
                  <p>fineduquest@gmail.com</p>
                </div>

                <div>
                  <h4 className=" footer-heading mb-2 font-bold text-white">Phone Number</h4>
                  <p>+91-7666729015</p>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Line */}
          <div className="mt-8 w-full sm:mt-9">
            <img
              src={waveLine}
              alt="Wave Line"
              className="h-[10px] w-full object-fill"
            />
          </div>

          {/* Bottom Bar */}
          <div className=" footer-heading mt-4 flex flex-col gap-3 text-[10px] font-semibold text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className="hover:text-[#dddddd]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#dddddd]">
                Terms & Conditions
              </a>
            </div>

            <p className=" footer-heading text-left sm:text-right">
              Copyright © 2026 Financial Education Quest. All Rights Reserved.
              Designed by adbornsolutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;