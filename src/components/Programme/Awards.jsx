import React from "react";
import { FaSchool, FaUsers } from "react-icons/fa";

import award1 from "../../assets/images/award1.png";
import award2 from "../../assets/images/award2.png";
import award3 from "../../assets/images/award3.png";
import award4 from "../../assets/images/award4.png";

const awards = [
  {
    title: "Class-wise\nTop Performers",
    description:
      "Awarded to the students who demonstrate exceptional knowledge and skills.",
    image: award1,
    border: "border-[#1671DE]",
    badge: "bg-[#1671DE]",
    Icon: FaUsers,
  },
  {
    title: "Principal Leadership\nAward",
    description:
      "Recognizing principals who champion financial literacy in their schools.",
    image: award2,
    border: "border-[#F5A623]",
    badge: "bg-[#F5A623]",
    Icon: FaUsers,
  },
  {
    title: "Best Mentor\nAward",
    description:
      "Honoring mentors who inspire and guide students towards financial success.",
    image: award3,
    border: "border-[#766BFF]",
    badge: "bg-[#766BFF]",
    Icon: FaUsers,
  },
  {
    title: "Best School\nAward",
    description:
      "Presented to schools for their outstanding commitment to financial literacy education.",
    image: award4,
    border: "border-[#35C99B]",
    badge: "bg-[#35C99B]",
    Icon: FaSchool,
  },
];

const Awards = ({
  title = "Recognition &",
  highlightedTitle = "Awards",
  subtitle = "We honor the achievements of students, educators, and schools who go above and beyond in financial literacy education.",
  items = awards,
}) => {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <h2 className="font-heading text-[36px] leading-tight text-black sm:text-[44px] lg:text-[50px]">
            {title} <span className="text-[#1671DE]">{highlightedTitle}</span>
          </h2>
          <p className="normal mx-auto mt-5 max-w-[500px] text-[14px] leading-[1.55] text-black sm:text-[15px]">
            {subtitle}
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {items.map(({ title, description, image, border, badge, Icon }) => (
            <article
              key={title}
              className={`flex min-h-[405px] flex-col items-center rounded-[14px] border ${border} bg-white px-5 py-4 text-center`}
            >
              <img
                src={image}
                alt=""
                className="h-[150px] w-[150px] object-contain sm:h-[160px] sm:w-[160px]"
              />

              <span
                className={`mt-7 flex h-[32px] w-[32px] items-center justify-center rounded-full text-white ${badge}`}
              >
                <Icon className="text-[15px]" />
              </span>

              <h3 className="mt-5 whitespace-pre-line font-heading text-[22px] leading-[1.08] text-black">
                {title}
              </h3>

              <p className="normal mt-5 text-[14px] leading-[1.45] text-black">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
