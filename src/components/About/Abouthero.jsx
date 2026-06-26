import React from "react";
import heroBg from "../../assets/images/backgroung-bg.png";

const Abouthero = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative w-full min-h-[calc(100vh-120px)] flex items-center justify-center px-4 sm:px-6 lg:px-10">
        
        {/* HERO WRAPPER */}
        <div className="relative w-full max-w-[1050px] aspect-[16/8] flex items-center justify-center">
          
          {/* Background Image */}
          <img
            src={heroBg}
            alt="Financial education hero"
            className="absolute  object-contain object-center select-none pointer-events-none"
          />

          {/* Text Content */}
          {/* Text Content */}
<div className="absolute left-[1%] top-[18%] z-20 max-w-[430px] sm:left-[12%] sm:top-[17%] md:max-w-[520px] lg:left-[10%] lg:top-[20%] lg:max-w-[640px]">
  <h1 className="hero-title-font">
    <span className="block hero-left-animate hero-delay-1 text-black text-[22px] sm:text-[42px] md:text-[52px] lg:text-[64px]">
      Financial Skills
    </span>

    <span className="block hero-left-animate hero-delay-2 text-black text-[22px] sm:text-[42px] md:text-[52px] lg:text-[64px]">
      Stronger Kids
    </span>

    <span className="block hero-right-animate hero-delay-3 text-[#007BFF] text-[22px] sm:text-[42px] md:text-[52px] lg:text-[64px]">
      Brighter Futures
    </span>
  </h1>

  <p className="mt-3 max-w-[180px] text-[10px] leading-[1.55] text-black sm:mt-4 sm:max-w-[430px] sm:text-[12px] md:text-[16px] lg:max-w-[480px]">
    Finedutech empowers kids with literacy and life skills to build
    confidence, make smart choices, and create a better tomorrow.
  </p>

  <button className="discover-btn mt-4 sm:mt-5 ">
    <span>Discover what we do</span>
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default Abouthero;