export enum ApiStatusResponses {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_ERROR = 400 | 500,
}

export interface ApiResponseHandler {
  [key: string]: string;
}

export type ApiErrorResponses = {
  status: number,
  data: {
    error: string,
  };
}
