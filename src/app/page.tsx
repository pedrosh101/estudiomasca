import Image from "next/image";
import Prov from "../../public/img/prov.jpg";
import Logo from "../../public/img/logo.png";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  justify-between">
      <Navbar isProjetosPage={false}/>
      <Image
        src={Prov}
        alt="Imagem"
        fill
        className="w-full h-full object-cover -z-20 opacity-80"
      />
      <div className="flex">
        <Image src={Logo} alt="Imagem" width={260} height={260} />
      </div>
      <div className="flex"></div>
    </main>
  );
}
