import CertificateTable from "@/components/CertificateTable/CertificateTable";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar/>
      <Header/>
      <CertificateTable/>
    </Suspense>
  );
}
