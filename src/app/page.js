"use client";

import "@/app/globals.css";
import Header from "@/components/header";
import FirstContent from "@/components/content/FirstContent";
import SecondContent from "@/components/content/SecondContent";
import { useRef } from "react";

export default function Home() {
  const learnRef = useRef(null);
  const prefacioRef = useRef(null);

  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Header learnRef={learnRef} prefacioRef={prefacioRef} />
        <FirstContent />
        <SecondContent learnRef={learnRef} />
      </div>
    </>
  );
}
