import { useContext, createContext, ReactNode } from "react";

interface RegisterProps {
  children: ReactNode;
}

const RegisterContext = createContext({});
export const useRegister = () => useContext(RegisterContext);

const RegisterProvider = ({ children }: RegisterProps) => {
  const singUp = (data) => {};

  return <RegisterContext.Provider>{children}</RegisterContext.Provider>;
};
