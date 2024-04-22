import Image from "next/image";

import {Card} from "@/components/app/cards/CardsList";
import {CardDelete} from "@/components/app/cards/CardDelete";

export const CardItem = ({type, number}: Card) => {

  const cardType = {
    "VISA": "/card-visa.svg",
    "MASTERCARD": "/card-master.svg",
    "AMEX": "/card-amex.svg",
  }

  return (
    <li className={"w-full pb-5 flex flex-row justify-between items-center border-b border-gray-500"}>
      <div className={"flex flex-row gap-2"}>
        <Image src={"/icon-activity.svg"} alt={"Icono para indicar el estado de la tarjeta"} width={20} height={20}/>
        <Image src={cardType[type]} alt={"Icono para indicar el estado de la tarjeta"} width={30} height={30}/>
        <span>terminada en {number}</span>
      </div>
      <CardDelete/>
    </li>
  );

};
