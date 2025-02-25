export default function SecondContent() {
  return (
    <>
      <div className="h-screen w-screen  bg-black ">
        <div className="flex flex-col h-24 justify-center items-center bg-white md:flex ">
          <a
            id="OqueVoceVaiAprender"
            className="font-ArchivoBlack  w-4/5 text-3xl text-[#FFEC5C] md:text-4xl xl:text-4xl"
          >
            O que Você
          </a>

          <a className="font-ArchivoBlack  w-4/5 text-3xl text-[#FFEC5C] md:text-4xl xl:text-4xl">
            Vai Aprender?
          </a>
        </div>
        <div className="flex flex-wrap justify-evenly h-screen w-screen  bg-black">
          {/* <div className="h-1/3 w-5/12 rounded-xl border-4 border-[#FFEC5C] bg-green-400 "></div> */}
          <div className="h-[290px] w-[170px] m-2 rounded-xl border-4 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]"></div>{" "}
          <div className="h-[290px] w-[170px] m-2 rounded-xl border-4 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]"></div>
          <div className="h-[290px] w-[170px] m-2 rounded-xl border-4 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]"></div>
          <div className="h-[290px] w-[170px] m-2 rounded-xl border-4 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]"></div>
          <div className="h-[290px] w-[170px] m-2 rounded-xl border-4 border-[#FFEC5C] bg-black xl:h-[330px] xl:w-[230]"></div>
        </div>
      </div>
    </>
  );
}
