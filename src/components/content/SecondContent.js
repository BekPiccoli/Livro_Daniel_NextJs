export default function SecondContent({ learnRef }) {
  return (
    <>
      <div className="min-h-screen w-screen  bg-black ">
        <div className="flex flex-col h-24 justify-center items-center  md:flex-row md:justify-center ">
          <a
            ref={learnRef}
            className="font-ArchivoBlack text-3xl text-[#FFEC5C] md:text-4xl xl:text-4xl"
          >
            O que Você
          </a>

          <a className="font-ArchivoBlack pl-5 text-3xl text-[#FFEC5C] md:text-4xl xl:text-4xl">
            Vai Aprender?
          </a>
        </div>
        <div className="flex flex-wrap justify-evenly w-screen  bg-black">
          <div className="h-[290px] w-[170px] flex flex-col items-center m-2 rounded-xl border-2 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]">
            <div className="flex items-center justify-start  h-[80px] w-[160px] md:h-[140px]">
              <img
                className="ml-2 w- md:w-12 xl:w-16"
                src="/images/Vector.svg"
                alt="Vector"
              />
            </div>
            <div className=" flex flex-col w-9/12">
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
            <div className="flex items-center justify-start  h-[80px] w-[160px] md:h-[140px]">
              <img
                className="ml-2 w-8 md:w-12 xl:w-16"
                src="/images/X.svg"
                alt="X "
              />
            </div>
            <div className=" flex flex-col h-48 w-9/12">
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
            <div className="flex items-center justify-start  h-[80px] w-[160px] md:h-[140px]">
              <img
                className="ml-2 md:w-12 xl:w-16"
                src="/images/Coment.svg"
                alt="Coment"
              />
            </div>
            <div className=" flex flex-col w-10/12">
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
            <div className="flex items-center justify-start  h-[80px] w-[160px] xl:h-[140px]">
              <img
                className="ml-2 2-8 md:w-12 xl:w-16"
                src="/images/FlashLigth.svg"
                alt="FlashLigth"
              />
            </div>
            <div className=" flex flex-col w-9/12 mt-3">
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
            <div className="flex items-center justify-start  h-[80px] w-[160px] md:h-[160px]">
              <img
                className="ml-2 w-6 md:w-8 xl:w-12"
                src="/images/Phone.svg"
                alt="Phone"
              />
            </div>
            <div className=" flex flex-col w-10/12">
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
        <div className="flex items-center justify-center  bg-black h-28 w-screen xl:hidden">
          <button className="font-ArchivoBlack  bg-[#FFEC5C] rounded-xl mb-10 mt-10 pt-4 pb-4 pl-10 pr-10 shadow-xl">
            Garanta seu exemplar!
          </button>
        </div>
      </div>
    </>
  );
}
