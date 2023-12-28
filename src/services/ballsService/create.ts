import { httpClient } from "../HttpClient";

export interface CreateBallParams {
  name: string;
  weight: number;
  color: string;
}

export async function create(params: CreateBallParams) {
  const { data } = await httpClient.post('/balls', params);

  return data;
}
