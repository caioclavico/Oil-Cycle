import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../styles/theme";
import { AuthProvider } from "./AuthContext";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <AuthProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </AuthProvider>
);
