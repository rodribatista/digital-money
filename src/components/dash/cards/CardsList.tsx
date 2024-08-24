"use client";
import {skipToken} from "@reduxjs/toolkit/query";

import {useAppSelector} from "@/lib/hooks";
import {useGetAllCardsQuery} from "@/api/cardApi";

import {CardItem} from "@/components/dash/cards/CardItem";

import {CardType} from "@/types/CardType";
import {useEffect} from "react";

type CardsListProps = {
  setCardsQty: (qty: number) => void,
};

export const CardsList = ({setCardsQty}: CardsListProps) => {

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data, isLoading} = useGetAllCardsQuery(accessToken ? {access_token: accessToken, account_id: accountInfo.account_id}: skipToken);

  useEffect(() => {
    if(!isLoading) setCardsQty(data.length);
  }, [isLoading, data]);

  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
      <h2 className={"pb-5 border-b border-gray-500 text-xl font-semibold"}>Tus tarjetas</h2>
      <ul className={"flex flex-col gap-5"}>
        {!isLoading ? (data.length ?
          data.map((card: CardType) => <CardItem key={card.id} {...card}/>)
          : <li className={"w-full pb-5 border-b border-gray-500"}>No hay tarjetas asociadas</li>)
        : <li className={"w-full pb-5 border-b border-gray-500"}>Cargando tarjetas...</li>}
      </ul>
      <span className={"text-sm text-gray-700"}>* Se permite un máximo de 10 tarjetas por usuario.</span>
    </section>
  );

};
