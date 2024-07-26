import { httpClient } from "../HttpClient";

export interface CreateLocationParams {
  city: string;
  state: string;
  name: string;
}

export async function create(params: CreateLocationParams) {

  const { data } = await httpClient.post('/locations', params);

  return data;
}
