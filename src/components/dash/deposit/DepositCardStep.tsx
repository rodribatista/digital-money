"use client";
import {useSearchParams} from "next/navigation";
import {ReactNode, useEffect, useState} from "react";

import {SelectCard} from "@/components/dash/deposit/SelectCard";
import {SelectAmount} from "@/components/dash/deposit/SelectAmount";
import {CheckDeposit} from "@/components/dash/deposit/CheckDeposit";

import {DepositSteps} from "@/types/DepositType";

type StepRender = {
  [key in DepositSteps]: ReactNode;
};

type StepMapping = {
  [key: string]: DepositSteps;
};

export const DepositCardStep = () => {

  const params = useSearchParams()
  const [actualStep, setActualStep] = useState(DepositSteps.CARD);

  const stepRender: StepRender = {
    [DepositSteps.CARD]: <SelectCard/>,
    [DepositSteps.AMOUNT]: <SelectAmount/>,
    [DepositSteps.CONFIRM]: <CheckDeposit/>,
  };

  const stepMappings: StepMapping = {
    "0": DepositSteps.CARD,
    "1": DepositSteps.AMOUNT,
    "2": DepositSteps.CONFIRM,
  };

  useEffect(() => {
    const step = params.get("step") || "0";
    setActualStep(stepMappings[step] || DepositSteps.CARD);
  }, [params]);

  return stepRender[actualStep];

};
