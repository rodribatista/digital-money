"use client";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {appToast} from "@/lib/sweet";

import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import {useAppSelector} from "@/lib/hooks";
import {CardApi, useCreateCardMutation} from "@/api/cardApi";

import {CardRender} from "@/components/dash/cards/CardRender";
import {FormInput} from "@/components/form/FormInput";
import {FormButton} from "@/components/form/FormButton";
import {CardHelp} from "@/components/dash/cards/CardHelp";

import {CardFocusType, CardData, ApiCardData} from "@/types/CardType";
import {MutationsApiResponses} from "@/types/ApiType";

const schema = yup.object({
  number: yup.string().min(16).max(16).required(),
  name: yup.string().required(),
  expiry: yup.string().min(6).max(6).required(),
  cvc: yup.string().min(3).max(3).required(),
}).required()

export const NewCard = () => {

  const router = useRouter()

  const [createCard] = useCreateCardMutation();
  const {accessToken, accountInfo} = useAppSelector(state => state.auth);

  const newCardForm = useForm<CardData>({
    resolver: yupResolver(schema),
  })

  const [focus, setFocus] = useState(CardFocusType.CARD)

  useEffect(() => {
    newCardForm.setFocus(CardFocusType.CARD);
  }, []);

  const onSubmit = (data: CardData) => {
    appToast.fire({
      title: "Registrando tarjeta...",
      willOpen() {
        appToast.showLoading();
      },
    });
    const cardData: ApiCardData = {
      number_id: Number(data.number),
      first_last_name: data.name,
      expiration_date: data.expiry.slice(0, 2) + "/" + data.expiry.slice(2, 6),
      cod: Number(data.cvc),
    };
    const cardRequest: CardApi = {
      access_token: accessToken || "",
      account_id: accountInfo.account_id,
      card_data: cardData,
    };
    createCard(cardRequest)
      .then(({error}: MutationsApiResponses) => {
        if (error) {
          appToast.fire({
            icon: "error",
            title: "Error al registrar tarjeta.",
            timer: 2000,
          });
          return;
        }
        appToast.fire({
          icon: "success",
          title: "Tarjeta registrada correctamente.",
          timer: 2000,
        });
        router.push("/dashboard/cards")
      });
  }

  return (
    <section className={"w-full mt-5 flex flex-col gap-10 items-center"}>
      <FormProvider {...newCardForm}>
        <CardRender focus={focus}/>
        <form className={"w-full mb-10 flex flex-col gap-5 md:w-2/3 xl:w-1/2"}>
          <div className={"flex flex-col gap-2"}>
            <FormInput type={"number"} name={"number"} placeholder={"Número de tarjeta"}
                       onFocus={() => setFocus(CardFocusType.CARD)}/>
            <CardHelp message={"16 números en total, sin ingresar espacios ni carácteres."}/>
          </div>
          <div className={"flex flex-col gap-2"}>
            <FormInput type={"text"} name={"name"} placeholder={"Nombre y apellido"}
                       onFocus={() => setFocus(CardFocusType.NAME)}/>
            <CardHelp message={"Ingresa tu nombre y apellido tal como aparece en la tarjeta."}/>
          </div>
          <div className={"flex flex-col gap-2"}>
            <FormInput type={"number"} name={"expiry"} placeholder={"Fecha de expiración"}
                       onFocus={() => setFocus(CardFocusType.DATE)}/>
            <CardHelp message={"6 digitos en total, mes y año. Formato MMAAAA."}/>
          </div>
          <div className={"flex flex-col gap-2"}>
            <FormInput type={"number"} name={"cvc"} placeholder={"Código de seguridad"}
                       onFocus={() => setFocus(CardFocusType.CVC)}/>
            <CardHelp message={"3 digitos en total, ubicados en el reverso de la tarjeta."}/>
          </div>
          <FormButton onSubmit={onSubmit}>Agregar tarjeta</FormButton>
        </form>
      </FormProvider>
    </section>
  );

};
