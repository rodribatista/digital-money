import React from 'react';
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className={"flex flex-row gap-5 items-center"}>
      <div className={"py-2 px-3 bg-yellow-500 rounded-lg text-black text-center font-semibold"}>
        JD
      </div>
      <p className={"hidden md:block"}>Hola, John Doe</p>
      <button className={"md:hidden"}>
        <Image src={"/icon-menu.svg"} alt={"Icono de menú desplegable"} width={35} height={35}/>
      </button>
    </nav>
  );
};
