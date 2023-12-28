import { httpClient } from "../HttpClient";

export async function getAll() {
  const response = await httpClient.get<any>('/groups');

  return response.data.data;
}
