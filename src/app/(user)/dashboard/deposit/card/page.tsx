import Link from "next/link";
import {Suspense} from "react";

import {DepositCardStep} from "@/components/dash/deposit/DepositCardStep";

const DepositCardPage = () => {
  return (
    <>
      <div className={"flex flex-row gap-2 text-black self-start"}>
        <Link href={"/dashboard/deposit"} className={"border-b"}>Cargar dinero</Link>
        <span>/</span>
        <h1 className={"font-semibold"}>Deposito con tarjeta</h1>
      </div>
      <Suspense>
        <DepositCardStep/>
      </Suspense>
    </>
  );
};

export default DepositCardPage;
