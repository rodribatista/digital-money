"use client";
import {useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {FormProvider, useForm} from "react-hook-form";
import {authSwal} from "@/lib/sweet";

import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import {authSignup} from "@/api/authApi";
import {SignupData} from "@/types/AuthType";

import {FormInput} from "@/components/form/FormInput";
import {FormButton} from "@/components/form/FormButton";

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

  const router = useRouter();

  const signupForm = useForm<SignupData>({
    resolver: yupResolver(schema),
  })

  const {formState: {errors}} = signupForm;

  useEffect(() => {
    signupForm.setFocus("firstname")
  }, []);

  const onSubmit = (data: SignupData) => {
    authSwal.fire({
      title: "Registrando usuario...",
      showConfirmButton: false,
      allowOutsideClick: false,
      willOpen() {
        authSwal.showLoading();
      },
    });
    authSignup(data)
      .then((email) => {
        authSwal.close();
        router.replace(`/signup/success?email=${email}`)
      })
      .catch((error) => {
        authSwal.fire({
          icon: "error",
          title: "Ooops... algo salió mal",
          text: error.message,
          showConfirmButton: true,
        });
      })
  };

  return (
    <>
      <FormProvider {...signupForm}>
        <form className={"w-full flex flex-col gap-5 md:w-2/3 xl:w-1/2"}>
          <h1 className={"text-2xl text-center"}>Creá tu cuenta</h1>
          <div className={"flex flex-col xl:flex-row gap-5"}>
            <div className={"w-full flex flex-col gap-2"}>
              <FormInput type={"text"} name={"firstname"} placeholder={"Nombre*"}/>
              {errors.firstname && <ErrorMsg msg={"El nombre es requerido"}/>}
            </div>
            <div className={"w-full flex flex-col gap-2"}>
              <FormInput type={"text"} name={"lastname"} placeholder={"Apellido*"}/>
              {errors.lastname && <ErrorMsg msg={"El apellido es requerido"}/>}
            </div>
          </div>
          <div className={"flex flex-col xl:flex-row gap-5"}>
            <div className={"w-full flex flex-col gap-2"}>
              <FormInput type={"number"} name={"dni"} placeholder={"DNI*"}/>
              {errors.dni && <ErrorMsg msg={"Ingrese un DNI válido"}/>}
            </div>
            <div className={"w-full flex flex-col gap-2"}>
              <FormInput type={"text"} name={"email"} placeholder={"Correo electrónico*"}/>
              {errors.email && <ErrorMsg msg={"Ingrese un correo electrónico válido"}/>}
            </div>
          </div>
          <div className={"flex flex-col xl:flex-row gap-5"}>
            <div className={"w-full flex flex-col gap-2"}>
              <FormInput type={"password"} name={"password"} placeholder={"********"}/>
              {errors.password && <ErrorMsg msg={"Ingrese una contraseña válida"}/>}
            </div>
            <div className={"w-full flex flex-col gap-2"}>
              <FormInput type={"password"} name={"password_confirmation"} placeholder={"********"}/>
              {errors.password_confirmation && <ErrorMsg msg={"Las contraseñas no coinciden"}/>}
            </div>
          </div>
          <span className={"self-center text-sm text-center md:w-3/4"}>Usá entre 6 y 20 carácteres. Debe contener al menos al menos una mayúscula y un número.</span>
          <div className={"flex flex-col xl:flex-row gap-5"}>
            <div className={"w-full flex flex-col gap-2"}>
              <FormInput type={"tel"} name={"phone"} placeholder={"Teléfono*"}/>
              {errors.phone && <ErrorMsg msg={"El teléfono es requerido"}/>}
            </div>
            <FormButton onSubmit={onSubmit}>Crear cuenta</FormButton>
          </div>
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

};

const ErrorMsg = ({msg}: { msg: string }) => {
  return (
    <span className={"text-end text-red-500 text-sm"}>{msg}</span>
  )
};
