import React from "react";

import heroBg from "../assets/images/hero-bg.png";
import arrowImg from "../assets/images/heo-arrow.png";
import arrowImg2 from "../assets/images/hero-star.png";
import lightImg from "../assets/images/hero-light.png";
import starImg from "../assets/images/hero-star.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative w-full min-h-[calc(100vh-120px)] flex items-center justify-center px-4 sm:px-6 lg:px-10">
        <div className="relative w-full max-w-[1050px] aspect-[16/8] flex items-center justify-center">
          
          {/* Main Background Image */}
          <img
            src={heroBg}
            alt="Financial education hero"
            className="absolute w-full h-full object-contain object-center select-none pointer-events-none"
          />

          {/* Animated Decorative Images */}
          <img
            src={arrowImg2}
            alt=""
            className="absolute left-[1%] top-[2%] w-[60px] sm:w-[90px] md:w-[70px] animate-spin-soft select-none pointer-events-none"
          />

          <img
            src={arrowImg}
            alt=""
            className="absolute left-[8%] bottom-[5%] w-[45px] sm:w-[65px] md:w-[85px] animate-float-reverse select-none pointer-events-none"
          />

          <img
            src={lightImg}
            alt=""
            className="absolute right-[12%] top-[42%] w-[28px] sm:w-[40px] md:w-[52px] animate-pulse-pop select-none pointer-events-none"
          />

          <img
            src={starImg}
            alt=""
            className="absolute left-[12%] top-[22%] w-[16px] sm:w-[22px] md:w-[28px] animate-spin-soft select-none pointer-events-none"
          />

          <img
            src={starImg}
            alt=""
            className="absolute right-[4%] top-[6%] w-[14px] sm:w-[20px] md:w-[55px] animate-twinkle select-none pointer-events-none"
          />

          {/* Text Content */}
          <div className="absolute left-[1%] top-[18%] z-20 max-w-[430px] sm:left-[12%] sm:top-[17%] md:max-w-[520px] lg:left-[10%] lg:top-[20%] lg:max-w-[640px]">
            <h1 className="hero-title-font">
              <span className="block hero-left-animate hero-delay-1 text-black text-[22px] sm:text-[42px] md:text-[52px] lg:text-[64px]">
                India’s first
              </span>

              <span className="block hero-left-animate hero-delay-2 text-black text-[22px] sm:text-[42px] md:text-[52px] lg:text-[64px]">
                financial Literacy
              </span>

              <span className="block hero-right-animate hero-delay-3 text-[#007BFF] text-[22px] sm:text-[42px] md:text-[52px] lg:text-[64px]">
                Olympiad
              </span>
            </h1>

            <h2 className="mt-3 max-w-[180px] text-[12px] leading-[1.55] text-black sm:mt-4 sm:max-w-[430px] sm:text-[14px] md:text-[18px] lg:max-w-[480px] animate-fade-up-delay">
              Right from <span className="font-bold">Class 1</span>
            </h2>

            <button className="discover-btn mt-4 sm:mt-5 animate-button-bounce">
              <span>Discover what we do</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;