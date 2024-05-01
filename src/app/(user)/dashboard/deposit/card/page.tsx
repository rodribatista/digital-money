import React from 'react';
import Link from "next/link";
import {SelectCard} from "@/components/dash/deposit/SelectCard";

const DepositCardPage = () => {
  return (
    <>
      <div className={"flex flex-row gap-2 text-black self-start"}>
        <Link href={"/dashboard/deposit"} className={"border-b"}>Cargar dinero</Link>
        <span>/</span>
        <h1 className={"font-semibold"}>Seleccionar tarjeta</h1>
      </div>
      <SelectCard/>
    </>
  );
};

export default DepositCardPage;
