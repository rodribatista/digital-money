import {FC, PropsWithChildren} from "react";
import type {Metadata} from "next";

import {Open_Sans} from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  weight: ['300', '400', '600', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Digital Money House",
  description: "Proyecto Integrador - Especialización Front End 2024",
  keywords: ["Money", "Digital House", "Next.js"],
}

const RootLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <html lang="es">
    <body className={`bg-black text-white ${openSans.className}`}>
    {children}
    </body>
    </html>
  );
}

export default RootLayout;
