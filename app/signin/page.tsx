"use client";
import { CustomButton } from "@/components/Button/CustomButton";
import { CustomTextField } from "@/components/TextField/CustomTextField";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function SigninPage() {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center px-20 py-40 bg-white overflow-hidden max-md:px-5 max-md:py-24 font-NotoSans">
      <div className="flex flex-col items-center text-lg font-bold text-blue-800 w-[369px] max-w-full leading-7">
        <img
          loading="lazy"
          src="/images/logo.svg"
          alt="Web3-based Training Certificates"
          className="w-[149px] object-contain aspect-[2.65] max-w-full"
        />
        <div className="mt-5">Web3-based Training Certificates</div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-14 w-[500px] max-w-full max-md:mt-10"
      >
        <CustomTextField
          type="email"
          label="Email"
          id="email"
          isRequired={true}
          className="text-sm"
        />
        <CustomTextField
          label="Password"
          id="password"
          isRequired={true}
          className="mt-10 text-sm"
        />
        {/* <div className="flex-1 shrink self-stretch mt-1 w-full text-sm leading-5 text-orange-700 max-md:max-w-full">
          Invalid password. Please try again.
        </div> */}
        <div className="flex justify-center mt-10">
          <CustomButton onClick={handleSubmit} variant="primary">
            Sign in
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
