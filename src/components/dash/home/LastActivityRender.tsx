"use client";
import {skipToken} from "@reduxjs/toolkit/query";

import {useGetAllAccountActivityQuery} from "@/api/activityApi";
import {useAppSelector} from "@/lib/hooks";

import {ActivityItem} from "@/components/dash/activity/ActivityItem";

import {Activity} from "@/types/ActivityType";

export const LastActivityRender = () => {

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data, isLoading} = useGetAllAccountActivityQuery(accessToken ? {access_token: accessToken, account_id: accountInfo.account_id}: skipToken);

  const activityList = data?.toReversed().slice(0, 5);

  return (
    <ul className={"flex flex-col gap-5"}>
      {!isLoading ? (activityList.length ?
          activityList.map((activity: Activity) => <ActivityItem key={activity.id} {...activity}/>)
          : <li className={"w-full pb-5 border-b border-gray-500"}>No hay actividad registrada</li>)
        : <li className={"w-full pb-5 border-b border-gray-500"}>Cargando actividad...</li>}
    </ul>
  );

};
