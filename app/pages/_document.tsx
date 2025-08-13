import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Tailwind CDN (no install needed) */}
        <script src="https://cdn.tailwindcss.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: { brand: '#112D4E', accent: '#F58634' }
                  }
                }
              }
            `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="min-h-screen bg-white text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
