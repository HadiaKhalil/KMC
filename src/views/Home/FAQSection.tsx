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
      "No, you don’t. KMC, as your Employer of Record (EOR), allows you to hire globally without setting up a legal entity. We handle compliance and employment formalities.",
  },
  {
    question: "What types of roles can KMC help us hire?",
    answer:
      "KMC can help you hire a wide range of roles including developers, designers, customer support, finance teams, marketing professionals, and more.",
  },
  {
    question: "Where will our offshore team work?",
    answer:
      "Your offshore team can work from KMC's fully serviced offices across the Philippines or remotely, depending on your business needs.",
  },
  {
    question: "How long does it take to start working with KMC?",
    answer:
      "Onboarding can be done in as little as a few days once candidate selection is complete and documentation is submitted.",
  },
  {
    question: "How secure is KMC’s IT infrastructure?",
    answer:
      "KMC provides enterprise-grade security infrastructure, including secure networks, endpoint protection, and compliance with data privacy standards.",
  },
  {
    question: "How is KMC different from other EOR or outsourcing providers?",
    answer:
      "KMC offers a full-stack solution — office space, hiring, HR, payroll, IT, and compliance — making it a seamless end-to-end experience for clients.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // ✅ FIXED

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-[#FFFAF5]">
      <div className="main-container1">
        <div className="flex lg:flex-row flex-col gap-10 items-start">
          {/* Left Column */}
          <div className="lg:w-1/2 mt-8">
            <h5 className="text-[#FF7200] text-[20px] font-bold uppercase mb-4">
              Frequently Asked Questions
            </h5>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[45px] font-semibold text-[#001738] leading-tight">
              FAQs: Everything You Need to Know About KMC's EOR Services
            </h2>
          </div>

          {/* Right Column - FAQs */}
          <div className="flex flex-col w-full">
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
