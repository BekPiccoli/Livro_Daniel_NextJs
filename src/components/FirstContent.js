import Image from "next/image";
export default function Content() {
  return (
    <>
      <div className="bg-[#f2dbb2] md:flex ">
        <div className="flex flex-col w-screen items-center">
          <a className="flex font-ArchivoBlack w-4/5  text-5xl">
            A Magia da Conversa
            <br />
            Conecte-se, Influencie e
            <br />
            venda
          </a>
          <a className="flex font-Abel w-4/5  text-3xl mt-5 md:text-4xl">
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
          className="w-screen"
        />
      </div>
    </>
  );
}
