import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://192.168.0.7:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// adicionar o token de autenticação para cada requisição
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("auth_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Erro ao recuperar token:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;

    //erro de rede
    if (error.code === "NETWORK_ERROR" && !originalRequest._retry) {
      originalRequest._retry = true;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return api(originalRequest);
    }

    // Se erro 401, limpa token
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem("auth_token");
    }

    return Promise.reject({
      message: error.response?.data?.message || "Erro de conexão",
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);

export default api;
