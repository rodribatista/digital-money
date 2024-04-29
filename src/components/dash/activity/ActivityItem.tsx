import Image from "next/image";

import {Activity, ActivityType} from "@/types/ActivityType";
import {getMonth} from "@/utils/date";

import {icon} from "@/utils/routes";

export const ActivityItem = ({type, destination, amount, dated}: Activity) => {

  const date = new Date(dated);

  const renderActivity = {
    [ActivityType.DEPOSIT]: "Ingresaste dinero",
    [ActivityType.TRANSACTION]: "Transferiste dinero",
    [ActivityType.TRANSFER]: `Transferiste a ${destination}`,
  }

  return (
    <li className={"w-full pb-5 flex flex-row justify-between items-center border-b border-gray-500"}>
      <div className={"flex flex-row gap-2"}>
        <Image src={icon.activity.src} alt={icon.activity.alt} width={20} height={20}/>
        <h3>{renderActivity[type]}</h3>
      </div>
      <div className={"flex flex-col items-end"}>
        <span className={"text-md"}>$ {amount},00</span>
        <span className={"text-sm opacity-50"}>{`${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`}</span>
      </div>
    </li>
  );

};
