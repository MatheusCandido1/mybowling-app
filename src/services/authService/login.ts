import { httpClient } from "../HttpClient";

export interface LoginParams {
  email: string;
  password: string;
}

export async function login(params: LoginParams) {
  const response = await httpClient.post<any>('/auth/login', params);

  return response.data;
}
