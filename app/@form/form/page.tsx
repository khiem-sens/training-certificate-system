"use client";
import React from "react";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components/Button/CustomButton";
import { CustomTextField } from "@/components/TextField/CustomTextField";

export default function FormCreatePage() {
  const router = useRouter();
  const handleCancelClick = () => {
    router.push("/discard");
  };
  return (
    <Modal>
      <aside className="fixed top-0 right-0 overflow-y-auto flex flex-col bg-white border z-50 border-zinc-300 shadow-lg w-[500px] max-w-full h-[910px]">
        <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-300">
          <h2 className="text-lg font-bold text-zinc-800">
            Create new certificate
          </h2>
          <div className="flex gap-2">
            <CustomButton variant="secondary" onClick={handleCancelClick}>
              Cancel
            </CustomButton>
            <CustomButton variant="primary">Save</CustomButton>
          </div>
        </header>
        <section className="flex-1 px-6 py-4 overflow-auto">
          <form className="flex flex-col gap-6">
            <CustomTextField id="grantedName" label="Granted name" isRequired />
            <CustomTextField id="courseTitle" label="Course title" isRequired />
            <CustomTextField id="organizationTitle" label="Organization title" isRequired />
          </form>
        </section>
      </aside>
    </Modal>
  );
}