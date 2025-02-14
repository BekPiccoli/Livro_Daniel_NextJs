import Header from "@/components/header";
import Content from "@/components/FirstContent";
export default function Home() {
  return (
    <>
      <div className="flex flex-col h-[725px] w-screen bg-[url(../../public/LIVRODANIELHEADER.svg)] overflow-hidden">
        <Header />
        <Content />
      </div>
      <div className=" flex bg-[url(../../public/LIVRODANIEL2.png)] h-[700px] w-screen overflow-x-hidden"></div>
    </>
  );
}
