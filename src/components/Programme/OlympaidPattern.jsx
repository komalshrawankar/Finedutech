import React from "react";
import { FaBullseye, FaClock } from "react-icons/fa";

const categories = [
  {
    label: "Category 1",
    title: "Classes 1 - 3",
    marks: "40 Marks",
    accent: "#59DDBB",
    pill: "bg-[#C9F7E9] text-[#36BE9B]",
    iconBg: "bg-[#C9F7E9] text-[#36BE9B]",
  },
  {
    label: "Category 2",
    title: "Classes 4 - 6",
    marks: "50 Marks",
    accent: "#F7B135",
    pill: "bg-[#FFE6BE] text-[#F2A620]",
    iconBg: "bg-[#FFE6BE] text-[#F2A620]",
  },
  {
    label: "Category 3",
    title: "Classes 7 - 12",
    marks: "60 Marks",
    accent: "#766BFF",
    pill: "bg-[#DCD9FF] text-[#766BFF]",
    iconBg: "bg-[#DCD9FF] text-[#766BFF]",
  },
];

const OlympaidPattern = ({
  title = "Olympiad",
  highlightedTitle = "Pattern",
  items = categories,
}) => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-auto rounded-[28px] bg-[#2B2B2B] px-5 py-12 sm:px-8 sm:py-14 lg:rounded-[30px] lg:px-12 lg:py-[70px]">
        <h2 className="font-heading text-center text-[34px] leading-none text-white sm:text-[42px] lg:text-[48px]">
          {title} <span className="text-[#5FE5EA]">{highlightedTitle}</span>
        </h2>

        <div className="mx-auto mt-10 grid max-w-[950px] gap-6 md:grid-cols-3 lg:mt-12 lg:gap-7">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[22px] bg-white px-6 py-7 sm:px-7 lg:min-h-[315px] lg:rounded-[22px] lg:px-[26px] lg:py-[26px]"
            >
              <span
                className={`inline-flex h-[26px] min-w-[110px] items-center justify-center rounded-full normal text-[12px] font-bold ${item.pill}`}
              >
                {item.label}
              </span>

              <h3 className="mt-7 font-heading text-[28px] leading-tight text-black lg:text-[30px]">
                {item.title}
              </h3>

              <div className="mt-10 space-y-8">
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[5px] ${item.iconBg}`}
                  >
                    <FaBullseye className="text-[14px]" />
                  </span>
                  <div>
                    <p className="normal text-[14px] leading-none text-black">
                      Total Marks
                    </p>
                    <p className="normal mt-3 text-[22px] font-bold leading-none text-black">
                      {item.marks}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[5px] ${item.iconBg}`}
                  >
                    <FaClock className="text-[13px]" />
                  </span>
                  <div>
                    <p className="normal text-[14px] leading-none text-black">
                      Duration
                    </p>
                    <p className="normal mt-3 text-[22px] font-bold leading-none text-black">
                      60 Minutes
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OlympaidPattern;
