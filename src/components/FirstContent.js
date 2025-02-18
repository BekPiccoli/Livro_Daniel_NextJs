import Image from "next/image";
export default function Content() {
  return (
    <>
      <div className="flex flex-col w-screen items-center">
        <a className="flex font-ArchivoBlack w-[330px] text-5xl ">
          A Magia da
          <br />
          Conversa
          <br />
          Conecte-se,
          <br />
          Influencie e
          <br />
          venda
        </a>
        <a className="flex font-Abel w-[330px] text-3xl mt-5">
          Descubra as estratégias que
          <br />
          transformam simples
          <br />
          interações em clientes fiéis.
        </a>
        <a className="font-Abel w-[330px] text-base mt-5">
          Aprenda com Daniel Regginatto como usar
          <br />
          automação, segmentação e persuasão para
          <br />
          fechar mais vendas e crescer exponencialmente.
        </a>
      </div>
      <Image
        className="mt-10"
        src="/images/HEADERMOB.svg"
        alt="Descrição da imagem"
        priority={true}
        width={430}
        height={200}
      />
    </>
  );
}
