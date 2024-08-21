"use client";
import { CustomButton } from "@/components/Button/CustomButton";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import * as React from "react";

interface PopupNotificationProps {
  title: string;
  message: string;
  onConfirm: string;
  onCancel: string;
}

function PopupNotification({ title, message, onConfirm, onCancel }: PopupNotificationProps) {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  // Insert <br/> after every period (.) or question mark (?)
  const formattedMessage = message.replace(/([.?!])\s*(?=[A-Z])/g, "$1<br/>");

  return (
    <Modal>
      <section
        
        className="w-[700px] h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-start p-6 bg-white rounded border border-[#DDDDDD] shadow-lg"
      >
        <img
          loading="lazy"
          src="/icons/warning.svg"
          alt="Warning icon"
          className="w-[52px] h-[52px] rounded-full object-cover"
        />
        <article className="flex flex-col flex-1 min-w-[240px] ml-4">
          <header className="text-zinc-800">
            <h1 className="text-base font-bold leading-6">{title}</h1>
          </header>
          <div
            className="flex-1 mt-3 text-sm text-opacity-70 overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: formattedMessage }}
          />
          <footer className="flex gap-4 items-center justify-end pt-4 mt-4 border-t border-zinc-300">
            <CustomButton
              onClick={handleBackClick}
              variant="secondary"
              className="text-sm"
            >
              {onCancel}
            </CustomButton>
            <CustomButton variant="primary" className="text-sm">
              {onConfirm}
            </CustomButton>
          </footer>
        </article>
        <div className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1">
          <div
            className="flex justify-center items-center w-6 h-6 cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Close"
          >
            <img
              onClick={handleBackClick}
              loading="lazy"
              src="/icons/close.svg"
              alt="Close icon"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </Modal>
  );
}

export default PopupNotification;
