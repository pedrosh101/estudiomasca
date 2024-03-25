"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Asset1 from "../../public/img/Asset1.png";
import Asset2 from "../../public/img/Asset2.png";
import Asset3 from "../../public/img/Asset3.png";
import Asset5 from "../../public/img/Asset5.png";
import Asset6 from "../../public/img/Asset6.png";
import Asset8 from "../../public/img/Asset8.png";
import Logo from "../../public/img/logoblack.png";
import Quick from "../../public/img/quick.png";
import Navbar from "./components/navbar";

export default function Home() {
  const [currentImage, setCurrentImage] = useState<any>(Asset1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage: any) => {
        if (prevImage === Asset1) return Asset2;
        if (prevImage === Asset2) return Asset6;
        if (prevImage === Asset6) return Quick;
        if (prevImage === Quick) return Asset8;
        if (prevImage === Asset8) return Asset3;
        if (prevImage === Asset3) return Asset5;
        if (prevImage === Asset5) return Logo;
        if (prevImage === Logo) return Logo;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-clr1 justify-between">
      <Navbar isProjetosPage={true} />
      <div className="flex">
        <Image src={currentImage} alt="Imagem" width={260} height={260} />
      </div>
      <div className="flex"></div>
    </main>
  );
}
