import { httpClient } from "../HttpClient";

export async function show(id: number) {
  const response = await httpClient.get<any>(`/groups/${id}`);

  return response.data.data;
}
