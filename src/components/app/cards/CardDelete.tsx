"use client";

export const CardDelete = () => {

  const handleDeleteCard = () => {
    alert("Eliminar tarjeta")
  }

  return (
    <button onClick={handleDeleteCard} className={"text-sm font-bold"}>Eliminar</button>
  );

};
