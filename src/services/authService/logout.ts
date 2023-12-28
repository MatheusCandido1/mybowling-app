import { httpClient } from "../HttpClient";

export async function logout() {
  const response = await httpClient.get<any>('/auth/logout');

  return response.data.data;
}
