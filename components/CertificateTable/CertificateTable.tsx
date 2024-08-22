"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  Row,
  Cell,
  Column,
} from "react-aria-components";

interface CertificateData {
  name: string;
  courseTitle: string;
  orgName: string;
  adminName: string;
  uid: string;
}

const certificateData: CertificateData[] = [
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
  {
    name: "{{name}}",
    courseTitle: "{{course-title}}",
    orgName: "{{org_name}}",
    adminName: "{{admin_name}}",
    uid: "123456778",
  },
];

const CertificateTable: React.FC = () => {
  const router = useRouter();

  const handleViewClick = () => {
    router.push("/certification");
  };

  return (
    <div className="relative w-full h-[calc(100vh-250px)] text-sm text-zinc-800">
      <div className="overflow-y-auto h-full">
        <Table
          aria-label="Certificate Table"
          className="w-full"
          style={{ tableLayout: "fixed" }}
        >
          <TableHeader className="sticky top-0 bg-[#F2F4F8] border-t border-b border-[#DDDDDD] whitespace-nowrap z-10">
            <Column isRowHeader className="py-3 text-start font-bold text-sm pl-20">
              Granted Name
            </Column>
            <Column className="py-3 text-start font-bold text-sm">
              Course Title
            </Column>
            <Column className="py-3 text-start font-bold text-sm">
              Organization
            </Column>
            <Column className="py-3 text-start font-bold text-sm">
              Created By
            </Column>
            <Column className="py-3 text-start font-bold text-sm">UID</Column>
            <Column className="py-3 text-start font-bold text-sm pr-20">PDF</Column>
          </TableHeader>
          <TableBody>
            {certificateData.map((certificate, index) => {
              const isProcessing = certificate.uid === "Processing...";
              return (
                <Row key={index} className="border-b gap-6 border-zinc-300">
                  <Cell className="py-5 text-sm pl-20 bg-white">{certificate.name}</Cell>
                  <Cell className="py-5 text-sm bg-white">{certificate.courseTitle}</Cell>
                  <Cell className="py-5 text-sm bg-white">{certificate.orgName}</Cell>
                  <Cell className="py-5 text-sm bg-white">{certificate.adminName}</Cell>
                  <Cell
                    className={`py-5 text-sm ${
                      isProcessing ? "text-[#D92A00]" : "bg-white"
                    }`}
                  >
                    {certificate.uid}
                  </Cell>
                  <Cell
                    className={`py-5 text-sm flex gap-4 pr-20 ${
                      isProcessing ? "opacity-50 pointer-events-none bg-white" : "bg-white"
                    }`}
                  >
                    <button
                      onClick={handleViewClick}
                      className="text-blue-800 w-17 flex gap-1 items-center"
                    >
                      <img
                        loading="lazy"
                        src="/icons/eye.svg"
                        className="w-5"
                        alt="View"
                      />
                      <span>View</span>
                    </button>
                    <button className="text-blue-800 flex gap-1 items-center">
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
      </div>
    </div>
  );
};

export default CertificateTable;