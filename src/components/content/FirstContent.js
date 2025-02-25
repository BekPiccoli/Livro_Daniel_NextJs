export default function FirstContent() {
  return (
    <>
      <div className="bg-[#EFD7A2] xl:flex ">
        <div className="flex flex-col w-screen items-center">
          <a className="flex font-ArchivoBlack w-4/5  text-5xl xl:text-6xl">
            A Magia da Conversa
            <br />
            Conecte-se, Influencie
            <br />e venda
          </a>
          <a className="flex font-Abel w-4/5  text-3xl mt-5 md:text-4xl xl:text-4xl">
            Descubra as estratégias que
            <br />
            transformam simples
            <br /> interações em clientes fiéis.
          </a>
          <a className="font-Abel w-4/5  text-lg mt-5">
            Aprenda com Daniel Regginatto como usar
            <br />
            automação, segmentação e persuasão para
            <br />
            fechar mais vendas e crescer exponencialmente.
          </a>
        </div>
        <img
          src="/images/HEADERMOB.svg"
          alt="Descrição da imagem"
          className="w-screen mt-10"
        />
      </div>
      <div className="bg-[#EFD7A2]  xl:flex ">
        <img
          src="/images/HEADERMOB.svg"
          alt="Descrição da imagem"
          className="w-screen mt-10 hidden xl:block"
        />
        <div className="flex flex-col w-screen items-center">
          <a className="flex font-ArchivoBlack w-4/5  text-4xl xl:text-5xl">
            O livro que Transforma Conversas em Vendas de sucesso
          </a>
          <a className="flex font-Abel w-4/5  text-lg mt-5 md:text-3xl">
            Em um mercado cada vez mais competitivo, a forma como você se
            comunica pode ser o diferencial entre o sucesso e a estagnação.{" "}
          </a>
          <a className="flex font-Abel w-4/5  text-lg mt-5 md:text-3xl">
            No livro A Magia da Conversa, Daniel Reginatto compartilha suas
            experiências e estratégias comprovadas para transformar diálogos em
            oportunidades reais de vendas.
          </a>
          <a className="flex font-Abel w-4/5  text-lg mt-5 md:text-3xl">
            Compre agora e dscubra como transformar suas interaçõesem vendas!
          </a>
          <div className=" ">
            <button className="font-ArchivoBlack  bg-[#FFEC5C] rounded-xl mb-10 mt-10 pt-4 pb-4 pl-10 pr-10 shadow-xl">
              Garanta seu exemplar!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
