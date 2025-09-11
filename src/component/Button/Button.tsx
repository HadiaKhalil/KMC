"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
      className={`mt-3
        text-sm md:text-[16px]
        bg-[#EE7A30] hover:bg-[#d96c2b] text-white
        min-h-[50px] md:min-h-[60px]
        px-6 py-3
        rounded-[12px] font-medium
        flex items-center justify-center
        transition-all duration-300
        break-words
        ${disabled ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
