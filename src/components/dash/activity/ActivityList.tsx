"use client";
import React, {useEffect, useState} from 'react';
import {ActivityFilterButton} from "@/components/dash/activity/ActivityFilter";
import {ActivityRender} from "@/components/dash/activity/ActivityRender";
import {ActivityPagination} from "@/components/dash/activity/ActivityPagination";
import {useRouter, useSearchParams} from "next/navigation";

export const ActivityList = () => {

  const router = useRouter()
  const params = useSearchParams()

  const [page, setPage] = useState(Number(params.get("page")) || 1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    router.push(`/dashboard/activity?page=${page}`)
  }, [page]);

  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
      <div className={"pb-5 flex flex-row justify-between border-b border-gray-500"}>
        <h2 className={"text-xl font-semibold"}>Tu actividad</h2>
        <ActivityFilterButton/>
      </div>
      <ActivityRender page={page} setMaxPage={setMaxPage}/>
      <ActivityPagination page={page} setPage={setPage} maxPage={maxPage}/>
    </section>
  );
};
