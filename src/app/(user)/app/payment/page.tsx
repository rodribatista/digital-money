import React from 'react';
import {ServiceList} from "@/components/app/payment/ServiceList";

const PaymentPage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Pagar servicios</h1>
      <ServiceList/>
    </>
  );
};

export default PaymentPage;
