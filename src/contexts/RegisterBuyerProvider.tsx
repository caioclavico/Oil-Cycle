import { useContext, createContext, ReactNode } from "react";
import { api } from "../services";

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
  const signUpBuy = (data: formData) => {
    api.post("/register", data).then((response) => console.log(response.data));
  };

  return (
    <RegisterBuyerContext.Provider value={{ signUpBuy }}>
      {children}
    </RegisterBuyerContext.Provider>
  );
};
export default RegisterBuyerProvider;
