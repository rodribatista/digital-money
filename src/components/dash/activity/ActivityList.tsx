"use client";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from 'react';
import {FormProvider, useForm} from "react-hook-form";

import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import {FormSearch} from "@/components/form/FormSearch";
import {ActivityRender} from "@/components/dash/activity/ActivityRender";
import {ActivityPagination} from "@/components/dash/activity/ActivityPagination";
import {ActivityFilter} from "@/components/dash/activity/ActivityFilter";
import {skipToken} from "@reduxjs/toolkit/query";

type FilterType = {
  filter: string,
};

const schema = yup.object({
  filter: yup.string().required(),
}).required()

export const ActivityList = () => {

  const router = useRouter()
  const params = useSearchParams()

  const [page, setPage] = useState(Number(params.get("page")) || 1);
  const [maxPage, setMaxPage] = useState(1);

  const filterActivityForm = useForm<FilterType>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    router.push(`/dashboard/activity?page=${page}`)
  }, [page]);

  useEffect(() => {
    filterActivityForm.setValue("filter", "all")
  }, []);

  return (
    <section className={"w-full flex flex-col gap-5"}>
      <FormProvider {...filterActivityForm}>
        <FormSearch name={"searchValue"} placeholder={"Buscá entre tu actividad"}/>
        <div className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
          <div className={"pb-5 flex flex-row justify-between border-b border-gray-500"}>
            <h2 className={"text-xl font-semibold"}>Tu actividad</h2>
            <ActivityFilter/>
          </div>
          <ActivityRender page={page} perPage={10} setMaxPage={setMaxPage}/>
          <ActivityPagination page={page} setPage={setPage} maxPage={maxPage}/>
        </div>
      </FormProvider>
    </section>
  );

};
