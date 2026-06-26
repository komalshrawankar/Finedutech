import React from "react";

import cloudLogo from "../assets/images/cloud-logo.png";
import sunIcon from "../assets/images/sun.png";
import kidLeft from "../assets/images/pensil-boy.png";
import kidRight from "../assets/images/book-boy.png";
import waveLine from "../assets/images/wave-line.png";

const quickLinks = [
  "Home",
  "About Us",
  "Program",
  "School",
  "Blog",
  "Contact Us",
];

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-5 ">
      <div className="relative mx-auto overflow-hidden rounded-t-[28px] sm:rounded-t-[34px] bg-[#2B2B2B] text-white py-8">
        {/* Decorative Images */}
        <img
          src={sunIcon}
          alt="Sun"
          className="absolute top-4 left-1/2 z-0 w-[48px] -translate-x-1/2 sm:top-7 sm:w-[66px] lg:w-[78px]"
        />

        <img
          src={cloudLogo}
          alt="Company Logo"
          className="absolute left-5 top-[58px] z-10 w-[82px] sm:left-10 sm:top-[72px] sm:w-[105px] lg:left-[88px] lg:top-[82px] lg:w-[125px]"
        />

        {/* Hide this on mobile because it overlaps bottom copyright */}
        <img
          src={kidLeft}
          alt="Student"
          className="hidden lg:block absolute bottom-[78px] left-[36%] z-10 w-[82px]"
        />

        <img
          src={kidRight}
          alt="Student with books"
          className="absolute right-5 top-[58px] z-10 w-[58px] sm:right-8 sm:top-[78px] sm:w-[72px] lg:right-[70px] lg:top-[86px] lg:w-[86px]"
        />

        {/* Main Footer Content */}
        <div className="relative z-20 px-5 pb-8 pt-[145px] sm:px-10 sm:pt-[165px] lg:px-[90px] lg:pb-10 lg:pt-[160px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_1fr] lg:gap-20">
            {/* About */}
            <div className="max-w-full sm:max-w-[320px]">
              <h3 className="footer-heading mb-4 text-white">
                About Company.
              </h3>

              <p className="!text-left !text-[12px] sm:!text-[14px] !font-light !leading-[1.55] !text-[#E5E5E5]">
                The only exam in India that incorporates financial literacy from
                Class 1 to Class 10 is Fin Edu Quest, which helps prepare the
                next generation for a safe and fulfilling future. EMPOWERING
                FINANCIAL LITERACY
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
                  className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-[10px] font-bold"
                >
                  ◎
                </a>

                <a
                  href="#"
                  className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#0A66C2] text-[10px] font-bold"
                >
                  in
                </a>

                <a
                  href="#"
                  className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-black text-[10px] font-bold"
                >
                  X
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="footer-heading mb-5 text-white">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[14px] sm:text-[15px] font-light text-[#E5E5E5] transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="max-w-full sm:max-w-[340px]">
              <h3 className="footer-heading mb-5 text-white">
                Contact
              </h3>

              <div className="space-y-4 text-[#E5E5E5]">
                <div>
                  <h4 className="footer-heading mb-2 text-white">
                    Operational Address:
                  </h4>

                  <p className="!text-left !text-[14px] sm:!text-[15px] !font-light !leading-[1.55] !text-[#E5E5E5]">
                    47, Kotwal Nagar, Khamla, Nagpur,
                    <br />
                    Maharashtra 440022, India
                  </p>
                </div>

                <div>
                  <h4 className="footer-heading mb-2 text-white">
                    Email Address
                  </h4>

                  <p className="!text-left !text-[14px] sm:!text-[15px] !font-light !leading-[1.55] !text-[#E5E5E5]">
                    fineduquest@gmail.com
                  </p>
                </div>

                <div>
                  <h4 className="footer-heading mb-2 text-white">
                    Phone Number
                  </h4>

                  <p className="!text-left !text-[14px] sm:!text-[15px] !font-light !leading-[1.55] !text-[#E5E5E5]">
                    +91-7666729015
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Line */}
          <div className="mt-10 w-full sm:mt-9">
            <img
              src={waveLine}
              alt="Wave Line"
              className="h-[8px] sm:h-[10px] w-full object-fill"
            />
          </div>

          {/* Bottom Bar */}
          <div className="mt-5 flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href="#"
                className="text-[12px] sm:text-[13px] font-semibold hover:text-[#dddddd]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[12px] sm:text-[13px] font-semibold hover:text-[#dddddd]"
              >
                Terms & Conditions
              </a>
            </div>

            <p className="!text-left sm:!text-right !text-[11px] sm:!text-[12px] !font-semibold !leading-[1.45] !text-white max-w-full sm:max-w-[520px]">
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