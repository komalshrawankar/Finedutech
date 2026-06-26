import React, { useEffect, useRef, useState } from "react";
import {
  FaHandshake,
  FaGlobeAmericas,
  FaLeaf,
  FaShieldAlt,
  FaPeopleArrows,
} from "react-icons/fa";

import cardImg1 from "../assets/images/edu.png";
import cardImg2 from "../assets/images/edu2.png";
import cardImg3 from "../assets/images/edu2.png";

const partnerCards = [
  {
    image: cardImg1,
    title: "Education Catalysts",
    subtitle: "(Schools & Educators)",
    description: "Empower students with financial wisdom, healthy money habits",
    fullDescription:
      "Empower students with financial wisdom, healthy money habits, and future-ready life skills through engaging, experiential, and NEP 2020 aligned learning experiences. Together, we nurture responsible, confident, and financially aware young minds.",
    footerText: "Shaping informed minds. Building a brighter tomorrow.",
    linkColor: "text-[#E85B8C]",
    borderColor: "border-[#2F80ED]",
    titleColor: "text-[#004A9F]",
    footerColor: "text-[#004A9F]",
  },
  {
    image: cardImg2,
    title: "Impact Enablers",
    subtitle: "(CSR & Corporate Partners)",
    description: "Create meaningful and measurable social impact by supporting",
    fullDescription:
      "Create meaningful and measurable social impact by supporting initiatives that advance financial literacy, youth empowerment, and inclusive education. Partner with us to build financially capable communities and contribute to long-term nation-building.",
    footerText: "Driving impact today. Building a stronger tomorrow.",
    linkColor: "text-[#E85B8C]",
    borderColor: "border-[#3FA65C]",
    titleColor: "text-[#16803B]",
    footerColor: "text-[#16803B]",
  },
  {
    image: cardImg3,
    title: "Community Partners",
    subtitle: "(NGOs & Social Groups)",
    description: "Join hands to bring financial education to every child and family",
    fullDescription:
      "Join hands to bring financial education to every child and family through community-driven awareness, practical workshops, and accessible learning programs. Together, we can expand financial confidence across diverse learner communities.",
    footerText: "Stronger communities. Stronger nation.",
    linkColor: "text-[#E85B8C]",
    borderColor: "border-[#A66CFF]",
    titleColor: "text-[#5A35B8]",
    footerColor: "text-[#5A35B8]",
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
  const currentIndexRef = useRef(0);

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  const getCardStep = () => {
    const el = scrollRef.current;
    if (!el) return 0;

    const card = el.querySelector("[data-partner-card]");
    if (!card) return 0;

    const styles = window.getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "24");

    return card.offsetWidth + gap;
  };

  const scrollToCard = (index) => {
    const el = scrollRef.current;
    if (!el) return;

    const step = getCardStep();
    if (!step) return;

    const maxIndex = partnerCards.length - 1;
    let nextIndex = index;

    if (nextIndex > maxIndex) nextIndex = 0;
    if (nextIndex < 0) nextIndex = maxIndex;

    currentIndexRef.current = nextIndex;

    el.scrollTo({
      left: step * nextIndex,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isPaused || expandedIndex !== null) return;

    const interval = setInterval(() => {
      scrollToCard(currentIndexRef.current + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, expandedIndex]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const step = getCardStep();
    if (!step) return;

    const index = Math.round(el.scrollLeft / step);

    currentIndexRef.current = Math.max(
      0,
      Math.min(index, partnerCards.length - 1)
    );
  };

  const handleWheel = (e) => {
    const el = scrollRef.current;
    if (!el) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  const handleMouseDown = (e) => {
    const el = scrollRef.current;
    if (!el) return;

    setIsDragging(true);
    setIsPaused(true);

    dragStartX.current = e.pageX;
    dragStartScrollLeft.current = el.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const el = scrollRef.current;
    if (!el || !isDragging) return;

    e.preventDefault();

    const moveX = e.pageX - dragStartX.current;
    el.scrollLeft = dragStartScrollLeft.current - moveX;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
    setIsPaused(true);

    setTimeout(() => {
      scrollToCard(index);
    }, 50);
  };

  return (
    <section className="w-full bg-[#FDEBDD] py-12 sm:py-14 md:py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-heading font-extrabold text-black leading-[1.1] text-[30px] sm:text-[40px] md:text-[50px]">
            Partner with <span className="text-[#1671DE]">our purpose</span>
          </h2>

          <p className="mt-4 text-black/60 text-[14px] sm:text-[16px] leading-[24px] text-center">
            Different roles. One mission. Lasting impact.
          </p>
        </div>

        {/* Cards Only */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onWheel={handleWheel}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              stopDragging();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className={`flex w-full max-w-full gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory select-none
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          >
            {partnerCards.map((card, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  data-partner-card
                  className={`snap-start shrink-0 bg-white rounded-[18px] border-[2px] border-dashed ${card.borderColor} transition-all duration-500 ease-out
                  w-[280px] sm:w-[330px] md:w-[360px] lg:w-[380px]
                  ${
                    isExpanded
                      ? "min-h-[520px] p-4 sm:p-5"
                      : "min-h-[245px] p-5 sm:p-6"
                  }`}
                >
                  {!isExpanded && (
                    <>
                      <img
                        src={card.image}
                        alt={card.title}
                        draggable="false"
                        className="w-[118px] h-[88px] sm:w-[128px] sm:h-[92px] object-cover rounded-[8px] mb-5 pointer-events-none"
                      />

                      <h3
                        className={`font-heading font-extrabold ${card.titleColor} text-[18px] sm:text-[20px] leading-tight`}
                      >
                        {card.title}
                      </h3>

                      <p className="mt-1 text-black font-bold text-[12px] sm:text-[13px] leading-[18px] text-left">
                        {card.subtitle}
                      </p>

                      <p className="mt-5 text-black/70 text-[13px] sm:text-[14px] leading-[21px] text-left">
                        {card.description}{" "}
                        <button
                          type="button"
                          onClick={() => handleReadMore(index)}
                          className={`${card.linkColor} font-semibold underline underline-offset-2`}
                        >
                          Read More
                        </button>
                      </p>
                    </>
                  )}

                  {isExpanded && (
                    <div className="flex h-full flex-col">
                      <img
                        src={card.image}
                        alt={card.title}
                        draggable="false"
                        className="w-full h-[165px] sm:h-[175px] object-cover rounded-[10px] mb-5 pointer-events-none"
                      />

                      <h3
                        className={`font-heading font-extrabold ${card.titleColor} text-[20px] sm:text-[22px] leading-tight`}
                      >
                        {card.title}
                      </h3>

                      <p className="mt-1 text-black font-bold text-[12px] sm:text-[13px] leading-[18px] text-left">
                        {card.subtitle}
                      </p>

                      <p className="mt-5 text-black/70 text-[13px] sm:text-[14px] leading-[22px] text-left">
                        {card.fullDescription}{" "}
                        <button
                          type="button"
                          onClick={() => handleReadMore(index)}
                          className={`${card.linkColor} font-semibold underline underline-offset-2`}
                        >
                          Read Less
                        </button>
                      </p>

                      <div className="mt-auto pt-6 flex items-start gap-2">
                        <span className={`mt-1 text-[14px] ${card.footerColor}`}>
                          <FaPeopleArrows />
                        </span>

                        <p
                          className={`${card.footerColor} text-[11px] sm:text-[12px] leading-[17px] font-semibold text-left`}
                        >
                          {card.footerText}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-10 bg-white rounded-[18px] border-[2px] border-dashed border-[#2F80ED] px-4 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-8">
            <div className="flex items-center gap-4 min-w-fit">
              <div className="w-[54px] h-[54px] rounded-full bg-[#004A9F] text-white flex items-center justify-center text-[24px]">
                <FaHandshake />
              </div>

              <div>
                <h4 className="font-heading font-extrabold text-[#004A9F] text-[17px] sm:text-[19px] leading-tight">
                  When we partner with purpose,
                </h4>

                <p className="text-[#004A9F] text-[13px] sm:text-[14px] leading-[20px] text-left">
                  We empower generations.
                </p>
              </div>
            </div>

            <div className="hidden lg:block h-[45px] w-px bg-black/10"></div>

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