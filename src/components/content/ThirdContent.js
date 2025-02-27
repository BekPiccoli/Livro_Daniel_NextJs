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
      </div>
      <div className="h-screen w-screen bg-white ">
        <div className="flex flex-col h-32 p-8 justify-center items-start md:flex-row md:justify-center ">
          <a className="font-ArchivoBlack text-3xl text-black md:text-4xl xl:text-4xl">
            Garanta Seu
          </a>

          <a className="font-ArchivoBlack  text-3xl text-black md:text-4xl xl:text-4xl">
            Exemplar Agora
          </a>
        </div>
        <div className="bg-red-50 h-full w-full flex items-center justify-evenly">
          <div className="bg-black items-center justify-center h-1/3 w-2/5 rounded-3xl">
            <div className="flex flex-col h-full w-full items-center">
              <a className="text-[#FFEC5C] w-full h-1/4 pt-5 flex justify-center items-center font-ArchivoBlack text-3xl">
                KINDLE
              </a>
              <div className="text-white flex items-center justify-evenly  w-20">
                <a className="font-Abel">R$</a>
                <a className="text-4xl font-ArchivoBlack">27</a>
              </div>
              <div className="flex flex-col items-center h-28">
                <a className="font-Abel text-white">Acesso imediato</a>
                <a className="font-Abel text-white">Formato PDF/</a>
                <a className="font-Abel text-white">EPUB</a>
              </div>
              <button className="font-ArchivoBlack  bg-yellow-300 rounded-xl pt-2 pb-2 pl-4 pr-4 shadow-xl">
                comprar
              </button>
            </div>
          </div>

          <div className="bg-black items-center justify-center h-1/3 w-2/5 rounded-3xl">
            <div className="flex flex-col h-full w-full items-center">
              <a className="text-[#FFEC5C] w-full h-1/4 pt-5 flex justify-center items-center font-ArchivoBlack text-3xl">
                LIVRO
              </a>
              <div className="text-white flex items-center justify-evenly  w-20">
                <a className="font-Abel">R$</a>
                <a className="text-4xl font-ArchivoBlack">57</a>
              </div>
              <div className="flex flex-col  w-full items-center h-28 justify-center bg-red-700">
                <a className="font-Abel text-white">
                  Frete grátis para todo o Brasil
                </a>
                <a className="font-Abel text-white flex items-center justify-center">
                  Capa premium e acabamento especial/
                </a>
              </div>
              <button className="font-ArchivoBlack  bg-yellow-300 rounded-xl pt-2 pb-2 pl-4 pr-4 shadow-xl">
                comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
