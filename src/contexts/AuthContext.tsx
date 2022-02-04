import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services";

interface IAuthProviderProps {
  children: ReactNode;
}

interface ISignInCredentials {
  email: string;
  password: string;
}
interface IUser {
  CEP: number;
  CNPJ: number;
  address: string;
  city: string;
  complement: string;
  email: string;
  id: number;
  lastName: string;
  name: string;
  state: string;
}

interface IAuthContextData {
  accessToken: string;
  id: number;
  signIn: (credentials: ISignInCredentials) => Promise<void>;
  signOut: () => void;
  user: IUser;
}

interface IAuthState {
  accessToken: string;
  user: IUser;
  id: number;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [data, setData] = useState<IAuthState>(() => {
    const accessToken = localStorage.getItem("@OilCycle:accessToken");
    const user = localStorage.getItem("@OilCycle:user");
    const id = localStorage.getItem("@OilCycle:id");
    if (accessToken && user && id) {
      return { accessToken, user: JSON.parse(user), id: JSON.parse(id) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: ISignInCredentials) => {
      const response = await api.post("/login", { email, password });

      const { accessToken, user } = response.data;
      const { id } = response.data.user;

      localStorage.setItem("@OilCycle:accessToken", accessToken);
      localStorage.setItem("@OilCycle:user", JSON.stringify(user));
      localStorage.setItem("@OilCycle:id", JSON.stringify(id));

      setData({ accessToken, user, id });
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("@OilCycle:accessToken");
    localStorage.removeItem("@OilCycle:user");
    localStorage.removeItem("@OilCycle:id");

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        accessToken: data.accessToken,
        signOut,

        user: data.user,

        id: data.id,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
