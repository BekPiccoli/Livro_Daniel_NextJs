"use client";
import Header from "../header";
import { useRef } from "react";

export default function SecondContent({ learnRef }) {
  return (
    <>
      <div className="h-screen w-screen  bg-black ">
        <div className="flex flex-col h-24 justify-center items-center bg-white md:flex ">
          <a
            ref={learnRef}
            className="font-ArchivoBlack  w-4/5 text-3xl text-[#FFEC5C] md:text-4xl xl:text-4xl"
          >
            O que Você
          </a>

          <a className="font-ArchivoBlack  w-4/5 text-3xl text-[#FFEC5C] md:text-4xl xl:text-4xl">
            Vai Aprender?
          </a>
        </div>
        <div className="flex flex-wrap justify-evenly h-screen w-screen  bg-black">
          {/* <div className="h-1/3 w-5/12 rounded-xl border-2 border-[#FFEC5C] bg-green-400 "></div> */}
          <div className="h-[290px] w-[170px] flex flex-col items-center m-2 rounded-xl border-2 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]">
            <div className=" flex justify-start  h-[70px] w-[160px]">
              <img className="p-4" src="/images/Vector.svg" alt="Vector" />
            </div>
            <div className="bg-gray-400 flex flex-col w-10/12">
              <a className="text-white font-ArchivoBlack">
                Técnicas de Venda Comprovadas
              </a>
              <a className="text-white font-Abel">
                Aprenda a construir uma máquina de vendas eficiente que gere
                resultados costantes.
              </a>
            </div>
          </div>
          <div className="h-[290px] w-[170px] flex flex-col items-center m-2 rounded-xl border-2 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]">
            <div className=" flex justify-start h-[70px] w-[160px]">
              <img className="p-4" src="/images/X.svg" alt="X " />
            </div>
            <div className="bg-gray-400 flex flex-col h-48 w-10/12">
              <a className="text-white font-ArchivoBlack">
                Erros que Você Deve Evitar
              </a>
              <a className="text-white font-Abel">
                Evite os deslizes mais comuns que fazem potenciais clientes
                desistirem da compra.
              </a>
            </div>
          </div>
          <div className="h-[290px] w-[170px] flex flex-col items-center m-2 rounded-xl border-2 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]">
            <div className=" flex justify-start  h-[70px] w-[160px]">
              <img className="p-4" src="/images/Coment.svg" alt="Coment" />
            </div>
            <div className="bg-gray-400 flex flex-col w-10/12">
              <a className="text-white font-ArchivoBlack">
                Conversas que Geram Resultados
              </a>
              <a className="text-white font-Abel">
                Transforme simples interações em oportunidades lucrativas e
                escaláveis.
              </a>
            </div>
          </div>
          <div className="h-[290px] w-[170px] flex flex-col items-center m-2 rounded-xl border-2 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]">
            <div className=" flex justify-start  h-[70px] w-[160px]">
              <img
                className="p-4"
                src="/images/FlashLigth.svg"
                alt="FlashLigth"
              />
            </div>
            <div className="bg-gray-400 flex flex-col w-10/12">
              <a className="text-white font-ArchivoBlack">
                Captação e Engajamento de Leads
              </a>
              <a className="text-white font-Abel">
                Domine estratégias para atrair e converter leads qualificados de
                forma natural.
              </a>
            </div>
          </div>
          <div className="h-[290px] w-[170px] flex flex-col items-center m-2 rounded-xl border-2 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]">
            <div className=" flex justify-start  h-[70px] w-[160px]">
              <img className="p-4" src="/images/Phone.svg" alt="Phone" />
            </div>
            <div className="bg-gray-400 flex flex-col w-10/12">
              <a className="text-white font-ArchivoBlack">
                Automação e Personalização
              </a>
              <a className="text-white font-Abel">
                Descubra como WhatsApp, segmentação e mensagens personalizadas
                podem impulsionar suas vendas.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
