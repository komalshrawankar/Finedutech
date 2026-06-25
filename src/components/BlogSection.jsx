import React, { useState } from "react";

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

const blogs = [
  {
    image: blog1,
    date: "January 10, 2026",
    title: "Why financial literacy matters in early education",
    desc: "Discover how introducing money concepts early can shape a child's financial future.",
    fullDesc:
      "Discover how introducing money concepts early can shape a child's financial future. Financial literacy at a young age helps children understand saving, spending, budgeting, and making thoughtful choices. When kids learn these habits early, they grow with confidence and become more responsible decision-makers in everyday life.",
  },
  {
    image: blog2,
    date: "January 10, 2026",
    title: "5 Money habits every child should learn",
    desc: "Practical tips for parents and education to instill smart saving and spending habits.",
    fullDesc:
      "Practical tips for parents and educators to instill smart saving and spending habits. Children should learn how to save regularly, understand the value of money, avoid unnecessary spending, set small financial goals, and make careful choices before buying. These simple habits can create a strong foundation for lifelong financial confidence.",
  },
  {
    image: blog3,
    date: "January 10, 2026",
    title: "Benefits of financial education in school",
    desc: "How school are transforming student outcomes by integrating financial literacy.",
    fullDesc:
      "How schools are transforming student outcomes by integrating financial literacy. Financial education helps students understand real-life money decisions, improves confidence, supports responsible habits, and prepares them for future challenges. When schools include money lessons early, students become better prepared for personal and professional life.",
  },
];

const BlogSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[#0B78F0] text-[10px] sm:text-xs font-semibold mb-2">
            Blog
          </p>

          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] leading-tight font-extrabold text-black">
            Insights &{" "}
            <span className="text-[#0877F2]">Latest Updates</span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9 items-start">
          {blogs.map((blog, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`w-full transition-all duration-500 ease-out ${
                  isExpanded ? "bg-white rounded-[14px]" : ""
                }`}
              >
                
                {/* Image */}
                <div className="w-full h-[170px] sm:h-[150px] lg:h-[155px] overflow-hidden rounded-[12px] mb-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <p className="text-[#2276D2] text-[10px] sm:text-[14px] font-medium mb-2">
                  {blog.date}
                </p>

                <h3 className="text-[#111111] text-[20px] sm:text-[20px] lg:text-[18px] font-semibold leading-snug mb-2">
                  {blog.title}
                </h3>

                <p
                  className={`text-[#555555] text-[12px] sm:text-[11px] lg:text-[15px] leading-relaxed mb-5 max-w-[300px] transition-all duration-500 ease-out ${
                    isExpanded ? "max-h-[260px]" : "max-h-[70px]"
                  } overflow-hidden`}
                >
                  {isExpanded ? blog.fullDesc : blog.desc}
                </p>

                <button
                  type="button"
                  onClick={() => handleReadMore(index)}
                  className="inline-flex items-center gap-2 text-[#FF2F64] text-[12px] sm:text-[16px] font-medium hover:gap-3 transition-all duration-300"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                  <span
                    className={`text-[18px] transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    →
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;