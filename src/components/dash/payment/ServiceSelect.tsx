"use client";
import {useRouter} from "next/navigation";

type ServiceSelectProps = {
  serviceId: number,
}

export const ServiceSelect = ({serviceId}: ServiceSelectProps) => {

  const router = useRouter();

  const handleServiceSelect = () => {
    router.push(`/dashboard/payment/${serviceId}`)
  }

  return (
    <button onClick={handleServiceSelect} className={"text-sm font-bold"}>Seleccionar</button>
  );

};
