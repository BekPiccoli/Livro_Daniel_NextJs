import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="PT-BR">
      <head>
        <title>
          A Magia da Conversa | O livro que Transforma Conversas em Vendas de
          Sucesso.
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              name: "A Magia da Conversa",
              author: {
                "@type": "Person",
                name: "Daniel Reginatto",
              },
              image:
                "https://a-magia-da-conversa.web.app/images/BookOptimized.webp",
              description:
                "Livro que ensina estratégias para transformar simples interações em clientes fiéis. Transformar conversas em vendas.",
              abstract:
                "Aprenda com Daniel Regginatto como usar automação, segmentação e persuasão para fechar mais vendas e crescer exponencialmente.",
              accessMode: ["textual", "visual"],
              accessModeSufficient: ["textual", "visual"],
              offers: {
                "@type": "Offer",
                priceCurrency: "BRL",
                price: "57.00",
              },
              countryOfOrigin: {
                "@type": "Country",
                name: "Brazil",
              },
              inLanguage: "pt-BR",
              genre: ["Negócios", "Marketing", "Vendas"],
              keywords:
                "Livro, Conversas, Magia, Comunicação, Liderança, Vendas, Marketing, Persuasão, Automação, Daniel, Daniel Reginatto, Redrive",
              sameAs: [
                "https://www.linkedin.com/in/danielreginatto/",
                "https://www.instagram.com/daniel.reginatto/",
                "https://www.facebook.com/daniel.reginatto/",
              ],
            }),
          }}
        />

        <meta
          name="description"
          content="Livro que ensina estratégias para transformar simples interações em clientes fiéis."
        />
        <meta
          name="google-site-verification"
          content="aZDNHhgeOJAOVTwQHXiBfWEz8xDiXtGGcDUOSzI4Vfk"
        />
        <meta
          name="keywords"
          content="Livro, Conversas, Magia, Comunicação, Liderança, Vendas, Marketing, Persuasão, Automação, Daniel, Daniel Reginatto, Redrive"
        />
        <meta name="author" content="Daniel Reginatto" />
        <meta
          name="copyright"
          content="© 2024 Daniel Reginatto. Todos os direitos reservados."
        />
        <link rel="canonical" href="https://a-magia-da-conversa.web.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta
          property="article:author"
          content="https://www.facebook.com/daniel.reginatto/"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/daniel.reginatto/"
        />
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
          content="https://a-magia-da-conversa.web.app/images/MainIcon.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="A Magia da Conversa" />
        <meta
          name="twitter:description"
          content="Aprenda com Daniel Regginatto como usar persuasão para fechar vendas e crescer exponencialmente."
        />
        <meta
          name="twitter:image"
          content="https://a-magia-da-conversa.web.app/images/MainIcon.jpg"
        />
        <meta property="fb:app_id" content="1086481679908327  " />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          href="/fonts/ArchivoBlack-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Abel-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
