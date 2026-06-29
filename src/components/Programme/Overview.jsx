import React from "react";

import overviewImg from "../../assets/Overview.png";

const overviewPoints = [
  "Hands-on activities and experiential learning",
  "Grade-wise curriculum aligned with NEP 2020",
  "Interactive games, exercises, and quizzes",
  "Measurable learning outcomes and assessments",
  "National recognition through certificates and awards",
];

const Overview = () => {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-[1120px] items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:gap-14">
        <div className="flex justify-center md:justify-start">
          <img
            src={overviewImg}
            alt="Student learning budgeting with calculator and savings"
            className="w-full max-w-[300px] object-contain sm:max-w-[360px] md:max-w-[390px] lg:max-w-[420px]"
          />
        </div>

        <div className="mx-auto max-w-[560px] text-center md:mx-0 md:text-left">
          <h2 className="font-heading text-[34px] leading-[1.05] text-black sm:text-[42px] md:text-[46px] lg:text-[50px]">
            Program <span className="text-[#1671DE]">Overview</span>
          </h2>

          <p className="normal mt-6 text-[15px] leading-[1.65] text-black sm:text-[16px] md:text-[15px] lg:text-[16px]">
            Fin-Edu Quest provides age-appropriate, structured programs to
            empower students with practical money skills and responsible
            decision-making abilities. Programs are hands-on, interactive, and
            designed to{" "}
            <span className="font-semibold">
              engage students while supporting teachers.
            </span>
          </p>

          <ul className="normal mt-5 space-y-1.5 text-left text-[14px] leading-[1.55] text-black sm:text-[15px] md:text-[14px] lg:text-[15px]">
            {overviewPoints.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-black" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Overview;
