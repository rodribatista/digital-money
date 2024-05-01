export type DepositType = {
  amount: number,
  dated: Date,
  destination: string,
  origin: string,
  card_id: number,
};

export enum DepositSteps {
  CARD = "0",
  AMOUNT = "1",
  CONFIRM = "2",
}
