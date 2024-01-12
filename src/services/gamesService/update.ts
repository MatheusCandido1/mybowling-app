import { IFrame } from "../../entities/Frame";
import { httpClient } from "../HttpClient";

export interface UpdateGameParams {
  id: string;
  status: string;
  total_score: number;
  frames: IFrame[];
}

export async function update(params: UpdateGameParams) {
  const { data } = await httpClient.put(`/games/${params.id}`, params);

  return data;
}
