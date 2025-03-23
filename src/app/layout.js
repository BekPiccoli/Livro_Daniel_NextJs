import "./globals.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function RootLayout({ children }) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "A Magia da Conversa",
    author: {
      "@type": "Person",
      name: "Daniel Reginatto",
    },
    image: ["https://a-magia-da-conversa.web.app/images/BookToLink.jpg"],
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
  return (
    <html lang="PT-BR">
      <Head>
        <NextSeo jsonLd={jsonLdData} />
        <meta
          name="description"
          content="Livro que ensina estratégias para transformar simples interações em clientes fiéis."
        />
        <meta
          name="google-site-verification"
          content="aZDNHhgeOJAOVTwQHXiBfWEz8xDiXtGGcDUOSzI4Vfk"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://a-magia-da-conversa.web.app/"
        />
        <meta property="og:title" content="A Magia da Conversa" />
        <meta
          property="og:description"
          content="Aprenda com Daniel Regginatto como usar persuasão para fechar vendas e crescer exponencialmente."
        />
        <meta
          property="og:image"
          content="https://a-magia-da-conversa.web.app/images/BookToLink.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body className={""}>{children}</body>
    </html>
  );
}
