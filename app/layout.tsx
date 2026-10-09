import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelandpinestudio.com"),
  title: "Pixel & Pine Studio",
  description:
    "Pixel & Pine Studio designs and builds websites and mobile apps for Android and iOS.",
  openGraph: {
    title: "Pixel & Pine Studio",
    description: "Websites and mobile apps, crafted with care.",
    url: "https://pixelandpinestudio.com",
    siteName: "Pixel & Pine Studio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
