import React, { useEffect, useRef, useState } from "react";
import {
  FaHandshake,
  FaGlobeAmericas,
  FaLeaf,
  FaShieldAlt,
  FaPeopleArrows,
  FaUsers,
} from "react-icons/fa";

import boyImg from "../assets/images/boy.png"; // add your boy image
import cardImg1 from "../assets/images/e1.png";
import cardImg2 from "../assets/images/e2.png";
import cardImg3 from "../assets/images/e3.png";

const partnerCards = [
  {
    image: cardImg1,
    title: "Education Catalysts",
    subtitle: "(Schools & Educators)",
    description:
      "Empower students with financial wisdom, healthy money habits",
    fullDescription:
      "Empower students with financial wisdom, healthy money habits, and future-ready life skills through engaging, experiential, and NEP 2020 aligned learning experiences. Together, we nurture responsible, confident, and financially aware young minds.",
    impactTitle: "Shaping informed minds.",
    impactText: "Building a brighter tomorrow.",
    borderColor: "border-[#2F80ED]",
    titleColor: "text-[#004A9F]",
    linkColor: "text-[#E85B8C]",
  },
  {
    image: cardImg2,
    title: "Impact Enablers",
    subtitle: "(CSR & Corporate Partners)",
    description:
      "Create meaningful and measurable social impact by supporting",
    fullDescription:
      "Create meaningful and measurable social impact by supporting financial literacy programs that reach young learners, families, and communities with practical money skills for everyday life.",
    impactTitle: "Enabling measurable impact.",
    impactText: "Supporting stronger communities.",
    borderColor: "border-[#3FA65C]",
    titleColor: "text-[#16803B]",
    linkColor: "text-[#E85B8C]",
  },
  {
    image: cardImg3,
    title: "Community Partners",
    subtitle: "(NGOs & Social Groups)",
    description:
      "Join hands to bring financial education to every child and family",
    fullDescription:
      "Join hands to bring financial education to every child and family through community-led programs, outreach initiatives, and accessible learning experiences built for lasting change.",
    impactTitle: "Connecting communities.",
    impactText: "Creating sustainable change.",
    borderColor: "border-[#A66CFF]",
    titleColor: "text-[#5A35B8]",
    linkColor: "text-[#E85B8C]",
  },
];

const bottomItems = [
  { icon: <FaGlobeAmericas />, title: "Greater Reach" },
  { icon: <FaLeaf />, title: "Deeper Impact" },
  { icon: <FaShieldAlt />, title: "Stronger Institutions" },
  { icon: <FaPeopleArrows />, title: "Sustainable Change" },
];

