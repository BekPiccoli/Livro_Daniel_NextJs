export default function Header() {
  return (
    <>
      <div className=" flex items-center justify-end h-20 w-430 bg-[#f2dbb2]">
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
        <button className="md:hidden pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="35"
            height="35"
            viewBox="0 0 50 50"
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        </button>
      </div>
    </>
  );
}
