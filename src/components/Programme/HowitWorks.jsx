import React from "react";
import {
  FaAward,
  FaBookOpen,
  FaClipboardList,
  FaFileAlt,
  FaUserPlus,
} from "react-icons/fa";

import arrowImg from "../../assets/images/arrow.png";

const steps = [
  { 
    number: "1",
    title: "School Registration",
    description: "School signs up for the program",
    Icon: FaClipboardList,
    className: "lg:left-[10%] lg:top-[150px]",
  },
  {
    number: "2",
    title: "Student Enrollment",
    description: "Students register via school",
    Icon: FaUserPlus,
    className: "lg:left-[29.1%] lg:top-[220px]",
  },
  {
    number: "3",
    title: "Study Material",
    description: "Access grade-wise books",
    Icon: FaBookOpen,
    className: "lg:left-[45.5%] lg:top-[150px]",
  },
  {
    number: "4",
    title: "Examination",
    description: "National level assessment",
    Icon: FaFileAlt,
    className: "lg:left-[60%] lg:top-[230px]",
  },
  {
    number: "5",
    title: "Awards",
    description: "Certificates & recognition",
    Icon: FaAward,
    className: "lg:left-[80%] lg:top-[150px]",
  },
];

const HowitWorks = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFEFE4] px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-15 mb-8">
      <img
        src={arrowImg}
        alt=""
        className="pointer-events-none absolute right-[5.5%] top-8 hidden w-[118px] select-none opacity-55 md:block lg:top-[58px] lg:w-[141px]"
      />

      <div className="relative mx-auto max-w-[1120px] lg:h-[475px]">
        <div className="relative z-10 text-center lg:pt-[58px]">
          <p className="normal text-[15px] font-bold leading-none text-[#1671DE]">
            How It Works
          </p>
          <h2 className="mt-5 font-heading text-[34px] leading-[1.05] text-black sm:text-[42px] lg:mt-4 lg:text-[45px]">
            A simple <span className="text-[#1671DE]">five-step</span> journey
          </h2>
        </div>

        <div className="relative mt-10 grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:mt-0 lg:block">
          <svg
            className="pointer-events-none absolute left-[9.8%] top-[126px] hidden h-[190px] w-[80.5%] lg:block"
            viewBox="0 0 900 190"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 34 40 C 122 0 150 70 188 112 C 260 154 314 32 392 40 C 490 50 475 145 575 118 C 650 95 655 15 758 42"
              stroke="#1671DE"
              strokeWidth="2"
              strokeDasharray="13 15"
              strokeLinecap="round"
            />
          </svg>

          {steps.map(({ number, title, description, Icon, className }) => (
            <article
              key={title}
              className={`relative z-10 flex flex-col items-center text-center lg:absolute lg:w-[190px] lg:-translate-x-1/2 ${className}`}
            >
              <div className="relative flex h-[78px] w-[78px] items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(255,195,64,0.08)]">
                <span className="absolute -left-[2px] -top-[2px] flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FFC83D] normal text-[12px] font-bold leading-none text-black">
                  {number}
                </span>
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#1671DE] text-white">
                  <Icon className="text-[20px]" />
                </span>
              </div>

              <h3 className="mt-4 font-heading text-[18px] leading-tight text-black lg:mt-5 lg:text-[18px]">
                {title}
              </h3>
              <p className="normal mt-3 max-w-[170px] text-[13px] leading-[1.35] text-black">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
