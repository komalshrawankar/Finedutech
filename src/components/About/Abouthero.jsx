import React from "react";
import heroBg from "../../assets/images/background-image.png";
import { Link } from "react-router-dom";

const Abouthero = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative w-full min-h-[calc(100vh-160px)] flex items-center justify-center px-4 sm:px-6 lg:px-10">
        
        {/* HERO WRAPPER */}
        <div className="relative w-full max-w-[800px] aspect-[16/8] flex items-center justify-center">
          
          {/* Background Image */}
          <img
            src={heroBg}
            alt="Financial education hero"
            className="absolute  object-contain object-center select-none pointer-events-none"
          />

          {/* Text Content */}
          {/* Text Content */}
<div className="absolute left-[19%] top-[22%] z-20 max-w-[260px] min-[480px]:left-[9%] min-[480px]:top-[21%] min-[480px]:max-w-[330px] sm:left-[12%] sm:top-[19%] sm:max-w-[430px] md:left-[10%] md:top-[18%] md:max-w-[520px] lg:left-[10%] lg:top-[20%] lg:max-w-[640px]">
  <h1 className="hero-title-font">
    <span className="block hero-left-animate hero-delay-1 text-black  text-[15px] sm:text-[42px] md:text-[52px] lg:text-[64px]">
      Financial Skills
    </span>

    <span className="block hero-left-animate hero-delay-2 text-black text-[15px] sm:text-[42px] md:text-[52px] lg:text-[64px]">
      Stronger Kids
    </span>

    <span className="block hero-right-animate hero-delay-3 text-[#007BFF] text-[15px] sm:text-[42px] md:text-[52px] lg:text-[64px]">
      Brighter Futures
    </span>
  </h1>

  <p className="mt-3 max-w-[180px] text-[8px] leading-[1.25] text-black sm:mt-4 sm:max-w-[430px] sm:text-[12px] md:text-[16px] lg:max-w-[480px]">
    Finedutech empowers kids with literacy and life skills to build
    confidence, make smart choices, <br />and create a better tomorrow.
  </p>

  <button className="discover-btn mt-4 sm:mt-5 ">
    <span><Link to="/fin-edu-quest" >Discover what we do</Link></span>
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default Abouthero;