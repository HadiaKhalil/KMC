import Image from "next/image";
import {cards} from "@/component/Data/Data";
export default function TalentStrategy() {
 
  return (
    <div className="main-container1 ">
      <div className="">
        <div className="max-w-7xl mx-auto sm:text-start text-center">
      
          <h4 className="text-[#FF7200]  text-[18px] md:text-[20px] font-bold uppercase tracking-widest">
            Talent Strategy
          </h4>
          <h2 className="  text-[32px] sm:text-3xl md:text-4xl lg:text-[55px] font-bold mt-2 mb-4 text-gray-900">
            How We Attract (and Keep) the Top 1%
          </h2>
          <p className="text-[#6B717A] text-[14px] sm:text-[16px] md:text-[18px] mb-10">
            We’re not just fighting for talent—we’re winning.
          </p>

       
          <div className="flex flex-wrap  justify-center lg:gap-[2px] gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} rounded-[20px] p-6 flex flex-col justify-between`}
                style={{ width: "232.99px", height: "289.85px" }}
              >
       
                <div className="mb-2">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={77}
                    height={77}
                  />
                </div>

          
                <div>
                  <h3 className="lg:text-[24px]  text-[18px] sm:text-[20px] text-white">{card.title}</h3>
                  {card.subtitle && (
                    <p className=" text-[14px] md:text-[16px] text-white mt-1">
                      {card.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
