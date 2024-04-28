import {ServiceSelect} from "@/components/app/payment/ServiceSelect";

import {Service} from "@/types/ServiceType";

export const ServiceItem = ({id, name}: Service) => {
  return (
    <li className={"w-full pt-5 flex flex-row justify-between items-center border-t border-gray-500"}>
      <div className={"flex flex-row gap-2"}>
        {/*<Image src={`${image}`} alt={"Logo del servicio"} width={30} height={30}/>*/}
        <span>{name}</span>
      </div>
      <ServiceSelect serviceId={id}/>
    </li>
  );
};
