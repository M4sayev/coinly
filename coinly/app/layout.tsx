import "./globals.css";
import Providers from "./providers";
import { Roboto_Flex, Space_Mono } from "next/font/google";
import { Metadata } from "next";
import LayoutWrapper from "./LayoutWrapper";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coinly",
  description: "Full-stack cryptotracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoFlex.variable} ${spaceMono.variable}`}>
      <body>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
