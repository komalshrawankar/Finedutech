import React from "react";
import heroBg from "../assets/backgroung-bg.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative w-full min-h-[calc(100vh-120px)] flex items-center justify-center px-4 sm:px-6 lg:px-10">
        
        {/* HERO WRAPPER */}
        <div className="relative w-full max-w-[1050px] aspect-[16/8] flex items-center justify-center">
          
          {/* Background Image */}
          <img
            src={heroBg}
            alt="Financial education hero"
            className="absolute inset-0 w-full h-full object-contain object-center select-none pointer-events-none"
          />

          {/* Text Content */}
          <div className="absolute z-10 left-[14%] top-[22%] sm:left-[15%] md:left-[16%] lg:left-[17%]">
            
            <h1 className="hero-title-font">
              <span className="block hero-left-animate hero-delay-1 text-black text-[28px] sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[64px]">
                Financial Skills
              </span>

              <span className="block hero-left-animate hero-delay-2 text-black text-[28px] sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[64px]">
                Stronger Kids
              </span>

              <span className="block hero-right-animate hero-delay-3 text-[#007BFF] text-[28px] sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[64px]">
                Brighter Futures
              </span>
            </h1>

            <p className="mt-3 max-w-[490px] text-black text-[9px] sm:text-[10px] md:text-[11px] lg:text-[18px] leading-[1.45]">
              Finedutech empowers kids with literacy and life skills to build
              confidence, make smart choices, and create a better tomorrow.
            </p>

            <a
              href="#discover"
              className="group relative mt-4 inline-flex h-[30px] sm:h-[34px] px-5 sm:px-6 rounded-full overflow-hidden bg-[#67E8F2] text-black shadow-[0_3px_0_#111] items-center justify-center transition-all duration-300 hover:translate-y-[2px] hover:shadow-[0_1px_0_#111]"
            >
              <span className="absolute inset-0 bg-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

              <span className="relative z-10 text-[11px] sm:text-[13px] font-medium transition-colors duration-300 group-hover:text-[#67E8F2]">
                Discover what we do
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;