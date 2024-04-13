"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import React from "react";

type LoginInputs = {
  email: string
  password: string
}

const LoginPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = (data) => alert(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}
          className={"w-full flex flex-col gap-5 md:w-2/3 xl:w-1/2"}>
      <h1 className={"text-2xl text-center"}>Ingresa tu email</h1>
      <input className={"p-3 border border-gray-300 rounded-md text-black text-base focus:outline-yellow-500 outline-2"}
             placeholder="johndoe@mailito.com" {...register("email",
        {required: true, pattern: /^\S+@\S+$/})}/>
      {errors.email && <span className={"text-sm text-red-500 text-center"}>Hay errores en el formulario</span>}
      <button className={"py-3 bg-yellow-500 rounded-lg text-black text-center font-semibold"}
              type="submit">Continuar</button>
      <div className={"flex flex-row gap-2 justify-center"}>
        <p className={"text-base"}>
          ¿No tienes cuenta?
        </p>
        <Link href={"/signup"}
              className={"pb-1 border-b-2 border-yellow-500 font-semibold text-center"}>
        Crear cuenta
        </Link>
      </div>
    </form>
  )
}

export default LoginPage;
