import { httpClient } from "../HttpClient";

export async function getAll() {
  const response = await httpClient.get<any>('/balls');

  return response.data.data;
}
