import { httpClient } from "../HttpClient";

export interface CreateGroupParams {
  name: string;
  description?: string;
}

export async function create(params: CreateGroupParams) {
  const { data } = await httpClient.post('/groups', params);

  return data;
}
