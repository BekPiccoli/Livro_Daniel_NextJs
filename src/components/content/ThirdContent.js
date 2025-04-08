import Image from "next/image";
// import SandroPreface from "@/../public/images/SandroPrefaceOptimized.webp";
import sandroPref from "@/../public/images/SandroPreface.webp";
import archivoBlack from "@/fontes/ArchivoBlack.js";
import abel from "@/fontes/Abel.js";
export default function ThirdContent({ prefacioRef }) {
  return (
    <>
      <div
        ref={prefacioRef}
        className="w-screen flex flex-col items-center justify-start  bg-black"
      >
        <div className=" mt-10 flex flex-col items-center bg-black md:flex md:flex-row md:justify-between md:pb-16">
          <div className="w-full flex flex-col items-center md:w-4/5 md:h-[600px] xl:w-3/5 xl:h-[800px]">
            <p
              className={`text-white ${abel.className} w-11/12 md:text-xl xl:text-3xl`}
            >
              Vivemos em tempos nos quais as regras do jogo não apenas mudaram –
              elas continuam mudando, e numa velocidade alucinante. Atravessamos
              uma era onde a tecnologia não é mais uma vantagem competitiva: é
              um pressuposto básico de qualquer negócio, o ponto de partida.
            </p>
            <br />
            <p
              className={`text-white ${abel.className} w-11/12 md:text-xl xl:text-3xl`}
            >
              Uma das disciplinas da gestão mais impactadas por esse novo
              contexto é a área comercial. As antigas técnicas de vendas,
              baseadas apenas em superação de objeções e técnicas de fechamento,
              são agora vestígios de uma paisagem em extinção. Essas técnicas
              continuam relevantes, porém a disputa por atenção, conexão e
              confiança com clientes nunca foi tão feroz.
            </p>
            <br />
            <p
              className={`text-white ${abel.className} w-11/12 md:text-xl xl:text-3xl`}
            >
              É nesse cenário de transformações intensas que
              <span className="text-[#FFEC5C]"> “A Magia das Conversas” </span>
              se apresenta como um farol para vendedores, empreendedores e
              líderes que buscam não apenas sobreviver, mas prosperar.
            </p>
            <p
              className={`hidden ${archivoBlack.className}  text-white  bg-black  w-11/12 md:block md:text-3xl `}
            >
              Prefácio de Sandro Magaldi
            </p>
          </div>
          <div className="relative w-full h-full md:h-1/4 md:w-6/12">
            <Image
              className="w-full h-full"
              src={sandroPref}
              alt="Imagem de Sandro"
              width={600}
              height={400}
              // style={{ width: "100%", height: "auto" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent to-10%"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-10%"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent to-10%"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent to-10%"></div>
          </div>
        </div>
        <p
          className={`${archivoBlack.className} w-screen h-16 flex justify-center items-center text-white text-xl bg-black md:hidden`}
        >
          Prefácio de Sandro Magaldi
        </p>
      </div>
      <div className="w-screen flex flex-col">
        <div className="flex flex-col h-40 p-8 justify-center items-start md:flex-row md:justify-center ">
          <p
            className={`${archivoBlack.className} text-3xl text-black md:text-4xl xl:text-4xl`}
          >
            Garanta Seu
          </p>
          <p
            className={`${archivoBlack.className} text-3xl text-black md:text-4xl md:ml-3 xl:text-4xl`}
          >
            Exemplar Agora
          </p>
        </div>
        <div className="bg-white flex h-[500px] items-start justify-evenly">
          <div className="bg-black items-center justify-center h-[400px] w-[180px] rounded-3xl shadow-2xl md:w-[350px] xl:w-[400px]">
            <div className="flex flex-col h-full w-full items-center">
              <p
                className={`text-[#FFEC5C] w-full h-1/4 pt-5 flex justify-center items-center ${archivoBlack.className} text-3xl`}
              >
                KINDLE
              </p>
              <div className="text-white flex items-center justify-evenly h-20 w-20 ">
                <p className={`${abel.className}`}>R$</p>
                <p className={`text-4xl ${archivoBlack.className} md:text-5xl`}>
                  27
                </p>
              </div>
              <div className="flex flex-col items-center  h-32">
                <p
                  className={`${archivoBlack.className} text-white  md:text-lg`}
                >
                  <span>✔</span> Acesso imediato
                </p>
                <p className={`${abel.className} text-white  md:text-lg`}>
                  <span>✔</span> Formato PDF/
                </p>
                <p className={`${abel.className} text-white  md:text-lg`}>
                  EPUB
                </p>
              </div>
              <button
                className={`${archivoBlack.className} text-lg pt-2 pb-2 pl-3 pr-3 bg-[#FFEC5C] rounded-xl  md:text-2xl md:pl-9 md:pr-9 hover:bg-white transition-all ease-in duration-200`}
              >
                <span className="sm:inline md:hidden">Comprar</span>
                <span className="hidden md:inline">Compre Agora</span>
              </button>
            </div>
          </div>
          <div className="bg-black items-center justify-center h-[400px] w-[180px] rounded-3xl shadow-2xl md:w-[350px] xl:w-[400px]">
            <div className="flex flex-col h-full w-full items-center">
              <p
                className={`text-[#FFEC5C] w-full h-1/4 pt-5 flex justify-center items-center ${archivoBlack.className} text-3xl`}
              >
                LIVRO
              </p>
              <div className="text-white flex items-center justify-evenly h-20 w-20">
                <p className={`${abel.className}`}>R$</p>
                <p className={`text-4xl ${archivoBlack.className} md:text-5xl`}>
                  57
                </p>
              </div>
              <div className="flex flex-col items-center h-32 md:w-[300px] ">
                <div className=" flex flex-col items-center md:flex md:flex-row">
                  <p className={`${abel.className} text-white md:text-lg`}>
                    <span>✔</span> Frete grátis para
                  </p>
                  <p
                    className={`${abel.className} text-white md:text-lg md:ml-1`}
                  >
                    todo o Brasil
                  </p>
                </div>
                <div className="flex flex-col items-center md:flex md:flex-row ">
                  <p
                    className={`${abel.className}font-Abel text-white md:text-lg`}
                  >
                    <span>✔</span> Capa premium e
                  </p>
                  <p
                    className={`${abel.className} text-white md:text-lg md:ml-1`}
                  >
                    acabamento
                  </p>
                </div>
                <p
                  className={`${abel.className} text-white md:text-lg md:ml-1`}
                >
                  especial
                </p>
              </div>
              <button
                className={`${archivoBlack.className} text-lg pt-2 pb-2 pl-3 pr-3 bg-[#FFEC5C] rounded-xl md:text-2xl md:pl-9 md:pr-9 hover:bg-white transition-all ease-in duration-200`}
              >
                <span className="sm:inline md:hidden">Comprar</span>
                <span className="hidden md:inline">Compre Agora</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
