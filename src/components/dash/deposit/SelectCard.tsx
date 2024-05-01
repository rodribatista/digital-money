"use client";
import Link from "next/link";
import Image from "next/image";
import {skipToken} from "@reduxjs/toolkit/query";

import {useAppSelector} from "@/lib/hooks";
import {useGetAllCardsQuery} from "@/api/cardApi";

import {SelectCardItem} from "@/components/dash/deposit/SelectCardItem";

import {CardType} from "@/types/CardType";

import {icon} from "@/utils/routes";

export const SelectCard = () => {

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data, isLoading} = useGetAllCardsQuery(accessToken ? {access_token: accessToken, account_id: accountInfo.account_id}: skipToken);

  return (
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
  );

};
