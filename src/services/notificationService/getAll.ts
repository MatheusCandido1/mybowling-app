import { httpClient } from "../HttpClient";

export async function getAll() {
  const response = await httpClient.get<any>('/notifications');

  return response.data.data;
}