const PartnerPurposeSection = () => {
  const scrollRef = useRef(null);
  const currentIndex = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const scrollToIndex = (index) => {
    const slider = scrollRef.current;
    if (!slider) return;

    const card = slider.querySelector("[data-card]");
    if (!card) return;

    const gap = 18;
    const cardWidth = card.offsetWidth + gap;

    if (index >= partnerCards.length) index = 0;
    if (index < 0) index = partnerCards.length - 1;

    currentIndex.current = index;

    slider.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isPaused || expandedIndex !== null) return;

    const timer = setInterval(() => {
      scrollToIndex(currentIndex.current + 1);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, expandedIndex]);

  const handleWheel = (e) => {
    const slider = scrollRef.current;
    if (!slider) return;

    e.preventDefault();

    if (e.deltaY > 0) {
      scrollToIndex(currentIndex.current + 1);
    } else {
      scrollToIndex(currentIndex.current - 1);
    }
  };

  const handleScroll = () => {
    const slider = scrollRef.current;
    if (!slider) return;

    const card = slider.querySelector("[data-card]");
    if (!card) return;

    const gap = 18;
    const cardWidth = card.offsetWidth + gap;

    currentIndex.current = Math.round(slider.scrollLeft / cardWidth);
  };

  return (
    <section className="w-full bg-[#FDEBDD] py-5 sm:py-8 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="font-heading font-extrabold text-black text-[28px] sm:text-[34px] lg:text-[38px] leading-none">
            Partner with{" "}
            <span className="text-[#1671DE]">our purpose</span>
          </h2>

          <p className="mt-2 text-black/60 text-[12px] sm:text-[13px]">
            Different roles. One mission. Lasting impact.
          </p>
        </div>

        {/* Main Row */}
        <div className="flex items-center justify-center gap-5 lg:gap-8">
          {/* Left Boy */}
          <div className="hidden md:block shrink-0">
            <img
              src={boyImg}
              alt="Partner purpose"
              className="w-[250px] lg:w-[390px] "
            />
          </div>

          {/* Cards Slider */}
          <div className="w-full max-w-[700px] overflow-hidden">
            <div
              ref={scrollRef}
              onWheel={handleWheel}
              onScroll={handleScroll}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex gap-[18px] overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2
              [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {partnerCards.map((card, index) => (
                <div
                  key={index}
                  data-card
                  className={`snap-start shrink-0 bg-white rounded-[14px] border-[2px] border-dashed ${card.borderColor}
                  transition-all duration-500 ease-out
                  ${
                    expandedIndex === index
                      ? "w-full min-w-full sm:w-[62%] sm:min-w-[62%] p-5 min-h-[520px]"
                      : "w-[calc(50%-9px)] min-w-[calc(50%-9px)] p-4 min-h-[230px]"
                  }
                  max-[640px]:w-full max-[640px]:min-w-full`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`object-cover rounded-[8px] transition-all duration-500 ${
                      expandedIndex === index
                        ? "w-full h-[190px] mb-5"
                        : "w-[95px] h-[72px] mb-4"
                    }`}
                  />

                  <h2
                    className={`font-heading font-extrabold ${card.titleColor} ${
                      expandedIndex === index
                        ? "text-[22px] sm:text-[25px]"
                        : "text-[15px] sm:text-[18px]"
                    } leading-tight`}
                  >
                    {card.title}
                  </h2>

                  <p
                    className={`mt-1 font-bold ${
                      expandedIndex === index
                        ? card.titleColor
                        : "text-black"
                    } text-[10px] sm:text-[15px]`}
                  >
                    {card.subtitle}
                  </p>

                  <p
                    className={`mt-4 text-black/70 text-left ${
                      expandedIndex === index
                        ? "text-[14px] sm:text-[15px] leading-[26px]"
                        : "text-[11px] sm:text-[15px] leading-[18px]"
                    }`}
                  >
                    {expandedIndex === index
                      ? card.fullDescription
                      : card.description}{" "}
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedIndex(
                          expandedIndex === index ? null : index
                        )
                      }
                      className={`${card.linkColor} font-semibold underline underline-offset-2`}
                    >
                      {expandedIndex === index ? "Read Less" : "Read More"}
                    </button>
                  </p>

                  {expandedIndex === index && (
                    <div className="mt-10 border-t border-[#C8CED8] pt-5">
                      <div className="flex items-center gap-3">
                        <FaUsers className={`${card.titleColor} text-[20px]`} />
                        <div>
                          <h4
                            className={`font-heading font-extrabold ${card.titleColor} text-[14px] leading-tight`}
                          >
                            {card.impactTitle}
                          </h4>
                          <p className="text-black/55 text-[13px] leading-tight">
                            {card.impactText}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-5 bg-white rounded-[14px] border-[2px] border-dashed border-[#2F80ED] px-4 py-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-center gap-3 min-w-fit">
              <div className="w-[42px] h-[42px] rounded-full bg-[#004A9F] text-white flex items-center justify-center text-[18px]">
                <FaHandshake />
              </div>

              <div>
                <h4 className="font-heading font-extrabold text-[#004A9F] text-[13px] sm:text-[15px] leading-tight">
                  When we partner with purpose,
                </h4>

                <p className="text-[#004A9F] text-[10px] sm:text-[11px]">
                  We empower generations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-5 flex-1 w-full">
              {bottomItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-black text-[10px] sm:text-[15px] font-semibold whitespace-nowrap"
                >
                  <span
                    className={`text-[14px] ${
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
