"use client";

import {CardApi, useDeleteCardMutation} from "@/api/cardApi";
import {useAppSelector} from "@/lib/hooks";

import {appToast} from "@/lib/sweet";

import {MutationsApiResponses} from "@/types/ApiType";

type CardDeleteProps = {
  card_id: number,
};

export const CardDelete = ({card_id}: CardDeleteProps) => {

  const [deleteCard] = useDeleteCardMutation();
  const {accessToken, accountInfo} = useAppSelector(state => state.auth);

  const handleDeleteCard = () => {
    appToast.fire({
      title: "Eliminando tarjeta...",
      willOpen() {
        appToast.showLoading();
      },
    });
    const cardRequest: CardApi & {card_id: number} = {
      access_token: accessToken || "",
      account_id: accountInfo.account_id,
      card_id,
    };
    deleteCard(cardRequest).then(({error}: MutationsApiResponses) => {
      if (error) {
        appToast.fire({
          icon: "error",
          title: "Error al eliminar la tarjeta.",
          timer: 2000,
        });
        return;
      }
      appToast.fire({
        icon: "success",
        title: "Tarjeta eliminada correctamente.",
        timer: 2000,
      });
    });
  }

  return (
    <button onClick={handleDeleteCard} className={"text-sm font-bold"}>Eliminar</button>
  );

};
