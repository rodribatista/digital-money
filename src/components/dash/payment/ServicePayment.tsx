"use client";
import {useGetServiceByIdQuery} from "@/api/serviceApi";

import {AppLinks} from "@/components/dash/AppLinks";

type ServicePaymentProps = {
  service_id: number,
};

export const ServicePayment = ({service_id}: ServicePaymentProps) => {

  const {data, isLoading, isFetching} = useGetServiceByIdQuery(service_id)

  return (
    <>
      {data ?
        data.id !== 0 ?
          <>
            <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-black shadow-md md:p-10 xl:p-15"}>
              <div className={"pb-5 border-b"}>
                <h2 className={"text-2xl font-semibold"}>{data.name}</h2>
              </div>
              <div className={"flex flex-col gap-2"}>
                <h2 className={"text-xl"}>Monto de la factura</h2>
                <span className={"text-3xl text-yellow-500 font-semibold md:text-4xl"}>
                  $ {data.invoice_value?.toString().replace(".", ",")}
                </span>
              </div>
              <div className={"flex flex-col"}>
                <h2 className={"text-md"}>Fecha de vencimiento</h2>
                <span className={"text-xl text-yellow-500 font-semibold md:text-2xl"}>{data.date}</span>
              </div>
            </section>
            <AppLinks linkTo={"#"}>Ir a pagar</AppLinks>
          </>
          : <span className={"text-red-500"}>No se pudo cargar el servicio</span>
        : <span className={"text-black"}>Cargando servicio...</span>
      }
    </>
  );

};
