import {FC, PropsWithChildren} from "react";

import Image from "next/image";
import Link from "next/link";

import {logo} from "@/utils/routes";

const AuthLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header className={"p-5 flex flex-row justify-between bg-yellow-500 md:px-20 xl:px-40"}>
        <Link href={"/"}>
          <Image
            src={logo.black.src}
            alt={logo.black.alt}
            width={80}
            height={0}
            priority
          />
        </Link>
      </header>
      <main className={"w-full h-full px-5 py-10 flex flex-col grow gap-10 justify-center items-center md:px-20 xl:px-40 xl:py-20"}>
        {children}
      </main>
    </>
  );
}

export default AuthLayout;
