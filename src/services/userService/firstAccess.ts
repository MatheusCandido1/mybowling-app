import { httpClient } from "../HttpClient";

export async function firstAccess() {
  const response = await httpClient.patch<any>('/users/first_access', null);

  return response.data;
}
