import Image from "next/image";

const WhyKMC = () => {
  const cards = [
    {
      img: "/images/image.png",
      title: "86% Retention Rate",
      text: "Because culture beats churn every time.",
      dark: true,
    },
    {
      img: "/images/image (1).png",
      title: "Zero Outsourcing",
      text: "Every service is delivered by KMC—no hidden vendors, no fine print.",
      dark: false,
    },
    {
      img: "/images/image (2).png",
      title: "15 Years, 400+ Clients, 6,000+ Employees",
      text: "From startups to the world’s fastest-growing unicorns.",
      dark: false,
    },
    {
      img: "/images/image (3).png",
      title: "B Corp + ISO 27001 + ISO 9001 Certified",
      text: "Because security, sustainability, and doing things right actually matter.",
      dark: false,
    },
    {
      img: "/images/image (4).png",
      title: "Fast Time to Hire",
      text: "30–45 days from “let’s do this” to “your new team is up and running.”",
      dark: false,
    },
  ];

  return (
    <div className="main-container">
  <div className="w-full max-w-[1171px] mx-auto">
      {/* Heading */}
      <div className=" max-w-3xl  mb-12 gap-[18px]">
        <p className="text-orange-500  text-[20px] font-semi bold uppercase">
          Because offshore doesn’t have to feel… offshore
        </p>
        <h2 className="text-[55px] font-bold text-gray-900 mt-2">Why KMC?</h2>
        <p className="text-gray-600 texr-[18px] mt-4">
          Here’s the thing: most EORs are payroll platforms in disguise. Some slick UI, a
          support chatbot, and a call center in a faraway timezone. That’s not us. We’re
          real people, building real teams—for companies who care how their brand shows up
          overseas.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative rounded-[20px] border border-[#D6DCE3] p-2 shadow-[2px_5px_12px_0px_#0000001A,10px_20px_22px_0px_#00000017,22px_44px_30px_0px_#0000000D,39px_78px_35px_0px_#00000003,61px_123px_38px_0px_#00000000] ${
              card.dark ? "bg-[#0A1A2F] text-white" : "bg-white"
            }`}
            style={{ width: "370px", height: "600px" }}
          >
            <div className="w-[354px] h-[450px] relative overflow-hidden rounded-[16px]">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover rounded-[16px]"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[24px] mb-2 leading-[30px]">{card.title}</h3>
              <p className="text-[16px] text-[#6B717A] leading-[20px] ">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  
  );
};

export default WhyKMC;
