import Link from "next/link";

import {ServicePayment} from "@/components/dash/payment/ServicePayment";

type PaymentServicePageProps = {
  params: {
    id: number
  };
};

const PaymentServicePage = ({params}: PaymentServicePageProps) => {
  return (
    <>
      <div className={"flex flex-row gap-2 text-black self-start"}>
        <Link href={"/dashboard/payment"} className={"border-b"}>Pagar servicios</Link>
        <span>/</span>
        <h1 className={"font-semibold"}>#{params.id}</h1>
      </div>
      <ServicePayment service_id={params.id}/>
    </>
  );
};

export default PaymentServicePage;
