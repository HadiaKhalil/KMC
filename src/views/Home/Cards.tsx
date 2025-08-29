import React from "react";
import Image from "next/image";
import cardData from "@/component/Data/Data";

const Cards = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-orange-100 to-white py-10">
      <div className="relative main-container px-4 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 items-start">
          <div className="flex flex-col gap-4 mt-8">
            <h2 className="font-[Be_Vietnam_Pro] font-semibold text-[28px] sm:text-[36px] lg:text-[45px] leading-[36px] sm:leading-[46px] md:leading-[56px] capitalize text-gray-900 w-full max-w-[400px]">
              Trusted By Top Employers <br />
              <span className="text-orange-500 capitalize">
                Across Asia- Pacific
              </span>
            </h2>
            <p
              className="font-[Be_Vietnam_Pro] font-normal text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[28px]text-[#757575] lg:max-w-[360px]">
              Aussies care about workplace culture—and so do we. That’s why we’ve been recognised across APAC as a leader in ethical
              employment, talent retention, and employee wellbeing.
            </p>
          </div>
          {cardData.map((card, i) => (
            <div
              key={i}
              className="bg-[#FFFDFC] border border-[#FF720080] rounded-[30px] p-6 
              w-full max-w-[400px] min-h-[380px] sm:min-h-[420px] md:min-h-[450px] 
              flex flex-col shadow-sm hover:shadow-lg mx-auto"
            >
              <div className="mb-4 ">
                <Image
                  src={card.Image}
                  alt={card.title}
                  width={120}
                  height={100}
                  className="object-contain w-[120px] h-[100px]"
                />
              </div>
              <div className="flex flex-col gap-3 mt-auto">
                <h3
                  className="font-[Be_Vietnam_Pro] font-semibold 
                  text-[20px] sm:text-[24px] md:text-[28px] 
                  leading-[26px] sm:leading-[30px] md:leading-[34px] 
                  capitalize text-orange-500 break-words"
                >
                  {card.title}
                </h3>
                <p
                  className="text-[14px] sm:text-[16px] md:text-[18px] 
                  leading-[24px] md:leading-[28px] text-gray-600"
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p
          className="mt-12 text-center font-[Be_Vietnam_Pro] 
          text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] 
          leading-[22px] sm:leading-[28px] md:leading-[34px] lg:leading-[40px] 
          text-gray-700"
        >
          <span className="text-orange-500">These aren’t marketing badges</span>, they’re signals that{" "}
          <span className="text-orange-500">your offshore</span> team will be{" "}
          <span className="text-orange-500">supported</span>,{" "}
          <span className="text-orange-500">stable</span>, and{" "}
          <span className="text-orange-500">proud to work</span> for you.
        </p>
      </div>
    </div>
  );
};

export default Cards;
