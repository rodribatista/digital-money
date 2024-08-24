"use client";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {skipToken} from "@reduxjs/toolkit/query";
import {useFormContext} from "react-hook-form";

import {useGetAllAccountActivityQuery} from "@/api/activityApi";
import {useAppSelector} from "@/lib/hooks";

import {ActivityItem} from "@/components/dash/activity/ActivityItem";

import {Activity} from "@/types/ActivityType";

type ActivityListProps = {
  page: number,
  perPage: number,
  setMaxPage: Dispatch<SetStateAction<number>>,
};

export const ActivityRender = ({page, perPage, setMaxPage}: ActivityListProps) => {

  const start =  (page - 1) * perPage;
  const end = start + perPage;

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data, isLoading} = useGetAllAccountActivityQuery(accessToken ? {access_token: accessToken, account_id: accountInfo.account_id}: skipToken);
  const [activityList, setActivityList] = useState<Activity[]>([]);

  const {getValues, watch} = useFormContext();

  useEffect(() => {
    if (!isLoading) {
      const filter = {data, filter: getValues("filter")};
      const list = ActivityDateFilter(filter).toReversed();
      setActivityList(list);
      setMaxPage(Math.ceil(list.length / perPage));
    }
  }, [isLoading, watch("filter")]);

  useEffect(() => {
    if (!isLoading) {
      if (getValues("searchValue")?.length >= 3) {
        const list = ActivityDestinationFilter({data, searchValue: getValues("searchValue")});
        setActivityList(list);
        setMaxPage(Math.ceil(list.length / perPage));
      }
    }
  }, [watch("searchValue")]);

  return (
    <ul className={"flex flex-col gap-5"}>
      {!isLoading ? (activityList.length ?
          activityList.slice(start, end).map((activity: Activity) => <ActivityItem key={activity.id} {...activity}/>)
          : <li className={"w-full pb-5 border-b border-gray-500"}>No hay actividad registrada</li>)
        : <li className={"w-full pb-5 border-b border-gray-500"}>Cargando actividad...</li>}
    </ul>
  );

};

type ActivityDateFilterProps = {
  data: Activity[],
  filter: string,
};

const ActivityDateFilter = ({data, filter}: ActivityDateFilterProps) => {
  switch (filter) {
    case "all":
      return data;
    case "last-week":
      return data.filter(activity => new Date(activity.dated) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
    case "last-month":
      return data.filter(activity => new Date(activity.dated) >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
    case "last-year":
      return data.filter(activity => new Date(activity.dated) >= new Date(Date.now() - 365 * 24 * 60 * 60 * 1000));
    default:
      return data;
  }
};

type ActivityDestinationFilterProps = {
  data: Activity[],
  searchValue: string,
};

const ActivityDestinationFilter = ({data, searchValue}: ActivityDestinationFilterProps) => {
  return data.filter(activity => activity.destination?.toLowerCase().includes(searchValue.toLowerCase()));
};
