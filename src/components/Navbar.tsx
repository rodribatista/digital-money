import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={"w-full h-full p-10 flex flex-col gap-5 bg-yellow-500 text-black"}>
      <Link href={"/app/home"}>Inicio</Link>
      <Link href={"/app/activity"}>Actividad</Link>
      <Link href={"/app/profile"}>Tu perfil</Link>
      <Link href={"/app/deposit"}>Cargar dinero</Link>
      <Link href={"/app/payment"}>Pagar servicios</Link>
      <Link href={"/app/cards"}>Tarjetas</Link>
      <Link href={"#"}>Cerrar sesión</Link>
    </nav>
  );
};

export default Navbar;
