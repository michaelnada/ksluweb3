import type { Metadata } from "next";
import { Noto_Sans_JP,Hina_Mincho,} from 'next/font/google'

import "./globals.css";


const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});
const Hina = Hina_Mincho ({
  weight: ["400", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "関西学生文芸連合 HOME",
  description: "関西学生文芸連合 HOME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Hina+Mincho&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=YourCustomFont:wght@400&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${notojp.className} ${Hina.className}`}>{children}</body>
    </html>
  );
}
