import { httpClient } from "../HttpClient";

export interface GetAllLocationsParams {
  state?: string;
  city?: string;
}

export async function getAll(params: GetAllLocationsParams) {
  const response = await httpClient.get<any>('/locations', {
    params
  });

  return response.data.data;
}
