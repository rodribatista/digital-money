"use client";
import {useState} from "react";
import Image from "next/image";

type CopyToClipboardProps = {
  value: string,
};

export const CopyToClipboard = ({value}: CopyToClipboardProps) => {

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    copyTextToClipboard(value)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (isCopied) {
    return <Image src={"/icon-check.svg"} alt={"Icono de check"} width={25} height={25}/>
  } else {
    return <Image src={"/icon-clipboard.svg"} alt={"Icono para copiar al portapapeles"} width={25} height={25}
                  className={"hover:cursor-pointer"} onClick={handleCopyClick}/>
  }

};

export async function copyTextToClipboard(value: string) {
  return await navigator.clipboard.writeText(value);
};
