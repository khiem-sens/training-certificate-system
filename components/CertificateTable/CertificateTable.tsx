"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell,
} from "react-aria-components";

interface Certificate {
  name: string;
  courseTitle: string;
  orgName: string;
  adminName: string;
  uid: string | "Processing...";
}

const certificates: Certificate[] = [
  {
    name: "{{name}}",
    courseTitle: "{{course-title}}",
    orgName: "{{org_name}}",
    adminName: "{{admin_name}}",
    uid: "Processing...",
  },
  {
    name: "{{name}}",
    courseTitle: "{{course-title}}",
    orgName: "{{org_name}}",
    adminName: "{{admin_name}}",
    uid: "Processing...",
  },
  {
    name: "{{name}}",
    courseTitle: "{{course-title}}",
    orgName: "{{org_name}}",
    adminName: "{{admin_name}}",
    uid: "Processing...",
  },
  {
    name: "{{name}}",
    courseTitle: "{{course-title}}",
    orgName: "{{org_name}}",
    adminName: "{{admin_name}}",
    uid: "123456778",
  },
  {
    name: "{{name}}",
    courseTitle: "{{course-title}}",
    orgName: "{{org_name}}",
    adminName: "{{admin_name}}",
    uid: "123456778",
  },
  {
    name: "{{name}}",
    courseTitle: "{{course-title}}",
    orgName: "{{org_name}}",
    adminName: "{{admin_name}}",
    uid: "123456778",
  },
  {
    name: "{{name}}",
    courseTitle: "{{course-title}}",
    orgName: "{{org_name}}",
    adminName: "{{admin_name}}",
    uid: "123456778",
  },
];

const CertificateTable = () => {
  const router = useRouter();

  const handleViewClick = () => {
    router.push("/certification");
  };

  return (
    <section className="mt-8">
      <Table
        aria-label="Certificates"
        className="bg-white text-sm text-zinc-800 w-full"
      >
        {/* <TableHeader className="flex items-center bg-[#F2F4F8] border-t border-b border-[#DDDDDD] px-20 py-3 whitespace-nowrap">
          <Column isRowHeader className="w-[191px] text-start">Granted name</Column>
          <Column className="w-[191px] text-start">Course title</Column>
          <Column className="w-[191px] text-start">Organization</Column>
          <Column className="w-[191px] text-start">Created by</Column>
          <Column className="w-40 text-start">UID</Column>
          <Column className="w-[162px] text-start">PDF</Column>
        </TableHeader> */}
        <TableHeader className="flex items-center bg-[#F2F4F8] border-t border-b border-[#DDDDDD] px-20 py-3 whitespace-nowrap">
          <Column isRowHeader className="w-[242px] text-start">
            Granted name
          </Column>
          <Column className="w-[242px] text-start">Course title</Column>
          <Column className="w-[242px] text-start">Organization</Column>
          <Column className="w-[240px] text-start">Created by</Column>
          <Column className="w-60 text-start">UID</Column>
          <Column className="w-[162px] text-start">PDF</Column>
        </TableHeader>

        <TableBody>
          {certificates.map((certificate, index) => {
            const isProcessing = certificate.uid === "Processing...";
            return (
              <Row
                key={index}
                className="flex items-center border-b border-[#DDDDDD] px-20"
              >
                <Cell className="flex-1 w-[191px] py-5">
                  {certificate.name}
                </Cell>
                <Cell className="flex-1 w-[191px] py-5">
                  {certificate.courseTitle}
                </Cell>
                <Cell className="flex-1 w-[191px] py-5">
                  {certificate.orgName}
                </Cell>
                <Cell className="flex-1 w-[191px] py-5">
                  {certificate.adminName}
                </Cell>
                <Cell
                  className={`flex-1 w-40 py-5 ${
                    isProcessing ? "text-orange-700" : ""
                  }`}
                >
                  {certificate.uid}
                </Cell>
                <Cell
                  className={`w-[162px] py-5 flex gap-4 text-blue-800 ${
                    isProcessing ? "opacity-50 pointer-events-none" : ""
                  }`}
                >
                  <button
                    onClick={handleViewClick}
                    className="flex items-center gap-1"
                  >
                    <img
                      loading="lazy"
                      src="/icons/eye.svg"
                      className="w-5"
                      alt="View"
                    />
                    <span>View</span>
                  </button>
                  <button className="flex items-center gap-1">
                    <img
                      loading="lazy"
                      src="/icons/download.svg"
                      className="w-5"
                      alt="Download"
                    />
                    <span>Download</span>
                  </button>
                </Cell>
              </Row>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default CertificateTable;
