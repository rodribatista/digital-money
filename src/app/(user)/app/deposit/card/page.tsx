import React from 'react';
import Link from "next/link";

const DepositCardPage = () => {
  return (
    <>
      <div className={"flex flex-row gap-2 text-black self-start"}>
        <Link href={"/app/deposit"} className={"border-b"}>Cargar dinero</Link>
        <span>/</span>
        <h1 className={"font-semibold"}>Seleccionar tarjeta</h1>
      </div>
    </>
  );
};

export default DepositCardPage;
