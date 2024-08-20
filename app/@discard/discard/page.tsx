import { CustomButton } from "@/components/Button/CustomButton";
import Modal from "@/components/Modal/Modal";
import * as React from "react";

function CancelPage() {
  return (
    <Modal>
      <section
        style={{ width: "700px", height: "198px" }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-start p-6 bg-white rounded border border-[#DDDDDD] shadow-lg"
      >
        <img
          loading="lazy"
          src="/icons/warning.svg"
          alt="Warning icon"
          className="w-[52px] h-[52px] rounded-full object-cover"
        />
        <article className="flex flex-col flex-1 min-w-[240px] ml-4">
          <header className="text-zinc-800">
            <h1 className="text-base font-bold leading-6">Discard changes?</h1>
          </header>
          <p className="mt-3 font-normal text-opacity-70">
            Your changes have not been saved yet. <br />
            Do you want to discard all changes?
          </p>
          <footer className="flex gap-4 items-center justify-end pt-4 mt-6 border-t border-zinc-300">
            <CustomButton variant="secondary">No, take me back</CustomButton>
            <CustomButton variant="primary">Discard changes</CustomButton>
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

export default CancelPage;
