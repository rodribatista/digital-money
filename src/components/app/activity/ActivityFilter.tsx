"use client";
import Image from "next/image";

export const ActivityFilterButton = () => {

  const handleFilter = () => {
    alert("Filtrar")
  }

  return (
    <button onClick={handleFilter} className={"flex flex-row gap-2 items-center"}>
      <h3>Filtrar</h3>
      <Image src={"/icon-filter.svg"} alt={"Icono para filtrar la actividad del usuario"} width={20} height={20}/>
    </button>
  );

};
