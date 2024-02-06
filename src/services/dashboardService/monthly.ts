import { httpClient } from "../HttpClient";

export interface MonthlyInterface {
  month: number;
  year: number;
}

export async function monthly(params: MonthlyInterface) {
  const response = await httpClient.get<any>(`/dashboard/${params.year}/${params.month + 1}`);

  return response.data.data;
}
