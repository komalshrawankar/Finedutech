import React from "react";
import { FaCalendarAlt, FaInfoCircle, FaSchool } from "react-icons/fa";
import mascotBoy from "../../assets/images/boy.png";

const examDates = [
  {
    date: "11",
    month: "August 2026",
    day: "Tuesday",
    bgColor: "bg-[#7BC399]",
    textColor: "text-black",
  },
  {
    date: "09",
    month: "September 2026",
    day: "Wednesday",
    bgColor: "bg-[#0B3B69]",
    textColor: "text-white",
  },
  {
    date: "08",
    month: "October 2026",
    day: "Thursday",
    bgColor: "bg-[#FFC533]",
    textColor: "text-black",
  },
];

const ExamDates = () => {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-10">
      <style>
        {`
          @keyframes examFadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes mascotFloat {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-8px) rotate(1.5deg);
            }
          }

          @keyframes softShine {
            0% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(120%);
            }
          }

          .exam-date-card {
            animation: examFadeUp 0.8s ease-out both;
          }

          .exam-date-item {
            animation: examFadeUp 0.7s ease-out both;
          }

          .exam-mascot {
            animation: mascotFloat 3.8s ease-in-out infinite;
          }

          .shine-line {
            animation: softShine 3.8s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .exam-date-card,
            .exam-date-item,
            .exam-mascot,
            .shine-line {
              animation: none;
            }
          }
        `}
      </style>

      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-center gap-6 lg:flex-row lg:items-end lg:gap-0">
        <div className="relative z-20 flex w-full justify-center lg:w-[230px] lg:justify-end">
          <img
            src={mascotBoy}
            alt="Fin-Edu Quest mascot pointing towards exam dates"
            className="exam-mascot w-[150px] object-contain sm:w-[185px] lg:-mr-7 lg:w-[215px]"
          />
        </div>

        <div className="exam-date-card relative z-10 w-full max-w-[860px] overflow-hidden rounded-[26px] border border-[#1671DE]/20 bg-white px-4 py-5 text-left shadow-[0_22px_60px_rgba(22,113,222,0.16)] sm:px-7 sm:py-7 lg:px-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#EAF4FF]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#FFF8E2]" />
          <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 rounded-full border border-[#1671DE]/10" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#1671DE]">
                <FaCalendarAlt className="text-[18px]" />
              </span>

              <div>
                <p className="normal text-[12px] font-bold uppercase tracking-[0.18em] text-[#1671DE] sm:text-[13px]">
                  Exam Schedule
                </p>

                <h3 className="normal mt-1 text-[21px] font-extrabold leading-tight text-[#0B3B69] sm:text-[25px] lg:text-[28px]">
                  Financial Literacy Olympiad Exam Date for Academic Year
                  2026-2027
                </h3>
              </div>
            </div>

            <div className="relative mt-5 h-[1px] overflow-hidden rounded-full bg-[#E6EEF8]">
              <div className="shine-line absolute left-0 top-0 h-full w-1/2 bg-[#1671DE]/40" />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {examDates.map((item, index) => (
                <div
                  key={index}
                  className="exam-date-item group flex items-center gap-3 rounded-[18px] border border-[#E6EEF8] bg-[#FAFCFF] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#1671DE]/40 hover:shadow-[0_14px_32px_rgba(22,113,222,0.14)] md:flex-col md:items-start md:p-4"
                  style={{
                    animationDelay: `${index * 0.14}s`,
                  }}
                >
                  <div
                    className={`flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[16px] ${item.bgColor} ${item.textColor} transition-transform duration-300 group-hover:scale-105 sm:h-[76px] sm:w-[76px]`}
                  >
                    <span className="normal text-[31px] font-extrabold leading-none sm:text-[35px]">
                      {item.date}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h4 className="normal text-[21px] font-extrabold uppercase leading-tight text-black sm:text-[27px] md:text-[22px] lg:text-[24px]">
                      {item.month}
                    </h4>

                    <p className="normal mt-1 text-[14px] font-medium uppercase tracking-[0.12em] text-[#171717]/80 sm:text-[16px]">
                      {item.day}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.08fr]">
              <div className="flex items-start gap-3 rounded-[16px] bg-[#EAF4FF] px-4 py-4">
                <span className="mt-1 shrink-0 text-[#1671DE]">
                  <FaSchool />
                </span>

                <p className="normal text-[15px] font-bold leading-[1.55] text-[#0B3B69] sm:text-[16px]">
                  Schools should select any one of the above dates as per their
                  convenience.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-[16px] border border-[#FFC533]/50 bg-[#FFF8E2] px-4 py-4">
                <span className="mt-1 shrink-0 text-[#D99A00]">
                  <FaInfoCircle />
                </span>

                <p className="normal text-[14px] leading-[1.6] text-[#4B3A00] sm:text-[15px]">
                  <strong>Note:</strong> Each school should choose only one exam
                  date from the given options and communicate the selected date
                  in advance for smooth exam coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamDates;
