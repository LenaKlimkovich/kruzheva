import axios from "axios";

export async function login(username: string, password: string) {
  const response = await axios.post(
    "https://api.users.skroy.ru/auth/login",
    {
      username,
      password,
    },
    {
      headers: {
        "Project-ID": "2c03471b-7792-4f9a-aa8a-6811810959f0",
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}
