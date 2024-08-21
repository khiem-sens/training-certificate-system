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
 
];

const CertificateTable: React.FC = () => {
  const router = useRouter();

  const handleViewClick = () => {
    router.push("/certification");
  };
  return (
        <Table
          aria-label="Certificate Table"
          className="mt-8 text-sm text-zinc-800 w-full"
          style={{ tableLayout: 'fixed' }}
        >
          <TableHeader className="bg-[#F2F4F8] border-t border-b border-[#DDDDDD] whitespace-nowrap">
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
            <Column className="py-3 text-start font-bold text-sm">
              UID
            </Column>
            <Column className="py-3 text-start font-bold text-sm pr-20">
              PDF
            </Column>
          </TableHeader>
          <TableBody>
            {certificateData.map((certificate, index) => {
               const isProcessing = certificate.uid === "Processing...";
               return (
              <Row key={index} className="border-b gap-6 border-zinc-300">
                <Cell className="py-5 text-sm pl-20">{certificate.name}</Cell>
                <Cell className="py-5 text-sm">{certificate.courseTitle}</Cell>
                <Cell className="py-5 text-sm">{certificate.orgName}</Cell>
                <Cell className="py-5 text-sm">{certificate.adminName}</Cell>
                <Cell
                  className={`py-5 text-sm ${
                    isProcessing  ? "text-[#D92A00]" : ""
                  }`}
                >
                  {certificate.uid}
                </Cell>
                <Cell className={`py-5 text-sm flex gap-4 pr-20 ${
                    isProcessing ? "opacity-50 pointer-events-none" : ""
                  }`}>
                  <button onClick={handleViewClick} className="text-blue-800 w-17 flex gap-1 items-center">
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
            )})}
          </TableBody>
        </Table>
  );
};

export default CertificateTable;