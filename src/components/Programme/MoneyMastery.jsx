import React from "react";
import { FaBookOpen, FaCheck, FaCheckCircle } from "react-icons/fa";

import kit1 from "../../assets/images/kit1.png";
import kit2 from "../../assets/images/kit2.png";
import kit3 from "../../assets/images/kit3.png";
import kit4 from "../../assets/images/kit4.png";
import kit5 from "../../assets/images/kit5.png";
import phero2 from "../../assets/images/phero2.png";

const nepPoints = [
  "Experiential Learning",
  "Activity-Based Education",
  "Life Skills Development",
  "Critical Thinking",
  "Real-World Application of Knowledge",
  "Holistic Student Development",
];

const kitItems = [
  {
    title: "Hands-On Activity Material",
    image: kit1,
    description:
      "Turn complex theories into playtime. Our activity materials are designed to keep entire classes engaged through physical interaction.",
    points: [
      "Sized for groups of up to 40 students per session.",
      "Durable, high-quality board games and token systems.",
      "Simulates real-world scenarios like shopping and saving.",
    ],
  },
  {
    title: "Financial Literacy Story Book",
    image: kit2,
    description:
      "Narrative-driven learning that sticks. Meet a cast of relatable characters who face everyday financial choices.",
    points: [
      "Age-appropriate vocabulary for students aged 6-11.",
      "Beautifully illustrated chapters with hidden lessons.",
      "Includes reflection questions at the end of every story.",
    ],
  },
  {
    title: "Question Bank & Assessment Tools",
    image: kit3,
    description:
      "Validate progress with fun, non-intimidating checkpoints that ensure concepts are truly mastered.",
    points: [
      "Over 200+ curated questions across all grade levels.",
      "Interactive quiz formats to reduce test anxiety.",
      "Progress tracking sheets for individual student growth.",
    ],
  },
  {
    title: "Teacher Instruction Manual",
    image: kit4,
    description:
      "Empowering educators to deliver world-class financial education without the need for prior finance expertise.",
    points: [
      "Scripted lesson plans and activity walkthroughs.",
      "Time-management tips for 40-minute classroom slots.",
      "Troubleshooting common student questions with ease.",
    ],
  },
  {
    title: "Star Performer Bands",
    image: kit5,
    description:
      "Gamify achievement with tangible rewards. These bands serve as a badge of honor for students who excel in financial tasks.",
    points: [
      "High-quality silicone bands in tiered colors.",
      "Drives positive reinforcement and peer motivation.",
      "A physical reminder of their growing money mastery.",
    ],
  },
];

const MoneyMastery = () => {
  return (
    <main className="w-full overflow-hidden bg-white">
      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1120px] items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="normal text-[12px] font-bold leading-none text-[#1671DE]">
              Money Mastery Program
            </p>

            <h1 className="mt-5 font-heading text-[36px] leading-[1.16] text-black min-[420px]:text-[42px] sm:text-[52px] sm:leading-[1.2] md:text-[58px] lg:text-[52px] xl:text-[56px]">
              Activity-Based Financial
              <br className="hidden sm:block" />
              Literacy Program for
              <br className="hidden sm:block" />
              <span className="text-[#1671DE]">Classes 1-5</span>
            </h1>

            <p className="normal mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.58] text-[#1d1d1d] sm:text-[16px] lg:mx-0">
              The <strong>Money Mastery Program</strong> is a comprehensive,
              NEP 2020-aligned financial literacy curriculum designed to help
              young learners develop essential money habits through hands-on
              activities, storytelling, games, and real-world experiences. Built
              on the principles of <strong>Experiential Learning</strong>, the
              program transforms financial concepts into engaging classroom
              experiences, enabling students to learn by doing rather than
              memorizing.
            </p>

            <h2 className="normal mt-6 text-[18px] font-bold text-black sm:text-[20px]">
              NEP 2020 Aligned
            </h2>
            <p className="normal mt-4 max-w-[550px] text-[14px] leading-[1.55] text-[#1d1d1d] sm:text-[15px]">
              The Money Mastery Program supports the vision of the National
              Education Policy (NEP) 2020 by promoting:
            </p>

            <ul className="normal mx-auto mt-4 max-w-[560px] space-y-2.5 text-left text-[14px] leading-tight text-[#1d1d1d] sm:text-[15px] lg:mx-0">
              {nepPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-[-1px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 border-[#1671DE] text-[#1671DE]">
                    <FaCheck className="text-[9px]" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <img
              src={phero2}
              alt="Money Mastery classroom financial literacy kit"
              className="w-full max-w-[520px] rounded-[14px] object-cover lg:max-w-[560px]"
            />

            <div className="mt-8 w-full max-w-[560px] rounded-[14px] border border-[#1671DE] bg-[#EAF4FF] px-5 py-5 text-left sm:px-6">
              <h2 className="normal text-[20px] font-bold leading-tight text-[#1671DE] sm:text-[22px]">
                Preparing Children for Life, Not Just Exams
              </h2>
              <p className="normal mt-4 text-[14px] leading-[1.55] text-[#1671DE] sm:text-[15px]">
                Money Mastery equips young learners with practical financial
                life skills that will help them make smarter choices, become
                responsible citizens, and build a strong foundation for their
                future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 pt-6 text-center sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[560px]">
          <h2 className="font-heading text-[34px] leading-tight text-black sm:text-[42px] lg:text-[46px]">
            Why Money <span className="text-[#1671DE]">Mastery?</span>
          </h2>
          <p className="normal mt-5 text-[14px] leading-[1.55] text-[#1d1d1d] sm:text-[15px]">
            Financial habits are formed early. Money Mastery introduces children
            to age-appropriate concepts such as saving, spending, budgeting,
            needs vs. wants, goal setting, entrepreneurship, and responsible
            decision-making in a fun and meaningful way.
          </p>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-[920px]">
          <h2 className="text-center font-heading text-[34px] leading-tight text-black sm:text-[42px] lg:text-[46px]">
            What's Included in <span className="text-[#1671DE]">Every Kit?</span>
          </h2>

          <div className="mt-8 space-y-9">
            {kitItems.map((item, index) => {
              const isReversed = index % 2 === 1;

              return (
                <article
                  key={item.title}
                  className="grid items-center gap-6 rounded-[18px] bg-[#EEF5FF] p-5 shadow-[0_10px_28px_rgba(22,113,222,0.12)] md:grid-cols-2 md:p-6"
                >
                  <div className={isReversed ? "md:order-2" : ""}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-auto w-full rounded-[10px] object-cover"
                    />
                  </div>

                  <div className={isReversed ? "md:order-1" : ""}>
                    <h3 className="normal text-[24px] font-bold leading-tight text-[#1671DE] sm:text-[28px]">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="normal mt-5 text-[14px] leading-[1.6] text-[#596274] sm:text-[15px]">
                      {item.description}
                    </p>

                    <ul className="normal mt-5 space-y-2.5 text-[12px] leading-snug text-[#334155] sm:text-[13px]">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <FaCheckCircle className="mt-[1px] shrink-0 text-[14px] text-[#16895B]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MoneyMastery;
