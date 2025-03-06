export default function FourthContent({ aboutRef }) {
  return (
    <>
      <div
        ref={aboutRef}
        className="w-screen gap-6 flex flex-col items-center justify-center bg-black md:flex md:flex-row"
      >
        <div className="flex flex-col gap-8 h-5/6 mt-5 justify-center items-center md:w-11/12">
          <p className="font-ArchivoBlack text-4xl w-5/6  text-white">
            Sobre o autor
          </p>

          <p className="font-Abel text-white text-2xl w-5/6 ">
            Daniel Reginatto é casado e pai de 4 filhos, dedicado à família e
            apaixonado por inovação e empreendedorismo.
          </p>
          <p className="font-Abel text-white text-2xl w-5/6 ">
            Empresário e fundador da Redrive, acumulou experiências marcantes
            como diretor de tecnologia na Wise Up e cofundador do
            meuSucesso.com.
          </p>
          <p className="font-Abel text-white text-2xl w-5/6 ">
            Com métodos inovadores de vendas via WhatsApp, ajudou milhares de
            empresas a crescerem exponencialmente através da Redrive, impactando
            negócios em mais de 30 países.
          </p>
        </div>
        <img
          className="h-[600px] md:w-6/12 h-[500px]xl:w-[1000px] xl:h-[700px]"
          src="images/Daniel.svg"
          alt="Daniel Imagem"
        />
      </div>
      <div className="md:flex md:flex-row-reverse md:h-[400px] md:w-screen md:bg-black">
        <div className="w-screen h-40 flex flex-col items-center justify-center mt-10 bg-black">
          <p className="text-white font-ArchivoBlack text-2xl">
            Siga Daniel nas redes sociais
          </p>
          <div className="flex flex-row space-x-8 pt-3 ">
            <img className="cursor-pointer" src="images/linkedin.svg" alt="" />
            <img className="cursor-pointer" src="images/whats.svg" alt="" />
            <img className="cursor-pointer" src="images/instagram.svg" alt="" />
            <img className="cursor-pointer" src="images/email.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center h-[400px] w-screen bg-black">
          <p className="text-white font-ArchivoBlack text-2xl">
            Dúvidas? Entre em Contato!
          </p>

          <label className="flex flex-col justify-center items-center  gap-3 h-2/3 w-2/3 bg-">
            <input
              className="rounded-lg w-5/6 h-10 placeholder:text-gray-400 placeholder:p-2"
              placeholder="Nome"
              type="text"
              name=""
              id=""
            />

            <input
              className="rounded-lg w-5/6 h-10 placeholder:text-gray-400 placeholder:p-2"
              placeholder="WhatsApp"
              type="email"
              name=""
              id=""
            />

            <input
              className="rounded-lg w-5/6 h-20 placeholder:text-gray-400 placeholder:p-2 placeholder:pt-3"
              placeholder="Mensagem"
              type="text"
              name=""
              id=""
            />
          </label>
        </div>
      </div>
    </>
  );
}
