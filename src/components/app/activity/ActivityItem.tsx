import Image from "next/image";

import {Activity, ActivityType} from "@/types/ActivityType";

export const ActivityItem = ({type, destination, amount, dated}: Activity) => {

  const renderActivity = {
    [ActivityType.DEPOSIT]: "Ingresaste dinero",
    [ActivityType.TRANSACTION]: "Transferiste dinero",
    [ActivityType.TRANSFER]: `Transferiste a ${destination}`,
  }

  return (
    <li className={"w-full pb-5 flex flex-row justify-between items-center border-b border-gray-500"}>
      <div className={"flex flex-row gap-2"}>
        <Image src={"/icon-activity.svg"} alt={"Icono para indicar el estado de la transferencia"} width={20} height={20}/>
        <h3>{renderActivity[type]}</h3>
      </div>
      <div className={"flex flex-col items-end"}>
        <span className={"text-md"}>$ {amount},00</span>
        <span className={"text-sm opacity-50"}>{dated}</span>
      </div>
    </li>
  );

};
