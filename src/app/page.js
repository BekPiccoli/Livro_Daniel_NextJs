"use client";
import "@/app/globals.css";
import Head from "next/head";
import Header from "@/components/content/header";
import FirstContent from "@/components/content/FirstContent";
import SecondContent from "@/components/content/SecondContent";
import ThirdContent from "@/components/content/ThirdContent";
import FourthContent from "@/components/content/FourthContent";
import { useRef, useEffect } from "react";
import { NextSeo } from "next-seo";

export default function Home() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "A Magia da Conversa",
    author: {
      "@type": "Person",
      name: "Daniel Reginatto",
    },
    image: [
      "https://www.facebook.com/photo/?fbid=7742024362542643&set=ecnf.100002054682222",
    ],
    description:
      "Livro que ensina estratégias para transfor simples interações em clientes fiéis. Transformar conversas em vendas",
    abstract:
      "Aprenda com Daniel Regginatto como usar automação, segmentação e persuasão para fechar mais vendas e crescer exponencialmente.",
    genre: "",
    accessMode: ["textual", "visual"],
    accessModeSufficient: {
      "@type": "ItemList",
      itemListElement: ["textual", "visual", "textoEmVisual"],
      description: "Text and images",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
    },
    countryOfOrigin: {
      "@type": "Country",
      name: "Brazil",
    },
  };

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
        <NextSeo jsonLd={jsonLdData} />
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
