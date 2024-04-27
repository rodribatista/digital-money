"use client";
import {useEffect, useState} from 'react';
import Image from "next/image";
import {usePathname} from "next/navigation";

import {useAppSelector} from "@/lib/hooks";

import {NavbarMobile} from "@/components/NavbarMobile";

export const HeaderInfo = () => {

  const pathname = usePathname();
  const {accountInfo} = useAppSelector(state => state.auth);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  const handleShowMenu = () => {
    setShowMobileMenu(true);
  }

  return (
    <div className={"flex flex-row gap-5 items-center"}>
      <div className={"py-2 px-3 bg-yellow-500 rounded-lg text-black text-center font-semibold"}>
        JD
      </div>
      <p className={"hidden md:block"}>Hola, {accountInfo.name}</p>
      <button className={"md:hidden"} onClick={handleShowMenu}>
        <Image src={"/icon-menu.svg"} alt={"Icono de menú desplegable"} width={35} height={35}/>
      </button>
      {showMobileMenu && <NavbarMobile setShowMobileMenu={setShowMobileMenu}/>}
    </div>
  );

};
