import { httpClient } from "../HttpClient";

export async function version() {
  const response = await httpClient.get<any>(`/dashboard/version`);

  return response.data;
}
