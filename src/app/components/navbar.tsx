"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  isProjetosPage: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isProjetosPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);


  const handleClickOutside = (event: MouseEvent) => {

    if (
      navRef.current &&
      !(navRef.current as Node).contains(event.target as Node)
    ) {
      setIsOpen(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        navRef.current &&
        !(navRef.current as Node).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex w-full text-xl justify-end sm:justify-center font-futura ${isProjetosPage ? 'text-clr2' : ''}`}>
      <div
        onClick={toggleNav}
        className="text-2xl cursor-pointer place-self-center sm:hidden absolute top-3 right-3"
      >
        <svg viewBox="0 0 24 24" fill={`${isProjetosPage ? '#b6524f' : '#ede3d5'}`} height="2em">
          <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
        </svg>
      </div>

      <div className="sm:flex items-center justify-between p-6 sm:px-0 font-futura tracking-widest hidden">
        <ul className="flex space-x-24 text-center font-medium text-xl">
          <Link href="/projetos">
            <li className={`cursor-pointer ${isProjetosPage ? 'hover:text-clr2' : 'hover:text-clr1'}`}>Projetos</li>
          </Link>
          <Link href="/estudio-masca">
            <li className={`cursor-pointer ${isProjetosPage ? 'hover:text-clr2' : 'hover:text-clr1'}`}>Estúdio Masca</li>
          </Link>
          <Link href="/agenda">
            <li className={`cursor-pointer ${isProjetosPage ? 'hover:text-clr2' : 'hover:text-clr1'}`}>Agenda</li>
          </Link>
          <Link href="/contato">
            <li className={`cursor-pointer ${isProjetosPage ? 'hover:text-clr2' : 'hover:text-clr1'}`}>Contato</li>
          </Link>
        </ul>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={navRef}
          className={`fixed flex right-0 top-0 w-full h-full p-10 bg-clr1 shadow justify-between transition-transform transform duration-700 text-clr2 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <section>
            <ul className="flex flex-col space-y-10 font-light text-2xl">
              <Link href="/projetos">
                <li className="cursor-pointer hover:text-clr1">Projetos</li>
              </Link>
              <Link href="/estudio-masca">
                <li className="cursor-pointer hover:text-clr1">
                  Estúdio Masca
                </li>
              </Link>
              <Link href="/agenda">
                <li className="cursor-pointer hover:text-clr1">Agenda</li>
              </Link>
              <Link href="/contato">
                <li className="cursor-pointer hover:text-clr1">Contato</li>
              </Link>
            </ul>
          </section>

          <div onClick={toggleNav}>
            {" "}
            <svg fill="none" viewBox="0 0 24 24" height="1.7em" width="1.7em">
              <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
