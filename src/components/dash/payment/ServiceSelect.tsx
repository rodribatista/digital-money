"use client";

type ServiceSelectProps = {
  serviceId: number,
}

export const ServiceSelect = ({serviceId}: ServiceSelectProps) => {

  const handleDeleteCard = () => {
    alert(`id servicio: ${serviceId}`)
  }

  return (
    <button onClick={handleDeleteCard} className={"text-sm font-bold"}>Seleccionar</button>
  );

};
