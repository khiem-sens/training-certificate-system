import CertificateTable from "@/components/CertificateTable/CertificateTable";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import Pagination from "@/components/Pagination/Pagination";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <Header/>
      <CertificateTable/>
      <Pagination/>
    </main>
  );
}
