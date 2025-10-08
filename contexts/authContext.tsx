import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import authService, { LoginData, User } from "../services/authService";

interface AuthState {
  user: User | null;
  login: (credentials: LoginData) => Promise<boolean>;
  register: (data: any) => Promise<boolean>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const isLogged = await authService.isAuthenticated();
        if (isLogged) {
          const userData = await authService.getUserData();
          if (userData) setUser(userData);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (credentials: LoginData): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.login(credentials);

      if (response?.data?.user && response?.data?.token) {
        setUser(response.data.user);
        return true;
      }

      setError("Falha no login");
      return false;
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: any): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.register(data);

      if (response?.data?.user && response?.data?.token) {
        setUser(response.data.user);
        return true;
      }

      setError("Falha no cadastro");
      return false;
    } catch (err: any) {
      setError(err.message || "Erro ao registrar");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await authService.logout();
    } finally {
      setUser(null);
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        error,
        login,
        register,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthState => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
