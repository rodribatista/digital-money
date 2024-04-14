import React from 'react';

import {Activity, ActivityType} from "@/components/app/home/LastActivity";
import Image from "next/image";

const ActivityItem = ({type, origin, destination, amount, dated}: Activity) => {

  const renderActivity = {
    "DEPOSIT": "Ingresaste dinero",
    "TRANSFER_IN": `Recibiste de ${origin}`,
    "TRANSFER_OUT": `Transferiste a ${destination}`,
  }

  return (
    <li className={"w-full pb-5 flex flex-row justify-between items-center border-b border-gray-500"}>
      <div className={"flex flex-row gap-2"}>
        <Image src={"/icon-activity.svg"} alt={"Icono para indicar el estado de la transferencia"} width={20} height={20}/>
        <h3>{renderActivity[type]}</h3>
      </div>
      <div className={"flex flex-col items-end"}>
        <span className={"text-md"}>$ {type === ActivityType.TRANSFER_OUT && "- "}{amount.toString().replace(".",",")}</span>
        <span className={"text-sm opacity-50"}>{dated}</span>
      </div>
    </li>
  );
};

export default ActivityItem;
