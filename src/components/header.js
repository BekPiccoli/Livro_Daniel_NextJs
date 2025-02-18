export default function Header() {
  return (
    <>
      <div className=" flex justify-end h-10 w-430 bg-[#f4dcb6] ">
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-4">
            <a href="#" className="font-Abel">
              O que você vai aprender?
            </a>
            <a href="#" className="font-Abel">
              Prefácio
            </a>
            <a href="#" className="font-Abel">
              Sobre o autor
            </a>
            <button className="font-ArchivoBlack">comprar</button>
          </div>
        </div>
        <button className="md:hidden mr-4">
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
