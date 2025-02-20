import Header from "@/components/header";
import Content from "@/components/FirstContent";
export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-[#EFD7A2] overflow-x-hidden">
        <Header />
        <Content />
      </div>
    </>
  );
}
