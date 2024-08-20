"use client";
import React from "react";
import { Button } from "react-aria-components";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

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
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <Button
      className={twMerge(buttonStyles({ variant }), className)}
      onPress={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};