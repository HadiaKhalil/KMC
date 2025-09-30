import Image from "next/image";

export default function TalentStrategy() {
  const cards = [
    {
      title: "Great Place to Work Certified",
      subtitle: "(and proud of it)",
      bgColor: "bg-[#FFCE35]",
      image: "/images/Vector (1).png",
    },
    {
      title: "Career Growth & Leadership Tracks",
      subtitle: "",
      bgColor: "bg-[#FF7200]",
      image: "/images/Icon (2).png",
    },
    {
      title: "Well-Balanced Benefits",
      subtitle: "HMO, PTO, Housing, Flex Work",
      bgColor: "bg-[#001738] text-white",
      image: "/images/Vector (1).png",
    },
    {
      title: "Culture That Clicks",
      subtitle: "Ice Cream Fridays, Town Halls, Engagement Programs",
      bgColor: "bg-[#FF7200]",
      image: "/images/Icon.png",
    },
    {
      title: "HR Business Partners",
      subtitle: "for Every Client Team",
      bgColor: "bg-[#FFCE35]",
      image: "/images/Icon (1).png",
    },
  ];

  return (
    <div className="main-container1 ">
      <div className="">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h4 className="text-[#FF7200]  text-[18px] md:text-[20px] font-bold uppercase tracking-widest">
            Talent Strategy
          </h4>
          <h2 className="  text-[18px] sm:text-3xl md:text-4xl lg:text-[55px] font-bold mt-2 mb-4 text-gray-900">
            How We Attract (and Keep) the Top 1%
          </h2>
          <p className="text-[#6B717A] text-[14px] sm:text-[16px] md:text-[18px] mb-10">
            We’re not just fighting for talent—we’re winning.
          </p>

          {/* Cards Grid */}
          <div className="flex flex-wrap justify-center gap-[2px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} rounded-[20px] p-6 flex flex-col justify-between`}
                style={{ width: "232.99px", height: "289.85px" }}
              >
                {/* Image */}
                <div className="mb-2">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={77}
                    height={77}
                  />
                </div>

                {/* Text Content */}
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
