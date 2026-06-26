import React from "react";

const PurposeSection = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-4">
      <div className="max-w-[900px] mx-auto text-center">
        
        {/* Heading */}
        <h2 className="font-heading font-extrabold leading-[1.15] text-black text-[30px] sm:text-[38px] md:text-[46px] lg:text-[55px]">
          Higher Purpose of
        </h2>

        <h3 className="font-heading font-extrabold leading-[1.15] text-[#1671DE] text-[30px] sm:text-[38px] md:text-[46px] lg:text-[55px] mt-1">
          FLQ Knowledge Foundation
        </h3>

        {/* Description */}
        <p className="max-w-[720px] mx-auto mt-7 text-black text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] font-normal">
          Building stronger families, stronger societies, and a stronger nation by
          nurturing a financially disciplined generation.
        </p>

        {/* Button */}
        <a
          href="/about"
          className="group relative inline-flex items-center justify-center mt-5 h-[38px] px-6 rounded-full overflow-hidden bg-[#F5BC18] text-black shadow-[0_3px_0_#111] transition-all duration-300 hover:translate-y-[2px] hover:shadow-[0_1px_0_#111]"
        >
          <span className="absolute inset-0 bg-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

          <span className="relative z-10 text-[14px] sm:text-[15px] font-medium transition-colors duration-300 group-hover:text-[#F5BC18]">
           About FLQ Knowledge Foundation
          </span>
        </a>
      </div>
    </section>
  );
};

export default PurposeSection;