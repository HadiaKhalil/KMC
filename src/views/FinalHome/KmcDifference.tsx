import Image from "next/image";

const KmcDifference = () => {
  return (
    <div className="bg-white ">
      <div className="main-container ">
        <div className="mx-auto">
        
          <div className="grid lg:grid-cols-2 gap-10 items-start">
         
            <div>
              <h2 className="text-[32px] sm:text-3xl md:text-4xl lg:text-[55px] text-[#001738]  mb-6 max-w-[470px]">
                The KMC Difference
              </h2>
            </div>

          
            <div className="space-y-6">
         
              <div className="flex items-start gap-4">
                <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] relative flex-shrink-0">
                  <Image
                    src="/images/Documentation 1 (1).png"
                    alt="Cultural Integration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-gray-900">
                    Cultural Integration
                  </h4>
                  <p className="text-[#6B717A]  text-[14px]  md:text-[16px]">
                    Deep cultural alignment programs that ensure your remote teams feel like true extensions of your company.
                  </p>
                </div>
              </div>

           
              <div className="flex items-start gap-4">
                <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] relative flex-shrink-0">
                  <Image
                    src="/images/Documentation 2.png"
                    alt="Scalability"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[20px] sm:text-[24px] font-semibold text-[#001738]">
                    Scalability
                  </h4>
                  <p className="text-[#6B717A] text-[16px]">
                    From 1 to 1000+ employees, our infrastructure scales seamlessly with your growth.
                  </p>
                </div>
              </div>

       
              <div className="flex items-start gap-4">
                <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] relative flex-shrink-0">
                  <Image
                    src="/images/Documentation 1 (3).png"
                    alt="Quality Assurance"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[20px] sm:text-[24px] font-semibold text-[#001738]">
                    Quality Assurance
                  </h4>
                  <p className="text-[#6B717A] text-[16px]">
                    Top 1% talent screening with rigorous vetting processes and continuous performance monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>

         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 text-center">
  <div>
    <p className=" text-[18px] sm:text-3xl md:text-4xl lg:text-[79px] text-[#001738]">30-45</p>
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] text-[#6B717A]">DAYS TO FIRST HIRE</p>
  </div>
  <div>
    <p className="text-[18px] sm:text-3xl md:text-4xl lg:text-[79px] text-[#001738]">70%</p>
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] text-[#6B717A]">COST SAVINGS</p>
  </div>
  <div>
    <p className="text-[18px] sm:text-3xl md:text-4xl lg:text-[79px] text-[#001738]">24/7</p>
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] text-[#6B717A]">SUPPORT COVERAGE</p>
  </div>
  <div>
    <p className="text-[18px] sm:text-3xl md:text-4xl lg:text-[79px] text-[#001738]">99.9%</p>
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] text-[#6B717A]">UPTIME SLA</p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default KmcDifference;
