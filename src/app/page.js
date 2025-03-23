"use client";
import "@/app/globals.css";
import Head from "next/head";
import Header from "@/components/content/header";
import FirstContent from "@/components/content/FirstContent";
import SecondContent from "@/components/content/SecondContent";
import ThirdContent from "@/components/content/ThirdContent";
import FourthContent from "@/components/content/FourthContent";
import Script from "next/script";
import { useRef, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "A Magia da Conversa";
  }, []);

  const learnRef = useRef(null);
  const prefacioRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <Head>
        <title>A Magia da Conversa</title>
      </Head>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-LFDTD8G31Z`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
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
