import { useContext, createContext, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../services";

interface RegisterProps {
  children: ReactNode;
}
interface formData {
  name: string;
  lastName: string;
  CPF: number;
  address: string;
  complement: string;
  city: string;
  state: string;
  CEP: number;
  contact: number;
  email: string;
  password: string;
  points: number;
}
interface RegisterTypeContext {
  signUp: (data: formData) => void;
}
const RegisterContext = createContext<RegisterTypeContext>(
  {} as RegisterTypeContext
);
export const useRegister = () => useContext(RegisterContext);

const RegisterProvider = ({ children }: RegisterProps) => {
  const history = useHistory();
  const signUp = (data: formData) => {
    api.post("/users", data).then((response) => {
      history.push("/login");
    });
  };

  return (
    <RegisterContext.Provider value={{ signUp }}>
      {children}
    </RegisterContext.Provider>
  );
};
export default RegisterProvider;
