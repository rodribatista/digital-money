"use client";

type CardDeleteProps = {
  id: number,
};

export const CardDelete = ({id}: CardDeleteProps) => {

  const handleDeleteCard = () => {
    alert("Eliminar id: " + id);
  }

  return (
    <button onClick={handleDeleteCard} className={"text-sm font-bold"}>Eliminar</button>
  );

};
