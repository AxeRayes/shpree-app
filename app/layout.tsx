import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shpree – Real-time Price Drop Tracker",
  description:
    "Shpree lets you track price drops, get instant alerts, and view price history for any product. Never miss a deal again.",
  // favicon + icons
  icons: {
    icon: [
      { url: "/favicon.ico" },         // your ICO (works in all browsers)
      { url: "/favicon.png", type: "image/png" }, // optional PNG fallback
    ],
  },
  themeColor: "#00B4D8",
  openGraph: {
    title: "Shpree – Real-time Price Drop Tracker",
    description:
      "Track price drops, get instant alerts, and check price history instantly.",
    url: "https://shpree.com",
    siteName: "Shpree",
    images: [
      {
        url: "/og-image.jpg", // put og-image.jpg in /public
        width: 1200,
        height: 630,
        alt: "Shpree – Real-time Price Drop Tracker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shpree – Real-time Price Drop Tracker",
    description:
      "Track price drops, get instant alerts, and check price history instantly.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
