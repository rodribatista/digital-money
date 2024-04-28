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
