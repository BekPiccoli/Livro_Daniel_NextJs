import InputNameNumber from "@/components/inputs/InputNameNumber";
export default function FourthContent({ aboutRef }) {
  return (
    <>
      <section
        ref={aboutRef}
        className="w-screen flex flex-col items-center justify-center bg-black md:flex md:flex-row"
      >
        <div className="flex flex-col  gap-8 h-5/6 ml-8 mt-5 justify-center items-start md:w-6/12 ">
          <p className="font-ArchivoBlack text-4xl w-5/6 text-white xl:text-5xl">
            Sobre o autor
          </p>

          <p className="font-Abel text-white text-2xl w-5/6 xl:text-3xl">
            Daniel Reginatto é casado e pai de 4 filhos, dedicado à família e
            apaixonado por inovação e empreendedorismo.
          </p>
          <p className="font-Abel text-white text-2xl w-5/6 xl:text-3xl">
            Empresário e fundador da Redrive, acumulou experiências marcantes
            como diretor de tecnologia na Wise Up e cofundador do
            meuSucesso.com.
          </p>
          <p className="font-Abel text-white text-2xl w-5/6 xl:text-3xl">
            Com métodos inovadores de vendas via WhatsApp, ajudou milhares de
            empresas a crescerem exponencialmente através da Redrive, impactando
            negócios em mais de 30 países.
          </p>
        </div>
        <div className="relative md:w-6/12 h-[700px] xl:w-[710px] xl:h-[800px]">
          <img
            className="w-full h-full object-cover"
            src="images/Daniel.svg"
            alt="Daniel Imagem"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-5%"></div>
        </div>
      </section>
      <section className="m-0 md:flex md:flex-row-reverse md:w-screen md:bg-black">
        <div className="w-screen h-[200px] flex flex-col items-center justify-center bg-black xl:m-15">
          <p className="text-white font-ArchivoBlack ml-5 text-2xl">
            Siga Daniel nas redes sociais
          </p>
          <div className="flex flex-row space-x-8 pt-3">
            <a
              href="https://www.linkedin.com/in/danielreginatto/"
              target="_blank"
            >
              <img
                className="cursor-pointer"
                src="images/linkedin.svg"
                alt="Linkedin"
              />
            </a>
            <a>
              <img
                className="cursor-pointer"
                src="images/whats.svg"
                alt="WhatsApp"
              />
            </a>

            <a
              href="https://www.instagram.com/daniel.reginatto/"
              target="_blank"
            >
              <img
                className="cursor-pointer"
                src="images/instagram.svg"
                alt="instagram"
              />
            </a>

            <a
              href="https://www.facebook.com/daniel.reginatto/"
              target="_blank"
            >
              <img
                className="cursor-pointer"
                src="images/Facebook.svg"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center h-[400px] w-screen bg-black">
          <div>
            <p className="text-white font-ArchivoBlack pl-5 text-3xl">
              Dúvidas? Entre em Contato!
            </p>
          </div>
          <InputNameNumber />
        </div>
      </section>
    </>
  );
}
