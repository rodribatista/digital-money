"use client";
import {ActivityItem} from "@/components/dash/activity/ActivityItem";
import {Activity} from "@/types/ActivityType";

type LastActivityRenderProps = {
  activity: Activity[];
};
export const LastActivityRender = ({activity}: LastActivityRenderProps) => {

  const activityList = activity?.toReversed().slice(0, 5);

  return (
    <ul className={"flex flex-col gap-5"}>
      {activityList.length ?
          activityList.map((activity: Activity) => <ActivityItem key={activity.id} {...activity}/>)
          : <li className={"w-full pb-5 border-b border-gray-500"}>No hay actividad registrada</li>
      }
    </ul>
  );

};
