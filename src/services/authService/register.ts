import { httpClient } from "../HttpClient";

export interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

export async function register(params: RegisterParams) {
  const response = await httpClient.post<any>('/auth/register', params);

  return response.data;
}
