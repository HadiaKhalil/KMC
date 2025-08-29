"use client";
import React, { useState } from "react";
import {FaShoppingCart,FaCloud,FaUniversity,FaChartLine,FaHeartbeat,FaUser,FaCog,FaBook} from "react-icons/fa";
const Hero = () => {
  const [openSections, setOpenSections] = useState([0]);
   const toggleSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(i => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };
    return (
    <div className="main-container">
       <section>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div>
        
           <h2 className="font-[Be_Vietnam_Pro] font-semibold 
              text-[28px] sm:text-[36px] lg:text-[45px] 
              leading-[36px] sm:leading-[46px] md:leading-[56px] 
              capitalize text-gray-900 w-full lg:w-110 ">
            <span className="text-black">Built For <span className="text-orange-600"> Aussie Industries </span> </span>{" "}
            <span className="text-black"> That Are  <span className="text-orange-600"> Scaling Fast</span></span>
          </h2>
  <p className="text-gray-500 text-[16px] md:text-[18px] mt-4 lg:max-w-[500px]">
{`  Whether you’re running a digital agency, growing a retail brand, or streamlining back-office
  support—we’ll help you build the offshore team to get it done.`}
</p>
   <button className="mt-6 md:text-[18px] text-[15px] bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-md font-medium">
            Explore More Industries
          </button>            
        </div>            
         


         <div>
          <div className="mb-4 p-4 border-b rounded-3xl border-gray-200 bg-blue-100">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(0)}
            >
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <FaUniversity className="text-orange-500" />
                Business Services
              </div>
              <span className="text-2xl font-bold text-gray-500">
                {openSections.includes(0) ? "–" : "+"}
              </span>
            </div>
            {openSections.includes(0) && (
     <div className="flex flex-wrap gap-3 mt-4">
  {/* Admin */}
  <span className="flex items-center bg-orange-500 text-white rounded-full pl-2 pr-8 py-1.5">
    <span className="bg-white rounded-full flex items-center justify-center h-8 w-8">
      <FaUser className="text-black w-5 h-5" />
    </span>
    <span className="ml-2 text-base font-medium">Admin</span>
  </span>

  {/* Operations */}
  <span className="flex items-center bg-orange-500 text-white rounded-full pl-2 pr-8 py-1.5">
    <span className="bg-white rounded-full flex items-center justify-center h-8 w-8">
      <FaCog className="text-black w-5 h-5" />
    </span>
    <span className="ml-2 text-base font-medium">Operations</span>
  </span>

  {/* Bookkeeping */}
  <span className="flex items-center bg-orange-500 text-white rounded-full pl-2 pr-8 py-1.5">
    <span className="bg-white rounded-full flex items-center justify-center h-8 w-8">
      <FaBook className="text-black w-5 h-5" />
    </span>
    <span className="ml-2 text-base font-medium">Bookkeeping</span>
  </span>
</div>



            )}
          </div>
          <div className="mb-4 p-4 border-b border-gray-200">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(1)}
            >
              <div className="flex items-center gap-2 text-lg font-semibold text-black">
                <FaShoppingCart className="text-orange-500" />
                eCommerce and Retail
              </div>
              <span className="text-2xl font-bold text-gray-500">
                {openSections.includes(1) ? "–" : "+"}
              </span>
            </div>
            {openSections.includes(1) && (
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full"><FaUser /> Product Management</span>
                <span className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full"><FaCog /> Logistics</span>
              </div>
            )}
          </div>
          <div className="mb-4 p-4 border-b border-gray-200">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(2)}
            >
              <div className="flex items-center gap-2 text-lg font-semibold text-black">
                <FaCloud className="text-orange-500" />
                Digital and Creative
              </div>
              <span className="text-2xl font-bold text-gray-500">
                {openSections.includes(2) ? "–" : "+"}
              </span>
            </div>
            {openSections.includes(2) && (
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full"><FaUser /> Design</span>
                <span className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full"><FaCog /> Development</span>
              </div>
            )}
          </div>
          <div className="mb-4 p-4 border-b border-gray-200">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(3)}
            >
              <div className="flex items-center gap-2 text-lg font-semibold text-black">
                <FaUniversity className="text-orange-500" />
                Accounting and Finance
              </div>
              <span className="text-2xl font-bold text-gray-500">
                {openSections.includes(3) ? "–" : "+"}
              </span>
            </div>
            {openSections.includes(3) && (
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full"><FaUser /> Accounts Payable</span>
                <span className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full"><FaBook /> Payroll</span>
              </div>
            )}
          </div>
          <div className="mb-4 p-4 border-b border-gray-200">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(4)}
            >
              <div className="flex items-center gap-2 text-lg font-semibold text-black">
                <FaChartLine className="text-orange-500" />
                Sales and Support
              </div>
              <span className="text-2xl font-bold text-gray-500">
                {openSections.includes(4) ? "–" : "+"}
              </span>
            </div>
            {openSections.includes(4) && (
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full"><FaUser /> Customer Service</span>
                <span className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full"><FaCog /> Tech Support</span>
              </div>
            )}
          </div>
          <div className="mb-4 p-4 border-b border-gray-200">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(5)}
            >
              <div className="flex items-center gap-2 text-lg font-semibold text-black">
                <FaHeartbeat className="text-orange-500" />
                Health and Wellness (Non-Clinical)
              </div>
              <span className="text-2xl font-bold text-gray-500">
                {openSections.includes(5) ? "–" : "+"}
              </span>
            </div>
            {openSections.includes(5) && (
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full"><FaUser /> Fitness Coaching</span>
                <span className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full"><FaCog /> Diet Planning</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
    </div>
   
  );
};

export default Hero;
