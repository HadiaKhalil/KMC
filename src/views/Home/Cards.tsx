import React from 'react'

const Cards = () => {
  return (
    <div className='bg-gradient-to-b from-white via-orange-100 to-white'>
       
    <div className="main-container ">
     <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-stretch">

  <div>
    <h2 className="text-2xl md:text-3xl font-bold sm:w-[230px] text-gray-900 leading-[40px]">
      Trusted By Top Employers <br />
      <span className="text-orange-500">Across Asia- Pacific</span>
    </h2>
    <p className="mt-3 text-[16px] text-gray-600 sm:max-w-sm leading-relaxed">
      Aussies care about workplace culture—and so do we. That’s why we’ve been
      recognised across APAC as a leader in ethical employment, talent
      retention, and employee wellbeing.
    </p>
  </div>

  {[
    {
      img: "/images/Frame.png",
      title: "B Corp Certified",
      text: "Proven commitment to governance, people, and planet",
    },
    {
      img: "/images/Frame (1).png",
      title: "Great Place To Work",
      text: "Named one of the Best Workplaces in Asia",
    },
    {
      img: "/images/Frame (3).png",
      title: "Best  Place To Work.. ",
      text: "Committed to Employee Satisfaction",
    },
    {
      img: "/images/Frame (4).png",
      title: 'HR Asia\'s "Best Companies to Work For in Asia”',
      text: "Received the Sustainable Workplace Award",
    },
    {
      img: "/images/Frame (5).png",
      title: "WELL Certified Offices",
      text: "Health-first, high-performance workplaces",
    },
  ].map((card, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition flex flex-col justify-between h-[280px]"
    >
      <div className="">
        <img src={card.img} alt={card.title} className="w-28 h-20 object-contain" />
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