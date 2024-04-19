import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const peydaWeb = localFont({
  src: [
    {
      path: "../../public/fonts/PeydaWebFaNum-Regular.woff",
      weight: "10",
    },
    {
      path: "../../public/fonts/PeydaWebFaNum-Medium.woff",
      weight: "20",
    },
    {
      path: "../../public/fonts/PeydaWebFaNum-Bold.woff",
      weight: "bold",
    },
    {
      path: "../../public/fonts/PeydaWebFaNum-Thin.woff",
      weight: "100",
    },
    {
      path: "../../public/fonts/PeydaWebFaNum-ExtraLight.woff",
      weight: "200",
    },
    {
      path: "../../public/fonts/PeydaWebFaNum-Light.woff",
      weight: "300",
    },
    {
      path: "../../public/fonts/PeydaWebFaNum-Medium.woff",
      weight: "500",
    },
    {
      path: "../../public/fonts/PeydaWebFaNum-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../../public/fonts/PeydaWebFaNum-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "../../public/fonts/PeydaWebFaNum-Black.woff",
      weight: "900",
    },
  ],
  variable: "--font-peydaWeb",
});

export const metadata: Metadata = {
  title: "",
  description: " WebSite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${peydaWeb.className} font-sans`}>{children}</body>
    </html>
  );
}
