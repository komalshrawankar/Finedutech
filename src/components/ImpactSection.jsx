import React from "react";

// Replace these with your actual Figma-exported logo paths
import sdg4Logo from "../assets/images/sdg1.png";
import sdg8Logo from "../assets/images/sdg2.png";
import sdg10Logo from "../assets/images/sdg3.png";
import sdg12Logo from "../assets/images/sdg4.png";
import sdg17Logo from "../assets/images/sdg5.png";

const impactCards = [
  {
    sdg: "SDG 4",
    title: "Quality Education",
    logo: sdg4Logo,
    description:
      "Making financial literacy a practical and engaging life skill for students.",
    cardBg: "bg-[#FCE9EA]",
    borderColor: "border-[#F2B7BD]",
    textColor: "text-[#D83245]",
  },
  {
    sdg: "SDG 8",
    title: "Decent Work & Economic Growth",
    logo: sdg8Logo,
    description:
      "Equipping children with money management and responsible decision-making skills.",
    cardBg: "bg-[#FBE8F1]",
    borderColor: "border-[#ECB1CD]",
    textColor: "text-[#BF2B68]",
  },
  {
    sdg: "SDG 10",
    title: "Reduced Inequalities",
    logo: sdg10Logo,
    description:
      "Providing early access to financial knowledge for children from all backgrounds.",
    cardBg: "bg-[#FFE6F0]",
    borderColor: "border-[#F4A8C7]",
    textColor: "text-[#E01870]",
  },
  {
    sdg: "SDG 12",
    title: "Responsible Consumption & Production",
    logo: sdg12Logo,
    description:
      "Encouraging mindful spending, saving, and planning from a young age.",
    cardBg: "bg-[#FBF2E3]",
    borderColor: "border-[#E4C994]",
    textColor: "text-[#C99A32]",
  },
  {
    sdg: "SDG 17",
    title: "Partnerships for the Goals",
    logo: sdg17Logo,
    description:
      "Collaborating with educators and institutions to scale financial literacy initiatives.",
    cardBg: "bg-[#EAF4FA]",
    borderColor: "border-[#B8D5E5]",
    textColor: "text-[#0D5B7D]",
  },
];

const ImpactSection = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-4 overflow-hidden">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Top Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="block text-[#1671DE] text-[12px] sm:text-[13px] font-bold mb-4">
            Our Impact
          </span>

          <h2 className="font-heading font-normal text-black leading-[100%] tracking-[0] text-[34px] sm:text-[42px] md:text-[50px]">
            Education Today.
          </h2>

          <h3 className="font-heading font-normal text-[#1671DE] leading-[100%] tracking-[0] text-[34px] sm:text-[42px] md:text-[50px] mt-3">
            Financially Strong Tomorrow.
          </h3>

          <p className="max-w-[620px] mx-auto mt-7 text-black/70 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">
            Our work in financial literacy and life skills education contributes
            to key UN Sustainable Development Goals &#40;SDGs&#41;:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {impactCards.map((card, index) => (
            <div
              key={index}
              className={`${card.cardBg} ${card.borderColor} border rounded-[16px] px-5 py-7 min-h-[330px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]`}
            >
              <h4
                className={`${card.textColor} font-heading font-extrabold text-[18px] sm:text-[20px] leading-tight`}
              >
                {card.sdg}
              </h4>

              <h5 className="mt-3 text-black font-bold text-[15px] sm:text-[16px] leading-[21px] min-h-[45px] flex items-center justify-center">
                {card.title}
              </h5>

              {/* Figma imported logo */}
              <div className="mt-8 mb-6">
                <img
                  src={card.logo}
                  alt={card.title}
                  className="w-[78px] sm:w-[84px] md:w-[90px] h-auto object-contain"
                />
              </div>

              <div
                className={`w-[42px] h-[1px] ${card.textColor.replace(
                  "text",
                  "bg"
                )} mb-6`}
              ></div>

              <p className="text-black text-[13px] sm:text-[14px] leading-[18px] max-w-[150px] mx-auto">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;