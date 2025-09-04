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
import {
  FaUser,
  FaCog,
  FaBook,
  FaUniversity,
  FaShoppingCart,
  FaCloud,
  FaChartLine,
  FaHeartbeat,
} from "react-icons/fa";

export const sectionsData = [
  {
    id: 0,
    title: "Business Services",
    icon: <FaUniversity  />,
    items: [
      { icon: <FaUser />, label: "Admin" },
      { icon: <FaCog  />, label: "Operations" },
      { icon: <FaBook  />, label: "Bookkeeping" },
    ],
    bg: "bg-[#E9F1FF]",
    rounded: "rounded-[20px]",
  },
  {
    id: 1,
    title: "eCommerce and Retail",
    icon: <FaShoppingCart  />,
    items: [
      { icon: <FaUser  />, label: "Product Management" },
      { icon: <FaCog  />, label: "Logistics" },
    ],
  },
  {
    id: 2,
    title: "Digital and Creative",
    icon: <FaCloud  />,
    items: [
      { icon: <FaUser  />, label: "Design" },
      { icon: <FaCog  />, label: "Development" },
    ],
  },
  {
    id: 3,
    title: "Accounting and Finance",
    icon: <FaUniversity  />,
    items: [
      { icon: <FaUser  />, label: "Accounts Payable" },
      { icon: <FaBook  />, label: "Payroll" },
    ],
  },
  {
    id: 4,
    title: "Sales and Support",
    icon: <FaChartLine  />,
    items: [
      { icon: <FaUser  />, label: "Customer Service" },
      { icon: <FaCog  />, label: "Tech Support" },
    ],
  },
  {
    id: 5,
    title: "Health and Wellness (Non-Clinical)",
    icon: <FaHeartbeat  />,
    items: [
      { icon: <FaUser  />, label: "Fitness Coaching" },
      { icon: <FaCog  />, label: "Diet Planning" },
    ],
  },
];
