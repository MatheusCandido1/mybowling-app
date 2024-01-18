import { httpClient } from "../HttpClient";


export async function destroy(id: string) {
  const { data } = await httpClient.delete(`/games/${id}`);

  return data;
}
