import axios from "axios";

export async function login(username: string, password: string) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  const response = await axios.post(
    "https://api.users.skroy.ru/auth/login",
    formData,
    {
      headers: {
        "Project-ID": "2c03471b-7792-4f9a-aa8a-6811810959f0",
        // ВАЖНО: НЕ указывать Content-Type вручную!
        // axios сам поставит multipart/form-data с boundary
      },
    }
  );

  return response.data;
}