
import React from "react";

// Replace these paths with your actual logo imports
import logo1 from "../assets/images/n11.png";
import logo2 from "../assets/images/n2.png";
import logo3 from "../assets/images/n11.png";
import logo4 from "../assets/images/n4.png";
import logo5 from "../assets/images/n5.png";
import logo6 from "../assets/images/n6.png";
import logo7 from "../assets/images/n7.png";
import logo8 from "../assets/images/n8.png";
import logo9 from "../assets/images/n9.png";
import logo10 from "../assets/images/n10.png";
import logo11 from "../assets/images/n11.png";
const schoolLogos = [
  {
    image: logo1,
    alt: "Podar Education Network",
    className: "h-[46px] sm:h-[58px] md:h-[80px] lg:h-[155px] w-auto",
  },
  {
    image: logo2,
    alt: "Partner School",
    className:
      "h-[54px] sm:h-[66px] md:h-[100px] lg:h-[95px] w-[112px] sm:w-[132px] md:w-[190px] lg:w-[160px]",
  },
  {
    image: logo3,
    alt: "Partner School",
    className:
      "h-[54px] sm:h-[68px] md:h-[105px] lg:h-[120px] w-[116px] sm:w-[140px] md:w-[200px] lg:w-[230px]",
  },
  {
    image: logo4,
    alt: "Birla Open Minds International School",
    className: "h-[44px] sm:h-[56px] md:h-[80px] lg:h-[95px] w-auto",
  },
  {
    image: logo5,
    alt: "Partner School",
    className: "h-[44px] sm:h-[56px] md:h-[80px] lg:h-[95px] w-auto",
  },
  {
    image: logo6,
    alt: "St. Vincent Pallotti College",
    className: "h-[44px] sm:h-[56px] md:h-[80px] lg:h-[95px] w-auto",
  },
  {
    image: logo7,
    alt: "Birla Open Minds International School",
    className: "h-[44px] sm:h-[56px] md:h-[80px] lg:h-[95px] w-auto",
  },
  {
    image: logo8,
    alt: "Partner School",
    className: "h-[44px] sm:h-[56px] md:h-[80px] lg:h-[95px] w-auto",
  },
  {
    image: logo9,
    alt: "St. Vincent Pallotti College",
    className: "h-[44px] sm:h-[56px] md:h-[80px] lg:h-[95px] w-auto",
  },
];

const PartnerSchoolsSection = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 lg:px-4">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="font-heading font-extrabold text-black leading-[1.15] sm:leading-[1.2] text-[25px] min-[380px]:text-[28px] sm:text-[34px] md:text-[42px] lg:text-[46px]">
            Proudly Partnered
            <br />
            With <span className="text-[#1671DE]">Leading Schools</span>
          </h2>
        </div>

        {/* Auto Scroll Logos */}
        <div className="relative w-full mb-3 sm:mb-5">
          <div className="flex items-center w-max school-logo-track">
            {[...schoolLogos, ...schoolLogos, ...schoolLogos].map(
              (logo, index) => (
                <div
                  key={index}
                  className="flex h-[74px] sm:h-[88px] md:h-[122px] lg:h-[170px] items-center justify-center shrink-0 mx-3 min-[380px]:mx-4 sm:mx-6 md:mx-10 lg:mx-12"
                >
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className={`${logo.className} max-w-[132px] sm:max-w-[160px] md:max-w-none object-contain`}
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
