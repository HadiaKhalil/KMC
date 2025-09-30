import Image from "next/image";
import { whyKMCData } from "@/component/Data/Data";


interface KMCDataItem {
  img: string;
  title: string;
  text: string;
  dark?: boolean;
}

const WhyKMC = () => {
  const allCards: KMCDataItem[] = whyKMCData;

  const renderCard = (card: KMCDataItem, i: number) => (
    <div
      key={i}
      className={`relative rounded-[20px] border hover:bg-[#0A1A2F] hover:text-white border-[#D6DCE3] p-2 ${
        card.dark ? "hover:bg-[#0A1A2F] hover:text-white" : "bg-white"
      }`}
      style={{ width: "100%", maxWidth: "370px" }}
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
        <h3 className="font-bold text-[18px] sm:text-[20px] lg:text-[24px] mb-2 leading-[30px]">
          {card.title}
        </h3>
        <p className=" text-[14px] sm:text-[16px] text-[#6B717A] leading-[20px]">
          {card.text}
        </p>
      </div>
    </div>
  );

  return (
    <div className="main-container px-4 sm:px-6 lg:px-0">
      <div className="w-full max-w-[1171px] mx-auto">

        <div className="max-w-3xl mb-12 gap-[18px]">
          <p className="text-orange-500 text-[14px] sm:text-[16px]  md:text-[18px] lg:text-[20px] font-semibold uppercase">
            Because offshore doesn’t have to feel… offshore
          </p>
          <h2 className="text-[32px] sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-gray-900 mt-2 leading-tight">
            Why KMC?
          </h2>
          <p className="text-gray-600 text-[14px] sm:text-[16px]  lg:text-[18px] mt-4">
            Here’s the thing: most EORs are payroll platforms in disguise. Some slick
            UI, a support chatbot, and a call center in a faraway timezone. That’s not us.
            We’re real people, building real teams—for companies who care how their brand
            shows up overseas.
          </p>
        </div>

  
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-10  gap-y-10 justify-items-center"
        >
          {allCards.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default WhyKMC;
