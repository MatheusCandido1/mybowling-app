import { httpClient } from "../HttpClient";

export async function getAll() {
  const response = await httpClient.get<any>('/dashboard');

  return response.data.data;
}
