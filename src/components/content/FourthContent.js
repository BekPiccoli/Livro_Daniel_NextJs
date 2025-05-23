"use client";

import InputNameNumber from "@/components/inputs/InputNameNumber";
import Image from "next/image";
import Daniel from "@/../public/images/DanielOptimized.webp";
import Linkedin from "@/../public/images/linkedin.webp";
import Facebook from "@/../public/images/Facebook.webp";
import Instagram from "@/../public/images/instagram.webp";
import WhatsApp from "@/../public/images/whats.webp";
import archivoBlack from "@/fontes/ArchivoBlack.js";
import abel from "@/fontes/Abel.js";
export default function FourthContent({ aboutRef }) {
  return (
    <>
      <div
        ref={aboutRef}
        className="w-screen flex flex-col items-center justify-center bg-black md:flex md:flex-row"
      >
        <div className="flex flex-col  gap-8 h-5/6 ml-8 mt-5 justify-center items-start md:w-6/12 ">
          <p
            className={`${archivoBlack.className} text-4xl w-5/6 text-white xl:text-5xl`}
          >
            Sobre o autor
          </p>

          <p
            className={`${abel.className} text-white text-2xl w-5/6 xl:text-3xl`}
          >
            Daniel Reginatto é casado e pai de 4 filhos, dedicado à família e
            apaixonado por inovação e empreendedorismo.
          </p>
          <p
            className={`${abel.className} text-white text-2xl w-5/6 xl:text-3xl`}
          >
            Empresário e fundador da Redrive, acumulou experiências marcantes
            como diretor de tecnologia na Wise Up e cofundador do
            meuSucesso.com.
          </p>
          <p
            className={`${abel.className} text-white text-2xl w-5/6 xl:text-3xl`}
          >
            Com métodos inovadores de vendas via WhatsApp, ajudou milhares de
            empresas a crescerem exponencialmente através da Redrive, impactando
            negócios em mais de 30 países.
          </p>
        </div>
        <div className="relative md:w-6/12 h-[700px] xl:w-[710px] xl:h-[800px]">
          <Image
            className="w-full h-full object-cover"
            src={Daniel}
            alt="Imagem de Daniel Reginatto"
            width={710}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-5%"></div>
        </div>
      </div>
      <div className="m-0 md:flex md:flex-row-reverse md:w-screen md:bg-black">
        <div className="w-screen h-[200px] flex flex-col items-center justify-center bg-black xl:m-15">
          <p className={`text-white ${archivoBlack.className} ml-5 text-2xl`}>
            Siga Daniel nas redes sociais
          </p>
          <div className="flex flex-row space-x-8 pt-3">
            <a
              href="https://www.linkedin.com/in/danielreginatto/"
              target="_blank"
            >
              <Image
                className="cursor-pointer w-[50px] h-[50px]"
                src={Linkedin}
                alt="ícone do Linkedin"
                width={64}
                height={64}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/danielreginatto/"
              target="_blank"
            >
              <Image
                className="cursor-pointer w-[50px] h-[50px]"
                src={WhatsApp}
                alt="íconde do WhatsApp"
                width={64}
                height={64}
              />
            </a>

            <a
              href="https://www.instagram.com/daniel.reginatto/"
              target="_blank"
            >
              <Image
                className="cursor-pointer w-[50px] h-[50px]"
                src={Instagram}
                alt="icone do Instagram"
                width={64}
                height={64}
              />
            </a>

            <a
              href="https://www.facebook.com/daniel.reginatto/"
              target="_blank"
            >
              <Image
                className="cursor-pointer w-[50px] h-[50px]"
                src={Facebook}
                alt="ícone do Facebook"
                width={64}
                height={64}
              />
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center h-[400px] w-screen bg-black">
          <div>
            <p className={`text-white ${archivoBlack.className} pl-5 text-3xl`}>
              Dúvidas? Entre em Contato!
            </p>
          </div>
          <InputNameNumber />
        </div>
      </div>
    </>
  );
}
