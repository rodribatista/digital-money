"use client";
import Image from "next/image";
import {skipToken} from "@reduxjs/toolkit/query";

import {useAppSelector} from "@/lib/hooks";
import {useGetAccountActivityByIdQuery} from "@/api/activityApi";

import {icon} from "@/utils/routes";
import {getFullDate} from "@/utils/date";
import {AppLinks} from "@/components/dash/AppLinks";

type ActivityVoucherPageProps = {
  activity_id: number,
};

export const ActivityVoucher = ({activity_id}: ActivityVoucherPageProps) => {

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data, isLoading} = useGetAccountActivityByIdQuery(accessToken ? {access_token: accessToken, account_id: accountInfo.account_id, transaction_id: activity_id}: skipToken)

  return (
    <>
      {data ?
        <>
          <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-black shadow-md md:p-10 xl:p-15"}>
            <div className={"pb-5 flex flex-col gap-2 justify-between border-b xl:flex-row"}>
              <div className={"flex flex-row gap-3 items-center"}>
                <Image src={icon.check.src} alt={icon.check.alt} width={30} height={30}/>
                <h3 className={"text-2xl text-yellow-500 font-semibold"}>Aprobada</h3>
              </div>
              <span>Creada el {getFullDate(new Date(data.dated))}</span>
            </div>
            <div className={"flex flex-col gap-2"}>
              <h2 className={"text-xl"}>Monto de la transferencia</h2>
              <span className={"text-3xl text-yellow-500 font-semibold md:text-4xl"}>$ {data.amount},00</span>
            </div>
            {data.destination &&
              <div className={"flex flex-col gap-2"}>
                <h2 className={"text-xl"}>Destinatario</h2>
                <span className={"text-3xl text-yellow-500 font-semibold md:text-4xl"}>{data.destination}</span>
              </div>}
            <div className={"flex flex-col gap-2"}>
              <h2 className={"text-xl"}>Número de operación</h2>
              <span className={"text-3xl text-yellow-500 font-semibold md:text-4xl"}># {data.id || "No corresponde"}</span>
            </div>
          </section>
          <AppLinks linkTo={"#"}>Descargar comprobante</AppLinks>
        </>
        : isLoading ? <span className={"text-black"}>Cargando comprobante...</span> : <span className={"text-red-500"}>No se pudo cargar el comprobante</span>
      }
    </>
  );

};
