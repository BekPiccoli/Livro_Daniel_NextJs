import Header from "@/components/header";
import Content from "@/components/FirstContent";
export default function Home() {
  return (
    <>
      <div className="h-screen w-[430px] bg-[#f3dcb3]">
        <Header />
        <Content />
      </div>
      <div className=""></div>
    </>
  );
}
