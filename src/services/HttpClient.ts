
import axios from 'axios';
import { sleep } from '../utils/sleep';

export const BASE_URL = 'http://192.168.0.42:8000/api/v1';
// export const BASE_URL = 'http://localhost:8000/api/v1'

export const httpClient = axios.create({
    baseURL: BASE_URL
});

httpClient.interceptors.request.use(async (config) => {
  // const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  const accessToken = 'token'
  await sleep(500);

  if(accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

httpClient.interceptors.response.use(async (data) => {

  await sleep(500);

  return data;
});
