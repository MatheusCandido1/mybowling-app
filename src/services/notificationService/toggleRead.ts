import { httpClient } from "../HttpClient";

export async function toggleRead(id: string) {
  const response = await httpClient.patch<any>(`/notifications/${id}`, null);

  return response.data;
}
