import CertificateDetails from "@/components/CertificateView/CertificateDetails";
import CertificateHeader from "@/components/CertificateView/CertificateHeader";
import RecipientName from "@/components/CertificateView/RecipientName";
import Modal from "@/components/Modal/Modal";
import React from "react";

const Certification = () => {
  return (
    <Modal>
      <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex overflow-hidden mt-5 bg-white w-[1121px] max-w-full">
        <img
          loading="lazy"
          src="/images/certificate-frame.svg"
          className="object-contain z-0 w-[1121px] max-w-full aspect-[1.75]"
          alt="Certificate frame"
        />
        <div className="absolute inset-x-0 top-1/2 flex flex-col items-center w-full max-w-[1121px] px-32 pb-6 -translate-y-1/2 ">
          <CertificateHeader
            title="Training Course Certificate"
            subtitle="This certificate is awarded to"
          />
          <RecipientName name="Brooklyn Simmons" />
          <CertificateDetails
            organization="Example Organization"
            courseTitle="Example Course"
            issueDate="28/12/2023"
          />
        </div>
        <div className="absolute bottom-[80px] left-2/4 text-sm leading-5 opacity-50 -translate-x-1/2 w-[101px]">
          UID: 12345678
        </div>
      </section>
    </Modal>
  );
};

export default Certification;
