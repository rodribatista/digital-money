"use client";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import Link from "next/link";

type LoginPassParams = {
  email: string,
}

type LoginData = {
  email: string,
  password: string,
}

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
}).required()

export const LoginPassForm = ({email}: LoginPassParams) => {

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
    setValue,
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    setValue("email", email)
    setFocus("password")
  }, [])

  const onSubmit = (data: LoginData) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
      <h1 className={"text-2xl text-center"}>Ingresa tu contraseña</h1>
      <form onSubmit={handleSubmit(onSubmit)}
            className={"w-full flex flex-col gap-5 md:w-2/3 xl:w-1/2"}>
        <input type={"password"}
               className={"p-3 border border-gray-300 rounded-md text-black text-base focus:outline-yellow-500 outline-2"}
               {...register("password")} placeholder="**********"/>
        {errors?.password && <span className={"text-sm text-red-500 text-center"}>{errors.password.message}</span>}
        <button className={"py-3 bg-yellow-500 rounded-lg text-black text-center font-semibold"}
                type="submit">Ingresar
        </button>
      </form>
      <div className={"flex flex-row gap-2 justify-center text-base text-black"}>-</div>
    </>
  )
}
