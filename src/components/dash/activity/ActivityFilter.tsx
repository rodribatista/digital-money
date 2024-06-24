"use client";
import {useState} from "react";
import {useFormContext} from "react-hook-form";

import Image from "next/image";

import {icon} from "@/utils/routes";

export const ActivityFilter = () => {

  const [showFilter, setShowFilter] = useState(false);

  const {register} = useFormContext();

  return (
    <div className={"relative"}>
      <button onClick={() => setShowFilter(true)} className={"flex flex-row gap-2 items-center"}>
        <h3>Filtrar</h3>
        <Image src={icon.filter.src} alt={icon.filter.alt} width={20} height={20}/>
      </button>
      {showFilter && (
        <div className={"absolute -top-5 -right-5 w-60 p-5 bg-white border border-gray-500 rounded-md shadow-md z-50"}>
          <div className={"pb-2 flex flex-row justify-end"}>
            <button onClick={() => setShowFilter(false)}>Cerrar</button>
          </div>
          <ul className={"flex flex-col gap-2"}>
            <li className={"w-full pt-2 flex flex-row gap-5 items-center border-t border-gray-500"}>
              <input className={"hover:cursor-pointer"}
                     type="radio" id="all" value={"all"} {...register("filter")}/>
              <label htmlFor={"all"} className={"cursor-pointer"}>Todas</label>
            </li>
            <li className={"w-full pt-2 flex flex-row gap-5 items-center border-t border-gray-500"}>
              <input className={"hover:cursor-pointer"}
                     type="radio" id="last-week" value={"last-week"} {...register("filter")}/>
              <label htmlFor={"last-week"} className={"cursor-pointer"}>Última semana</label>
            </li>
            <li className={"w-full pt-2 flex flex-row gap-5 items-center border-t border-gray-500"}>
              <input className={"hover:cursor-pointer"}
                     type="radio" id="last-month" value={"last-month"} {...register("filter")}/>
              <label htmlFor={"last-month"} className={"cursor-pointer"}>Último mes</label>
            </li>
            <li className={"w-full pt-2 flex flex-row gap-5 items-center border-t border-gray-500"}>
              <input className={"hover:cursor-pointer"}
                     type="radio" id="last-year" value={"last-year"} {...register("filter")}/>
              <label htmlFor={"last-year"} className={"cursor-pointer"}>Último año</label>
            </li>
          </ul>
        </div>
      )}
    </div>
  );

};
