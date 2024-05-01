"use client";
import React, {FC, PropsWithChildren} from 'react';
import {FormProvider, useForm} from "react-hook-form";

import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import {DepositType} from "@/types/DepositType";

const schema = yup.object({
  amount: yup.number().positive().required(),
  dated: yup.date().required(),
  destination: yup.string().trim().required(),
  origin: yup.string().trim().required(),
  card_id: yup.number().positive().required(),
}).required()

export const DepositCardForm: FC<PropsWithChildren> = ({children}) => {

  const depositForm = useForm<DepositType>({
    resolver: yupResolver(schema),
  })

  return (
    <FormProvider {...depositForm}>
      {children}
    </FormProvider>
  );

};
