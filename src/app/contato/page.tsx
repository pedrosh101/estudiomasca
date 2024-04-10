import React from "react";
import Navbar from "../components/navbar";

function page() {
  return (
    <>
      <main className="flex flex-col items-center bg-clr1 min-h-screen text-black text-sm leading-6">
        <Navbar isProjetosPage={true} />
        <div className="flex flex-col sm:w-4/5 sm:px-16 px-8 sm:pt-10 pt-20 pb-4">
          <div className="h-0.5 w-1/2 bg-clr2 mb-8" />
          <h1 className="text-lg mb-8">Fale Conosco</h1>
          <h1>Estúdio Masca</h1>
          <a
            href="https://maps.app.goo.gl/BZ9SpzkCCAvqDMAS7"
            target="_blank"
            className="w-fit"
          >
            <p className="text-clr2">
              R. Des. Barata, 97 - Passaginha, Curvelo - MG, 35790-303
            </p>
          </a>

          <a
            href="https://wa.me/5531991245581"
            target="_blank"
            className="w-fit"
          >
            <p className="text-clr2">031995574311</p>
          </a>

          <a href="mailto:nicolevalente@gmail.com">
            <p className="text-clr2">nicolevalente@gmail.com</p>
          </a>

          <div className="h-0.5 w-full bg-clr2 mt-8" />
        </div>
      </main>
    </>
  );
}

export default page;
