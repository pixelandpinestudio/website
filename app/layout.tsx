import type { Metadata, Viewport } from "next";
import { Fira_Sans, Inter } from "next/font/google";
import "./globals.css";

const display = Fira_Sans({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-display" });
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
  themeColor: "#1d3d2e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
