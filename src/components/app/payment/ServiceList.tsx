"use client";
import {ServiceItem} from "@/components/app/payment/ServiceItem";
import {useEffect, useState} from "react";
import {useGetAllServicesQuery, useGetServicesByNameQuery} from "@/api/serviceApi";
import {FormProvider, useForm} from "react-hook-form";
import {FormSearch} from "@/components/form/FormSearch";
import {skipToken} from '@reduxjs/toolkit/query'

type SearchData = {
  searchValue: string,
};

export type Service = {
  id: number,
  name: string,
  date: string,
};

export const ServiceList = () => {

  const getRecentServices = useGetAllServicesQuery();

  const serviceSearchForm = useForm<SearchData>()

  const [services, setServices] = useState<Service[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const { data, isLoading, isFetching } = useGetServicesByNameQuery(searchValue.length < 3 ? skipToken : searchValue);

  useEffect(() => {
    serviceSearchForm.setFocus("searchValue")
  }, []);

  useEffect(() => {
    if (!getRecentServices.isLoading) {
      setServices(getRecentServices.data);
    }
  }, [getRecentServices.isLoading]);

  useEffect(() => {
    setSearchValue(serviceSearchForm.getValues("searchValue"));
  }, [serviceSearchForm.watch("searchValue")]);

  useEffect(() => {
    if (searchValue.length < 3) {
      setServices(getRecentServices.data);
    }
  }, [searchValue]);

  useEffect(() => {
    if (!isLoading) {
      setServices(data);
    }
  }, [isFetching]);

  return (
    <FormProvider {...serviceSearchForm}>
      <FormSearch name={"searchValue"} placeholder={"Buscá entre más de 5.000 empresas"}/>
      <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
        <h2 className={"text-xl font-semibold"}>Más recientes</h2>
        <ul className={"flex flex-col gap-5"}>
          {services ?
            services.slice(0, 5).map((service) => <ServiceItem key={service.id} {...service}/>)
            :
            <h3>No hay servicios</h3>
          }
        </ul>
      </section>
    </FormProvider>
  );

};
