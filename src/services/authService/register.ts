import { httpClient } from "../HttpClient";

export async function register() {
  const response = await httpClient.get<any>('/auth/register');

  return response.data.data;
}
