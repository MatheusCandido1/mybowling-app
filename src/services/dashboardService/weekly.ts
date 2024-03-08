import { httpClient } from "../HttpClient";

export interface WeeklyInterface {
  week: number;
}

export async function weekly(params: WeeklyInterface) {
  const response = await httpClient.get<any>(`/dashboard/weekly/${params.week}/`);

  return response.data.data;
}
