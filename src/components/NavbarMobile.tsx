import React from "react";
import Image from "next/image";

import {Navbar} from "@/components/Navbar";

type NavbarMobileProps = {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
};

export const NavbarMobile = ({setShowMobileMenu}: NavbarMobileProps) => {

  const handleShowMenu = () => {
    setShowMobileMenu(false);
  }

  return (
    <div className={"absolute top-0 left-0 w-screen h-screen"}>
      <div className={"w-full h-1/4 p-10 flex flex-col justify-between bg-black"}>
        <button className={"self-end"} onClick={handleShowMenu}>
          <Image src={"/icon-close.svg"} alt={"Icono para cerrar menú desplegable"} width={30} height={30}/>
        </button>
        <p className={"text-2xl text-yellow-500"}>Hola,<br/><span className={"font-bold"}>John Doe</span></p>
      </div>
      <Navbar/>
    </div>
  );

};
