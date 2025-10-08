import {
  getToken,
  getUserData,
  login,
  logout,
  verifyLogin,
} from "@/utils/storage";
import axios from "axios";

export interface RegisterData {
  name: string;
  birthday: string;
  cpf: string;
  email: string;
  cep: string;
  password: string;
  password_confirmation: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
  created_at?: string;
  updated_at?: string;
}

export interface LoginResponse {
  status: string;
  status_code: number;
  data: {
    user: User;
    token: string;
  };
  message?: string;
}

const api = axios.create({
  baseURL: "http://192.168.0.7:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000, // 10 segundos
});

class AuthService {
  async login(data: LoginData): Promise<LoginResponse> {
    try {
      console.log("Enviando dados:", data);
      const response = await api.post("/login", data);
      console.log("Resposta do axios:", response.data);

      if (
        response.data.status === "success" ||
        response.data.status_code === 200
      ) {
        await login(response.data.data.token, response.data.data.user);
        return response.data;
      } else {
        throw new Error(response.data.message || "Erro ao fazer login");
      }
    } catch (error: any) {
      console.error("Erro completo login:", error);
      console.error("Mensagem do erro:", error?.message);
      if (axios.isAxiosError(error)) {
        console.error("Axios error data:", error.response?.data);
        console.error("Axios error status:", error.response?.status);
      }

      if (axios.isAxiosError(error)) {
        console.error("Erro axios.response login:", error.response);
        throw new Error(
          error.response?.data?.message || "Erro de conexão no login"
        );
      } else {
        console.error("Erro não axios login:", error);
        throw new Error(error.message || "Erro desconhecido no login");
      }
    }
  }

  async register(data: RegisterData): Promise<LoginResponse> {
    try {
      console.log(
        "Dados enviados para registro:",
        JSON.stringify(data, null, 2)
      );

      const response = await api.post("/register", data);

      console.log(
        "Resposta completa do registro:",
        JSON.stringify(response.data, null, 2)
      );

      if (
        response.data.status === "success" ||
        response.data.status_code === 200
      ) {
        console.log("Cadastro bem-sucedido! Fazendo login automático...");
        await login(response.data.data.token, response.data.data.user);
        console.log("Login automático realizado com sucesso!");
        return response.data;
      } else {
        console.error("Resposta de erro do servidor:", response.data);
        throw new Error(response.data.message || "Erro ao registrar");
      }
    } catch (error: any) {
      console.error("Erro no registro - tipo:", typeof error);
      console.error(
        "Erro no registro - conteúdo:",
        JSON.stringify(error, null, 2)
      );

      if (axios.isAxiosError(error)) {
        console.error("É um erro do Axios");
        console.error("Status:", error.response?.status);
        console.error("Data:", error.response?.data);
        throw new Error(
          error.response?.data?.message || "Erro de conexão no registro"
        );
      } else {
        console.error("Não é um erro do Axios");
        throw new Error(error?.message || "Erro desconhecido no registro");
      }
    }
  }

  async logout(): Promise<void> {
    try {
      const token = await getToken();

      if (token) {
        await api.post(
          "/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
      await logout();
    }
  }

  async isAuthenticated(): Promise<boolean> {
    return await verifyLogin();
  }
  async getUserData(): Promise<User | null> {
    return await getUserData();
  }
}

export default new AuthService();
