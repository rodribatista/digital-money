import Link from "next/link";
import Image from "next/image";

import {CardItem} from "@/components/dash/cards/CardItem";

export enum CardType {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
  AMEX = 'AMEX',
}

export type Card = {
  id: number,
  type: CardType,
  number: string,
};

const cards: Card[] = [
  {
    id: 4,
    type: CardType.AMEX,
    number: "1234",
  },
  {
    id: 3,
    type: CardType.MASTERCARD,
    number: "4567",
  },
  {
    id: 2,
    type: CardType.VISA,
    number: "8912",
  },
  {
    id: 1,
    type: CardType.VISA,
    number: "9876",
  }
];

export const CardsList = () => {
  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
      <h2 className={"pb-5 border-b border-gray-500 text-xl font-semibold"}>Tus tarjetas</h2>
      <ul className={"flex flex-col gap-5"}>
        {cards.map((card) => <CardItem key={card.id} {...card}/>)}
      </ul>
      <span className={"text-sm text-gray-700"}>* Se permite un máximo de 10 tarjetas por usuario.</span>
    </section>
  );
};
