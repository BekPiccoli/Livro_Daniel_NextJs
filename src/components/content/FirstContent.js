export default function FirstContent() {
  return (
    <>
      <section className="bg-[#EFD7A2] flex flex-col items-center md:flex md:justify-evenly md:flex-row pb-10 ">
        <div className="  flex flex-col pb-8  w-10/12 md:w-5/12 md:justify-center md:items-start ml-18">
          <p className="flex font-ArchivoBlack w-full text-5xl xl:text-6xl">
            A Magia da Conversa
            <br />
            Conecte-se, Influencie
            <br />e venda
          </p>
          <p className="flex font-Abel w-full text-4xl mt-5 md:text-4xl xl:text-4xl">
            Descubra as estratégias que
            <br />
            transformam simples
            <br /> interações em clientes fiéis.
          </p>
          <p className="font-Abel w-full text-xl mt-5">
            Aprenda com Daniel Regginatto como usar
            <br />
            automação, segmentação e persuasão para
            <br />
            fechar mais vendas e crescer exponencialmente.
          </p>
          <button className="font-ArchivoBlack  bg-[#FFEC5C] text-xl rounded-xl mb-10 mt-10 pt-4 pb-4 pl-10 pr-10 shadow-xl hidden md:block hover:bg-white transition-all ease-in duration-200">
            Garanta seu exemplar!
          </button>
        </div>
        <img
          src="/images/Book.svg"
          alt="Descrição da imagem"
          className="md:w-5/12 md:mt-10 xl:w-4/12"
        />
      </section>
      <section className="pt-10 bg-[#EFD7A2] xl:bg-gradient-to-r from-[#EFD7A2] to-[#D0B463]  xl:flex ">
        <img
          src="/images/SecondBook.svg"
          alt="Descrição da imagem"
          className="w-9/12 m-10 hidden xl:block "
        />
        <div className="flex flex-col w-screen items-center">
          <p className="flex font-ArchivoBlack w-4/5  text-4xl xl:text-5xl">
            O livro que Transforma Conversas em Vendas de sucesso
          </p>
          <p className="flex font-Abel w-4/5  text-lg mt-5 md:text-3xl">
            Em um mercado cada vez mais competitivo, a forma como você se
            comunica pode ser o diferencial entre o sucesso e a estagnação.{" "}
          </p>
          <p className="flex font-Abel w-4/5  text-lg mt-5 md:text-3xl">
            No livro A Magia da Conversa, Daniel Reginatto compartilha suas
            experiências e estratégias comprovadas para transformar diálogos em
            oportunidades reais de vendas.
          </p>
          <p className="flex font-Abel w-4/5  text-lg mt-5 md:text-3xl">
            Compre agora e dscubra como transformar suas interaçõesem vendas!
          </p>
          <div className=" ">
            <button className="font-ArchivoBlack text-xl  bg-[#FFEC5C] rounded-xl mb-10 mt-10 pt-4 pb-4 pl-10 pr-10 shadow-xl hover:bg-white transition-all ease-in duration-200">
              Garanta seu exemplar!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
