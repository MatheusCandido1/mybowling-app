import { httpClient } from "../HttpClient";

export interface UpdateBallParams {
  id: string;
  name: string;
  weight: number;
  color: string;
}

export async function update(params: UpdateBallParams) {
  const { data } = await httpClient.put(`/balls/${params.id}`, params);

  return data;
}
