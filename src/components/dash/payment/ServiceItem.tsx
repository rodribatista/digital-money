import Image from "next/image";

import {ServiceSelect} from "@/components/dash/payment/ServiceSelect";

import {Service} from "@/types/ServiceType";

import {service} from "@/utils/routes";

export const ServiceItem = ({id, name}: Service) => {
  return (
    <li className={"w-full pt-5 flex flex-row justify-between items-center border-t border-gray-500"}>
      <div className={"flex flex-row gap-5 h-8 items-center"}>
        <Image className={"min-h-full max-h-full object-contain"} src={service[id].src} alt={service[id].alt} width={80} height={25}/>
        <span>{name}</span>
      </div>
      <ServiceSelect serviceId={id}/>
    </li>
  );
};
