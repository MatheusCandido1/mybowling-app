import { httpClient } from "../HttpClient";

export interface GetAllRankingsParams {
  period: string
}


export async function getAll(params: GetAllRankingsParams) {
  const response = await httpClient.get<any>('/rankings', {
    params
  });

  return response.data.data;
}
