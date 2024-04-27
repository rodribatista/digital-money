export type AccountInformation = {
  id: number,
  user_id: number,
  cvu: string,
  alias: string,
  available_amount: number,
};

export type UserInformation = {
  id: number,
  dni: number,
  email: string,
  firstname: string,
  lastname: string,
  phone: string,
};

export type AccountCtxInfo = {
  account_id: number,
  user_id: number,
  name: string,
  cvu: string,
  alias: string,
  available_amount: number,
};
