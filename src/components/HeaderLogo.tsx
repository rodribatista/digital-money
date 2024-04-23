"use client";

import React from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";

type HeaderLogoProps = {
  onClickUrl: string;
};

export const HeaderLogo = ({onClickUrl}: HeaderLogoProps) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(onClickUrl);
  }

  return (
    <Image
        src={"/logo-color.svg"}
        alt={"Logo Digital Money"}
        width={80}
        height={0}
        onClick={handleClick}
        className={"hover:cursor-pointer"}
      />
  );

};
