import React, { useEffect, useRef, useState } from "react";
import {
  FaHandshake,
  FaGlobeAmericas,
  FaLeaf,
  FaShieldAlt,
  FaPeopleArrows,
} from "react-icons/fa";

// Replace these paths with your actual images
import leftImage from "../assets/images/partner-left.png";
import cardImg1 from "../assets/images/edu.png";
import cardImg2 from "../assets/images/edu2.png";
import cardImg3 from "../assets/images/edu2.png";

const partnerCards = [
  {
    image: cardImg1,
    title: "Education Catalysts",
    subtitle: "(Schools & Educators)",
    description: "Empower students with financial wisdom, healthy money habits",
    linkColor: "text-[#E85B8C]",
    borderColor: "border-[#2F80ED]",
    titleColor: "text-[#004A9F]",
  },
  {
    image: cardImg2,
    title: "Impact Enablers",
    subtitle: "(CSR & Corporate Partners)",
    description: "Create meaningful and measurable social impact by supporting",
    linkColor: "text-[#E85B8C]",
    borderColor: "border-[#3FA65C]",
    titleColor: "text-[#16803B]",
  },
  {
    image: cardImg3,
    title: "Community Partners",
    subtitle: "(NGOs & Social Groups)",
    description: "Join hands to bring financial education to every child and family",
    linkColor: "text-[#E85B8C]",
    borderColor: "border-[#A66CFF]",
    titleColor: "text-[#5A35B8]",
  },
];

const bottomItems = [
  {
    icon: <FaGlobeAmericas />,
    title: "Greater Reach",
  },
  {
    icon: <FaLeaf />,
    title: "Deeper Impact",
  },
  {
    icon: <FaShieldAlt />,
    title: "Stronger Institutions",
  },
  {
    icon: <FaPeopleArrows />,
    title: "Sustainable Change",
  },
];

const PartnerPurposeSection = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId;
    let lastTime = null;

    const speed = 45; // increase this for faster scroll

    const autoScroll = (time) => {
      if (!lastTime) lastTime = time;

      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        el.scrollLeft += (speed * deltaTime) / 1000;

        // Reset when first duplicate set is finished
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="w-full bg-[#FDEBDD] py-12 sm:py-14 md:py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-heading font-extrabold text-black leading-[1.1] text-[30px] sm:text-[40px] md:text-[50px]">
            Partner with{" "}
            <span className="text-[#1671DE]">our purpose</span>
          </h2>

          <p className="mt-4 text-black/60 text-[14px] sm:text-[16px] leading-[24px]">
            Different roles. One mission. Lasting impact.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-8 lg:gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={leftImage}
              alt="Partner illustration"
              className="w-full max-w-[330px] sm:max-w-[380px] lg:max-w-[360px] h-auto object-contain"
            />
          </div>

          {/* Auto Scroll Cards */}
          <div className="relative w-full min-w-0 overflow-hidden">
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex w-full max-w-full gap-6 overflow-x-auto pb-4 pr-10
              [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {[...partnerCards, ...partnerCards].map((card, index) => (
                <div
                  key={index}
                  className={`shrink-0 w-[280px] sm:w-[330px] md:w-[360px] min-h-[260px] bg-white rounded-[18px] border-[2px] border-dashed ${card.borderColor} p-5 sm:p-6`}
                >
                  {/* Image already has shape */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-[110px] sm:w-[125px] h-auto object-contain mb-5"
                  />

                  <h3
                    className={`font-heading font-extrabold ${card.titleColor} text-[20px] sm:text-[22px] leading-tight`}
                  >
                    {card.title}
                  </h3>

                  <p className="mt-1 text-black font-bold text-[12px] sm:text-[13px] leading-[18px]">
                    {card.subtitle}
                  </p>

                  <p className="mt-6 text-black/70 text-[13px] sm:text-[14px] leading-[22px]">
                    {card.description}{" "}
                    <a
                      href="#"
                      className={`${card.linkColor} font-semibold underline underline-offset-2`}
                    >
                      Read More
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-10 bg-white rounded-[18px] border-[2px] border-dashed border-[#2F80ED] px-4 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-8">
            {/* Left Purpose Text */}
            <div className="flex items-center gap-4 min-w-fit">
              <div className="w-[54px] h-[54px] rounded-full bg-[#004A9F] text-white flex items-center justify-center text-[24px]">
                <FaHandshake />
              </div>

              <div>
                <h4 className="font-heading font-extrabold text-[#004A9F] text-[17px] sm:text-[19px] leading-tight">
                  When we partner with purpose,
                </h4>

                <p className="text-[#004A9F] text-[13px] sm:text-[14px] leading-[20px]">
                  We empower generations.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-[45px] w-px bg-black/10"></div>

            {/* Bottom Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 flex-1 w-full">
              {bottomItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-black text-[13px] sm:text-[14px] font-semibold whitespace-nowrap"
                >
                  <span
                    className={`text-[18px] ${
                      index === 0
                        ? "text-[#004A9F]"
                        : index === 1
                        ? "text-[#16803B]"
                        : index === 2
                        ? "text-[#5A35B8]"
                        : "text-[#004A9F]"
                    }`}
                  >
                    {item.icon}
                  </span>

                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerPurposeSection;