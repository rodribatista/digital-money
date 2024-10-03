import Image from "next/image";

import {Activity} from "@/types/ActivityType";
import {getShortDate} from "@/utils/date";

import {icon} from "@/utils/routes";
import {AppRedirect} from "@/components/dash/AppRedirect";

export const ActivityItem = ({id, description, amount, dated}: Activity) => {
  return (
    <AppRedirect href={`/dashboard/activity/${id}`}>
      <li className={"w-full pb-5 flex flex-row justify-between items-center border-b border-gray-500"}>
        <div className={"flex flex-row gap-2"}>
          <Image src={icon.activity.src} alt={icon.activity.alt} width={20} height={20}/>
          <h3>{description}</h3>
        </div>
        <div className={"flex flex-col items-end"}>
          <span className={"text-md"}>$ {amount},00</span>
          <span className={"text-sm opacity-50"}>{getShortDate(new Date(dated))}</span>
        </div>
      </li>
    </AppRedirect>
  );
};
