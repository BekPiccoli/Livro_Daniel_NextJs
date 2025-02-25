import "@/app/globals.css";
import Header from "@/components/header";
import FirstContent from "@/components/content/FirstContent";
import SecondContent from "@/components/content/SecondContent";
export default function Home() {
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Header />
        <FirstContent />
        <SecondContent />
      </div>
    </>
  );
}
