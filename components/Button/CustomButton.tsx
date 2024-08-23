"use client";
import React from "react";
import { Button } from "react-aria-components";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

const buttonStyles = tv({
  base: "px-4 py-2 rounded shadow-sm transition-all duration-200 ease-in-out", 
  variants: {
    variant: {
      primary: "bg-blue-800 text-white hover:bg-blue-600 font-NotoSans",
      secondary: "bg-white border border-zinc-300 text-zinc-800 hover:text-[#346fe0] font-NotoSans",
    },
  },
});

interface CustomButtonProps {
  variant: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  route?: string; 
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  className,
  children,
  onClick,
  route, 
  ...props
}) => {
  const router = useRouter(); 

  const handleClick = () => {
    if (onClick) onClick(); 
    if (route) router.push(route); 
  };

  return (
    <Button
      className={twMerge(buttonStyles({ variant }), className)}
      onPress={handleClick} 
      {...props}
    >
      {children}
    </Button>
  );
};
