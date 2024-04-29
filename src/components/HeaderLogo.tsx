"use client";

import Image from "next/image";
import {useRouter} from "next/navigation";

import {logo} from "@/utils/routes";

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
        src={logo.yellow.src}
        alt={logo.yellow.alt}
        width={80}
        height={0}
        onClick={handleClick}
        className={"hover:cursor-pointer"}
      />
  );

};
