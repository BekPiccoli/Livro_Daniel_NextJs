import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NTCZ9X58');`,
          }}
        />

        <title>
          A Magia da Conversa | O livro que Transforma Conversas em Vendas.
        </title>
        <meta
          name="title"
          content="A Magia da Conversa | O livro que Transforma Conversas em Vendas."
        />
        <meta
          name="description"
          content="Aprenda com Daniel Reginatto como usar persuasão para fechar vendas e crescer exponencialmente."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="copyright"
          content="© 2024 Daniel Reginatto. Todos os direitos reservados."
        />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="A Magia da Conversa" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://a-magia-da-conversa.web.app/"
        />
        <meta
          property="og:title"
          content="A Magia da Conversa | O livro que Transforma Conversas em Vendas."
        />
        <meta
          property="og:description"
          content="Aprenda com Daniel Reginatto como usar persuasão para fechar vendas e crescer exponencialmente."
        />
        <meta
          property="og:image"
          content="https://a-magia-da-conversa.web.app/images/MainIcon.jpg"
        />
        <meta
          property="article:author"
          content="https://www.facebook.com/daniel.reginatto/"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/daniel.reginatto/"
        />
        <meta property="fb:app_id" content="1086481679908327" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="A Magia da Conversa | O livro que Transforma Conversas em Vendas."
        />
        <meta
          name="twitter:description"
          content="Aprenda com Daniel Reginatto como usar persuasão para fechar vendas e crescer exponencialmente."
        />
        <meta
          name="twitter:image"
          content="https://a-magia-da-conversa.web.app/images/MainIcon.jpg"
        />

        <link rel="canonical" href="https://a-magia-da-conversa.web.app/" />

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

        <link rel="manifest" href="/manifest.json" />

        <meta
          name="google-site-verification"
          content="aZDNHhgeOJAOVTwQHXiBfWEz8xDiXtGGcDUOSzI4Vfk"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              name: "A Magia da Conversa | O livro que Transforma Conversas em Vendas.",
              author: {
                "@type": "Person",
                name: "Daniel Reginatto",
              },
              image: "https://a-magia-da-conversa.web.app/images/MainIcon.jpg",
              description:
                "Aprenda com Daniel Reginatto como usar automação, segmentação e persuasão para fechar mais vendas e crescer exponencialmente.",
              abstract:
                "Aprenda com Daniel Reginatto como usar automação, segmentação e persuasão para fechar mais vendas e crescer exponencialmente.",
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
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NTCZ9X58"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7T4E6LR80N"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7T4E6LR80N', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
