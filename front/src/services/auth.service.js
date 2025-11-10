import apiClient from "@/api/axios";

class AuthService {
  async login(publicKey, privateKey) {
    const response = await apiClient.post("/auth", {
      publicKey,
      privateKey,
    });
    const { token } = response.data;

    if (token) {
      localStorage.setItem("accessToken", token);
    }

    return response.data;
  }

  logout() {
    localStorage.removeItem("accessToken");
  }
}

export default new AuthService();
