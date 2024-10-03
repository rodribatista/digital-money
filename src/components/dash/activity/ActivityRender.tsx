"use client";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";

import {ActivityItem} from "@/components/dash/activity/ActivityItem";

import {Activity} from "@/types/ActivityType";

type ActivityListProps = {
  activity: Activity[],
  page: number,
  perPage: number,
  setMaxPage: Dispatch<SetStateAction<number>>,
};

export const ActivityRender = ({activity, page, perPage, setMaxPage}: ActivityListProps) => {

  const activityList = activity?.toReversed()

  const [dataToShow, setDataToShow] = useState<Activity[]>([]);

  const start =  (page - 1) * perPage;
  const end = start + perPage;

  const {getValues, watch} = useFormContext();

  useEffect(() => {
    const filter = {data: activityList, filter: getValues("filter")};
    const newList = ActivityDateFilter(filter);
    setDataToShow(newList);
    setMaxPage(Math.ceil(newList.length / perPage));
  }, [watch("filter")]);

  useEffect(() => {
    if (getValues("searchValue")?.length >= 3) {
      const filter = {data: activityList, searchValue: getValues("searchValue")};
      const newList = ActivityDescriptionFilter(filter);
      setDataToShow(newList);
      setMaxPage(Math.ceil(newList.length / perPage));
    } else {
      setDataToShow(activityList);
      setMaxPage(Math.ceil(activityList.length / perPage));
    }
  }, [watch("searchValue")]);

  return (
    <ul className={"flex flex-col gap-5"}>
      {dataToShow.length ?
        dataToShow.slice(start, end).map((activity: Activity) => <ActivityItem key={activity.id} {...activity}/>)
          : <li className={"w-full pb-5 border-b border-gray-500"}>No hay actividad registrada</li>
      }
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

const ActivityDescriptionFilter = ({data, searchValue}: ActivityDestinationFilterProps) => {
  return data.filter(activity => activity.description?.toLowerCase().includes(searchValue.toLowerCase()));
};
