const cardData = [
  {
    Image: "/images/Frame.png",
    title: "B Corp br Certified",
    text: "Proven commitment to governance, people, and planet",
  },
  {
    Image: "/images/Frame (1).png",
    title: "Great Place To Work",
    text: "Named one of the Best Workplaces in Asia",
  },
  {
    Image: "/images/Frame (3).png",
    title: "Best Place To Work",
    text: "Committed to Employee Satisfaction",
  },
  {
    Image: "/images/Frame (4).png",
    title: `HR Asia's "Best Companies to Work For in Asia”`,
    text: "Received the Sustainable Workplace Award",
  },
  {
    Image: "/images/Frame (5).png",
    title: "WELL Certified Offices",
    text: "Health-first, high-performance workplaces",
  },
];

export default cardData;





import React from "react";
import Image from "next/image";

export const sectionsData = [
  {
    id: 0,
    title: "Business Services",
    icon: (
      <Image
        src="/images/Frame (10).png"
        alt="Business Services"
        width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/images/Group 734 (2).png"
            alt="Admin"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Admin",
      },
      {
        icon: (
          <Image
            src="/images/Group 735.png"
            alt="Operations"
          width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Operations",
      },
      {
        icon: (
          <Image
            src="/images/Group 736.png"
            alt="Bookkeeping"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Bookkeeping",
      },
    ],
    bg: "bg-[#E9F1FF]",
    rounded: "rounded-[20px]",
  },
  {
    id: 1,
    title: "eCommerce and Retail",
    icon: (
      <Image
        src="/images/Frame (2).png"
        alt="eCommerce"
       width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/images/Frame (2).png"
            alt="Product Management"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Product Management",
      },
      {
        icon: (
          <Image
            src="/images/Frame (2).png"
            alt="Logistics"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Logistics",
      },
    ],
  },
  {
    id: 2,
    title: "Digital and Creative",
    icon: (
      <Image
        src="/images/Frame (6).png"
        alt="Digital and Creative"
        width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/images/Frame (6).png"
            alt="Design"
             width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Design",
      },
      {
        icon: (
          <Image
            src="/images/Frame (6).png"
            alt="Development"
             width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Development",
      },
    ],
  },
  {
    id: 3,
    title: "Accounting and Finance",
    icon: (
      <Image
        src="/images/Frame (7).png"
        alt="Accounting and Finance"
         width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/images/Frame (7).png"
            alt="Accounts Payable"
             width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Accounts Payable",
      },
      {
        icon: (
          <Image
            src="/images/Frame (7).png"
            alt="Payroll"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Payroll",
      },
    ],
  },
  {
    id: 4,
    title: "Sales and Support",
    icon: (
      <Image
        src="/images/Frame (8).png"
        alt="Sales and Support"
         width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/images/Frame (8).png"
            alt="Customer Service"
             width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Customer Service",
      },
      {
        icon: (
          <Image
            src="/images/Frame (8).png"
            alt="Tech Support"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Tech Support",
      },
    ],
  },
  {
    id: 5,
    title: "Health and Wellness (Non-Clinical)",
    icon: (
      <Image
        src="/images/Frame (9).png"
        alt="Health and Wellness"
         width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/images/Frame (9).png"
            alt="Fitness Coaching"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Fitness Coaching",
      },
      {
        icon: (
          <Image
            src="/images/Frame (9).png"
            alt="Diet Planning"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Diet Planning",
      },
    ],
  },
];


export const businessData = [
  {
    img: "/images/user 1.png",
    bg: "/images/bg......png",
    title: "86%",
    title1: " Employee Retention",
    text: "We keep good people around",
  },
  {
    img: "/images/user 2.png",
    bg: "/images/bg......png",
    title: "Zero",
    title1: " Outsourcing",
    text: "Every service is run by KMC",
  },
  {
    img: "/images/user 3.png",
    bg: "/images/bg......png",
    title: "6,000+",
    title1: " Employees",
    text: "Across 500+ global clients",
  },
  {
    img: "/images/user 4.png",
    bg: "/images/bg......png",
    title: "Support",
    title1: " Hours",
    text: "That align with your workday",
  },
  {
    img: "/images/user 5.png",
    bg: "/images/bg......png",
    title: "Certificates",
    title1: " Approved",
    text: "ISO 27001, GDPR, and Philippine DPA compliant",
  },
];














export const whyKMCData = [
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

export const cards = [
    {
      title: "Great Place to Work Certified",
      subtitle: "(and proud of it)",
      bgColor: "bg-[#FFCE35]",
      image: "/images/Vector (1).png",
    },
    {
      title: "Career Growth & Leadership Tracks",
      subtitle: "",
      bgColor: "bg-[#FF7200]",
      image: "/images/Icon (2).png",
    },
    {
      title: "Well-Balanced Benefits",
      subtitle: "HMO, PTO, Housing, Flex Work",
      bgColor: "bg-[#001738] text-white",
      image: "/images/Vector (1).png",
    },
    {
      title: "Culture That Clicks",
      subtitle: "Ice Cream Fridays, Town Halls, Engagement Programs",
      bgColor: "bg-[#FF7200]",
      image: "/images/Icon.png",
    },
    {
      title: "HR Business Partners",
      subtitle: "for Every Client Team",
      bgColor: "bg-[#FFCE35]",
      image: "/images/Icon (1).png",
    },
  ];





export const faqs = [
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