import { httpClient } from "../HttpClient";


export async function destroy(id: number) {
  const { data } = await httpClient.delete(`/groups/${id}`);

  return data;
}
