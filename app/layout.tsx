import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shpree – Real-time Price Drop Tracker",
  description:
    "Shpree lets you track price drops, get instant alerts, and view price history for any product. Never miss a deal again.",
  openGraph: {
    title: "Shpree – Real-time Price Drop Tracker",
    description:
      "Track price drops, get instant alerts, and check price history instantly.",
    url: "https://shpree.com",
    siteName: "Shpree",
    images: [
      {
        url: "/og-image.jpg", // ✅ Local file in public folder
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
    images: ["/og-image.jpg"], // ✅ Local file in public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
