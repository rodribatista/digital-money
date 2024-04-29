import React from 'react';
import Link from "next/link";

import {AccountsInfo} from "@/components/dash/deposit/AccountsInfo";

const DepositBankPage = () => {
  return (
    <>
      <div className={"flex flex-row gap-2 text-black self-start"}>
        <Link href={"/dashboard/deposit"} className={"border-b"}>Cargar dinero</Link>
        <span>/</span>
        <h1 className={"font-semibold"}>Transferencia bancaria</h1>
      </div>
      <AccountsInfo/>
    </>
  );
};

export default DepositBankPage;
