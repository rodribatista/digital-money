import Image from "next/image";

import {getCardType} from "@/utils/card";

import {CardType} from "@/types/CardType";

import {card} from "@/utils/routes";
import {useFormContext} from "react-hook-form";


export const SelectCardItem = ({id, number_id}: CardType) => {

  const lastNumbers = number_id.toString().slice(-4);
  const cardType = getCardType(number_id.toString().slice(0, 4));

  const {
    register,
  } = useFormContext()

  return (
    <li className={"w-full pb-5 flex flex-row gap-5 items-center border-b border-gray-500"}>
      <input className={"hover:cursor-pointer"}
        type="radio" id={`card_${id}`} value={id} {...register("card_id")}/>
      <label htmlFor={`card_${id}`}>
        <div className={"w-full flex flex-row gap-5 hover:cursor-pointer"}>
          <Image src={card[cardType].src} alt={card[cardType].alt} width={30} height={30}/>
          <span>terminada en {lastNumbers}</span>
        </div>
      </label>
    </li>
  );

};
