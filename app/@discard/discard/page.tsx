"use client";
import { CustomButton } from "@/components/Button/CustomButton";
import Modal from "@/components/Modal/Modal";
import PopupNotification from "@/components/PopupNotification/PopupNotification";
import { useRouter } from "next/navigation";
import * as React from "react";

function CancelPage() {
  return (
    <>
      <PopupNotification
        title="Discard changes?"
        message="Your changes have not been saved yet. Do you want to discard all changes?"
        onCancel="No, take me back"
        onConfirm="Discard changes"
      />
    </>
  );
}

export default CancelPage;
