
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

// export const BASE_URL = 'http://192.168.0.42:8000/api/v1';
// export const BASE_URL = 'http://localhost:8000/api/v1'
export const BASE_URL = "https://mybowlingapp-api-6725c2b4cf9f.herokuapp.com/api/v1";


export const httpClient = axios.create({
    baseURL: BASE_URL,
});

httpClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('mybowling');

  const accessToken = token;
  //await sleep(500);

  if(accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

httpClient.interceptors.response.use(async (response) => {
  return response;
}, function (error) {
  if (401 === error.response.status) {
    return Promise.reject(error);
  } else {
    return Promise.reject(error);
  }
});
