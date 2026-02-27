import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Suzinino Europe Tour | Bahlina Presents Live Comedy Show",
  description:
    "Exclusive tickets for Suzinino Live Comedy Show. Zurich & Utrecht. Bahlina presents.",
  verification: {
    google: "Q2iF22WkJxV55yAKqo-7XXgxpmykALNrAQPrcC3AOqI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased min-h-screen">{children}</body>
    </html>
  );
}
