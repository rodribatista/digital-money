"use client";

import Image from "next/image";

export const ProfileForm = () => {
  return (
    <div>
      Profile Form
    </div>
  );
};

export const ProfileFormButton = () => {

  const handleClick = () => {
    alert("Editando perfil")
  }

  return (
    <Image src={"/icon-edit.svg"} alt={"Icono para editar la información del usuario"}
           className={"hover:cursor-pointer"} onClick={handleClick} width={25} height={25}/>
  );

};
