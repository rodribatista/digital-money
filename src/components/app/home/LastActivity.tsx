import Link from "next/link";

import ActivityItem from "@/components/app/home/ActivityItem";
import Image from "next/image";
import React from "react";

export enum ActivityType {
  DEPOSIT = 'DEPOSIT',
  TRANSFER_IN = 'TRANSFER_IN',
  TRANSFER_OUT = 'TRANSFER_OUT',
}

export type Activity = {
  id: number,
  type: ActivityType,
  origin: string | null,
  destination: string | null,
  amount: number,
  dated: string,
};

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
      <h2 className={"pb-2 border-b border-gray-500 text-xl font-semibold"}>Tu actividad</h2>
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
