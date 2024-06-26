"use client";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";
import {skipToken} from "@reduxjs/toolkit/query";

import {useAppSelector} from "@/lib/hooks";
import {useGetAllCardsQuery} from "@/api/cardApi";

import {SelectCardItem} from "@/components/dash/deposit/SelectCardItem";

import {CardType} from "@/types/CardType";

import {icon} from "@/utils/routes";


export const SelectCard = () => {

  const router = useRouter();

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data, isLoading} = useGetAllCardsQuery(accessToken ? {access_token: accessToken, account_id: accountInfo.account_id}: skipToken);

  const {getValues, watch,} = useFormContext()
  const [continueForm, setContinueForm] = useState(false)

  useEffect(() => {
    if (getValues("card_id")) {
      setContinueForm(true)
      return;
    }
    setContinueForm(false)
  }, [watch("card_id")]);

  const handleContinue = () => {
    router.push("/dashboard/deposit/card?step=1")
  }

  return (
    <>
      <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-black shadow-md md:p-10 xl:p-15"}>
        <h2 className={"text-2xl text-yellow-500 font-semibold"}>Seleccionar tarjeta</h2>
        <div className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black md:p-10 xl:p-15"}>
          <ul className={"flex flex-col gap-5"}>
            {!isLoading ? (data.length ?
                data.map((card: CardType) => <SelectCardItem key={card.id} {...card}/>)
                : <li className={"w-full pb-5 border-b border-gray-500"}>No hay tarjetas asociadas</li>)
              : <li className={"w-full pb-5 border-b border-gray-500"}>Cargando tarjetas...</li>}
          </ul>
          <Link href={"/dashboard/cards"} className={"flex flex-row justify-between"}>
            <span className={"font-semibold"}>Editar mis tarjetas</span>
            <Image src={icon.arrow.src} alt={icon.arrow.alt} width={15} height={15}/>
          </Link>
        </div>
      </section>
      <button className={"w-full py-5 bg-yellow-500 rounded-md text-black text-center font-semibold shadow-md disabled:bg-gray-500 hover:cursor-pointer"}
              disabled={!continueForm} onClick={handleContinue}>
        Continuar
      </button>
    </>
  );

};
