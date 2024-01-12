import { IFrame } from "../../entities/Frame";
import { httpClient } from "../HttpClient";

export async function update(params: IFrame) {

  const { data } = await httpClient.put(`/frames/${params.id}`, params);

  return data;
}
