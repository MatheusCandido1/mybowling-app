import { httpClient } from "../HttpClient";

// type GamesResponse = Array<IGame>;

export async function getAll() {
  const response = await httpClient.get<any>('/locations');

  return response.data.data;
}
