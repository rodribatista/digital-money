"use client";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {skipToken} from "@reduxjs/toolkit/query";
import {FormProvider, useForm} from "react-hook-form";

import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import {useAppSelector} from "@/lib/hooks";
import {useGetUserDataQuery, UserApi, useUpdateUserDataMutation} from "@/api/userApi";
import {appToast} from "@/lib/sweet";

import {FormInput} from "@/components/form/FormInput";
import {FormButton} from "@/components/form/FormButton";

import {UpdateUserData} from "@/types/UserType";
import {MutationsApiResponses} from "@/types/ApiType";

export const schema = yup.object({
  dni: yup.number().positive(),
  email: yup.string().trim().lowercase().email(),
  firstname: yup.string().trim(),
  lastname: yup.string().trim(),
  password: yup.string().trim().min(6).max(20)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/),
  phone: yup.string().trim(),
});

export const ProfileForm = () => {

  const router = useRouter();

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data, isLoading} = useGetUserDataQuery(accessToken ? {access_token: accessToken, user_id: accountInfo.user_id}: skipToken);

  const [updateUser] = useUpdateUserDataMutation();

  const profileEditForm = useForm<UpdateUserData>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (!isLoading) {
      Object.keys(data).slice(1).map((key) => (
        profileEditForm.setValue(key, data[key])
      ));
    }
  }, [isLoading]);

  const onSubmit = (field: string) => {
    appToast.fire({
      title: "Actualizando datos...",
      willOpen() {
        appToast.showLoading();
      },
    });
    const updateRequest: UserApi = {
      access_token: accessToken || "",
      user_id: accountInfo.user_id,
      user_data: {[field]: profileEditForm.getValues(field)},
    };
    updateUser(updateRequest).then(({error}: MutationsApiResponses) => {
      if (error) {
        appToast.fire({
          icon: "error",
          title: "Error al actualizar los datos del usuario.",
          timer: 2000,
        });
        return;
      }
      appToast.fire({
        icon: "success",
        title: "Datos del usuario actualizados correctamente.",
        timer: 2000,
      });
      router.push("/dashboard/profile");
    });
  };

  return (
    <section className={"w-full mt-5 flex flex-col gap-10 items-center"}>
      <FormProvider {...profileEditForm}>
        <form className={"w-full mb-10 flex flex-col gap-5 md:w-2/3 xl:w-1/2"}>
          {Object.keys(data).slice(1).map((key) => (
            <div key={key} className={"w-full pb-5 flex flex-col gap-5 border-b border-gray-700 xl:flex-row"}>
              <FormInput type={"text"} name={key} placeholder={"Nombre*"}/>
              <div className={"w-full self-end xl:w-1/3"}>
                <FormButton onSubmit={() => onSubmit(key)}>Actualizar</FormButton>
              </div>
            </div>
          ))}
          <div className={"w-full flex flex-col gap-5 xl:flex-row"}>
            <div className={"w-full flex flex-col gap-2"}>
              <FormInput type={"password"} name={"password"} placeholder={"********"}/>
              <span className={"self-center text-sm text-center text-black md:w-3/4"}>
                Usá entre 6 y 20 carácteres. Debe contener al menos al menos una mayúscula y un número.
              </span>
            </div>
            <div className={"w-full self-end xl:w-1/3 xl:self-start"}>
              <FormButton onSubmit={() => onSubmit("password")}>Actualizar</FormButton>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );

};
