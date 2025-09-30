import Image from "next/image";

const KmcDifference = () => {
  return (
    <div className="bg-white">
      <div className="main-container1 px-4 sm:px-6 lg:px-0">
        <div className="mx-auto space-y-16 max-w-[1171px]">
        
          <div className="grid lg:grid-cols-2 gap-10 items-start">
         
            <div>
              <h2 className="text-[32px] sm:text-3xl md:text-4xl lg:text-[55px] text-gray-900  mb-6 max-w-[470px]">
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
                  <p className="text-gray-600  text-[14px]  md:text-[16px]">
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
                  <h4 className="text-[20px] sm:text-[24px] font-semibold text-gray-900">
                    Scalability
                  </h4>
                  <p className="text-gray-600 text-[16px]">
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
                  <h4 className="text-[20px] sm:text-[24px] font-semibold text-gray-900">
                    Quality Assurance
                  </h4>
                  <p className="text-gray-600 text-[16px]">
                    Top 1% talent screening with rigorous vetting processes and continuous performance monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>

         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
  <div>
    <p className=" text-[18px] sm:text-3xl md:text-4xl lg:text-[79px] text-gray-900">30-45</p>
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] text-gray-600">DAYS TO FIRST HIRE</p>
  </div>
  <div>
    <p className="text-[18px] sm:text-3xl md:text-4xl lg:text-[79px] text-gray-900">70%</p>
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] text-gray-600">COST SAVINGS</p>
  </div>
  <div>
    <p className="text-[18px] sm:text-3xl md:text-4xl lg:text-[79px] text-gray-900">24/7</p>
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] text-gray-600">SUPPORT COVERAGE</p>
  </div>
  <div>
    <p className="text-[18px] sm:text-3xl md:text-4xl lg:text-[79px] text-gray-900">99.9%</p>
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] text-gray-600">UPTIME SLA</p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default KmcDifference;
