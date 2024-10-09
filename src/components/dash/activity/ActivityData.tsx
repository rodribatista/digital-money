import React, {useEffect, useState} from 'react';
import {useAppSelector} from "@/lib/hooks";
import {useGetAllAccountActivityQuery} from "@/api/activityApi";
import {skipToken} from "@reduxjs/toolkit/query";
import {Activity, ActivityType} from "@/types/ActivityType";

type ActivityDataProps = {
  children: (activity: Activity[]) => JSX.Element;
};

export const ActivityData = ({children}: ActivityDataProps) => {

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data, isLoading} = useGetAllAccountActivityQuery(accessToken ? {access_token: accessToken, account_id: accountInfo.account_id}: skipToken);

  const [activity, setActivity] = useState<Activity[]>([]);

  const changeDescription = (type: string, destination: string) => {
    switch (type) {
      case ActivityType.DEPOSIT:
        return "Ingresaste dinero";
      case ActivityType.TRANSACTION:
        return "Transferiste dinero";
      case ActivityType.TRANSFER:
        return `Transferiste a ${destination}`;
      default:
        return "Actividad desconocida";
    }
  }

  useEffect(() => {
    if (!isLoading) {
      const data_processed = data.map((activity: Activity) => {
        return {
          ...activity,
          description: changeDescription(activity.type, activity.destination),
        };
      });
      setActivity(data_processed);
    }
  }, [isLoading]);

  return (
    <>
      {!isLoading ? children(activity) :
        <div className={"w-full pb-5 border-b border-gray-500"}>Cargando actividad...</div>}
    </>
  );

};
