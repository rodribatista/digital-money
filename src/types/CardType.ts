export type CardType = {
  id: number,
  account_id: number,
  number_id: number,
  first_last_name: string,
  cod: number,
  expiration_date: string,
};

export type ApiCardData = {
  number_id: number,
  first_last_name: string,
  expiration_date: string,
  cod: number,
};

export type CardData = {
  number: string,
  name: string,
  expiry: string,
  cvc: string,
};

export enum CardFocusType {
  CARD = 'number',
  NAME = 'name',
  DATE = 'expiry',
  CVC = 'cvc',
}
