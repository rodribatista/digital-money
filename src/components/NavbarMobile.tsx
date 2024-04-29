"use client";
import React from "react";
import Image from "next/image";

import {useAppSelector} from "@/lib/hooks";

import {Navbar} from "@/components/Navbar";

import {icon} from "@/utils/routes";

type NavbarMobileProps = {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
};

export const NavbarMobile = ({setShowMobileMenu}: NavbarMobileProps) => {

  const {accountInfo} = useAppSelector(state => state.auth);

  const handleShowMenu = () => {
    setShowMobileMenu(false);
  }

  return (
    <div className={"absolute top-0 left-0 w-screen h-full overflow-scroll z-50"}>
      <div className={"w-full h-1/4 p-10 flex flex-col justify-between bg-black"}>
        <button className={"self-end"} onClick={handleShowMenu}>
          <Image src={icon.close.src} alt={icon.close.alt} width={30} height={30}/>
        </button>
        <p className={"text-2xl text-yellow-500"}>Hola,<br/><span className={"font-bold"}>{accountInfo.name}</span></p>
      </div>
      <Navbar/>
    </div>
  );

};
