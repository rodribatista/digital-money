import React from 'react';
import Link from "next/link";

type AppLinksProps = {
  linkTo: string,
  children: React.ReactNode
};

export const AppLinks = ({linkTo, children}: AppLinksProps) => {
  return (
    <Link href={linkTo} className={"w-full py-5 bg-yellow-500 rounded-md text-black text-center font-semibold shadow-md"}>
      {children}
    </Link>
  );
};
