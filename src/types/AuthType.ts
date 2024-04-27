export enum AuthLoginResponses {
  BAD_CREDENTIALS = 401,
  USER_NOT_FOUND = 404,
  INTERNAL_ERROR = 400 | 500,
}

export type LoginResponse = {
  token: string,
};

export type LoginCredentials = {
  email: string,
  password: string,
};

export type SignupType = {
  email: string,
  password: string,
  name: string,
};
