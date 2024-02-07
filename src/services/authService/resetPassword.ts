import { httpClient } from "../HttpClient";

export interface ResetPasswordParams {
  email: string;
  token: string;
  password: string;
}

export async function resetPassword(params: ResetPasswordParams) {
  const response = await httpClient.put<any>('/auth/reset_password', params);

  return response.data;
}
