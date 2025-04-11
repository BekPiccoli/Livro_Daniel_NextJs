"use client";
import "@/app/globals.css";
import Header from "@/components/content/header";
import FirstContent from "@/components/content/FirstContent";
import SecondContent from "@/components/content/SecondContent";
import ThirdContent from "@/components/content/ThirdContent";
import FourthContent from "@/components/content/FourthContent";
import { useRef } from "react";
import Script from "next/script";

export default function Home() {
  const learnRef = useRef(null);
  const prefacioRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-7T4E6LR80N`}
      />
      <Script
        strategy="afterInteractive"
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-LFDTD8G31Z', {
           page_path: window.location.pathname,
         });
       `,
        }}
      />

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
