import { httpClient } from "../HttpClient";

export async function ongoing() {
  const response = await httpClient.get<any>('/games/ongoing');

  return response.data.data;
}
