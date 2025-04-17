"use client";

import Image from "next/image";
import Vector from "@/../public/images/Vector.webp";
import X from "@/../public/images/X.webp";
import Coment from "@/../public/images/Coment.webp";
import FlashLigth from "@/../public/images/FlashLigth.webp";
import Phone from "@/../public/images/Phone.webp";
import archivoBlack from "@/fontes/ArchivoBlack.js";
import abel from "@/fontes/Abel.js";
export default function SecondContent({ learnRef }) {
  return (
    <>
      <div className=" w-screen  bg-black ">
        <div className="flex flex-col h-24 justify-center items-center  md:flex-row md:justify-center ">
          <p
            ref={learnRef}
            className={`${archivoBlack.className} text-3xl text-[#FFEC5C] md:text-4xl xl:text-4xl`}
          >
            O que Você
          </p>

          <p
            className={`${archivoBlack.className} pl-5 text-3xl text-[#FFEC5C] md:text-4xl xl:text-4xl`}
          >
            Vai Aprender?
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly w-screen  bg-black">
          <div className="h-[290px] w-[170px] flex flex-col items-center m-2 rounded-xl border-2 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]">
            <div className="flex items-center justify-start  h-[80px] w-[160px] md:h-[140px]">
              <Image
                className="ml-2 w-10 md:w-12 xl:w-16"
                src={Vector}
                alt="Sinal de verificação"
              />
            </div>
            <div className=" flex flex-col w-9/12">
              <p className={`text-white ${archivoBlack.className}`}>
                Técnicas de Venda Comprovadas
              </p>
              <p className={`text-white ${abel.className}`}>
                Aprenda a construir uma máquina de vendas eficiente que gere
                resultados costantes.
              </p>
            </div>
          </div>
          <div className="h-[290px] w-[170px] flex flex-col items-center m-2 rounded-xl border-2 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]">
            <div className="flex items-center justify-start  h-[80px] w-[160px] md:h-[140px]">
              <Image
                className="ml-2 w-10 md:w-12 xl:w-16"
                src={X}
                alt="Letra 'X' indicando erro"
                width={64}
                height={64}
              />
            </div>
            <div className=" flex flex-col h-48 w-9/12">
              <p className={`text-white ${archivoBlack.className}`}>
                Erros que Você Deve Evitar
              </p>
              <p className={`text-white ${abel.className}`}>
                Evite os deslizes mais comuns que fazem potenciais clientes
                desistirem da compra.
              </p>
            </div>
          </div>
          <div className="h-[290px] w-[170px] flex flex-col items-center m-2 rounded-xl border-2 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]">
            <div className="flex items-center justify-start h-[80px] w-[160px] md:h-[140px] md:w-[160px]">
              <Image
                className="ml-2 w-10 md:w-12 xl:w-16"
                src={Coment}
                alt="Balão de fala"
                width={60}
                height={60}
              />
            </div>
            <div className=" flex flex-col w-10/12">
              <p className={`text-white ${archivoBlack.className}`}>
                Conversas que Geram Resultados
              </p>
              <p className={`text-white ${abel.className}`}>
                Transforme simples interações em oportunidades lucrativas e
                escaláveis.
              </p>
            </div>
          </div>
          <div className="h-[290px] w-[170px] flex flex-col items-center m-2 rounded-xl border-2 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]">
            <div className="flex items-center justify-start  h-[80px] w-[160px] xl:h-[140px]">
              <Image
                className="ml-2 w-10 md:w-12 xl:w-16"
                src={FlashLigth}
                alt="Lanterna"
                width={60}
                height={60}
              />
            </div>
            <div className=" flex flex-col w-9/12 mt-3">
              <p className={`text-white ${archivoBlack.className}`}>
                Captação e Engajamento de Leads
              </p>
              <p className={`text-white ${abel.className}`}>
                Domine estratégias para atrair e converter leads qualificados de
                forma natural.
              </p>
            </div>
          </div>
          <div className="h-[290px] w-[170px] flex flex-col items-center m-2 rounded-xl border-2 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]">
            <div className="flex items-center justify-start  h-[80px] w-[160px] md:h-[160px]">
              <Image
                className="ml-2 w-6 md:w-8 xl:w-12"
                src={Phone}
                alt="Telefone Celular"
                width={64}
                height={64}
              />
            </div>
            <div className=" flex flex-col w-10/12">
              <p className={`text-white ${archivoBlack.className}`}>
                Automação e Personalização
              </p>
              <p className={`text-white ${abel.className}`}>
                Descubra como WhatsApp, segmentação e mensagens personalizadas
                podem impulsionar suas vendas.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-black h-28 w-screen md:hidden">
          <button
            className={`${archivoBlack.className}  bg-[#FFEC5C] rounded-xl mb-10 mt-10 pt-4 pb-4 pl-10 pr-10 shadow-xl hover:bg-white transition-all ease-in duration-200`}
          >
            Garanta seu exemplar!
          </button>
        </div>
      </div>
    </>
  );
}
