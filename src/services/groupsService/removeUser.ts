import { httpClient } from "../HttpClient";

export interface removeUserParams {
  group_id: number;
  member_id: number;
}

export async function removeUser(params: removeUserParams) {
  const { data } = await httpClient.delete(`/groups/${params.group_id}/user/${params.member_id}`);

  return data;
}
