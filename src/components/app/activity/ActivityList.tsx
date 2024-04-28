"use client";
import {ActivityItem} from "@/components/app/activity/ActivityItem";
import {Activity} from "@/types/ActivityType";
import {useAppSelector} from "@/lib/hooks";
import {useGetAllAccountActivityQuery} from "@/api/activityApi";
import {skipToken} from "@reduxjs/toolkit/query";

type ActivityListProps = {
  onlyLast: boolean,
};

export const ActivityList = ({onlyLast}: ActivityListProps) => {

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data, isLoading} = useGetAllAccountActivityQuery(accessToken ? {access_token: accessToken, account_id: accountInfo.account_id}: skipToken);

  const activityList = onlyLast ? data?.toReversed().slice(0, 5) : data.toReversed();

  return (
    <ul className={"flex flex-col gap-5"}>
      {!isLoading ? (data.length ?
          activityList.map((activity: Activity) => <ActivityItem key={activity.id} {...activity}/>)
          : <li className={"w-full pb-5 border-b border-gray-500"}>No hay actividad registrada</li>)
        : <li className={"w-full pb-5 border-b border-gray-500"}>Cargando actividad...</li>}
    </ul>
  );

};
