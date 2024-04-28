"use client";

import {ServiceItem} from "@/components/app/payment/ServiceItem";

import {Service} from "@/types/ServiceType";

type ServiceListProps = {
  services: Service[]
};

export const ServiceList = ({services}: ServiceListProps) => {
  return (
    <ul className={"flex flex-col gap-5"}>
      {services ?
        services.slice(0, 5).map((service) => <ServiceItem key={service.id} {...service}/>)
        :
        <h3>No hay servicios que coincidan con la búsqueda.</h3>
      }
    </ul>
  );
};
