import {useFormContext} from "react-hook-form";
import Cards from 'react-credit-cards-2';

import {FocusType} from "@/components/app/cards/NewCard";

import 'react-credit-cards-2/dist/es/styles-compiled.css';

type CardRenderProps = {
  focus: FocusType,
}
export const CardRender = ({focus}: CardRenderProps) => {

  const {watch} = useFormContext()

  return (
    <div className={"text-black"}>
      <Cards
        number={watch("number") || null}
        name={watch("name") || "Nombre y apellido"}
        expiry={watch("expiry") || 3001}
        cvc={watch("cvc") || 123}
        focused={focus}
        acceptedCards={["visa", "mastercard", "amex"]}
      />
    </div>
  );

};