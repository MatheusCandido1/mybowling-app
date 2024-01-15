import { httpClient } from "../HttpClient";

export async function pushToken(push_token:string) {

  const payload = {
    expo_push_token: push_token
  }

  const response = await httpClient.patch<any>('/users/push_token', payload);

  return response.data;
}
