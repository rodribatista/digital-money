import Image from "next/image";

import {Card} from "@/components/dash/cards/CardsList";
import {CardDelete} from "@/components/dash/cards/CardDelete";

import {card} from "@/utils/routes";

export const CardItem = ({type, number}: Card) => {
  return (
    <li className={"w-full pb-5 flex flex-row justify-between items-center border-b border-gray-500"}>
      <div className={"flex flex-row gap-2"}>
        <Image src={card[type].src} alt={card[type].alt} width={30} height={30}/>
        <span>terminada en {number}</span>
      </div>
      <CardDelete/>
    </li>
  );
};
