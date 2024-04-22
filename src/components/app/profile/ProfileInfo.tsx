import Image from "next/image";
import {ProfileFormButton} from "@/components/app/profile/ProfileForm";

type UserData = {
  dni: number,
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  phone: string,
}

export enum UserDataType {
  dni = 'DNI',
  email = 'Email',
  firstname = 'Nombre',
  lastname = 'Apellido',
  password = 'Contraseña',
  phone = 'Teléfono',
}

const userData: UserData = {
  dni: 12345678,
  email: "johndoe@mailito.com",
  firstname: "John",
  lastname: "Doe",
  password: "myPassword123",
  phone: "555-1234",
}

export const ProfileInfo = () => {
  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
      <div className={"flex flex-row justify-between pb-2 border-b border-gray-500"}>
        <h2 className={"text-xl font-semibold"}>Tus datos</h2>
        <ProfileFormButton/>
      </div>
      <ul className={"flex flex-col gap-2"}>
        {Object.keys(userData).map((key, index) => {
          return (
            <li key={index} className={"w-full pb-2 flex flex-col border-b border-gray-500 md:flex-row md:gap-5"}>
              <h3 className={"w-1/4 font-semibold"}>{UserDataType[key as keyof UserData]}</h3>
              <span>{userData[key as keyof UserData]}</span>
            </li>
          );
        })}
      </ul>
      <span className={"text-sm text-gray-700"}>* Para editar tus datos haz click en el lapiz.</span>
    </section>
  );
};
