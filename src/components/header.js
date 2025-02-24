"use client";
import { useState, useEffect } from "react";
import MenuIcon from "@/components/icons/Menu.js";
import CloseIcon from "@/components/icons/Close.js";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-end h-20 w-screen bg-[#EFD7A2] `}
      >
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-8 mr-28">
            <a href="#" className="font-Abel text-lg">
              O que você vai aprender?
            </a>
            <a href="#" className="font-Abel text-lg">
              Prefácio
            </a>
            <a href="#" className="font-Abel text-lg">
              Sobre o autor
            </a>
            <button className="font-ArchivoBlack  bg-yellow-300 rounded-xl pt-2 pb-2 pl-4 pr-4 shadow-xl">
              comprar
            </button>
          </div>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="pr-4 absolute top-4 right-4 z-50 md:hidden"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div
          className={`fixed top-0 left-0 w-full h-1/2 bg-black flex flex-col items-center justify-center rounded-b-xl  shadow-2xl transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          } `}
        >
          <ul
            role="menu"
            className=" space-y-8 md:hidden w-full h-1/2 flex flex-col items-center justify-center bg-slate-700 border border-white"
          >
            <li className="text-white bg-red-200">Teste</li>
            <li className="text-white bg-red-200">Teste</li>
            <li className="text-white bg-red-200">Teste</li>
          </ul>
        </div>
      </div>
    </>
  );
}
