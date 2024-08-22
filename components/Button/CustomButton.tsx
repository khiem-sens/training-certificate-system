"use client";
import React from "react";
import { Button } from "react-aria-components";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

const buttonStyles = tv({
  base: "px-4 py-2 rounded shadow-sm",
  variants: {
    variant: {
      primary: "bg-blue-800 text-white",
      secondary: "bg-white border border-zinc-300 text-zinc-800",
    },
  },
});

interface CustomButtonProps {
  variant: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  route?: string; // New prop for route
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  className,
  children,
  onClick,
  route, // Destructure the route prop
  ...props
}) => {
  const router = useRouter(); // Initialize the router

  const handleClick = () => {
    if (onClick) onClick(); // Execute the onClick callback if provided
    if (route) router.push(route); // Navigate to the route if provided
  };

  return (
    <Button
      className={twMerge(buttonStyles({ variant }), className)}
      onPress={handleClick} // Use the new handleClick function
      {...props}
    >
      {children}
    </Button>
  );
};
