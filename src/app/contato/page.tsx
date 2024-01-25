import React from "react";
import Navbar from "../components/navbar";


function page() {
  return (
    <>
      <main className="flex flex-col bg-clr1 min-h-screen">
        <Navbar isProjetosPage={true}/>
      </main>
    </>
  );
}

export default page;