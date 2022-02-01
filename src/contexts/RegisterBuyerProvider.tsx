import { useContext, createContext, ReactNode } from "react";
import { api } from "../services";
import { useHistory } from "react-router-dom";

interface RegisterProps {
  children: ReactNode;
}
interface formData {
  name: string;
  lastName: string;
  CNPJ: number;
  corporateName: string;
  fantasyName: string;
  address: string;
  complement: string;
  city: string;
  state: string;
  CEP: number;
  contact: number;
  email: string;
  password: string;
}
interface RegisterTypeContext {
  signUpBuy: (data: formData) => void;
}
const RegisterBuyerContext = createContext<RegisterTypeContext>(
  {} as RegisterTypeContext
);
export const useRegisterBuyer = () => useContext(RegisterBuyerContext);

const RegisterBuyerProvider = ({ children }: RegisterProps) => {
  const history = useHistory();
  const signUpBuy = (data: formData) => {
    api.post("/register", data).then((response) => {
      console.log(response.data);
      history.push("/login");
    });
  };

  return (
    <RegisterBuyerContext.Provider value={{ signUpBuy }}>
      {children}
    </RegisterBuyerContext.Provider>
  );
};
export default RegisterBuyerProvider;
