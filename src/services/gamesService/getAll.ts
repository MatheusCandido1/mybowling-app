import { IBall } from "../../entities/Ball";
import { IGame } from "../../entities/Game";
import { ILocation } from "../../entities/Location";
import { httpClient } from "../HttpClient";

export type GamesFilters = {
  start_date: Date;
  end_date: Date;
  ball: IBall | null;
  location: ILocation | null;
}

export async function getAll(filters: GamesFilters) {
  const response = await httpClient.get<any>('/games', {
    params: filters
  });

  return response.data.data;
}
