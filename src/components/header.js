export default function Header() {
  return (
    <>
      <header className=" flex justify-end items-center w-screen h-28 bg-yellow-100">
        <div className="w-2/5 h-24 flex items-center bg-yellow-100 mr-8">
          <ul className="bg-yellow-100 w-full h-10 flex justify-evenly items-center">
            <li className="w-46 bg-yellow-100 flex justify-center items-center">
              <a className="text-xl" href="">
                O que você vai aprender?
              </a>
            </li>
            <li className="w-32 bg-yellow-100  flex justify-center items-center">
              <a className="text-xl" href="">
                Prefácio
              </a>
            </li>
            <li className="w-32 bg-yellow-100  flex justify-center items-center">
              <a className="text-xl" href="">
                Sobre o autor
              </a>
            </li>
            <button className="text-xl w-32 h-10 bg-yellow-300 rounded-lg shadow-xl">
              <strong>Comprar</strong>
            </button>
          </ul>
        </div>
      </header>
    </>
  );
}
