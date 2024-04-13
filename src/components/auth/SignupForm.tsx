"use client";
import {useEffect} from "react";
import Link from "next/link";
import {FormProvider, useForm} from "react-hook-form";

import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import {FormInput} from "@/components/form/FormInput";
import {FormButton} from "@/components/form/FormButton";
import {LoginData} from "@/components/auth/LoginForm";

export type SignupData = {
  dni: number,
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string,
  phone: string,
}

const schema = yup.object({
  dni: yup.number().positive().required(),
  email: yup.string().trim().lowercase().email().required(),
  firstname: yup.string().trim().required(),
  lastname: yup.string().trim().required(),
  password: yup.string().trim().min(6).max(20)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/).required(),
  password_confirmation: yup.string().trim().oneOf([yup.ref('password')]).required(),
  phone: yup.string().trim().required(),
}).required()

export const SignupForm = () => {

  const signupForm = useForm<SignupData>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    signupForm.setFocus("firstname")
  }, [])

  const onSubmit = (data: LoginData) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
      <FormProvider {...signupForm}>
        <form className={"w-full flex flex-col gap-5 md:w-2/3 xl:w-1/2"}>
          <h1 className={"text-2xl text-center"}>Creá tu cuenta</h1>
          <FormInput type={"text"} name={"firstname"} placeholder={"Nombre*"}/>
          <FormInput type={"text"} name={"lastname"} placeholder={"Apellido*"}/>
          <FormInput type={"number"} name={"dni"} placeholder={"DNI*"}/>
          <FormInput type={"text"} name={"email"} placeholder={"Correo electrónico*"}/>
          <FormInput type={"password"} name={"password"} placeholder={"********"}/>
          <span className={"self-center text-sm text-center md:w-3/4"}>Usá entre 6 y 20 carácteres. Debe contener al menos al menos una mayúscula y un número.</span>
          <FormInput type={"password"} name={"password_confirmation"} placeholder={"********"}/>
          <FormInput type={"tel"} name={"phone"} placeholder={"Teléfono*"}/>
          <FormButton onSubmit={onSubmit}>Ingresar</FormButton>
          <div className={"flex flex-row gap-2 justify-center"}>
            <p className={"text-base"}>
              ¿Ya tienes cuenta?
            </p>
            <Link href={"/login"}
                  className={"pb-1 border-b-2 border-yellow-500 font-semibold text-center"}>
              Iniciar sesión
            </Link>
          </div>
        </form>
      </FormProvider>
    </>
  )

}
