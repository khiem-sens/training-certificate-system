"use client";
import PopupNotification from "@/components/PopupNotification/PopupNotification";
import * as React from "react";

function SignoutPage() {
  return (
    <>
      <PopupNotification
        title="Sign out?"
        message="Are you sure you want to sign out?"
        onCancel="Cancel"
        onConfirm="Sign out now"
        route="/signin"
      />
    </>
  );
}

export default SignoutPage;
