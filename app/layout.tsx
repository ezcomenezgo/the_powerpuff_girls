/*
 * @Author:Claire Li
 * @Date:2024-08-06 22:25:25
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-07 22:54:49
 * @Description:
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/ui/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" />
        <title>The Powerpuff Girls</title>
      </head>
      {/* suppress hydration warnings caused by google extension */}
      <body className={inter.className} suppressHydrationWarning={true}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
