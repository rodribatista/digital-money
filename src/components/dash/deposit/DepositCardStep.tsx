"use client";
import {ReactNode, useEffect, useState} from "react";

import {SelectCard} from "@/components/dash/deposit/SelectCard";

import {DepositSteps} from "@/types/DepositType";
import {useSearchParams} from "next/navigation";

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
    [DepositSteps.AMOUNT]: <div className={"text-black"}>Amount</div>,
    [DepositSteps.CONFIRM]: <div className={"text-black"}>Confirm</div>,
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
