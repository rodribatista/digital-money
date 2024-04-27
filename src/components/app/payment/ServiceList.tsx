"use client";
import {ServiceItem} from "@/components/app/payment/ServiceItem";
import {useEffect, useState} from "react";
import {useGetAllServicesQuery} from "@/api/serviceApi";

export type Service = {
  id: number,
  name: string,
  date: string,
};

export const ServiceList = () => {

  const [services, setServices] = useState<Service[]>([]);
  const {data, isLoading} = useGetAllServicesQuery();

  useEffect(() => {
    if (!isLoading) {
      setServices(data);
    }
  }, [isLoading]);

  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
      <h2 className={"text-xl font-semibold"}>Más recientes</h2>
      <ul className={"flex flex-col gap-5"}>
        {services.slice(0, 5).map((service) => <ServiceItem key={service.id} {...service}/>)}
      </ul>
    </section>
  );

};
