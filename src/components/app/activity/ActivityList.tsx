"use client";
import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

import Image from "next/image";

import {ActivityItem} from "@/components/app/activity/ActivityItem";
import {ActivityType} from "@/types/ActivityType";

export type Activity = {
  id: number,
  type: ActivityType,
  origin: string | null,
  destination: string | null,
  amount: number,
  dated: string,
};

const activityList: Activity[] = [
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

export const ActivityList = () => {

  const router = useRouter()
  const params = useSearchParams()

  const [page, setPage] = useState(params.get("page") || "1");

  useEffect(() => {
    router.push(`/app/activity?page=${page}`)
  }, [page]);

  const handleFilter = () => {
    alert("Filtrar")
  }

  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
      <div className={"pb-5 flex flex-row justify-between border-b border-gray-500"}>
        <h2 className={"text-xl font-semibold"}>Tu actividad</h2>
        <button onClick={handleFilter} className={"flex flex-row gap-2 items-center"}>
          <h3>Filtrar</h3>
          <Image src={"/icon-filter.svg"} alt={"Icono para filtrar la actividad del usuario"} width={20} height={20}/>
        </button>
      </div>
      <ul className={"flex flex-col gap-5"}>
        {activityList.map((activity) => <ActivityItem key={activity.id} {...activity}/>)}
      </ul>
      <div className={"w-full flex flex-row gap-5 justify-center"}>
        <button onClick={() => setPage("1")}
                className={`py-1 px-2 rounded ${page == "1" ? "bg-black text-white" : "bg-gray-500"}`}>
          1
        </button>
        <button onClick={() => setPage("2")}
                className={`py-1 px-2 rounded ${page == "2" ? "bg-black text-white" : "bg-gray-500"}`}>
          2
        </button>
        <button onClick={() => setPage("3")}
                className={`py-1 px-2 rounded ${page == "3" ? "bg-black text-white" : "bg-gray-500"}`}>
          3
        </button>
      </div>
    </section>
  );

};
