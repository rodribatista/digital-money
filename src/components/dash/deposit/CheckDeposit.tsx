"use client";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {skipToken} from "@reduxjs/toolkit/query";
import {FieldValues, SubmitHandler, useFormContext} from "react-hook-form";

import {useAppSelector} from "@/lib/hooks";
import {useGetCardByIdQuery} from "@/api/cardApi";

import {icon} from "@/utils/routes";

export const CheckDeposit = () => {

  const router = useRouter();

  const {
    getValues,
    setValue,
    handleSubmit,
  } = useFormContext()

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data} = useGetCardByIdQuery(accessToken ? {access_token: accessToken, account_id: accountInfo.account_id, card_id: getValues("card_id")}: skipToken)

  useEffect(() => {
    if (!getValues("card_id")) {
      router.push("/dashboard/deposit/card?step=0")
      return;
    }
    if (!getValues("amount")) {
      router.push("/dashboard/deposit/card?step=1")
      return;
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleConfirm = () => {
    setValue("dated", new Date().toISOString())
    setValue("origin", "origin")
    setValue("destination", "destination")
    handleSubmit(onSubmit)();
  }

  return (
    <>
      <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-black shadow-md md:p-10 xl:p-15"}>
        <h3 className={"pb-5 border-b text-2xl text-yellow-500 font-semibold"}>Revisá que todo este bien</h3>
        <div className={"flex flex-col gap-2"}>
          <h2 className={"text-lg md:text-xl"}>Monto del deposito</h2>
          <div className={"flex flex-row gap-5 items-center"}>
            <span className={"text-3xl text-yellow-500 font-semibold md:text-4xl"}>$ {getValues("amount")},00</span>
            <Link href={"/dashboard/deposit/card?step=1"} className={"hover:cursor-pointer"}>
              <Image src={icon.edit.src} alt={icon.edit.alt} width={25} height={25}/>
            </Link>
          </div>
        </div>
        <div className={"flex flex-col gap-2"}>
          <h2 className={"text-lg md:text-xl"}>Tarjeta seleccionada</h2>
          <div className={"flex flex-row gap-5 items-center"}>
            <span className={"text-2xl text-yellow-500 font-semibold md:text-3xl"}>
              **** **** **** {data ? data.number_id.toString().slice(-4) : "****"}
            </span>
            <Link href={"/dashboard/deposit/card?step=0"} className={"hover:cursor-pointer"}>
              <Image src={icon.edit.src} alt={icon.edit.alt} width={25} height={25}/>
            </Link>
          </div>
        </div>
      </section>
      <button onClick={handleConfirm}
              className={"w-full py-5 bg-yellow-500 rounded-md text-black text-center font-semibold shadow-md disabled:bg-gray-500 hover:cursor-pointer"}>
        Confirmar
      </button>
    </>
  );

};
