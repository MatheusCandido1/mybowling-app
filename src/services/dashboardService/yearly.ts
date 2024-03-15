import { httpClient } from "../HttpClient";

export interface YearlyInterface {
  year: number;
}

export async function yearly(params: YearlyInterface) {
  const response = await httpClient.get<any>(`/dashboard/yearly/${params.year}/`);

  return response.data.data;
}
