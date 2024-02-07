import { httpClient } from "../HttpClient";

export interface ValidatePasswordCodeParams {
  email: string;
  token: string;
}

export async function validatePasswordCode(params: ValidatePasswordCodeParams) {
  const response = await httpClient.post<any>('/auth/validate_password_code', params);

  return response.data;
}
