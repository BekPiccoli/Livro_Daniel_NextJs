export default function Header() {
  return (
    <>
      <header className=" flex justify-end items-center w-screen h-28">
        <div className="w-2/5 h-24 flex items-center mr-60">
          <ul className=" w-full h-10 flex justify-evenly items-center">
            <li className="w-46 flex justify-center items-center">
              <a className="text-xl font-Abel" href="">
                O que você vai aprender?
              </a>
            </li>
            <li className="w-32   flex justify-center items-center">
              <a className="text-xl font-Abel" href="">
                Prefácio
              </a>
            </li>
            <li className="w-32   flex justify-center items-center">
              <a className="text-xl font-Abel" href="">
                Sobre o autor
              </a>
            </li>
            <button className="text-xl font-ArchivoBlack w-32 h-10 bg-[#FFEC5C] rounded-lg shadow-xl">
              comprar
            </button>
          </ul>
        </div>
      </header>
    </>
  );
}
