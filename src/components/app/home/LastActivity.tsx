import Link from "next/link";
import Image from "next/image";

import {Activity} from "@/components/app/activity/ActivityList";
import {ActivityItem} from "@/components/app/activity/ActivityItem";
import {ActivityType} from "@/types/ActivityType";

const lastActivity: Activity[] = [
  {
    id: 4,
    type: ActivityType.TRANSFER_OUT,
    origin: null,
    destination: "Pedro",
    amount: 1265.57,
    dated: "Sábado",
  },
  {
    id: 3,
    type: ActivityType.TRANSFER_OUT,
    origin: null,
    destination: "Consorcio",
    amount: 1265.57,
    dated: "Viernes",
  },
  {
    id: 2,
    type: ActivityType.DEPOSIT,
    origin: null,
    destination: null,
    amount: 1265.57,
    dated: "Viernes",
  },
  {
    id: 1,
    type: ActivityType.TRANSFER_IN,
    origin: "Pablo",
    destination: null,
    amount: 1265.57,
    dated: "Lunes",
  }
];

export const LastActivity = () => {
  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
      <h2 className={"pb-5 border-b border-gray-500 text-xl font-semibold"}>Tu actividad</h2>
      <ul className={"flex flex-col gap-5"}>
        {lastActivity.map((activity) => <ActivityItem key={activity.id} {...activity}/>)}
      </ul>
      <Link href={"/app/activity"} className={"flex flex-row justify-between"}>
        <span className={"font-semibold"}>Ver toda tu actividad</span>
        <Image src={"/icon-arrow.svg"} alt={"Flecha para ir a página de Actividad"} width={15} height={15}/>
      </Link>
    </section>
  );
};
