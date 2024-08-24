"use client";
import {useGetServiceByIdQuery} from "@/api/serviceApi";

import {appToast, authSwal} from "@/lib/sweet";
import {MutationsApiResponses} from "@/types/ApiType";
import {TransferenceApi, useCreateTransferenceMutation} from "@/api/transferenceApi";
import {useAppSelector} from "@/lib/hooks";
import {useRouter} from "next/navigation";

type ServicePaymentProps = {
  service_id: number,
};

export const ServicePayment = ({service_id}: ServicePaymentProps) => {

  const router = useRouter();

  const {data, isLoading, isFetching} = useGetServiceByIdQuery(service_id)
  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const [createTransference] = useCreateTransferenceMutation();

  const handlePayment = () => {
    authSwal.fire({
      title: "Pago de servicio",
      text: `¿Confirma el pago de $ ${data?.invoice_value?.toString().replace(".", ",")} por el servicio de ${data?.name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
          appToast.fire({
            title: "Realizando pago del servicio...",
            willOpen() {
              appToast.showLoading();
            },
          });
          const transferenceRequest: TransferenceApi = {
            access_token: accessToken || "",
            account_id: accountInfo.account_id,
            transference_data: {
              amount: -Math.abs(data?.invoice_value || 0),
              dated: new Date().toISOString(),
              destination: data?.name || "",
              origin: accountInfo.cvu || "",
            },
          };
        createTransference(transferenceRequest)
          .then(({error}: MutationsApiResponses) => {
            if (error) {
              appToast.fire({
                icon: "error",
                title: "Error al realizar el pago del servicio.",
                timer: 2000,
              });
              return;
            }
            router.push("/dashboard/payment/success");
            appToast.close();
          });
        }
      })
  };

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
            <button onClick={handlePayment}
                    className={"w-full py-5 bg-yellow-500 rounded-md text-black text-center font-semibold shadow-md disabled:bg-gray-500 hover:cursor-pointer"}>
              Pagar servicio
            </button>
          </>
          : <span className={"text-red-500"}>No se pudo cargar el servicio</span>
        : <span className={"text-black"}>Cargando servicio...</span>
      }
    </>
  );

};
