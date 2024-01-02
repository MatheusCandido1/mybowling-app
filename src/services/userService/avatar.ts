import { httpClient } from "../HttpClient";

export interface AvatarParams {
  formData: FormData;
}

export async function avatar(formData: AvatarParams) {


  const response = await httpClient.post<any>('/users/avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  // Assuming your API returns a meaningful response
  return response.data;
}
