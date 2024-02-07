import { httpClient } from "../HttpClient";

export interface ForgotPasswordParams {
  email: string;
}

export async function forgotPassword(params: ForgotPasswordParams) {
  const response = await httpClient.post<any>('/auth/forgot_password', params);

  return response.data;
}
