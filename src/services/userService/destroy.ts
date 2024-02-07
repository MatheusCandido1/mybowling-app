import { httpClient } from "../HttpClient";

export async function destroy() {
  const { data } = await httpClient.delete('/users');

  return data;
}
