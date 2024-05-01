import Image from "next/image";

import {CardDelete} from "@/components/dash/cards/CardDelete";
import {getCardType} from "@/utils/card";

import {CardType} from "@/types/CardType";

import {card} from "@/utils/routes";


export const CardItem = ({id, number_id}: CardType) => {

  const lastNumbers = number_id.toString().slice(-4);
  const cardType = getCardType(number_id.toString().slice(0, 4));

  return (
    <li className={"w-full pb-5 flex flex-row justify-between items-center border-b border-gray-500"}>
      <div className={"flex flex-row gap-5"}>
        <Image src={card[cardType].src} alt={card[cardType].alt} width={30} height={30}/>
        <span>terminada en {lastNumbers}</span>
      </div>
      <CardDelete id={id}/>
    </li>
  );

};
