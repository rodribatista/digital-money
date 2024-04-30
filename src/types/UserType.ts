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
  password: string,
};

export type UserContextInfo = {
  account_id: number,
  user_id: number,
  name: string,
  cvu: string,
  alias: string,
  available_amount: number,
};

export enum UserDataType {
  id = 'ID',
  dni = 'DNI',
  email = 'Email',
  firstname = 'Nombre',
  lastname = 'Apellido',
  phone = 'Teléfono',
  password = 'Contraseña',
}

export type UpdateUserData = {
  [key: string]: string | number;
};
