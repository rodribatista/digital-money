"use client";
import {FC, ReactNode} from 'react';
import Link from "next/link";

type AppRedirectProps = {
  children: ReactNode,
  href: string,
};

export const AppRedirect: FC<AppRedirectProps> = ({children, href}) => {
  return (
    <Link href={href}>
      {children}
    </Link>
  );
};
