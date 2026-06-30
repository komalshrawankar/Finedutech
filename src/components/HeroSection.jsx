import React from "react";
import { Link } from "react-router-dom";

import heroBg from "../assets/images/hero-bg.png";
import arrowImg from "../assets/images/heo-arrow.png";
import arrowImg2 from "../assets/images/hero-star.png";
import lightImg from "../assets/images/hero-light.png";
import starImg from "../assets/images/hero-star.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative w-full min-h-[520px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[calc(100vh-120px)] flex items-center justify-center px-3 pt-2 pb-8 sm:px-6 sm:py-10 lg:px-10 lg:py-0">
        <div className="relative w-full max-w-[430px] min-[480px]:max-w-[560px] sm:max-w-[720px] md:max-w-[900px] lg:max-w-[1050px] aspect-[829/691] sm:aspect-[829/620] md:aspect-[16/9] lg:aspect-[16/8] flex items-center justify-center">
          
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
            className="absolute left-[3%] top-[4%] w-[42px] min-[480px]:w-[54px] sm:left-[4%] sm:top-[5%] sm:w-[68px] md:left-[2%] md:top-[4%] md:w-[70px] lg:left-[1%] lg:top-[2%] animate-spin-soft select-none pointer-events-none"
          />

          <img
            src={arrowImg}
            alt=""
            className="absolute left-[5%] bottom-[9%] w-[38px] min-[480px]:w-[48px] sm:left-[7%] sm:bottom-[7%] sm:w-[62px] md:w-[78px] lg:left-[8%] lg:bottom-[5%] lg:w-[85px] animate-float-reverse select-none pointer-events-none"
          />

          <img
            src={lightImg}
            alt=""
            className="absolute right-[11%] top-[14%] w-[24px] min-[480px]:w-[30px] sm:right-[12%] sm:top-[44%] sm:w-[40px] md:w-[48px] lg:right-[12%] lg:top-[42%] lg:w-[52px] animate-pulse-pop select-none pointer-events-none"
          />

          <img
            src={starImg}
            alt=""
            className="absolute left-[13%] top-[25%] w-[14px] min-[480px]:w-[17px] sm:left-[12%] sm:top-[23%] sm:w-[22px] md:w-[26px] lg:left-[12%] lg:top-[22%] lg:w-[28px] animate-spin-soft select-none pointer-events-none"
          />

          <img
            src={starImg}
            alt=""
            className="absolute right-[6%] top-[8%] w-[16px] min-[480px]:w-[22px] sm:right-[5%] sm:top-[7%] sm:w-[34px] md:right-[4%] md:top-[6%] md:w-[46px] lg:w-[55px] animate-twinkle select-none pointer-events-none"
          />

          {/* Text Content */}
          <div className="absolute left-[8%] top-[22%] z-20 max-w-[260px] min-[480px]:left-[9%] min-[480px]:top-[21%] min-[480px]:max-w-[330px] sm:left-[12%] sm:top-[19%] sm:max-w-[430px] md:left-[10%] md:top-[18%] md:max-w-[520px] lg:left-[10%] lg:top-[20%] lg:max-w-[640px]">
            <h1 className="hero-title-font">
              <span className="block hero-left-animate hero-delay-1 text-black text-[30px] min-[380px]:text-[34px] min-[480px]:text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
                India’s first
              </span>

              <span className="block hero-left-animate hero-delay-2 text-black text-[30px] min-[380px]:text-[34px] min-[480px]:text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
                financial Literacy
              </span>

              <span className="block hero-right-animate hero-delay-3 text-[#007BFF] text-[30px] min-[380px]:text-[34px] min-[480px]:text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
                Olympiad
              </span>
            </h1>

            <h2 className="mt-2 max-w-[220px] text-[13px] leading-[1.45] text-black min-[480px]:max-w-[280px] min-[480px]:text-[15px] sm:mt-4 sm:max-w-[430px] sm:text-[16px] md:text-[18px] lg:max-w-[480px] animate-fade-up-delay">
              Right from <span className="font-bold">Class 1</span>
            </h2>

            <button className="discover-btn mt-4 sm:mt-5 ">
                <span><Link to="/fin-edu-quest" >Discover what we do</Link></span>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
