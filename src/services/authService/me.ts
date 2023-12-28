import { httpClient } from "../HttpClient";

export async function me() {
  const response = await httpClient.get<any>('/auth/me');

  return response.data;
}
