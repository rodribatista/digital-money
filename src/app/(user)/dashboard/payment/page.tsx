import React from 'react';
import {ServiceSearch} from "@/components/dash/payment/ServiceSearch";

const PaymentPage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Pagar servicios</h1>
      <ServiceSearch/>
    </>
  );
};

export default PaymentPage;
