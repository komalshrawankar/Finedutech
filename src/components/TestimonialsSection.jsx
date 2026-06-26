import React, { useEffect, useRef, useState } from "react";

// Replace these image paths
import schoolLogo1 from "../assets/images/podar.png";
import schoolLogo2 from "../assets/images/t22.png";
import schoolLogo3 from "../assets/images/t33.jpg";

import avatar1 from "../assets/images/user.png";
import avatar2 from "../assets/images/user.png";
import avatar3 from "../assets/images/user.png";

const testimonials = [
  {
    logo: schoolLogo1,
    quote:
      "She is very clear about 50 30 20 rule and she do it now with her pocket money.",
    
    name: "Kunal Shah",
    role: "Parent",
  },
  {
    logo: schoolLogo2,
    quote:
      "She started using money carefully and started explaining the importance of financial management to everyone",
   
    name: "Nikhil Joshi",
    role: "Parent",
  },
  {
    logo: schoolLogo3,
    quote:
      "We sincerely thank the school for introducing Fin Edu Quest to our children. It is by far one of the most meaningful, useful, and practical assessments my child has taken. Beyond academics, it helps children develop essential financial life skills and money management habits that will benefit them throughout their lives.",
   
    name: "Yash Thakur",
    role: "Parent",
  },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      const scrolled = -rect.top;

      const currentProgress = clamp(scrolled / totalScroll, 0, 1);
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const getCardStyle = (index) => {
  // First card always visible
  if (index === 0) {
    return {
      transform: "translateY(0px) rotate(0deg)",
      opacity: 1,
      zIndex: 10,
    };
  }

  // Second card comes over first on scroll
  if (index === 1) {
    const p = clamp((progress - 0.15) / 0.35, 0, 1);

    const y = 520 - p * 440;
    const rotate = -8 + p * 3;

    return {
      transform: `translateY(${y}px) rotate(${rotate}deg)`,
      opacity: p,
      zIndex: 20,
    };
  }

  // Third card comes over second on scroll
  if (index === 2) {
    const p = clamp((progress - 0.5) / 0.35, 0, 1);

    const y = 620 - p * 500;
    const rotate = 8 - p * 3;

    return {
      transform: `translateY(${y}px) rotate(${rotate}deg)`,
      opacity: p,
      zIndex: 30,
    };
  }

  return {};
};

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white h-[220vh]  "
    >
      {/* Sticky section */}
     <div className="sticky top-[80px] flex items-start justify-center overflow-hidden">
        <div className="w-full mx-auto">
         <div className="bg-[#2D2D2D] rounded-[28px] sm:rounded-[36px] md:rounded-[42px] px-4 sm:px-6 md:px-10 lg:px-16 pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
            
            {/* Heading */}
            <div className="text-center mb-7 sm:mb-9">
              <h2 className="font-heading font-extrabold text-white leading-[1.25] text-[26px] sm:text-[36px] md:text-[44px] lg:text-[50px]">
                What Parents
                <br />
                {" "}
                <span className="text-[#67E8F2]">
                  Say About Us
                </span>
              </h2>
            </div>

            {/* Fixed animation area */}
          <div className="relative mx-auto w-full max-w-[680px] h-[380px] sm:h-[200px] md:h-[400px] overflow-visible">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  style={getCardStyle(index)}
                 className="absolute left-0 right-0 top-0 mx-auto transition-all duration-150 ease-out"
                >
                  <div className="w-full min-h-[230px] sm:min-h-[260px] md:min-h-[290px] bg-[#141414] rounded-[18px] sm:rounded-[22px] px-5 sm:px-7 md:px-9 py-8 sm:py-10 md:py-12 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 md:gap-8 items-center">
                      
                      {/* School Logo */}
                      <div className="flex justify-center md:justify-start">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-[135px] sm:w-[160px] md:w-[185px] h-auto object-contain"
                        />
                      </div>

                      {/* Text Content */}
                      <div className="text-center md:text-left">
                        <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] md:leading-[22px]">
                          {item.quote}
                        </p>

                        <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
                          

                          <div>
                            <h4 className="text-white font-bold text-[12px] sm:text-[14px] leading-tight">
                              {item.name}
                            </h4>

                            <p className="text-white/70 text-[10px] sm:text-[12px] leading-tight mt-1">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;