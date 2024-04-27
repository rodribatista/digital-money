export enum AuthResponses {
  BAD_CREDENTIALS = 401,
  USER_NOT_FOUND = 404,
  USER_ALREADY_EXISTS = 409,
  INTERNAL_ERROR = 400 | 500,
}

export type LoginResponse = {
  token: string,
};

export type SignupResponse = {
  email: string,
};

export type LoginCredentials = {
  email: string,
  password: string,
};

export type SignupData = {
  dni: number,
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string,
  phone: string,
};
