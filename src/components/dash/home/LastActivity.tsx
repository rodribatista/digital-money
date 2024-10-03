"use client";
import Link from "next/link";
import Image from "next/image";

import {icon} from "@/utils/routes";

import {Activity} from "@/types/ActivityType";
import {ActivityData} from "@/components/dash/activity/ActivityData";
import {LastActivityRender} from "@/components/dash/home/LastActivityRender";

export const LastActivity = () => {
  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
      <h2 className={"pb-5 border-b border-gray-500 text-xl font-semibold"}>Tu actividad</h2>
      <ActivityData>
        {(activity: Activity[]) => (<LastActivityRender activity={activity}/>)}
      </ActivityData>
      <Link href={"/dashboard/activity"} className={"flex flex-row justify-between"}>
        <span className={"font-semibold"}>Ver toda tu actividad</span>
        <Image src={icon.arrow.src} alt={icon.arrow.alt} width={15} height={15}/>
      </Link>
    </section>
  );
};
