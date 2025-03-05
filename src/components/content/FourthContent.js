export default function FourthContent({ aboutRef }) {
  return (
    <>
      <div
        ref={aboutRef}
        className="flex flex-col h-32 p-8  bg-slate-500 justify-center items-start"
      >
        <p className="text-[#FFEC5C] text-3xl font-ArchivoBlack h-24 flex items-center  bg-slate-500 md:text-4xl xl:text-5xl">
          Sobre o Autor
        </p>
      </div>

      <div className=" w-screen gap-6 flex flex-col items-center justify-center bg-black md:flex md:flex-row">
        <div className="flex flex-col gap-6 items-center bg-blue-400 h-[500px]">
          <p className="font-Abel text-white text-xl w-5/6 ">
            Daniel Reginatto é casado e pai de 4 filhos, dedicado à família e
            apaixonado por inovação e empreendedorismo.
          </p>
          <p className="font-Abel text-white text-xl w-5/6 bg-sky-400">
            Empresário e fundador da Redrive, acumulou experiências marcantes
            como diretor de tecnologia na Wise Up e cofundador do
            meuSucesso.com.
          </p>
          <p className="font-Abel text-white text-xl w-5/6 bg-cyan-400">
            Com métodos inovadores de vendas via WhatsApp, ajudou milhares de
            empresas a crescerem exponencialmente através da Redrive, impactando
            negócios em mais de 30 países.
          </p>
        </div>
        <img
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
          src="images/Daniel_R-06.png"
          alt="Daniel Imagem"
        />
      </div>
    </>
  );
}
