import { httpClient } from "../HttpClient";

export interface UpdateUserParams {
  name: string;
  email: string;
  city: string;
  state: string;
}

export async function update(data: UpdateUserParams) {
  const response = await httpClient.put<any>('/users', data);

  return response.data;
}
