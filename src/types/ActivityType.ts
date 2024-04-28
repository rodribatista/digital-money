export enum ActivityType {
  DEPOSIT = "Deposit",
  TRANSACTION = "Transaction",
  TRANSFER = "Transfer",
}

export type Activity = {
  id: number,
  account_id: number,
  type: ActivityType,
  amount: number,
  destination: string,
  origin: string,
  dated: string,
  description: string,
};
