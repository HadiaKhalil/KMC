import React from 'react'
import Image from "next/image";
const Cards = () => {
  return (
    <div className='bg-gradient-to-b from-white via-orange-100 to-white'>
       
    <div className="main-container ">
     <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">

  <div className=''>
    <h2 className="text-2xl md:text-3xl font-bold lg:w-[230px] w-[240px] text-gray-900 leading-[40px]">
      Trusted By Top Employers <br />
      <span className="text-orange-500">Across Asia- Pacific</span>
    </h2>
    <p className="mt-3 sm:text-[16px]  text-[14px] text-gray-600 sm:max-w-sm leading-relaxed">
      Aussies care about workplace culture—and so do we. That’s why we’ve been
      recognised across APAC as a leader in ethical employment, talent
      retention, and employee wellbeing.
    </p>
  </div>

  {[
    {
      Image: "/images/Frame.png",
      title: "B Corp Certified",
      text: "Proven commitment to governance, people, and planet",
    },
    {
      Image: "/images/Frame (1).png",
      title: "Great Place To Work",
      text: "Named one of the Best Workplaces in Asia",
    },
    {
      Image: "/images/Frame (3).png",
      title: "Best  Place To Work.. ",
      text: "Committed to Employee Satisfaction",
    },
    {
      Image: "/images/Frame (4).png",
      title: 'HR Asia\'s "Best Companies to Work For in Asia”',
      text: "Received the Sustainable Workplace Award",
    },
    {
      Image: "/images/Frame (5).png",
      title: "WELL Certified Offices",
      text: "Health-first, high-performance workplaces",
    },
  ].map((card, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition flex flex-col justify-between h-[290px]"
    >
      <div className="max-w-[120px]">
  <Image
    src={card.Image}
    alt={card.title}
    width={112} 
    height={90}   
    className="object-contain w-28 h-[90px] min-w-[80px] min-h-[80px]"
  />
</div>

      <div>
        <h3 className="font-semibold text-lg text-orange-500 w-[170px]">{card.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{card.text}</p>
      </div>
    </div>
  ))}
</div>

   

        {/* Bottom Note */}
        <p className="mt-12 lg:text-[30px] text-[24px] text-gray-700 text-center">
          <span className=" text-orange-500">These aren’t marketing badges</span>, they’re signals that  <span className=" text-orange-500">your offshore</span>  team will be  <span className=" text-orange-500">supported</span>,  <span className=" text-orange-500">stable</span>, and  <span className=" text-orange-500">proud to work</span> for you.
        </p>
   
    </div>
 

    </div>
  )
}

export default Cards