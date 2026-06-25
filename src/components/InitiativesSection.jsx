import React, { useEffect, useRef, useState } from "react";

// Replace these image paths with your actual images
import img1 from "../assets/images/init1.png";
import img2 from "../assets/images/init2.png";
import img3 from "../assets/images/init3.png";
import img4 from "../assets/images/init4.png";

// Hover bottom-right decorative images
import hoverImg1 from "../assets/images/card-hover1.png";
import hoverImg2 from "../assets/images/card-hover2.png";
import hoverImg3 from "../assets/images/card-hover3.png";
import hoverImg4 from "../assets/images/card-hover4.png";

const initiatives = [
  {
    image: img1,
    hoverImage: hoverImg1,
    title: "Fin-Edu Quest",
    description: "A Financial Literacy Olympiad",
  },
  {
    image: img2,
    hoverImage: hoverImg2,
    title: "Money-Mastery Program",
    description: "Experiential Learning Activity Kit",
  },
  {
    image: img3,
    hoverImage: hoverImg3,
    title: "Awareness & Impact Initiatives",
    description: "Workshops, Campaigns & Community Outreach",
  },
  {
    image: img4,
    hoverImage: hoverImg4,
    title: "Financial-Literacy Publications",
    description: "Professionally Designed NEP-Aligned Books",
  },
];

const stats = [
  {
    number: "500+",
    label: "Schools Participating",
  },
  {
    number: "10000+",
    label: "Students Educated",
  },
  {
    number: "25+",
    label: "States Covered",
  },
  {
    number: "5",
    label: "Years of Impact",
  },
];

const InitiativesSection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const lastScrollY = useRef(0);
  const hasStatsShown = useRef(false);

  const [startAnimation, setStartAnimation] = useState(false);
  const [showStatsAnimation, setShowStatsAnimation] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = statsRef.current;
      if (!statsSection) return;

      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      const rect = statsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const statsVisibleForShow =
        rect.top < windowHeight * 0.78 && rect.bottom > windowHeight * 0.2;

      const statsVisibleForHide =
        rect.top < windowHeight * 0.95 && rect.bottom > windowHeight * 0.25;

      if (isScrollingDown && statsVisibleForShow) {
        hasStatsShown.current = true;
        setShowStatsAnimation(true);
      }

      if (isScrollingUp && hasStatsShown.current && statsVisibleForHide) {
        setShowStatsAnimation(false);
      }

      lastScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 sm:py-16">
      <div className=" mx-auto">
        <div className="bg-[#2D2D2D] rounded-[32px] sm:rounded-[40px] px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-14 md:py-16 overflow-hidden">
          
          {/* Section Heading */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="block text-[#67E8F2] text-[10px] sm:text-[15px] font-semibold mb-2">
              Program Highlights
            </span>

            <h2 className="font-heading font-extrabold text-white text-[30px] sm:text-[38px] md:text-[46px] leading-[1.1]">
              Our{" "}
              <span className="text-[#67E8F2]">
                Initiatives
              </span>
            </h2>

            <p className="max-w-[520px] mx-auto mt-4 text-white/80 text-[13px] sm:text-[18px] leading-[22px]">
              A comprehensive curriculum covering all essentials of personal
              finance, tailored for every age group.
            </p>
          </div>

          {/* Cards */}
          {/* Cards */}
<div className="max-w-[1100px] mx-auto py-5 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
  {initiatives.map((item, index) => (
    <div
      key={index}
      className={`group relative overflow-hidden bg-white hover:bg-[#F4BF23] rounded-[18px] sm:rounded-[20px] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 transition-all duration-500 ease-out ${
        startAnimation ? "initiative-card-animate" : "opacity-0"
      }`}
      style={{
        animationDelay: `${index * 0.12}s`,
      }}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="relative z-10 w-full h-[175px] sm:w-[165px] sm:h-[140px] lg:w-[180px] lg:h-[135px] object-cover rounded-[28px] flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />

      {/* Text */}
      <div className="relative z-10 w-full min-w-0">
        <h2 className="font-heading font-extrabold text-black group-hover:text-black text-[22px] sm:text-[20px] lg:text-[22px] leading-tight transition-colors duration-500 break-words">
          {item.title}
        </h2>

        <p className="mt-2 text-black group-hover:text-black text-left text-[15px] sm:text-[15px] lg:text-[16px] leading-[21px] transition-colors duration-500">
          {item.description}
        </p>

        <a
          href="#"
          className="group/link relative inline-flex mt-4 text-[12px] sm:text-[12px] font-medium text-black group-hover:text-black overflow-hidden transition-colors duration-500"
        >
          <span>Learn More</span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F5BC18] group-hover:bg-white transition-colors duration-500"></span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#67E8F2] translate-x-[-100%] group-hover/link:translate-x-0 transition-transform duration-300"></span>
        </a>
      </div>

      {/* Bottom Right Hover Image */}
      <img
        src={item.hoverImage}
        alt=""
        className="pointer-events-none absolute right-0 bottom-0 z-0 w-[65px] sm:w-[82px] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
      />
    </div>
  ))}
</div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative overflow-hidden min-h-[130px] sm:min-h-[180px] lg:min-h-[460px] px-4 sm:px-7 flex ${
                  index === 0
                    ? "items-start justify-start"
                    : index === 1
                    ? "items-center justify-start"
                    : index === 2
                    ? "items-center justify-start lg:pt-24"
                    : "items-end justify-start"
                } ${
                  index !== 0
                    ? "lg:border-l lg:border-white/18"
                    : ""
                } ${
                  index > 1
                    ? "sm:border-t sm:border-white/18 lg:border-t-0"
                    : ""
                }`}
              >
                <div
                  className={`stats-slide-content ${
                    showStatsAnimation
                      ? "stats-slide-show"
                      : "stats-slide-hide"
                  }`}
                  style={{
                    transitionDelay: showStatsAnimation
                      ? `${index * 0.18}s`
                      : `${(stats.length - index - 1) * 0.12}s`,
                  }}
                >
                  <h1 className="text-white font-bold text-[36px] sm:text-[42px] md:text-[46px] leading-none">
                    {stat.number}
                  </h1>

                  <p className="mt-3 text-white/70 text-[11px] sm:text-[15px] leading-[18px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;