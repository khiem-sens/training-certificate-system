import CertificateTable from "@/components/CertificateTable/CertificateTable";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <Header/>
      <CertificateTable/>
    </main>
  );
}
