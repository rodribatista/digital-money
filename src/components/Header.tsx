import {FC, PropsWithChildren} from 'react';
import Image from "next/image";

export const Header: FC<PropsWithChildren> = ({children}) => {
  return (
    <header className={"p-5 flex flex-row justify-between bg-transparent md:px-10 lg:px-40"}>
      <Image
        src={"/logo-color.svg"}
        alt={"Logo Digital Money"}
        width={80}
        height={0}
        priority
      />
      {children}
    </header>
  );
};
