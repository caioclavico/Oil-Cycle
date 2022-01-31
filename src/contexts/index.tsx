import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import RegisterBuyerProvider from "./RegisterBuyerProvider";
import RegisterProvider from "./RegisterProvider";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <AuthProvider>
    <RegisterBuyerProvider>
      <RegisterProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </RegisterProvider>
    </RegisterBuyerProvider>
  </AuthProvider>
);
