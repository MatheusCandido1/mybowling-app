import { httpClient } from "../HttpClient";

export interface UpdateGroupParams {
  id: number;
  name: string;
  description?: string;
}

export async function update(params: UpdateGroupParams) {

  const { data } = await httpClient.put(`/groups/${params.id}`, params);

  return data;
}
