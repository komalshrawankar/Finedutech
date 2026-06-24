import React from "react";

// Replace paths with your actual logo images
import iidaLogo from "../assets/images/logo1.png";
import sebiLogo from "../assets/images/logo2.png";
import nseLogo from "../assets/images/logo3.png";
import rbiLogo from "../assets/images/logo4.png";
import pfrdaLogo from "../assets/images/logo5.png";

const logos = [
  {
    image: iidaLogo,
    alt: "IIDA",
  },
  {
    image: sebiLogo,
    alt: "SEBI",
  },
  {
    image: nseLogo,
    alt: "NSE",
  },
  {
    image: rbiLogo,
    alt: "Reserve Bank of India",
  },
  {
    image: pfrdaLogo,
    alt: "PFRDA",
  },
];

const SupportedInstitutions = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="font-heading font-extrabold text-black leading-[1.2] text-[28px] sm:text-[36px] md:text-[45px]">
            Supported by Major{" "}
            <span className="text-[#1671DE]">Financial</span>
            <br className="hidden sm:block" />
            <span className="text-[#1671DE]"> Institutions</span>{" "}
            of India
          </h1>
        </div>

        {/* Logo Auto Scroll */}
        <div className="relative w-full ">
          {/* Left fade */}
          <div className="absolute left-0 top-0 z-10 h-full    pointer-events-none"></div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 z-10 h-full  pointer-events-none"></div>

          <div className="flex w-max logo-scroll-track">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8 sm:mx-10 md:mx-14 lg:mx-16"
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="h-[45px] sm:h-[58px] md:h-[70px] lg:h-[120px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupportedInstitutions;