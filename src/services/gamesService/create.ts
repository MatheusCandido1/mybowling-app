import { httpClient } from "../HttpClient";

export interface CreateGameParams {
  game_date: Date;
  location_id: string;
  ball_id: string;
}

export async function create(params: CreateGameParams) {
  const { data } = await httpClient.post('/games', params);

  return data;
}
