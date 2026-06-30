import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import financialHero from "../assets/images/financialshero.png";

const whyCards = [
  {
    title: "Age-Appropriate Content",
    points: [
      "Carefully designed for students from Class 1 to Class 10",
      "Concepts introduced progressively based on cognitive development and learning levels",
    ],
  },
  {
    title: "Story-Based Learning",
    points: [
      "Engaging stories that connect financial concepts to everyday life",
      "Characters and situations that students can easily relate to",
      "Learning through experiences rather than definitions",
    ],
  },
  {
    title: "Professionally Designed Curriculum",
    points: [
      "Developed by Chartered Accountants, educators, child learning experts, and curriculum specialists",
      "Trusted by leading schools, educators, and institutions",
    ],
  },
  {
    title: "NEP 2020 Aligned",
    points: [
      "Supports experiential learning, competency-based education, and life skills development",
      "Encourages application of knowledge in real-life situations",
    ],
  },
];

const parentGuidePoints = [
  "Discussion prompts",
  "Family activities",
  "Practical money lessons",
  "Everyday learning opportunities",
];

const activityPoints = [
  "Real-life challenges",
  "Reflection exercises",
  "Decision-making scenarios",
  "Budgeting activities",
  "Research tasks",
  "Entrepreneurial thinking",
];

const Financial = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-5 pt-[18px] sm:px-8 lg:grid-cols-[1fr_540px] lg:gap-[70px] lg:px-0">
        {/* Left Content */}
        <div className="pt-[4px]">
          <p className="mb-[18px] font-heading text-[13px] font-extrabold leading-none text-[#0D6FEF]">
            Financial Literacy Book Series
          </p>

          <h1 className="font-heading text-[38px] font-black leading-[1.18] tracking-[-1.4px] text-black sm:text-[46px] lg:text-[48px] xl:text-[52px]">
            NEP 2020-Aligned Financial Literacy Books for{" "}
            <span className="block pt-[7px] text-[#1177F2]">
              Classes 1-10
            </span>
          </h1>

          <div className="mt-[28px] max-w-[610px] space-y-[2px] text-[15.5px] font-medium leading-[1.55] text-[#1E1E1E]">
            <p>
              The Fin Edu Quest Financial Literacy Book Series is a thoughtfully
              designed collection of age-appropriate books that introduce
              children to essential money concepts through engaging stories,
              relatable characters, real-life situations, and interactive
              learning experiences.
            </p>

            <p>
              Developed by a team of education experts, financial professionals,
              and child learning specialists, the series helps students build
              practical financial life skills while fostering critical thinking,
              responsible decision-making, and financial confidence.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="pt-[4px]">
          <img
            src={financialHero}
            alt="Financial literacy books"
            className="h-auto w-full rounded-[16px] object-cover"
          />

          <div className="mt-[26px] rounded-[14px] border border-[#0D77FF] bg-[#E9F2FF] px-[18px] py-[18px]">
            <h3 className="font-heading text-[22px] font-extrabold leading-none text-[#0D6FEF]">
              Creating Financially Smart Future Citizens
            </h3>

            <p className="mt-[16px] text-[15.5px] font-medium leading-[1.55] text-[#0D6FEF]">
              More than just books, the Fin Edu Quest Financial Literacy Series
              empowers students with practical knowledge, responsible habits,
              and essential life skills preparing them not only for academic
              success but for life beyond the classroom.
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Books Section */}
      <section className="mx-auto w-full max-w-[970px] px-5 pt-[72px] sm:px-8 lg:px-0">
        <div className="text-center">
          <h2 className="font-heading text-[38px] font-black leading-none tracking-[-1px] sm:text-[44px]">
            Why Our <span className="text-[#1177F2]">Books?</span>
          </h2>

          <p className="mx-auto mt-[28px] max-w-[530px] text-[15.5px] font-medium leading-[1.45] text-black">
            Financial literacy is a life skill best learned early. Our books
            make complex financial concepts simple, relatable, and enjoyable
            through storytelling and experiential learning.
          </p>
        </div>

        <div className="mt-[34px] grid grid-cols-1 gap-[20px] md:grid-cols-2">
          {whyCards.map((card) => (
            <article
              key={card.title}
              className="min-h-[164px] rounded-[12px] border-[2px] border-[#1C1C1C] bg-[#F7BE16] px-[28px] py-[22px]"
            >
              <h3 className="text-center font-heading text-[25px] font-black leading-[1.18] tracking-[-0.4px] text-black">
                {card.title}
              </h3>

              <ul className="mt-[22px] list-disc space-y-[2px] pl-[18px] text-[14.5px] font-medium leading-[1.35] text-black">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Beyond the Story Section */}
      <section className="mx-auto w-full max-w-[1120px] px-5 pb-[62px] pt-[70px] sm:px-8 lg:px-0">
        <h2 className="text-center font-heading text-[38px] font-black leading-none tracking-[-1px] sm:text-[44px]">
          Beyond <span className="text-[#1177F2]">the Story</span>
        </h2>

        <div className="mt-[70px] grid grid-cols-1 gap-[20px] lg:grid-cols-2">
          {/* Parent Guide Card */}
          <article className="min-h-[365px] rounded-[14px] border border-[#D4D4D4] bg-white px-[26px] py-[28px]">
            <span className="inline-flex rounded-full bg-[#DCEEFF] px-[22px] py-[6px] font-heading text-[11px] font-extrabold text-[#1177F2]">
              Classes 1 &amp; 2
            </span>

            <h3 className="mt-[26px] font-heading text-[30px] font-black leading-tight tracking-[-0.6px] text-black">
              Parent Guide in Every Chapter
            </h3>

            <p className="mt-[16px] max-w-[455px] text-[15px] font-medium leading-[1.55] text-[#191919]">
              Each chapter includes a dedicated Parent Guide designed to help
              families reinforce financial habits at home through meaningful
              conversations and simple activities.
            </p>

            <h4 className="mt-[28px] font-heading text-[18px] font-black text-black">
              Parents receive:
            </h4>

            <ul className="mt-[14px] space-y-[9px]">
              {parentGuidePoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-[9px] text-[15px] font-medium text-black"
                >
                  <IoCheckmarkCircleOutline className="shrink-0 text-[20px] text-[#1177F2]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* Activities Card */}
          <article className="min-h-[365px] rounded-[14px] bg-[#2D2D2D] px-[26px] py-[28px] text-white">
            <span className="inline-flex rounded-full bg-[#3B3C7A] px-[22px] py-[6px] font-heading text-[11px] font-extrabold text-[#647CFF]">
              Classes 3-10
            </span>

            <h3 className="mt-[26px] font-heading text-[30px] font-black leading-tight tracking-[-0.6px] text-white">
              Experiential Learning Activities
            </h3>

            <p className="mt-[16px] max-w-[470px] text-[15px] font-medium leading-[1.55] text-white">
              Each chapter includes a "Learn by Doing" section where students
              apply concepts through:
            </p>

            <div className="mt-[46px] grid grid-cols-1 gap-[14px] sm:grid-cols-2">
              {activityPoints.map((item) => (
                <div
                  key={item}
                  className="flex h-[38px] items-center gap-[9px] rounded-[6px] border border-white/20 bg-white/10 px-[12px] text-[14px] font-medium text-white"
                >
                  <IoCheckmarkCircleOutline className="shrink-0 text-[18px] text-[#4F74FF]" />
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Financial;