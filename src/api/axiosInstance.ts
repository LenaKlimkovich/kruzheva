import axios from "axios";
import { login } from "./login";

let accessToken: string | null = null;

export async function authorize() {
  const auth = await login("demo@demo.ru", "demo!demo");
  accessToken = auth.data[0].auth_data.access_token;
  return accessToken;
}

const instance = axios.create({
  baseURL: "https://api.corporation.skroy.ru",
  headers: {
    "Project-ID": "2c03471b-7792-4f9a-aa8a-6811810959f0",
  },
});

// Интерцептор автоматически подставляет токен в каждый запрос
instance.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default instance;
