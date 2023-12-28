import { httpClient } from "../HttpClient";

export interface UpdateGameParams {
  id: string;
  status: string;
  total_score: number;
}

export async function update(params: UpdateGameParams) {
  const { data } = await httpClient.put(`/games/${params.id}`, params);

  return data;
}
