"use client";
import React, {useEffect, useState} from 'react';
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";

const pathsInitial = {
  home: false,
  activity: false,
  profile: false,
  deposit: false,
  payment: false,
  cards: false
};

export const Navbar = () => {

  const pathname = usePathname();
  const router = useRouter();

  const [actualPath, setActualPath] = useState(pathsInitial);

  useEffect(() => {
    const actualPath = pathname.split("/")[2];
    setActualPath({...pathsInitial, [actualPath]: true})
  }, [pathname]);

  const handleLogout = () => {
    const ok = confirm("¿Cerrar sesión?")
    if (ok) {
      router.replace("/")
    }
  }
  
  return (
    <nav className={"w-full h-full p-10 flex flex-col gap-5 bg-yellow-500 text-black"}>
      <Link href={"/app/home"} className={`${actualPath["home"] && "font-bold"}`}>Inicio</Link>
      <Link href={"/app/activity"} className={`${actualPath["activity"] && "font-bold"}`}>Actividad</Link>
      <Link href={"/app/profile"} className={`${actualPath["profile"] && "font-bold"}`}>Tu perfil</Link>
      <Link href={"/app/deposit"} className={`${actualPath["deposit"] && "font-bold"}`}>Cargar dinero</Link>
      <Link href={"/app/payment"} className={`${actualPath["payment"] && "font-bold"}`}>Pagar servicios</Link>
      <Link href={"/app/cards"} className={`${actualPath["cards"] && "font-bold"}`}>Tarjetas</Link>
      <button className={"self-start opacity-25"} onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );

};
