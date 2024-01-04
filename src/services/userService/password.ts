import { httpClient } from "../HttpClient";

export interface UpdatePasswordParams {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

export async function password(data: UpdatePasswordParams) {
  const response = await httpClient.put<any>('/users/password', data);

  // Assuming your API returns a meaningful response
  return response.data;
}
