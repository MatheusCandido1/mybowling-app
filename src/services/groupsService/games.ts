import { httpClient } from "../HttpClient";

export async function games(id: number, page: number) {
  const response = await httpClient.get<any>(`/groups/${id}/games?page=${page}`);

  return response.data.data;
}
