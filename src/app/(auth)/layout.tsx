import {FC, PropsWithChildren} from "react";

import Image from "next/image";
import Link from "next/link";

const AuthLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header className={"p-5 flex flex-row justify-between bg-yellow-500 md:px-20 xl:px-40"}>
        <Link href={"/"}>
          <Image
            src={"/logo-black.svg"}
            alt={"Logo Digital Money"}
            width={80}
            height={0}
            priority
          />
        </Link>
      </header>
      <main className={"w-full h-full p-5 flex flex-col grow gap-10 justify-center items-center md:px-20 xl:px-40"}>
        {children}
      </main>
    </>
  );
}

export default AuthLayout;
