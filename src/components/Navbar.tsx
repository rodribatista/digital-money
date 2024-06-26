"use client";
import React, {useEffect, useState} from 'react';
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";

import {useAppDispatch} from "@/lib/hooks";
import {userLoggedOut} from "@/store/authSlice";
import {authSwal} from "@/lib/sweet";

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

  const dispatch = useAppDispatch();

  const [actualPath, setActualPath] = useState(pathsInitial);

  useEffect(() => {
    const actualPath = pathname.split("/")[2];
    setActualPath({...pathsInitial, [actualPath]: true})
  }, [pathname]);

  const handleLogout = () => {
    authSwal.fire({
      title: "Cerrar sesión",
      text: "¿Estás seguro de que quieres cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(userLoggedOut())
        router.replace("/")
      }
    })
  }
  
  return (
    <nav className={"w-full h-full p-10 flex flex-col gap-5 bg-yellow-500 text-black"}>
      <Link href={"/dashboard/home"} className={`${actualPath["home"] && "font-bold"}`}>Inicio</Link>
      <Link href={"/dashboard/activity"} className={`${actualPath["activity"] && "font-bold"}`}>Actividad</Link>
      <Link href={"/dashboard/profile"} className={`${actualPath["profile"] && "font-bold"}`}>Tu perfil</Link>
      <Link href={"/dashboard/deposit"} className={`${actualPath["deposit"] && "font-bold"}`}>Cargar dinero</Link>
      <Link href={"/dashboard/payment"} className={`${actualPath["payment"] && "font-bold"}`}>Pagar servicios</Link>
      <Link href={"/dashboard/cards"} className={`${actualPath["cards"] && "font-bold"}`}>Tarjetas</Link>
      <button className={"self-start opacity-25"} onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );

};
