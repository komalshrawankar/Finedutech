import React from "react";
import { FaCheck } from "react-icons/fa";
import defaultHeroImage from "../../assets/images/phero1.png";

const defaultHighlights = [
  <>
    Designed for students from <strong>Class 1 to Class 12</strong>
  </>,
  <>
    <strong>NEP 2020 Aligned</strong> curriculum
  </>,
  <>
    Professionally crafted <strong>story-based study material</strong>
  </>,
  <>Concept-based MCQs with clear explanations</>,
  <>E-Certificates for all participants</>,
  <>Awards and recognition for top performers</>,
  <>
    <strong>No Negative Marking</strong>
  </>,
];

const defaultTitle = (
  <>
    India's First Financial
    <br  />
     Literacy Olympiad for
    <br />
    <span className="text-[#1671DE]"> Classes 1-12</span>
  </>
);

const PHero = ({
  eyebrow = "Financial Literacy Olympiad",
  title = defaultTitle,
  description = "Fin-Edu Quest is a pioneering initiative designed to equip students with essential financial life skills through an engaging and age-appropriate Olympiad experience. Aligned with NEP 2020, the Olympiad helps students develop practical knowledge of money management, responsible decision-making, entrepreneurship, consumer awareness, and financial well-being.",
  highlights = defaultHighlights,
 
  image = defaultHeroImage,
  imageAlt = "Student learning financial literacy with books, chart, and savings",
  cardTitle = "Empowering Future-Ready Learners",
  cardText = "The Financial Literacy Olympiad goes beyond academics, helping students build lifelong money management skills, critical thinking abilities, and financial confidence preparing them to become responsible and informed citizens of tomorrow.",
  reverse = false,
}) => {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
      <div
        className={`mx-auto grid max-w-[1120px] items-start gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="pt-1 text-center lg:text-left">
          {eyebrow ? (
            <p className="normal text-[13px] font-bold leading-none text-[#1671DE]">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="mt-5 font-heading text-[36px] leading-[1.16] text-black min-[420px]:text-[42px] sm:text-[54px] sm:leading-[1.2] md:text-[62px] lg:mt-6 lg:text-[54px] xl:text-[58px]">
            {title}
          </h1>

          <p className="normal mx-auto mt-6 max-w-[650px] text-[15px] leading-[1.65] text-[#171717] sm:text-[16px] lg:mx-0 lg:max-w-[590px]">
            {description}
          </p>

          {highlights?.length ? (
            <ul className="normal mx-auto mt-5 max-w-[590px] space-y-2.5 text-left text-[15px] leading-[1.35] text-[#171717] sm:text-[16px] lg:mx-0">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 border-[#1671DE] text-[#1671DE]">
                    <FaCheck className="text-[9px]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        

        <div className="flex flex-col items-center lg:items-end">
          <img
            src={image}
            alt={imageAlt}
            className="w-full max-w-[430px] object-contain sm:max-w-[520px] lg:max-w-[560px]"
          />

          {(cardTitle || cardText) && (
            <div className="mt-7 w-full max-w-[520px] rounded-[16px] border border-[#1671DE] bg-[#EAF4FF] px-5 py-5 text-left sm:px-6 lg:mt-9">
              {cardTitle ? (
                <h2 className="normal text-[20px] font-bold leading-tight text-[#1671DE] sm:text-[22px]">
                  {cardTitle}
                </h2>
              ) : null}
              {cardText ? (
                <p className="normal mt-4 text-[15px] leading-[1.55] text-[#1671DE] sm:text-[16px]">
                  {cardText}
                </p>
              ) : null}
            </div>
          )}
         
        </div>
      </div>
    </section>
  );
};

export default PHero;
