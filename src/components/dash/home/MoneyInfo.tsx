"use client";
import Link from "next/link";
import {useAppSelector} from "@/lib/hooks";

export const MoneyInfo = () => {

  const {accountInfo} = useAppSelector(state => state.auth);

  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-black shadow-md md:p-10 xl:p-15"}>
      <div className={"flex flex-row gap-5 self-end"}>
        <Link href={"/dashboard/cards"} className={"border-b text-sm"}>Ver tarjetas</Link>
        <Link href={"/dashboard/deposit/bank"} className={"border-b text-sm"}>Ver CVU</Link>
      </div>
      <div className={"flex flex-col gap-5"}>
        <h2 className={"text-xl"}>Dinero disponible</h2>
        <span
          className={"w-fit p-5 rounded-full border-2 border-yellow-500 text-4xl font-semibold"}>
          $ {accountInfo.available_amount.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </span>
      </div>
    </section>
  );
};
