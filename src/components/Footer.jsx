
import React from "react";

import waveLine from "../assets/images/wave-line.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Program", path: "/program" },
  { name: "School", path: "/schools" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-5">
      <div className="relative mx-auto overflow-hidden rounded-t-[28px] sm:rounded-t-[34px] bg-[#2B2B2B] text-white py-8">
        {/* Main Footer Content */}
        <div className="relative z-20 px-5 py-8 sm:px-10 lg:px-[90px] lg:py-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr] lg:gap-24">
            {/* About */}
            <div className="max-w-full sm:max-w-[520px]">
              <h2 className=" footer-heading mb-4 text-white text-[25px]">
                About Company.
              </h2>

              <p className="!text-left !text-[12px] sm:!text-[14px] !font-light !leading-[1.55] !text-[#E5E5E5]">
                The only exam in India that incorporates financial literacy from
                Class 1 to Class 10 is Fin Edu Quest, which helps prepare the
                next generation for a safe and fulfilling future. EMPOWERING
                FINANCIAL LITERACY
              </p>

              <div className="mt-5">
                <h4 className="normal mb-2 text-white">
                  Email Address
                </h4>

                <a
                  href="mailto:fineduquest@gmail.com"
                  className=" normal text-[14px] sm:text-[15px] font-light text-[#E5E5E5] transition hover:text-white"
                >
                  fineduquest@gmail.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="mt-5 flex items-center gap-2">
                <a
                  href="#"
                  className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#1877F2] text-[15px] font-bold"
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="#"
                  className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-[10px] font-bold"
                  aria-label="Instagram"
                >
                  ◎
                </a>

                <a
                  href="#"
                  className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#0A66C2] text-[10px] font-bold"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href="#"
                  className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-black text-[10px] font-bold"
                  aria-label="X"
                >
                  X
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="  footer-heading mb-5 text-white  text-[25px]">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className=" normal text-[14px] sm:text-[15px] font-light text-[#E5E5E5] transition hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
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
                className="text-[15px] sm:text-[15px] font-semibold hover:text-[#dddddd]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[12px] sm:text-[15px] font-semibold hover:text-[#dddddd]"
              >
                Terms & Conditions
              </a>
            </div>

            <p className="!text-left sm:!text-right !text-[11px] sm:!text-[15px] !font-semibold !leading-[1.45] !text-white max-w-full sm:max-w-[520px]">
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

