"use client";
import PopupNotification from "@/components/PopupNotification/PopupNotification";
import * as React from "react";

function CancelPage() {
  return (
    <>
      <PopupNotification
        title="Sign out?"
        message="Are you sure you want to sign out?"
        onCancel="Cancel"
        onConfirm="Sign out now"
      />
    </>
  );
}

export default CancelPage;
