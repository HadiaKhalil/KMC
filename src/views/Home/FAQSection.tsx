"use client";

import { useState } from 'react';

const faqs = [
  {
    question: "What is a full-stack Employer of Record (EOR)?",
    answer:
      "A full-stack Employer of Record (EOR) is a company that hires, manages, and supports your offshore employees on your behalf. KMC handles recruitment, HR, payroll, legal compliance, office space, and IT infrastructure—so you focus on results, not red tape.",
  },
  {
    question: "Do I need a legal entity to hire offshore through KMC?",
    answer:
      "A full-stack Employer of Record (EOR) is a company that hires, manages, and supports your offshore employees on your behalf. KMC handles recruitment, HR, payroll",
  },
  {
    question: "What types of roles can KMC help us hire?",
    answer:
      "A full-stack Employer of Record (EOR) is a company that hires, manages, and supports your offshore employees on your behalf. KMC handles recruitment, HR, payroll",
  },
  {
    question: "Where will our offshore team work?",
    answer:
      "A full-stack Employer of Record (EOR) is a company that hires, manages, and supports your offshore employees on your behalf. KMC handles recruitment, HR, payroll",
  },
  {
    question: "How long does it take to start working with KMC?",
    answer:
      "A full-stack Employer of Record (EOR) is a company that hires, manages, and supports your offshore employees on your behalf. KMC handles recruitment, HR, payroll",
  },
  {
    question: "What types of roles can KMC help us hire?",
    answer:
      "A full-stack Employer of Record (EOR) is a company that hires, manages, and supports your offshore employees on your behalf. KMC handles recruitment, HR, payroll",
  },
  {
    question: "How secure is KMC’s IT infrastructure?",
    answer:
      "A full-stack Employer of Record (EOR) is a company that hires, manages, and supports your offshore employees on your behalf. KMC handles recruitment, HR, payroll",
  },
  {
    question: "How is KMC different from other EOR or outsourcing providers?",
    answer:
      "A full-stack Employer of Record (EOR) is a company that hires, manages, and supports your offshore employees on your behalf. KMC handles recruitment, HR, payroll",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-[#FFFAF5]">
      <div className="main-container1 ">
        <div className=" flex lg:flex-row flex-col gap-10 items-start">
          {/* Left Column */}
          <div className=' lg:w-1/2 mt-8'>
            <h5 className="text-[#FF7200] text-[20px] font-bold uppercase mb-4">
              Frequently Asked Questions
            </h5>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[45px] font-semibold text-[#001738] leading-tight ">
              FAQs: Everything You Need to Know About KMC's EOR Services
            </h2>
          </div>

          {/* Right Column - FAQs */}
          <div className="flex flex-col w-1/1 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#D6DCE3] p-7 cursor-pointer transition-all duration-300"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[18px] font-semibold text-[#001738]">
                    {faq.question}
                  </h3>
                  <span className="text-[24px] font-bold text-[#FF7200]">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-[#6B717A] text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
