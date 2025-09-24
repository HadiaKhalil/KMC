import Image from "next/image";
import { whyKMCData } from "@/component/Data/Data";


const WhyKMC = () => {
  const topCards = whyKMCData.slice(0, 3);
  const bottomCards = whyKMCData.slice(3);

  const renderCard = (card, i) => (
    <div
      key={i}
      className={`relative rounded-[20px] border border-[#D6DCE3] p-2 shadow-[2px_5px_12px_0px_#0000001A,10px_20px_22px_0px_#00000017,22px_44px_30px_0px_#0000000D,39px_78px_35px_0px_#00000003,61px_123px_38px_0px_#00000000] ${
        card.dark ? "bg-[#0A1A2F] text-white" : "bg-white"
      }`}
      style={{ width: "100%", maxWidth: "370px", height: "600px" }}
    >
      <div className="w-full h-[450px] relative overflow-hidden rounded-[16px]">
        <Image
          src={card.img}
          alt={card.title}
          fill
          className="object-cover rounded-[16px]"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[24px] mb-2 leading-[30px]">{card.title}</h3>
        <p className="text-[16px] text-[#6B717A] leading-[20px]">{card.text}</p>
      </div>
    </div>
  );

  return (
    <div className="main-container px-4 sm:px-6 lg:px-0">
      <div className="w-full max-w-[1171px] mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-12 gap-[18px]">
          <p className="text-orange-500 text-[20px] font-semibold uppercase">
            Because offshore doesn’t have to feel… offshore
          </p>
          <h2 className="text-[40px] sm:text-[48px] lg:text-[55px] font-bold text-gray-900 mt-2 leading-tight">
            Why KMC?
          </h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] mt-4">
            Here’s the thing: most EORs are payroll platforms in disguise. Some slick UI, a
            support chatbot, and a call center in a faraway timezone. That’s not us. We’re
            real people, building real teams—for companies who care how their brand shows up
            overseas.
          </p>
        </div>

        {/* Top 3 cards */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-items-center">
          {topCards.map(renderCard)}
        </div>

        {/* Last 2 cards */}
        <div className="flex justify-center flex-wrap gap-10 mt-10">
          {bottomCards.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default WhyKMC;
