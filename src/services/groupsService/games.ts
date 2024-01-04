import { ILocation } from "../../entities/Location";
import { IUser } from "../../entities/User";
import { httpClient } from "../HttpClient";

export type GamesByGroupFilters = {
  start_date: Date;
  end_date: Date;
  location: ILocation | null;
  user: IUser | null;
}

export async function games(id: number, filters: GamesByGroupFilters) {
  const response = await httpClient.get<any>(`/groups/${id}/games`, {
    params: filters
  });

  return response.data.data;
}
