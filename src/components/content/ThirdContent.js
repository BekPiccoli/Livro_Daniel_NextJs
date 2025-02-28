export default function ThirdContent() {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col items-center justify-start  bg-black">
        <p className="text-white font-Abel w-5/6">
          Vivemos em tempos nos quais as regras do jogo não apenas mudaram –
          elas continuam mudando, e numa velocidade alucinante. Atravessamos uma
          era onde a tecnologia não é mais uma vantagem competitiva: é um
          pressuposto básico de qualquer negócio, o ponto de partida.
        </p>
        <br />
        <p className="text-white font-Abel  w-5/6">
          Uma das disciplinas da gestão mais impactadas por esse novo contexto é
          a área comercial. As antigas técnicas de vendas, baseadas apenas em
          superação de objeções e técnicas de fechamento, são agora vestígios de
          uma paisagem em extinção. Essas técnicas continuam relevantes, porém a
          disputa por atenção, conexão e confiança com clientes nunca foi tão
          feroz.
        </p>
        <br />
        <p className="text-white font-Abel w-5/6">
          É nesse cenário de transformações intensas que
          <color className="text-[#FFEC5C]">“A Magia das Conversas” </color>
          se apresenta como um farol para vendedores, empreendedores e líderes
          que buscam não apenas sobreviver, mas prosperar.
        </p>
        <img className="w-full" src="images/sandro-sobre-img.png" alt="" />
        <p className="font-ArchivoBlack w-screen h-16 flex justify-center text-white text-xl bg-black">
          Prefácio de Sandro Magaldi
        </p>
      </div>
      <div className="min-h-screen w-screen flex flex-col">
        <div className=" bg-amber-200 ">
          <div className="flex flex-col h-40 p-8 justify-center items-start md:flex-row md:justify-center ">
            <a className="font-ArchivoBlack text-3xl text-black md:text-4xl xl:text-4xl">
              Garanta Seu
            </a>
            <a className="font-ArchivoBlack  text-3xl text-black md:text-4xl xl:text-4xl">
              Exemplar Agora
            </a>
          </div>
          <div className="bg-red-50 h-full flex items-start justify-evenly">
            <div className="bg-black items-center justify-center h-2/5 w-5/12 rounded-3xl shadow-2xl">
              <div className="flex flex-col h-full w-full items-center">
                <a className="text-[#FFEC5C] w-full h-1/4 pt-5 flex justify-center items-center font-ArchivoBlack text-3xl">
                  KINDLE
                </a>
                <div className="text-white flex items-center justify-evenly h-20  w-20">
                  <a className="font-Abel">R$</a>
                  <a className="text-4xl font-ArchivoBlack">27</a>
                </div>
                <div className="flex flex-col items-center  h-32">
                  <a className="font-Abel text-white">Acesso imediato</a>
                  <a className="font-Abel text-white">Formato PDF/</a>
                  <a className="font-Abel text-white">EPUB</a>
                </div>
                <button className="font-ArchivoBlack text-xl  bg-[#FFEC5C] rounded-xl pt-2 pb-2 pl-5 pr-5 ">
                  comprar
                </button>
              </div>
            </div>
            <div className="bg-black items-center justify-center h-2/5 w-5/12 rounded-3xl shadow-2xl">
              <div className="flex flex-col h-full w-full items-center">
                <a className="text-[#FFEC5C] w-full h-1/4 pt-5 flex justify-center items-center font-ArchivoBlack text-3xl">
                  LIVRO
                </a>
                <div className="text-white flex items-center justify-evenly h-20 w-20">
                  <a className="font-Abel">R$</a>
                  <a className="text-4xl font-ArchivoBlack">57</a>
                </div>
                <div className="flex flex-col items-center  h-32">
                  <a className="font-Abel text-white">Frete grátis para</a>
                  <a className="font-Abel text-white">todo o Brasil</a>

                  <a className="font-Abel text-white">Capa premium e</a>
                  <a className="font-Abel text-white">acabamento </a>
                  <a className="font-Abel text-white"> especial</a>
                </div>
                <button className="font-ArchivoBlack text-xl  bg-[#FFEC5C] rounded-xl pt-2 pb-2 pl-5 pr-5 ">
                  comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
