"use client";
import { useState } from "react";
import MenuIcon from "@/components/icons/Menu.js";
import CloseIcon from "@/components/icons/Close.js";

export default function Header({ learnRef, prefacioRef, aboutRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  return (
    <>
      <header
        className={`flex items-center justify-end h-20 w-screen bg-[#EFD7A2] `}
      >
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-8 mr-28">
            <button
              onClick={() => scrollToSection(learnRef)}
              className="font-Abel text-xl"
            >
              O que você vai aprender?
            </button>
            <button
              onClick={() => scrollToSection(prefacioRef)}
              className="font-Abel text-xl"
            >
              Prefácio
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="font-Abel text-xl"
            >
              Sobre o autor
            </button>
            <button className="font-ArchivoBlack  bg-[#FFEC5C] rounded-xl text-lg pt-2 pb-2 pl-6 pr-6 shadow-xl">
              comprar
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="pr-4  top-4 right-4 z-50 md:hidden"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div
          className={`fixed top-0 left-0 w-full h-1/2 bg-black flex flex-col items-center justify-center rounded-b-xl shadow-2xl transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          } md:hidden`}
        >
          <ul
            role="menu"
            className=" space-y-12 md:hidden w-full h-2/3 flex flex-col items-center justify-center"
          >
            <li
              onClick={() => scrollToSection(learnRef)}
              className="text-white text-xl font-Abel hover:text-yellow-20 hover:text-2xl  hover:duration-300 ease-in-out"
            >
              O que você vai aprender?
            </li>
            <li
              onClick={() => scrollToSection(prefacioRef)}
              className="text-white text-xl font-Abel hover:text-yellow-20 hover:text-2xl  hover:duration-300 ease-in-out "
            >
              Prefácio
            </li>
            <li
              onClick={() => scrollToSection(aboutRef)}
              className="text-white text-xl font-Abel hover:text-yellow-20 hover:text-2xl  hover:duration-300 ease-in-out"
            >
              Sobre o autor
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
