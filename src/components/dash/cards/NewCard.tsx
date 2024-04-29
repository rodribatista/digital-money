"use client";
import {useEffect, useState} from "react";
import {FormProvider, useForm} from "react-hook-form";

import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import {FormInput} from "@/components/form/FormInput";
import {FormButton} from "@/components/form/FormButton";
import {CardRender} from "@/components/dash/cards/CardRender";

export enum FocusType {
  CARD = 'number',
  NAME = 'name',
  DATE = 'expiry',
  CVC = 'cvc',
}

export type NewCardData = {
  number: number,
  name: string,
  expiry: number,
  cvc: number,
}

const schema = yup.object({
  number: yup.number().required(),
  name: yup.string().required(),
  expiry: yup.number().required(),
  cvc: yup.number().required(),
}).required()

export const NewCard = () => {

  const newCardForm = useForm<NewCardData>({
    resolver: yupResolver(schema),
  })

  const [focus, setFocus] = useState(FocusType.CARD)

  useEffect(() => {
    newCardForm.setFocus("number");
  }, []);

  const onSubmit = (data: NewCardData) => {
    console.log("form")
    alert(JSON.stringify(data))
  }

  return (
    <section className={"w-full mt-5 flex flex-col gap-10 items-center"}>
      <FormProvider {...newCardForm}>
        <CardRender focus={focus}/>
        <form className={"w-full mb-10 flex flex-col gap-5 md:w-2/3 xl:w-1/2"}>
          <FormInput type={"number"} name={"number"} placeholder={"Número de tarjeta"} onFocus={() => setFocus(FocusType.CARD)}/>
          <FormInput type={"text"} name={"name"} placeholder={"Nombre y apellido"} onFocus={() => setFocus(FocusType.NAME)}/>
          <FormInput type={"number"} name={"expiry"} placeholder={"Fecha de expiración"} onFocus={() => setFocus(FocusType.DATE)}/>
          <FormInput type={"number"} name={"cvc"} placeholder={"Código de seguridad"} onFocus={() => setFocus(FocusType.CVC)}/>
          <FormButton onSubmit={onSubmit}>Agregar tarjeta</FormButton>
        </form>
      </FormProvider>
    </section>
  );

}
