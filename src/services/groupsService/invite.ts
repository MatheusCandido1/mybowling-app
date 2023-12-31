import { httpClient } from "../HttpClient";

export interface InviteMemberParams {
  name: string;
  group_id: number;
}

export async function invite(params: InviteMemberParams) {
  const { data } = await httpClient.post('/groups/invite', params);

  return data;
}
