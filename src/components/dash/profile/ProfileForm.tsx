"use client";

import Image from "next/image";

import {icon} from "@/utils/routes";

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
    <Image src={icon.edit.src} alt={icon.edit.alt}
           className={"hover:cursor-pointer"} onClick={handleClick} width={25} height={25}/>
  );

};
