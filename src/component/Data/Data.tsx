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

