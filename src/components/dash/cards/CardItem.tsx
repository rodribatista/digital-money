import Image from "next/image";

import {CardDelete} from "@/components/dash/cards/CardDelete";

import {card} from "@/utils/routes";

export const CardItem = ({id, number_id}: CardType) => {

  const number = number_id.toString().slice(-4);
  const type = number_id.toString().slice(0, 1);

  return (
    <li className={"w-full pb-5 flex flex-row justify-between items-center border-b border-gray-500"}>
      <div className={"flex flex-row gap-5"}>
        <Image src={card[type].src} alt={card[type].alt} width={30} height={30}/>
        <span>terminada en {number}</span>
      </div>
      <CardDelete id={id}/>
    </li>
  );

};
