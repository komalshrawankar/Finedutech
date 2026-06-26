import React, { useEffect, useRef, useState } from "react";

import img1 from "../assets/images/init1.png";
import img2 from "../assets/images/init2.png";
import img3 from "../assets/images/init3.png";
import img4 from "../assets/images/init4.png";

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

const InitiativesSection = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

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

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto">
        <div className="bg-[#2D2D2D] rounded-[32px] sm:rounded-[40px] px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-14 md:py-16 overflow-hidden">
          
          <div className="text-center mb-10 sm:mb-12">
            <span className="block text-[#67E8F2] text-[10px] sm:text-[15px] font-semibold mb-2">
              Program Highlights
            </span>

            <h2 className="font-heading font-extrabold text-white text-[30px] sm:text-[38px] md:text-[46px] leading-[1.1]">
              Our <span className="text-[#67E8F2]">Initiatives</span>
            </h2>

            <p className="max-w-[620px] mx-auto mt-4 text-white/80 text-[13px] sm:text-[15px] leading-[22px]">
              A comprehensive, NEP 2020-aligned Financial Literacy Program for
              all age groups, designed for easy implementation with minimal
              teacher burden.
            </p>
          </div>

          <div className="max-w-[960px] mx-auto flex flex-col gap-5 sm:gap-6">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className={`w-full flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } ${startAnimation ? "initiative-card-animate" : "opacity-0"}`}
                style={{
                  animationDelay: `${index * 0.12}s`,
                }}
              >
                <div className="group relative overflow-hidden bg-white hover:bg-[#F4BF23] rounded-[20px] sm:rounded-[20px] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full max-w-[520px] min-h-[200px] transition-all duration-500 ease-out">
                  
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 w-full h-[180px] sm:w-[170px] sm:h-[135px] object-contain flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="relative z-10 w-full min-w-0 sm:flex-1">
                    <h2 className="font-heading font-extrabold text-black text-[18px] sm:text-[20px] leading-tight transition-colors duration-500">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-left text-black text-[13px] sm:text-[14px] leading-[20px] transition-colors duration-500">
                      {item.description}
                    </p>

                    <a
                      href="#"
                      className="group/link relative inline-flex mt-3 text-[11px] sm:text-[12px] font-medium text-black overflow-hidden transition-colors duration-500"
                    >
                      <span>Learn More</span>
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F5BC18] group-hover:bg-white transition-colors duration-500"></span>
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#67E8F2] translate-x-[-100%] group-hover/link:translate-x-0 transition-transform duration-300"></span>
                    </a>
                  </div>

                  <img
                    src={item.hoverImage}
                    alt=""
                    className="pointer-events-none absolute right-0 bottom-0 z-0 w-[70px] sm:w-[82px] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
                  />
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