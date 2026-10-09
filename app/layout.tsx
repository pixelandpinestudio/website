import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

const description =
  "Data and analytics, digital marketing and IT staffing for enterprise and growing businesses in India and internationally.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pixelandpinestudio.com"),
  title: "The Pixel and Pine Studio | Data, marketing and IT staffing",
  description,
  openGraph: {
    title: "The Pixel and Pine Studio",
    description,
    url: "https://www.pixelandpinestudio.com",
    siteName: "The Pixel and Pine Studio",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1f17",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
