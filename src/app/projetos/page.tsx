import React from "react";
import Navbar from "../components/navbar";
import { projects } from "../data/projects";
import Link from "next/link";
import Projeto from "../components/projeto";

function page() {
  return (
    <>
      <main className="flex flex-col bg-clr2 min-h-screen">
        <Navbar isProjetosPage={false}/>
        <div className="grid sm:grid-cols-4 sm:gap-0.5 gap-1 px-0.5 pt-20 sm:pt-6 text-black pb-0.5">
        {projects.map((proj) => (
            <Link
              key={proj.id}
              href={{
                pathname: `/projetos/${proj.id}`,
              }}
            >
              <Projeto title={proj.title} path={proj.img} />
            </Link>
            
          ))}
        </div>
      </main>
    </>
  );
}

export default page;
