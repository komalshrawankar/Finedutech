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
    className: "h-[45px] sm:h-[58px] md:h-[70px] lg:h-[120px] w-auto",
  },
  {
    image: sebiLogo,
    alt: "SEBI",
    className: "h-[60px] sm:h-[75px] md:h-[95px] lg:h-[185px] w-auto",
  },
  {
    image: nseLogo,
    alt: "NSE",
    className: "h-[60px] sm:h-[75px] md:h-[95px] lg:h-[185px] w-auto",
  },
  {
    image: rbiLogo,
    alt: "Reserve Bank of India",
    className: "h-[45px] sm:h-[58px] md:h-[70px] lg:h-[120px] w-auto",
  },
  {
    image: pfrdaLogo,
    alt: "PFRDA",
    className: "h-[45px] sm:h-[58px] md:h-[70px] lg:h-[120px] w-auto",
  },
];

const SupportedInstitutions = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="font-heading font-extrabold text-black leading-[1.2] text-[28px] sm:text-[36px] md:text-[45px]">
            Supported by Major
            <br className="hidden sm:block" />
            <span className="text-[#1671DE]">Financial</span>{" "}
            <span className="text-[#1671DE]">Institutions</span> of India
          </h1>
        </div>

        {/* Logo Auto Scroll */}
        <div className="relative w-full ">
          <div className="flex items-center w-max logo-scroll-track">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0 mx-8 sm:mx-10 md:mx-14 lg:mx-8"
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className={`${logo.className} object-contain`}
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