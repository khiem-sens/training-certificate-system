"use client";
import React from "react";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components/Button/CustomButton";
import { CustomTextField } from "@/components/TextField/CustomTextField";
import ComboBox from "@/components/ComboBox/ComboBox";

export default function FormCreatePage() {
  const router = useRouter();
  const handleCancelClick = () => {
    router.push("/discard");
  };

  const courseTitles = ["Course 1", "Course 2", "Course 3"];
  const organizationTitles = [
    "Organization 1",
    "Organization 2",
    "Organization 3",
  ];

  return (
    <Modal>
      <aside className="fixed top-0 right-0 flex flex-col bg-white border border-zinc-300 shadow-lg w-[500px] max-w-full h-screen z-50">
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
            <ComboBox
              label="Organization title"
              items={organizationTitles}
              id="organizationTitle"
              isRequired
            />
            <ComboBox
              label="Course title"
              items={courseTitles}
              id="courseTitle"
              isRequired
            />
          </form>
        </section>
      </aside>
    </Modal>
  );
}
