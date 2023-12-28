import { httpClient } from "../HttpClient";

export interface loginParams {
  email: string;
  password: string;
}

export async function login(params: loginParams) {
  const response = await httpClient.post<any>('/auth/login', params);

  return response.data;
}
