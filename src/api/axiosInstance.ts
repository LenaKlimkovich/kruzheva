import axios from "axios";
import { login } from "./login";

let accessToken: string | null = null;

export async function authorize() {
  const auth = await login("demo@demo.ru", "demo!demo");
  accessToken = auth.access_token;
  return accessToken;
}

const instance = axios.create({
  baseURL: "https://api.corporation.skroy.ru",
  headers: {
    "Project-ID": "2c03471b-7792-4f9a-aa8a-6811810959f0",
  },
});

// Добавляем токен в каждый запрос
instance.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `bearer ${accessToken}`;
  }
  return config;
});

// Перехватываем 401 → обновляем токен → повторяем запрос
instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      await authorize(); // получаем новый токен
      error.config.headers.Authorization = `bearer ${accessToken}`;
      return instance(error.config); // повторяем запрос
    }
    return Promise.reject(error);
  }
);

export default instance;