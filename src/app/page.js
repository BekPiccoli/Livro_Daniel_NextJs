"use client";
import "@/app/globals.css";
import Head from "next/head";
import Header from "@/components/content/header";
import FirstContent from "@/components/content/FirstContent";
import SecondContent from "@/components/content/SecondContent";
import ThirdContent from "@/components/content/ThirdContent";
import FourthContent from "@/components/content/FourthContent";
import { useRef, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "A Magia da Conversa | Daniel Regginato";
  }, []);

  const learnRef = useRef(null);
  const prefacioRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <Head>
        <title>A Magia da Conversa | Daniel Regginato</title>
      </Head>
      <div className="">
        <Header
          learnRef={learnRef}
          prefacioRef={prefacioRef}
          aboutRef={aboutRef}
        />
        <FirstContent />
        <SecondContent learnRef={learnRef} />
        <ThirdContent prefacioRef={prefacioRef} />
        <FourthContent aboutRef={aboutRef} />
      </div>
    </>
  );
}
