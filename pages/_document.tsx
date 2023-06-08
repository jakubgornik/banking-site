import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <meta name="description" content="The most modern banking ever" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
