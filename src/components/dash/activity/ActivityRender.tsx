"use client";
import {Dispatch, SetStateAction, useEffect} from "react";
import {skipToken} from "@reduxjs/toolkit/query";

import {useGetAllAccountActivityQuery} from "@/api/activityApi";
import {useAppSelector} from "@/lib/hooks";

import {ActivityItem} from "@/components/dash/activity/ActivityItem";

import {Activity} from "@/types/ActivityType";

type ActivityListProps = {
  page: number,
  setMaxPage?: Dispatch<SetStateAction<number>>,
};

export const ActivityRender = ({page, setMaxPage}: ActivityListProps) => {

  const start =  (page - 1) * 5;
  const end = start + 5;

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data, isLoading} = useGetAllAccountActivityQuery(accessToken ? {access_token: accessToken, account_id: accountInfo.account_id}: skipToken);

  useEffect(() => {
    if (!isLoading && setMaxPage) {
      setMaxPage(Math.round(data.length / 5));
    }
  }, [isLoading]);

  const activityList = data?.toReversed().slice(start, end);

  return (
    <ul className={"flex flex-col gap-5"}>
      {!isLoading ? (activityList.length ?
          activityList.map((activity: Activity) => <ActivityItem key={activity.id} {...activity}/>)
          : <li className={"w-full pb-5 border-b border-gray-500"}>No hay actividad registrada</li>)
        : <li className={"w-full pb-5 border-b border-gray-500"}>Cargando actividad...</li>}
    </ul>
  );

};
