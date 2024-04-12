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
    <body className={`w-screen min-h-screen flex flex-col bg-black text-white ${openSans.className}`}>
    {children}
    <footer className={"p-5 bg-gray-700 text-yellow-500 text-center"}>
      <p>© 2022 Digital Money House</p>
    </footer>
    </body>
    </html>
  );
}

export default RootLayout;
