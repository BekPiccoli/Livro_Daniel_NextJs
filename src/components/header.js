import ButtonNav from "./button";
export default function Header() {
  return (
    <>
      <div className=" flex items-center justify-end h-20 w-430 bg-[#EFD7A2]">
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-8 mr-28">
            <a href="#" className="font-Abel text-lg">
              O que você vai aprender?
            </a>
            <a href="#" className="font-Abel text-lg">
              Prefácio
            </a>
            <a href="#" className="font-Abel text-lg">
              Sobre o autor
            </a>
            <button className="font-ArchivoBlack  bg-yellow-300 rounded-xl pt-2 pb-2 pl-4 pr-4 shadow-xl">
              comprar
            </button>
          </div>
        </div>
        <ButtonNav />
      </div>
    </>
  );
}
