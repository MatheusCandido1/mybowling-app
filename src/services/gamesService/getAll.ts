import { IBall } from "../../entities/Ball";
import { ILocation } from "../../entities/Location";
import { httpClient } from "../HttpClient";

export type GamesFilters = {
  start_date: Date;
  end_date: Date;
  ball: IBall | null;
  location: ILocation | null;
}

export async function getAll(filters: GamesFilters, page: number = 1) {
  const response = await httpClient.get<any>('/games', {
    params: {
      page,
      start_date: filters.start_date,
      end_date: filters.end_date,
      ball_id: filters.ball?.id,
      location_id: filters.location?.id
    }
  });

  return response.data;
}
