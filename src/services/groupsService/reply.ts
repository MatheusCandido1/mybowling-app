import { httpClient } from "../HttpClient";

export interface ReplyInviteParams {
  id: number;
  reply: string;
}

export async function reply(params: ReplyInviteParams) {
  const { data } = await httpClient.patch(`groups/invite/${params.id}`, params);

  return data;
}
