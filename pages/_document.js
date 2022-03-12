import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* CSS Usage: font-family: 'Poppins', sans-serif; */}
        {/* CSS Usage: font-family: 'Permanent Marker', cursive; */}
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
