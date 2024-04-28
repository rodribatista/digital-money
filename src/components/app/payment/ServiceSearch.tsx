"use client";
import React, {useEffect, useState} from "react";
import {skipToken} from '@reduxjs/toolkit/query'
import {FormProvider, useForm} from "react-hook-form";

import {useGetAllServicesQuery, useGetServicesByNameQuery} from "@/api/serviceApi";

import {FormSearch} from "@/components/form/FormSearch";
import {ServiceList} from "@/components/app/payment/ServiceList";

import {ServiceType, ServiceListType} from "@/types/ServiceType";

type SearchData = {
  searchValue: string,
};

export const ServiceSearch = () => {

  const serviceSearchForm = useForm<SearchData>();
  const {getValues, watch} = serviceSearchForm;

  const {
    data: recentServices,
    isLoading: isLoadingRecentServices,
  } = useGetAllServicesQuery();

  const {
    data: searchedServices,
    isLoading: isLoadingSearchedServices,
    isFetching: isFetchingSearchedServices,
  } = useGetServicesByNameQuery(getValues("searchValue")?.length < 3 ? skipToken : getValues("searchValue"));

  const [services, setServices] = useState<ServiceListType>({
    type: ServiceType.RECENT,
    list: recentServices,
  });

  useEffect(() => {
    serviceSearchForm.setFocus("searchValue")
  }, []);

  useEffect(() => {
    if (!isLoadingRecentServices && getValues("searchValue").length < 3) {
      setServices({
        type: ServiceType.RECENT,
        list: recentServices,
      });
    }
  }, [isLoadingRecentServices, watch("searchValue")]);

  useEffect(() => {
    if (!isLoadingSearchedServices && getValues("searchValue").length >= 3) {
      setServices({
        type: ServiceType.SEARCHED,
        list: searchedServices,
      });
    }
  }, [isFetchingSearchedServices]);

  return (
    <section className={"w-full flex flex-col gap-5"}>
      <FormProvider {...serviceSearchForm}>
        <FormSearch name={"searchValue"} placeholder={"Buscá entre más de 5.000 empresas"}/>
      </FormProvider>
      <div className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
        <h2 className={"text-xl font-semibold"}>{services.type === ServiceType.RECENT ? "Más recientes" : "Resultados de la búsqueda"}</h2>
        {services ? <ServiceList services={services.list}/> : <div>Cargando servicios...</div>}
      </div>
    </section>
  );

};
