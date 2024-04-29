"use client";
import Image from "next/image";

import {icon} from "@/utils/routes";

export const ActivityFilterButton = () => {

  const handleFilter = () => {
    alert("Filtrar")
  }

  return (
    <button onClick={handleFilter} className={"flex flex-row gap-2 items-center"}>
      <h3>Filtrar</h3>
      <Image src={icon.filter.src} alt={icon.filter.alt} width={20} height={20}/>
    </button>
  );

};
