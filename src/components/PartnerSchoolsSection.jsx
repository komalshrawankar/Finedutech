import React from "react";

// Replace these paths with your actual logo imports
import logo1 from "../assets/images/p1.png";
import logo2 from "../assets/images/p2.png";
import logo3 from "../assets/images/p3.png";
import logo4 from "../assets/images/p4.png";
import logo5 from "../assets/images/p5.png";
import logo6 from "../assets/images/p6.png";
import logo7 from "../assets/images/p7.png";
import logo8 from "../assets/images/p8.png";
import logo9 from "../assets/images/p9.png";

const schoolLogos = [
  {
    image: logo1,
    alt: "Podar Education Network",
  },
  {
    image: logo2,
    alt: "Partner School",
  },
  {
    image: logo3,
    alt: "Partner School",
  },
  {
    image: logo4,
    alt: "Birla Open Minds International School",
  },
  {
    image: logo5,
    alt: "Partner School",
  },
  {
    image: logo6,
    alt: "St. Vincent Pallotti College",
  },
   {
    image: logo7,
    alt: "Birla Open Minds International School",
  },
  {
    image: logo8,
    alt: "Partner School",
  },
  {
    image: logo9,
    alt: "St. Vincent Pallotti College",
  },
];

const PartnerSchoolsSection = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-heading font-extrabold text-black leading-[1.2] text-[26px] sm:text-[34px] md:text-[42px] lg:text-[46px]">
            Proudly Partnered
            <br />
            With{" "}
            <span className="text-[#1671DE]">
              Leading Schools
            </span>
          </h2>
        </div>

        {/* Auto Scroll Logos */}
        <div className="relative w-full ">
         

          <div className="flex w-max school-logo-track">
            {[...schoolLogos, ...schoolLogos, ...schoolLogos].map(
              (logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center shrink-0 mx-6 sm:mx-8 md:mx-10 lg:mx-12"
                >
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="h-[34px] sm:h-[44px] md:h-[55px] lg:h-[64px] w-auto object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnerSchoolsSection;